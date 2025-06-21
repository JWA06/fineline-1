document.addEventListener("DOMContentLoaded", () => {
  // Declare Lucide icons variable
  const lucide = window.lucide

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Slideshow functionality
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  const prevButton = document.querySelector(".slideshow-prev")
  const nextButton = document.querySelector(".slideshow-next")
  let currentSlide = 0
  let slideInterval

  // Function to show a specific slide
  function showSlide(n) {
    slides[currentSlide].classList.remove("active")
    dots[currentSlide].classList.remove("active")

    currentSlide = (n + slides.length) % slides.length

    slides[currentSlide].classList.add("active")
    dots[currentSlide].classList.add("active")
  }

  // Function to move to the next slide
  function nextSlide() {
    showSlide(currentSlide + 1)
  }

  // Function to move to the previous slide
  function prevSlide() {
    showSlide(currentSlide - 1)
  }

  // Set up event listeners for slideshow controls
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      prevSlide()
      resetSlideInterval()
    })
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      nextSlide()
      resetSlideInterval()
    })
  }

  // Set up event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index)
      resetSlideInterval()
    })
  })

  // Function to start automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000)
  }

  // Function to reset the slideshow interval
  function resetSlideInterval() {
    clearInterval(slideInterval)
    startSlideshow()
  }

  // Start the slideshow if there are slides
  if (slides.length > 0) {
    startSlideshow()
  }

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }
})
