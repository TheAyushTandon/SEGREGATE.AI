// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none"
  } else {
    mobileMenu.style.display = "block"
  }
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")

  if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
    mobileMenu.style.display = "none"
  }
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").style.display = "none"
  })
})

// Smooth scrolling for anchor links
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

// Add active class to current page navigation
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
})

// Simple fade-in animation for cards
function animateOnScroll() {
  const cards = document.querySelectorAll(".card, .feature-card, .member-card")

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top
    const cardVisible = 150

    if (cardTop < window.innerHeight - cardVisible) {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }
  })
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .feature-card, .member-card")
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  animateOnScroll()
})

window.addEventListener("scroll", animateOnScroll)

// Form validation (if forms are added later)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#dc2626"
      isValid = false
    } else {
      input.style.borderColor = "#d1d5db"
    }
  })

  return isValid
}

// Download tracking (optional analytics)
function trackDownload() {
  // Add analytics tracking here if needed
  console.log("APK download initiated")
}

// Add download tracking to download button
document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.querySelector('a[href*="we.tl"]')
  if (downloadBtn) {
    downloadBtn.addEventListener("click", trackDownload)
  }
})
