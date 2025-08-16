import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollAnimations from '../components/ScrollAnimations'

// Product images data structure with actual images from assets folder
const productImages = {
  1: ['/assets/img1_1.jpg', '/assets/img1_2.jpg', '/assets/img1_3.jpg'],
  2: ['/assets/img2_1.jpg', '/assets/img2_2.jpg', '/assets/img2_3.jpg'],
  3: ['/assets/img3_1.jpg', '/assets/img3_2.jpg', '/assets/img3_3.jpg'],
  4: ['/assets/img4_1.jpg', '/assets/img4_2.jpg', '/assets/img4_3.jpg'],
  5: ['/assets/img5_1.jpg', '/assets/img5_2.jpg', '/assets/img5_3.jpg', '/assets/img5_4.jpg'],
  6: ['/assets/img6_1.jpg', '/assets/img6_2.jpg', '/assets/img6_3.jpg'],
  7: ['/assets/img7_1.jpg', '/assets/img7_2.jpg'],
  8: ['/assets/img8_1.jpg', '/assets/img8_2.jpg', '/assets/img8_3.jpg'],
  9: ['/assets/img9_1.jpg', '/assets/img9_2.jpg', '/assets/img9_3.jpg', '/assets/img9_4.jpg'],
  10: ['/assets/img10_1.jpeg', '/assets/img10_2.jpeg'],
  11: ['/assets/img11_1.jpeg', '/assets/img11_2.jpeg', '/assets/img11_3.jpeg'],
  12: ['/assets/img12_1.jpg', '/assets/img12_2.png', '/assets/img12_3.png', '/assets/img12_4.jpg'],
  13: ['/assets/img13_1.jpg', '/assets/img13_2.jpg', '/assets/img13_3.png', '/assets/img13_4.jpg'],
  14: ['/assets/img14_1.jpg', '/assets/img14_2.jpg', '/assets/img14_3.jpg', '/assets/img14_4.jpg'],
  15: ['/assets/img15_1.jpg', '/assets/img15_2.jpg', '/assets/img15_3.jpg', '/assets/img15_4.jpg'],
  16: ['/assets/img16_1.jpg', '/assets/img16_2.jpg', '/assets/img16_3.jpg', '/assets/img16_4.jpg'],
  17: ['/assets/img17_1.jpg', '/assets/img17_2.jpg', '/assets/img17_3.jpg', '/assets/img17_4.jpg'],
  18: ['/assets/img18_1.jpg', '/assets/img18_2.jpg', '/assets/img18_3.jpg', '/assets/img18_4.jpg'],
  19: ['/assets/img19_1.jpg', '/assets/img19_2.jpg', '/assets/img19_3.jpg', '/assets/img19_4.jpg'],
  20: ['/assets/img20_1.jpg', '/assets/img20_2.jpg', '/assets/img20_3.jpg', '/assets/img20_4.png'],
  21: ['/assets/img21_1.jpg', '/assets/img21_2.jpg', '/assets/img21_3.jpg', '/assets/img21_4.jpg'],
  22: ['/assets/img22_1.jpg', '/assets/img22_2.jpg', '/assets/img22_3.jpg', '/assets/img22_4.jpg'],
  23: ['/assets/img23_1.jpg', '/assets/img23_2.jpg', '/assets/img23_3.jpg', '/assets/img23_4.jpg'],
  24: ['/assets/img24_1.jpg', '/assets/img24_2.jpg', '/assets/img24_3.jpg', '/assets/img24_4.jpg'],
  25: ['/assets/img25_1.jpg', '/assets/img25_2.jpg', '/assets/img25_3.jpg', '/assets/img25_4.png'],
  26: ['/assets/img26_1.jpg', '/assets/img26_2.jpg', '/assets/img26_3.jpg', '/assets/img26_4.jpg'],
  27: ['/assets/img27_1.jpg', '/assets/img27_2.jpg', '/assets/img27_3.jpg', '/assets/img27_4.jpg']
}

const WomensNewArrivals = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const sliderImages = [
    "https://images.unsplash.com/photo-1600201319331-27d31ecd7850?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603025671435-a22b5d610383?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  const womensProducts = [
    { id: 1, name: "Botanical Print Maxi Dress", price: "₹7,599", images: productImages[1], description: "Flowing maxi with hand-printed leaves" },
    { id: 2, name: "Organic Silk Blouse", price: "₹7,199", images: productImages[2], description: "Luxurious silk with floral eco-prints" },
    { id: 3, name: "Natural Cotton Cardigan", price: "₹5,799", images: productImages[3], description: "Cozy cardigan with botanical patterns" },
    { id: 4, name: "Eco-Printed Wrap Top", price: "₹4,699", images: productImages[4], description: "Versatile wrap top with nature prints" },
    { id: 5, name: "Organic Linen Skirt", price: "₹5,499", images: productImages[5], description: "Elegant skirt with natural dye patterns" },
    { id: 6, name: "Sustainable Midi Dress", price: "₹6,899", images: productImages[6], description: "Chic midi dress with eco-friendly prints" },
    { id: 7, name: "Natural Hemp Blazer", price: "₹11,499", images: productImages[7], description: "Professional blazer in sustainable hemp" },
    { id: 8, name: "Botanical Print Jumpsuit", price: "₹10,199", images: productImages[8], description: "Stylish jumpsuit with nature patterns" },
    { id: 9, name: "Eco-Dyed Palazzo Pants", price: "₹6,299", images: productImages[9], description: "Comfortable palazzo pants in earth tones" },
    { id: 10, name: "Organic Cotton Tunic", price: "₹5,299", images: productImages[10], description: "Flowing tunic with leaf motifs" },
    { id: 11, name: "Natural Silk Kimono", price: "₹12,699", images: productImages[11], description: "Elegant kimono with botanical designs" },
    { id: 12, name: "Sustainable Wrap Dress", price: "₹7,999", images: productImages[12], description: "Flattering wrap dress with eco-prints" },
    { id: 13, name: "Linen Button-Up Shirt", price: "₹6,199", images: productImages[13], description: "Classic shirt in natural linen" },
    { id: 14, name: "Botanical Print Tank Top", price: "₹3,899", images: productImages[14], description: "Lightweight tank with leaf patterns" },
    { id: 15, name: "Organic Hemp Shorts", price: "₹4,399", images: productImages[15], description: "Comfortable shorts in sustainable hemp" },
    { id: 16, name: "Natural Dye Camisole", price: "₹3,399", images: productImages[16], description: "Delicate camisole with plant-based dyes" },
    { id: 17, name: "Eco-Print Maxi Skirt", price: "₹7,199", images: productImages[17], description: "Flowing maxi skirt with botanical prints" },
    { id: 18, name: "Sustainable Cotton Dress", price: "₹7,499", images: productImages[18], description: "Comfortable dress in organic cotton" },
    { id: 19, name: "Natural Fiber Poncho", price: "₹6,999", images: productImages[19], description: "Cozy poncho with earth-tone prints" },
    { id: 20, name: "Botanical Print Leggings", price: "₹4,199", images: productImages[20], description: "Stretchy leggings with leaf designs" },
    { id: 21, name: "Organic Linen Blazer", price: "₹13,399", images: productImages[21], description: "Professional blazer in natural linen" },
    { id: 22, name: "Eco-Dyed Wrap Top", price: "₹5,199", images: productImages[22], description: "Flattering wrap top with natural dyes" },
    { id: 23, name: "Natural Cotton Hoodie", price: "₹7,699", images: productImages[23], description: "Comfortable hoodie with botanical details" },
    { id: 24, name: "Sustainable Silk Scarf", price: "₹4,699", images: productImages[24], description: "Luxurious scarf with eco-prints" },
    { id: 25, name: "Botanical Print Sundress", price: "₹6,699", images: productImages[25], description: "Light sundress with nature motifs" },
    { id: 26, name: "Organic Hemp Vest", price: "₹5,499", images: productImages[26], description: "Versatile vest in sustainable hemp" },
    { id: 27, name: "Natural Dye Crop Top", price: "₹3,699", images: productImages[27], description: "Trendy crop top with plant dyes" }
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

  // Handle product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
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

  // Product Component with Slider - Original Design Preserved
  const UniformProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = (e) => {
      e.stopPropagation()
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
    }

    const prevImage = (e) => {
      e.stopPropagation()
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
    }

    const goToImage = (index, e) => {
      e.stopPropagation()
      setCurrentImageIndex(index)
    }

    return (
      <div 
        className="flex flex-col cursor-pointer group transition-all duration-300 hover:scale-105"
        onClick={() => handleProductClick(product.id)}
      >
        {/* Image Container - Original Design with Slider (no border radius) */}
        <div className="relative overflow-hidden h-96 rounded-none shadow-lg">
          {/* Image Slider */}
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} - View ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ${
                index === currentImageIndex 
                  ? 'opacity-100 group-hover:scale-110' 
                  : 'opacity-0'
              }`}
            />
          ))}

          {/* Original Hover Overlay with View Details */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-gray-800">View Details</span>
            </div>
          </div>

          {/* Navigation Arrows - Only show if more than 1 image */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Next image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => goToImage(index, e)}
                    className={`transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'w-8 h-2 bg-white rounded-full' 
                        : 'w-2 h-2 bg-white/60 hover:bg-white/80 rounded-full'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Product Details - tighter spacing */}
        <div className="pt-2 flex flex-col">
          <h3 className="text-xl leading-tight font-serif font-semibold mb-1 group-hover:text-gold-500 transition-colors duration-300" style={{ color: 'rgb(47, 91, 42)' }}>
            {product.name}
          </h3>
          <p className="text-sm leading-snug font-serif text-gray-600 mb-2">
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

        {/* Products Grid - Updated with Navigation */}
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