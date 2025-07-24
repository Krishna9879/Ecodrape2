import ProductCard from '../components/ProductCard'
import CategorySlider from '../components/CategorySlider'
import ScrollAnimations from '../components/ScrollAnimations'

// Import images from assets folder
import img33 from '../assets/img33.jpg'
import img34 from '../assets/img34.jpg'
import img35 from '../assets/img35.jpg'
import img36 from '../assets/img36.jpg'
import img37 from '../assets/img37.jpg'
import img38 from '../assets/img38.jpg'
import img39 from '../assets/img39.jpg'
import img40 from '../assets/img40.jpg'
import img41 from '../assets/img41.jpg'
import img42 from '../assets/img42.jpg'
import img43 from '../assets/img43.jpg'
import img44 from '../assets/img44.jpg'
import img45 from '../assets/img45.jpg'
import img46 from '../assets/img46.jpg'
import img47 from '../assets/img47.jpg'
import img48 from '../assets/img48.jpg'
import img49 from '../assets/img49.jpg'
import img50 from '../assets/img50.jpg'
import img51 from '../assets/img51.jpg'
import img52 from '../assets/img52.jpg'
import img53 from '../assets/img53.jpg'
import img54 from '../assets/img54.jpg'
import img55 from '../assets/img55.jpg'
import img56 from '../assets/img56.jpg'
import img57 from '../assets/img57.jpg'
import img58 from '../assets/img58.jpg'
import img59 from '../assets/img59.jpg'
import img60 from '../assets/img60.jpg'
import img61 from '../assets/img61.jpg'
import img62 from '../assets/img62.png'
import img63 from '../assets/img63.png'
import img64 from '../assets/img64.png'
import img65 from '../assets/img65.jpg'
import img66 from '../assets/img66.jpg'

const WomensNewArrivals = () => {
  const sliderImages = [
    "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/7679746/pexels-photo-7679746.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2",
    "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2"
  ]

  const womensProducts = [
    {
      id: 1,
      name: "Botanical Print Maxi Dress",
      price: "$95",
      image: img33,
      description: "Flowing maxi with hand-printed leaves"
    },
    {
      id: 2,
      name: "Organic Silk Blouse",
      price: "$89",
      image: img34,
      description: "Luxurious silk with floral eco-prints"
    },
    {
      id: 3,
      name: "Natural Cotton Cardigan",
      price: "$72",
      image: img35,
      description: "Cozy cardigan with botanical patterns"
    },
    {
      id: 4,
      name: "Eco-Printed Wrap Top",
      price: "$58",
      image: img36,
      description: "Versatile wrap top with nature prints"
    },
    {
      id: 5,
      name: "Organic Linen Skirt",
      price: "$68",
      image: img37,
      description: "Elegant skirt with natural dye patterns"
    },
    {
      id: 6,
      name: "Sustainable Midi Dress",
      price: "$85",
      image: img38,
      description: "Chic midi dress with eco-friendly prints"
    },
    {
      id: 7,
      name: "Natural Hemp Blazer",
      price: "$142",
      image: img39,
      description: "Professional blazer in sustainable hemp"
    },
    {
      id: 8,
      name: "Botanical Print Jumpsuit",
      price: "$125",
      image: img40,
      description: "Stylish jumpsuit with nature patterns"
    },
    {
      id: 9,
      name: "Eco-Dyed Palazzo Pants",
      price: "$78",
      image: img41,
      description: "Comfortable palazzo pants in earth tones"
    },
    {
      id: 10,
      name: "Organic Cotton Tunic",
      price: "$65",
      image: img42,
      description: "Flowing tunic with leaf motifs"
    },
    {
      id: 11,
      name: "Natural Silk Kimono",
      price: "$156",
      image: img43,
      description: "Elegant kimono with botanical designs"
    },
    {
      id: 12,
      name: "Sustainable Wrap Dress",
      price: "$98",
      image: img44,
      description: "Flattering wrap dress with eco-prints"
    },
    {
      id: 13,
      name: "Linen Button-Up Shirt",
      price: "$76",
      image: img45,
      description: "Classic shirt in natural linen"
    },
    {
      id: 14,
      name: "Botanical Print Tank Top",
      price: "$48",
      image: img46,
      description: "Lightweight tank with leaf patterns"
    },
    {
      id: 15,
      name: "Organic Hemp Shorts",
      price: "$54",
      image: img47,
      description: "Comfortable shorts in sustainable hemp"
    },
    {
      id: 16,
      name: "Natural Dye Camisole",
      price: "$42",
      image: img48,
      description: "Delicate camisole with plant-based dyes"
    },
    {
      id: 17,
      name: "Eco-Print Maxi Skirt",
      price: "$88",
      image: img49,
      description: "Flowing maxi skirt with botanical prints"
    },
    {
      id: 18,
      name: "Sustainable Cotton Dress",
      price: "$92",
      image: img50,
      description: "Comfortable dress in organic cotton"
    },
    {
      id: 19,
      name: "Natural Fiber Poncho",
      price: "$86",
      image: img51,
      description: "Cozy poncho with earth-tone prints"
    },
    {
      id: 20,
      name: "Botanical Print Leggings",
      price: "$52",
      image: img52,
      description: "Stretchy leggings with leaf designs"
    },
    {
      id: 21,
      name: "Organic Linen Blazer",
      price: "$165",
      image: img53,
      description: "Professional blazer in natural linen"
    },
    {
      id: 22,
      name: "Eco-Dyed Wrap Top",
      price: "$64",
      image: img54,
      description: "Flattering wrap top with natural dyes"
    },
    {
      id: 23,
      name: "Natural Cotton Hoodie",
      price: "$95",
      image: img55,
      description: "Comfortable hoodie with botanical details"
    },
    {
      id: 24,
      name: "Sustainable Silk Scarf",
      price: "$58",
      image: img56,
      description: "Luxurious scarf with eco-prints"
    },
    {
      id: 25,
      name: "Botanical Print Sundress",
      price: "$82",
      image: img57,
      description: "Light sundress with nature motifs"
    },
    {
      id: 26,
      name: "Organic Hemp Vest",
      price: "$68",
      image: img58,
      description: "Versatile vest in sustainable hemp"
    },
    {
      id: 27,
      name: "Natural Dye Crop Top",
      price: "$46",
      image: img59,
      description: "Trendy crop top with plant dyes"
    },
    {
      id: 28,
      name: "Eco-Print Evening Dress",
      price: "$185",
      image: img60,
      description: "Elegant evening dress with botanical motifs"
    },
    {
      id: 29,
      name: "Linen Wide-Leg Pants",
      price: "$76",
      image: img61,
      description: "Comfortable wide-leg pants in linen"
    },
    {
      id: 30,
      name: "Sustainable Bamboo Top",
      price: "$58",
      image: img62,
      description: "Soft bamboo top with nature prints"
    },
    {
      id: 31,
      name: "Botanical Print Sarong",
      price: "$44",
      image: img63,
      description: "Versatile sarong with leaf designs"
    },
    {
      id: 32,
      name: "Organic Cotton Romper",
      price: "$88",
      image: img64,
      description: "Playful romper with botanical details"
    },
    {
      id: 33,
      name: "Natural Silk Blouse",
      price: "$134",
      image: img65,
      description: "Elegant blouse in peace silk"
    },
    {
      id: 34,
      name: "Eco-Dyed Maxi Dress",
      price: "$148",
      image: img66,
      description: "Stunning maxi dress with natural dyes"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sage-50 pt-20 overflow-hidden">
      <ScrollAnimations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Slider */}
        <div className="scroll-animate">
          <CategorySlider 
            title="Women's Latest Collection"
            subtitle="Elegant women's collection with unique nature-inspired designs"
            images={sliderImages}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 gradient-text">
            Women's New Arrivals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our newest women's collection showcasing elegant, eco-friendly garments with unique nature-inspired designs. 
            Each piece celebrates feminine grace while honoring our commitment to sustainability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {womensProducts.map((product, index) => (
            <div key={product.id} className={`scroll-animate stagger-${(index % 4) + 1}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Women's Collection Info */}
        <div className="bg-gradient-to-r from-white to-rose-50 rounded-3xl shadow-2xl p-12 scroll-animate hover-glow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 gradient-text">
              Designed for the Conscious Woman
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our women's collection embodies the perfect harmony between feminine elegance and environmental consciousness. 
              Each garment is thoughtfully designed to celebrate natural beauty while supporting sustainable fashion practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-rose-100 to-sage-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors duration-300">Elegant Designs</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Timeless silhouettes with modern appeal</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-sage-100 to-earth-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors duration-300">Natural Beauty</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Botanical prints that celebrate nature</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-earth-100 to-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-earth-700 transition-colors duration-300">Versatile Style</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Perfect for any occasion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WomensNewArrivals