import { useEffect } from 'react'

const ScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .text-reveal'
    )
    
    animatedElements.forEach(el => observer.observe(el))

    // Parallax effect for hero elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax')
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

export default ScrollAnimations