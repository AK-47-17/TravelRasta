// Mobile menu toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Gallery modal functionality
function openModal(element) {
  const modal = document.getElementById("galleryModal")
  const modalImg = document.getElementById("modalImage")
  const captionText = document.getElementById("modalCaption")

  if (modal && modalImg) {
    const img = element.querySelector("img")
    const overlay = element.querySelector(".gallery-overlay")

    modal.style.display = "block"
    modalImg.src = img.src
    if (overlay) {
      captionText.innerHTML = overlay.innerHTML
    }
  }
}

function closeModal() {
  const modal = document.getElementById("galleryModal")
  if (modal) {
    modal.style.display = "none"
  }
}

// Close modal when clicking outside the image
const modal = document.getElementById("galleryModal")
if (modal) {
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal()
    }
  })
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll(".service-card, .package-card, .destination-card, .gallery-item, .point").forEach((el) => {
  observer.observe(el)
})

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for subscribing! Check your email for exclusive offers.")
    newsletterForm.reset()
  })
}

// Active nav link update on scroll
window.addEventListener("scroll", () => {
  let current = ""

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Parallax effect on hero
window.addEventListener("scroll", () => {
  const heroBackground = document.querySelector(".hero-background")
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${window.scrollY * 0.5}px)`
  }
})

// CTA button click animation
document.querySelectorAll(".cta-button, .book-btn, .newsletter-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement("div")
    ripple.style.position = "absolute"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.style.width = "20px"
    ripple.style.height = "20px"
    ripple.style.background = "rgba(255, 255, 255, 0.5)"
    ripple.style.borderRadius = "50%"
    ripple.style.pointerEvents = "none"
    ripple.style.animation = "ripple 0.6s ease-out"

    this.appendChild(ripple)

    setTimeout(() => ripple.remove(), 600)
  })
})
