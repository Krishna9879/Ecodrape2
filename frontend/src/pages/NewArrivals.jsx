import ProductCard from '../components/ProductCard'
import CategorySlider from '../components/CategorySlider'
import ScrollAnimations from '../components/ScrollAnimations'

const NewArrivals = ({ category }) => {
  const mensSliderImages = [
    "https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2"
  ]

  const womensSliderImages = [
    "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/7679746/pexels-photo-7679746.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2"
  ]

  const allSliderImages = [
    ...mensSliderImages,
    ...womensSliderImages
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
    }
  ]

  const womensProducts = [
    {
      id: 5,
      name: "Botanical Print Maxi Dress",
      price: "$95",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Flowing maxi with hand-printed leaves"
    },
    {
      id: 6,
      name: "Organic Silk Blouse",
      price: "$89",
      image: "https://images.pexels.com/photos/7679746/pexels-photo-7679746.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Luxurious silk with floral eco-prints"
    },
    {
      id: 7,
      name: "Natural Cotton Cardigan",
      price: "$72",
      image: "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Cozy cardigan with botanical patterns"
    },
    {
      id: 8,
      name: "Eco-Printed Wrap Top",
      price: "$58",
      image: "https://images.pexels.com/photos/7679733/pexels-photo-7679733.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Versatile wrap top with nature prints"
    }
  ]

  const allProducts = [...mensProducts, ...womensProducts]

  const getProducts = () => {
    switch(category) {
      case 'mens':
        return mensProducts
      case 'womens':
        return womensProducts
      default:
        return allProducts
    }
  }

  const getSliderImages = () => {
    switch(category) {
      case 'mens':
        return mensSliderImages
      case 'womens':
        return womensSliderImages
      default:
        return allSliderImages
    }
  }

  const getTitle = () => {
    switch(category) {
      case 'mens':
        return "Men's New Arrivals"
      case 'womens':
        return "Women's New Arrivals"
      default:
        return "New Arrivals"
    }
  }

  const getSliderTitle = () => {
    switch(category) {
      case 'mens':
        return "Men's Latest Collection"
      case 'womens':
        return "Women's Latest Collection"
      default:
        return "Latest Arrivals"
    }
  }

  const getSliderSubtitle = () => {
    switch(category) {
      case 'mens':
        return "Sustainable men's fashion with natural botanical prints"
      case 'womens':
        return "Elegant women's collection with unique nature-inspired designs"
      default:
        return "Fresh from our studio - handcrafted pieces for everyone"
    }
  }

  const getDescription = () => {
    switch(category) {
      case 'mens':
        return "Discover our latest men's collection featuring sustainable, handcrafted pieces with natural botanical prints."
      case 'womens':
        return "Explore our newest women's collection showcasing elegant, eco-friendly garments with unique nature-inspired designs."
      default:
        return "Explore our latest collection of handcrafted, eco-printed garments for both men and women."
    }
  }

  const products = getProducts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sage-50 pt-20 overflow-hidden">
      <ScrollAnimations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Slider */}
        <div className="scroll-animate">
          <CategorySlider 
            title={getSliderTitle()}
            subtitle={getSliderSubtitle()}
            images={getSliderImages()}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 gradient-text">
            {getTitle()}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {getDescription()}
          </p>
        </div>

        {/* Category Filters */}
        {!category && (
          <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-animate">
            <button className="group relative bg-gradient-to-r from-sage-600 to-earth-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl ripple">
              <span className="relative z-10">All New Arrivals</span>
            </button>
            <button className="group relative bg-white text-sage-600 border-2 border-sage-600 px-8 py-3 rounded-full font-medium hover:bg-sage-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl magnetic">
              Men's
            </button>
            <button className="group relative bg-white text-sage-600 border-2 border-sage-600 px-8 py-3 rounded-full font-medium hover:bg-sage-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl magnetic">
              Women's
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={product.id} className={`scroll-animate stagger-${(index % 4) + 1}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* New Arrivals Info */}
        <div className="bg-gradient-to-r from-white to-rose-50 rounded-3xl shadow-2xl p-12 scroll-animate hover-glow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 gradient-text">
              Fresh from Our Studio
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Each new arrival represents hours of careful craftsmanship and nature's own artistry. 
              Our seasonal collections reflect the changing beauty of the natural world, 
              bringing fresh patterns and colorways inspired by the world around us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-sage-100 to-earth-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors duration-300">Weekly Updates</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">New pieces added every week</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-earth-100 to-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-earth-700 transition-colors duration-300">Limited Edition</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Each design is one-of-a-kind</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-rose-100 to-sage-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors duration-300">Sustainable</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">100% eco-friendly materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals