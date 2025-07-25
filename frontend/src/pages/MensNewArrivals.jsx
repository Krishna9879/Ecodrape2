import { useState, useEffect } from 'react'
import ScrollAnimations from '../components/ScrollAnimations'

const MensNewArrivals = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderImages = [
    "https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2"
  ]

  const mensProducts = [
    {
      id: 1,
      name: "Men's Organic Linen Shirt",
      price: "₹5,999",
      image: "https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Naturally dyed linen with leaf patterns"
    },
    {
      id: 2,
      name: "Hemp Canvas Jacket",
      price: "₹9,599",
      image: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Durable hemp with botanical prints"
    },
    {
      id: 3,
      name: "Eco-Print Cotton Tee",
      price: "₹3,499",
      image: "https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Soft organic cotton with nature motifs"
    },
    {
      id: 4,
      name: "Natural Dye Polo",
      price: "₹4,999",
      image: "https://images.pexels.com/photos/5836962/pexels-photo-5836962.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Classic polo with eco-friendly dyes"
    },
    {
      id: 5,
      name: "Organic Cotton Hoodie",
      price: "₹6,899",
      image: "https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Comfortable hoodie with botanical prints"
    },
    {
      id: 6,
      name: "Natural Fiber Cardigan",
      price: "₹7,299",
      image: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Warm cardigan with eco-friendly dyes"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [sliderImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  // Category Slider Component with Navigation
  const CategorySlider = ({ title, subtitle, images }) => {
    return (
      <div className="relative mb-16 overflow-hidden rounded-3xl shadow-2xl">
        <div className="relative h-96 md:h-[500px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>
          ))}
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="text-white px-8 md:px-16 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow-lg">
                {title}
              </h2>
              <p className="text-lg md:text-xl opacity-90 text-shadow">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Uniform Product Card Component (without + button)
  const UniformProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group h-full flex flex-col">
        {/* Fixed Image Container */}
        <div className="relative overflow-hidden h-80 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Fixed Content Container */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
              {product.description}
            </p>
          </div>
          
          <div className="mt-auto">
            <span className="text-2xl font-bold text-sage-600">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sage-50 pt-4 overflow-hidden">
      <ScrollAnimations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Slider */}
        <div className="scroll-animate">
          <CategorySlider 
            title="Men's Latest Collection"
            subtitle="Sustainable men's fashion with natural botanical prints"
            images={sliderImages}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6">
            Men's New Arrivals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest men's collection featuring sustainable, handcrafted pieces with natural botanical prints. 
            Each garment combines comfort, style, and environmental consciousness.
          </p>
        </div>

        {/* Products Grid - Uniform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
          {mensProducts.map((product, index) => (
            <div key={product.id} className={`scroll-animate stagger-${(index % 4) + 1}`}>
              <UniformProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Men's Collection Info */}
        <div className="bg-gradient-to-r from-white to-rose-50 rounded-3xl shadow-2xl p-12 scroll-animate hover-glow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
              Crafted for the Modern Man
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our men's collection celebrates the intersection of masculine style and environmental responsibility. 
              Each piece is designed for the conscious gentleman who values both quality craftsmanship and sustainable practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-sage-100 to-earth-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors duration-300">Premium Materials</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Organic cotton, hemp, and linen</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-earth-100 to-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-earth-700 transition-colors duration-300">Perfect Fit</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Tailored for comfort and style</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-rose-100 to-sage-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors duration-300">Ethically Made</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Fair trade and sustainable practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MensNewArrivals