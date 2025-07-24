import { useState, useEffect } from 'react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Nature\'s Artistry',
      subtitle: 'Handcrafted eco-printed textiles that tell stories of the earth',
      cta: 'Discover Collection'
    },
    {
      image: 'https://images.pexels.com/photos/7679746/pexels-photo-7679746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Sustainable Fashion',
      subtitle: 'Where tradition meets innovation in every botanical print',
      cta: 'Shop Now'
    },
    {
      image: 'https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Organic Beauty',
      subtitle: 'Each piece is a unique masterpiece created by nature\'s own hand',
      cta: 'Learn More'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="absolute inset-0 parallax" data-speed="0.3">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className={`text-4xl md:text-7xl font-serif font-bold mb-6 gradient-text ${
                index === currentSlide ? 'animate-fade-in-up' : ''
              }`}>
                {slide.title}
              </h1>
              <p className={`text-xl md:text-3xl mb-8 text-rose-100 ${
                index === currentSlide ? 'animate-fade-in-up stagger-2' : ''
              }`}>
                {slide.subtitle}
              </p>
              <button className={`group relative bg-gradient-to-r from-sage-600 to-earth-600 hover:from-sage-700 hover:to-earth-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ripple glow-border ${
                index === currentSlide ? 'animate-bounce-in stagger-3' : ''
              }`}>
                <span className="relative z-10">{slide.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-sage-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-500 hover:scale-125 ${
              index === currentSlide 
                ? 'bg-white shadow-lg animate-glow' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sage-400 to-rose-400 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-200 transition-all duration-300 hover:scale-125 magnetic"
      >
        <div className="bg-black/30 backdrop-blur-sm rounded-full p-3 hover:bg-black/50 transition-all duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-200 transition-all duration-300 hover:scale-125 magnetic"
      >
        <div className="bg-black/30 backdrop-blur-sm rounded-full p-3 hover:bg-black/50 transition-all duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-rose-300/20 to-sage-300/20 rounded-full floating"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-earth-300/20 to-rose-300/20 rounded-full floating"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-sage-300/20 to-earth-300/20 rounded-full floating"></div>
    </div>
  )
}

export default HeroSlider