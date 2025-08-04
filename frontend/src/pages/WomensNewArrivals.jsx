import { useState, useEffect } from 'react'
import ScrollAnimations from '../components/ScrollAnimations'

// Images from public/assets folder
const img33 = '/assets/img33.jpg'
const img34 = '/assets/img34.jpg'
const img35 = '/assets/img35.jpg'
const img36 = '/assets/img36.jpg'
const img37 = '/assets/img37.jpg'
const img38 = '/assets/img38.jpg'
const img39 = '/assets/img39.jpg'
const img40 = '/assets/img40.jpg'
const img41 = '/assets/img41.jpg'
const img42 = '/assets/img42.jpg'
const img43 = '/assets/img43.jpg'
const img44 = '/assets/img44.jpg'
const img45 = '/assets/img45.jpg'
const img46 = '/assets/img46.jpg'
const img47 = '/assets/img47.jpg'
const img48 = '/assets/img48.jpg'
const img49 = '/assets/img49.jpg'
const img50 = '/assets/img50.jpg'
const img51 = '/assets/img51.jpg'
const img52 = '/assets/img52.jpg'
const img53 = '/assets/img53.jpg'
const img54 = '/assets/img54.jpg'
const img55 = '/assets/img55.jpg'
const img56 = '/assets/img56.jpg'
const img57 = '/assets/img57.jpg'
const img58 = '/assets/img58.jpg'
const img59 = '/assets/img59.jpg'
const img60 = '/assets/img60.jpg'
const img61 = '/assets/img61.jpg'
const img62 = '/assets/img62.png'
const img63 = '/assets/img63.png'
const img64 = '/assets/img64.png'
const img65 = '/assets/img65.jpg'
const img66 = '/assets/img66.jpg'

const WomensNewArrivals = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderImages = [
    "/assets/aboutimg1.jpg",
    "/assets/aboutimg2.jpg",
    "/assets/aboutimg3.jpg"
  ]

  const womensProducts = [
    { id: 1, name: "Botanical Print Maxi Dress", price: "₹7,599", image: img33, description: "Flowing maxi with hand-printed leaves" },
    { id: 2, name: "Organic Silk Blouse", price: "₹7,199", image: img34, description: "Luxurious silk with floral eco-prints" },
    { id: 3, name: "Natural Cotton Cardigan", price: "₹5,799", image: img35, description: "Cozy cardigan with botanical patterns" },
    { id: 4, name: "Eco-Printed Wrap Top", price: "₹4,699", image: img36, description: "Versatile wrap top with nature prints" },
    { id: 5, name: "Organic Linen Skirt", price: "₹5,499", image: img37, description: "Elegant skirt with natural dye patterns" },
    { id: 6, name: "Sustainable Midi Dress", price: "₹6,899", image: img38, description: "Chic midi dress with eco-friendly prints" },
    { id: 7, name: "Natural Hemp Blazer", price: "₹11,499", image: img39, description: "Professional blazer in sustainable hemp" },
    { id: 8, name: "Botanical Print Jumpsuit", price: "₹10,199", image: img40, description: "Stylish jumpsuit with nature patterns" },
    { id: 9, name: "Eco-Dyed Palazzo Pants", price: "₹6,299", image: img41, description: "Comfortable palazzo pants in earth tones" },
    { id: 10, name: "Organic Cotton Tunic", price: "₹5,299", image: img42, description: "Flowing tunic with leaf motifs" },
    { id: 11, name: "Natural Silk Kimono", price: "₹12,699", image: img43, description: "Elegant kimono with botanical designs" },
    { id: 12, name: "Sustainable Wrap Dress", price: "₹7,999", image: img44, description: "Flattering wrap dress with eco-prints" },
    { id: 13, name: "Linen Button-Up Shirt", price: "₹6,199", image: img45, description: "Classic shirt in natural linen" },
    { id: 14, name: "Botanical Print Tank Top", price: "₹3,899", image: img46, description: "Lightweight tank with leaf patterns" },
    { id: 15, name: "Organic Hemp Shorts", price: "₹4,399", image: img47, description: "Comfortable shorts in sustainable hemp" },
    { id: 16, name: "Natural Dye Camisole", price: "₹3,399", image: img48, description: "Delicate camisole with plant-based dyes" },
    { id: 17, name: "Eco-Print Maxi Skirt", price: "₹7,199", image: img49, description: "Flowing maxi skirt with botanical prints" },
    { id: 18, name: "Sustainable Cotton Dress", price: "₹7,499", image: img50, description: "Comfortable dress in organic cotton" },
    { id: 19, name: "Natural Fiber Poncho", price: "₹6,999", image: img51, description: "Cozy poncho with earth-tone prints" },
    { id: 20, name: "Botanical Print Leggings", price: "₹4,199", image: img52, description: "Stretchy leggings with leaf designs" },
    { id: 21, name: "Organic Linen Blazer", price: "₹13,399", image: img53, description: "Professional blazer in natural linen" },
    { id: 22, name: "Eco-Dyed Wrap Top", price: "₹5,199", image: img54, description: "Flattering wrap top with natural dyes" },
    { id: 23, name: "Natural Cotton Hoodie", price: "₹7,699", image: img55, description: "Comfortable hoodie with botanical details" },
    { id: 24, name: "Sustainable Silk Scarf", price: "₹4,699", image: img56, description: "Luxurious scarf with eco-prints" },
    { id: 25, name: "Botanical Print Sundress", price: "₹6,699", image: img57, description: "Light sundress with nature motifs" },
    { id: 26, name: "Organic Hemp Vest", price: "₹5,499", image: img58, description: "Versatile vest in sustainable hemp" },
    { id: 27, name: "Natural Dye Crop Top", price: "₹3,699", image: img59, description: "Trendy crop top with plant dyes" },
    { id: 28, name: "Eco-Print Evening Dress", price: "₹15,099", image: img60, description: "Elegant evening dress with botanical motifs" },
    { id: 29, name: "Linen Wide-Leg Pants", price: "₹6,199", image: img61, description: "Comfortable wide-leg pants in linen" },
    { id: 30, name: "Sustainable Bamboo Top", price: "₹4,699", image: img62, description: "Soft bamboo top with nature prints" },
    { id: 31, name: "Botanical Print Sarong", price: "₹3,599", image: img63, description: "Versatile sarong with leaf designs" },
    { id: 32, name: "Organic Cotton Romper", price: "₹7,199", image: img64, description: "Playful romper with botanical details" },
    { id: 33, name: "Natural Silk Blouse", price: "₹10,899", image: img65, description: "Elegant blouse in peace silk" },
    { id: 34, name: "Eco-Dyed Maxi Dress", price: "₹12,099", image: img66, description: "Stunning maxi dress with natural dyes" }
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
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-shadow-lg">
                {title}
              </h2>
              <p className="text-lg md:text-xl font-serif opacity-90 text-shadow">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gold-500/20 hover:bg-gold-500/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold-500/20 hover:bg-gold-500/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
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
                  index === currentSlide ? 'bg-gold-500 scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Simplified Product Component (No Card)
  const UniformProductCard = ({ product }) => {
    return (
      <div className="flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden h-96">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Product Details */}
        <div className="pt-4 flex flex-col">
          <h3 className="text-xl font-serif font-semibold mb-2" style={{ color: 'rgb(47, 91, 42)' }}>
            {product.name}
          </h3>
          <p className="text-sm font-serif text-gray-600 mb-4">
            {product.description}
          </p>
          <span className="text-2xl font-sans font-bold text-gold-500">
            {product.price}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-4 overflow-hidden">
      <ScrollAnimations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Slider */}
        <div className="scroll-animate">
          <CategorySlider 
            title="Women's Luxe Collection"
            subtitle="Exquisite designs crafted with elegance and sustainability"
            images={sliderImages}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-900 mb-6">
            Women's New Arrivals
          </h1>
          <p className="text-xl font-serif text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest women's collection, where timeless elegance meets sustainable luxury. 
            Each piece is crafted to elevate your style with nature-inspired sophistication.
          </p>
        </div>

        {/* Products Grid - No Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {womensProducts.map((product, index) => (
            <div key={product.id} className={`scroll-animate stagger-${(index % 4) + 1}`}>
              <UniformProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Women's Collection Info */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 scroll-animate hover-glow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6">
              Crafted for the Discerning Woman
            </h2>
            <p className="text-lg font-serif text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our collection blends unparalleled elegance with a commitment to sustainability. 
              Each garment is a masterpiece, designed to celebrate your unique style and the beauty of nature.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-rose-700 to-gold-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2 group-hover:text-gold-500 transition-colors duration-300">Exquisite Craftsmanship</h3>
                <p className="text-gray-600 font-serif text-sm group-hover:text-gray-700 transition-colors duration-300">Timeless designs with meticulous detail</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-gold-500 to-rose-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2 group-hover:text-gold-500 transition-colors duration-300">Natural Elegance</h3>
                <p className="text-gray-600 font-serif text-sm group-hover:text-gray-700 transition-colors duration-300">Botanical motifs inspired by nature</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-rose-700 to-gold-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2 group-hover:text-gold-500 transition-colors duration-300">Versatile Sophistication</h3>
                <p className="text-gray-600 font-serif text-sm group-hover:text-gray-700 transition-colors duration-300">Perfect for every occasion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WomensNewArrivals