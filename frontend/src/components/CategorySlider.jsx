import { useState, useEffect } from 'react'

const CategorySlider = ({ title, subtitle, images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-12 group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image}
            alt={`${title} ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 gradient-text animate-fade-in-up">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-rose-100 animate-fade-in-up stagger-2">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 animate-glow' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-rose-300/30 to-sage-300/30 rounded-full floating opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-earth-300/30 to-rose-300/30 rounded-full floating opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  )
}

export default CategorySlider