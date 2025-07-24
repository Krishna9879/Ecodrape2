import ProductCard from '../components/ProductCard'
import CategorySlider from '../components/CategorySlider'
import ScrollAnimations from '../components/ScrollAnimations'

const MensNewArrivals = () => {
  const sliderImages = [
    "https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2"
  ]

  const mensProducts = [
    {
      id: 1,
      name: "Men's Organic Linen Shirt",
      price: "$78",
      image: "https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Naturally dyed linen with leaf patterns"
    },
    {
      id: 2,
      name: "Hemp Canvas Jacket",
      price: "$125",
      image: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Durable hemp with botanical prints"
    },
    {
      id: 3,
      name: "Eco-Print Cotton Tee",
      price: "$45",
      image: "https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Soft organic cotton with nature motifs"
    },
    {
      id: 4,
      name: "Natural Dye Polo",
      price: "$65",
      image: "https://images.pexels.com/photos/5836962/pexels-photo-5836962.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Classic polo with eco-friendly dyes"
    },
    {
      id: 5,
      name: "Organic Cotton Hoodie",
      price: "$89",
      image: "https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Comfortable hoodie with botanical prints"
    },
    {
      id: 6,
      name: "Natural Fiber Cardigan",
      price: "$95",
      image: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Warm cardigan with eco-friendly dyes"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sage-50 pt-20 overflow-hidden">
      <ScrollAnimations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 gradient-text">
            Men's New Arrivals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest men's collection featuring sustainable, handcrafted pieces with natural botanical prints. 
            Each garment combines comfort, style, and environmental consciousness.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {mensProducts.map((product, index) => (
            <div key={product.id} className={`scroll-animate stagger-${(index % 4) + 1}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Men's Collection Info */}
        <div className="bg-gradient-to-r from-white to-rose-50 rounded-3xl shadow-2xl p-12 scroll-animate hover-glow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 gradient-text">
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