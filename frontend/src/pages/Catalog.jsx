import ProductCard from '../components/ProductCard'
import CategorySlider from '../components/CategorySlider'
import ScrollAnimations from '../components/ScrollAnimations'

// Images from public/assets folder
const img1 = '/assets/img1.jpg'
const img2 = '/assets/img2.jpg'
const img3 = '/assets/img3.jpg'
const img4 = '/assets/img4.jpg'
const img5 = '/assets/img5.jpg'
const img6 = '/assets/img6.jpg'
const img7 = '/assets/img7.jpg'
const img8 = '/assets/img8.jpg'
const img9 = '/assets/img9.jpg'
const img10 = '/assets/img10.jpg'
const img11 = '/assets/img11.jpg'
const img12 = '/assets/img12.jpg'
const img13 = '/assets/img13.jpg'
const img14 = '/assets/img14.jpg'
const img15 = '/assets/img30.jpg'
const img16 = '/assets/img16.jpg'
const img17 = '/assets/img17.jpg'
const img18 = '/assets/img18.jpg'
const img19 = '/assets/img19.jpg'
const img20 = '/assets/img20.jpg'
const img21 = '/assets/img21.jpg'
const img22 = '/assets/img22.jpg'
const img23 = '/assets/img23.jpg'
const img24 = '/assets/img24.jpg'
const img25 = '/assets/img25.jpg'
const img26 = '/assets/img26.jpg'
const img27 = '/assets/img27.jpg'
const img28 = '/assets/img28.jpg'
const img29 = '/assets/img29.jpg'
const img30 = '/assets/img30.jpg'
const img31 = '/assets/img31.jpg'
const img32 = '/assets/img32.jpg'
// New images
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

const Catalog = () => {
  const sliderImages = [
    "/assets/aboutimg1.jpg",
    "/assets/aboutimg2.jpg",
    "/assets/aboutimg3.jpg",
    "/assets/aboutimg4.jpg"
  ]

  const products = [
    {
      id: 1,
      name: "Botanical Leaf Print Dress",
      price: "$89",
      image: img1,
      description: "Handcrafted with natural leaf prints"
    },
    {
      id: 2,
      name: "Organic Cotton Scarf",
      price: "$45",
      image: img2,
      description: "Eco-printed with flower petals"
    },
    {
      id: 3,
      name: "Natural Dye Blouse",
      price: "$67",
      image: img3,
      description: "Made from organic plant dyes"
    },
    {
      id: 4,
      name: "Earth Tone Tunic",
      price: "$75",
      image: img4,
      description: "Sustainably crafted comfort wear"
    },
    {
      id: 5,
      name: "Eco-Print Wrap Dress",
      price: "$95",
      image: img5,
      description: "Elegant wrap dress with botanical prints"
    },
    {
      id: 6,
      name: "Natural Silk Shawl",
      price: "$125",
      image: img6,
      description: "Luxurious silk with eco-printing"
    },
    {
      id: 7,
      name: "Organic Hemp Top",
      price: "$58",
      image: img7,
      description: "Sustainable hemp fabric with leaf motifs"
    },
    {
      id: 8,
      name: "Linen Garden Jacket",
      price: "$110",
      image: img8,
      description: "Breathable linen with nature-inspired prints"
    },
    {
      id: 9,
      name: "Floral Print Maxi Dress",
      price: "$135",
      image: img9,
      description: "Flowing maxi dress with botanical prints"
    },
    {
      id: 10,
      name: "Natural Cotton Cardigan",
      price: "$98",
      image: img10,
      description: "Cozy cardigan with leaf patterns"
    },
    {
      id: 11,
      name: "Eco-Dyed Palazzo Pants",
      price: "$78",
      image: img11,
      description: "Comfortable palazzo pants in earth tones"
    },
    {
      id: 12,
      name: "Botanical Print Kimono",
      price: "$156",
      image: img12,
      description: "Elegant kimono with nature-inspired designs"
    },
    {
      id: 13,
      name: "Organic Cotton Blouse",
      price: "$65",
      image: img13,
      description: "Classic blouse with subtle leaf motifs"
    },
    {
      id: 14,
      name: "Natural Dye Skirt",
      price: "$82",
      image: img14,
      description: "A-line skirt with eco-friendly dyes"
    },
    {
      id: 15,
      name: "Botanical Crop Top",
      price: "$52",
      image: img15,
      description: "Trendy crop top with leaf prints"
    },
    {
      id: 16,
      name: "Linen Midi Dress",
      price: "$118",
      image: img16,
      description: "Breathable midi dress in natural linen"
    },
    {
      id: 17,
      name: "Eco-Print Vest",
      price: "$72",
      image: img17,
      description: "Versatile vest with botanical patterns"
    },
    {
      id: 18,
      name: "Natural Fiber Poncho",
      price: "$95",
      image: img18,
      description: "Cozy poncho with earth-tone prints"
    },
    {
      id: 19,
      name: "Organic Hemp Shorts",
      price: "$48",
      image: img19,
      description: "Comfortable shorts in sustainable hemp"
    },
    {
      id: 20,
      name: "Botanical Print Jumpsuit",
      price: "$145",
      image: img20,
      description: "Stylish jumpsuit with nature patterns"
    },
    {
      id: 21,
      name: "Natural Cotton Tank",
      price: "$38",
      image: img21,
      description: "Basic tank with subtle leaf details"
    },
    {
      id: 22,
      name: "Eco-Dyed Wrap Top",
      price: "$68",
      image: img22,
      description: "Flattering wrap top in natural dyes"
    },
    {
      id: 23,
      name: "Linen Button-Up Shirt",
      price: "$88",
      image: img23,
      description: "Classic shirt in eco-friendly linen"
    },
    {
      id: 24,
      name: "Botanical Print Leggings",
      price: "$58",
      image: img24,
      description: "Comfortable leggings with leaf patterns"
    },
    {
      id: 25,
      name: "Natural Dye Tunic",
      price: "$92",
      image: img25,
      description: "Flowing tunic with organic plant dyes"
    },
    {
      id: 26,
      name: "Eco-Print Sweater",
      price: "$128",
      image: img26,
      description: "Cozy sweater with botanical motifs"
    },
    {
      id: 27,
      name: "Organic Cotton Hoodie",
      price: "$105",
      image: img27,
      description: "Comfortable hoodie in organic cotton"
    },
    {
      id: 28,
      name: "Natural Fiber Shrug",
      price: "$76",
      image: img28,
      description: "Lightweight shrug with leaf prints"
    },
    {
      id: 29,
      name: "Botanical Print Culottes",
      price: "$85",
      image: img29,
      description: "Trendy culottes with nature-inspired prints"
    },
    {
      id: 30,
      name: "Eco-Dyed Halter Top",
      price: "$55",
      image: img30,
      description: "Stylish halter top in earth tones"
    },
    {
      id: 31,
      name: "Natural Linen Blazer",
      price: "$165",
      image: img31,
      description: "Professional blazer in sustainable linen"
    },
    {
      id: 32,
      name: "Organic Cotton Romper",
      price: "$98",
      image: img32,
      description: "Playful romper with botanical details"
    },
    {
      id: 33,
      name: "Sustainable Bamboo Dress",
      price: "$112",
      image: img33,
      description: "Silky smooth bamboo fabric with eco-prints"
    },
    {
      id: 34,
      name: "Natural Hemp Palazzo",
      price: "$86",
      image: img34,
      description: "Wide-leg palazzo pants in hemp fiber"
    },
    {
      id: 35,
      name: "Botanical Print Cardigan",
      price: "$138",
      image: img35,
      description: "Cozy cardigan with intricate leaf designs"
    },
    {
      id: 36,
      name: "Eco-Friendly Wrap Skirt",
      price: "$74",
      image: img36,
      description: "Versatile wrap skirt in organic cotton"
    },
    {
      id: 37,
      name: "Natural Dye Camisole",
      price: "$42",
      image: img37,
      description: "Delicate camisole with plant-based dyes"
    },
    {
      id: 38,
      name: "Linen Blend Joggers",
      price: "$92",
      image: img38,
      description: "Comfortable joggers with botanical prints"
    },
    {
      id: 39,
      name: "Organic Cotton Kaftan",
      price: "$148",
      image: img39,
      description: "Flowing kaftan with nature-inspired patterns"
    },
    {
      id: 40,
      name: "Eco-Print Beach Cover",
      price: "$64",
      image: img40,
      description: "Lightweight beach cover with leaf motifs"
    },
    {
      id: 41,
      name: "Sustainable Silk Blouse",
      price: "$156",
      image: img41,
      description: "Luxurious peace silk with eco-printing"
    },
    {
      id: 42,
      name: "Natural Fiber Capris",
      price: "$68",
      image: img42,
      description: "Breathable capris in earth tones"
    },
    {
      id: 43,
      name: "Botanical Print Midi",
      price: "$125",
      image: img43,
      description: "Elegant midi dress with floral patterns"
    },
    {
      id: 44,
      name: "Organic Hemp Blazer",
      price: "$185",
      image: img44,
      description: "Professional blazer in sustainable hemp"
    },
    {
      id: 45,
      name: "Natural Dye Wrap Dress",
      price: "$142",
      image: img45,
      description: "Flattering wrap dress with plant dyes"
    },
    {
      id: 46,
      name: "Eco-Print Palazzo Set",
      price: "$168",
      image: img46,
      description: "Matching top and palazzo set"
    },
    {
      id: 47,
      name: "Sustainable Cotton Tee",
      price: "$35",
      image: img47,
      description: "Basic tee with subtle botanical details"
    },
    {
      id: 48,
      name: "Natural Fiber Maxi",
      price: "$158",
      image: img48,
      description: "Flowing maxi in organic cotton blend"
    },
    {
      id: 49,
      name: "Botanical Print Shorts",
      price: "$54",
      image: img49,
      description: "Casual shorts with leaf patterns"
    },
    {
      id: 50,
      name: "Eco-Dyed Peasant Top",
      price: "$78",
      image: img50,
      description: "Bohemian top with natural dyes"
    },
    {
      id: 51,
      name: "Linen Sleeveless Dress",
      price: "$106",
      image: img51,
      description: "Minimalist dress in pure linen"
    },
    {
      id: 52,
      name: "Natural Hemp Overalls",
      price: "$134",
      image: img52,
      description: "Vintage-style overalls in hemp fiber"
    },
    {
      id: 53,
      name: "Botanical Print Scarf",
      price: "$38",
      image: img53,
      description: "Lightweight scarf with nature motifs"
    },
    {
      id: 54,
      name: "Organic Cotton Shift",
      price: "$96",
      image: img54,
      description: "Simple shift dress in organic cotton"
    },
    {
      id: 55,
      name: "Eco-Print Wide Pants",
      price: "$88",
      image: img55,
      description: "Comfortable wide-leg pants"
    },
    {
      id: 56,
      name: "Natural Dye Peplum Top",
      price: "$82",
      image: img56,
      description: "Flattering peplum with plant dyes"
    },
    {
      id: 57,
      name: "Sustainable Bamboo Top",
      price: "$65",
      image: img57,
      description: "Soft bamboo top with eco-prints"
    },
    {
      id: 58,
      name: "Botanical Print Kimono",
      price: "$172",
      image: img58,
      description: "Luxurious kimono with intricate patterns"
    },
    {
      id: 59,
      name: "Linen Crop Jacket",
      price: "$118",
      image: img59,
      description: "Stylish crop jacket in natural linen"
    },
    {
      id: 60,
      name: "Eco-Friendly Jumpsuit",
      price: "$165",
      image: img60,
      description: "One-piece jumpsuit in organic materials"
    },
    {
      id: 61,
      name: "Natural Cotton Sundress",
      price: "$102",
      image: img61,
      description: "Casual sundress with botanical prints"
    },
    {
      id: 62,
      name: "Hemp Fiber Polo Shirt",
      price: "$72",
      image: img62,
      description: "Classic polo in sustainable hemp"
    },
    {
      id: 63,
      name: "Botanical Print Sarong",
      price: "$48",
      image: img63,
      description: "Versatile sarong with leaf designs"
    },
    {
      id: 64,
      name: "Organic Silk Camisole",
      price: "$84",
      image: img64,
      description: "Delicate camisole in peace silk"
    },
    {
      id: 65,
      name: "Natural Dye Maxi Skirt",
      price: "$126",
      image: img65,
      description: "Flowing maxi skirt with earth tones"
    },
    {
      id: 66,
      name: "Eco-Print Evening Dress",
      price: "$198",
      image: img66,
      description: "Elegant evening dress with botanical motifs"
    }
  ]

  // Uniform Product Card Component (without + button)
  const UniformProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group h-full flex flex-col">
        {/* Fixed Image Container */}
        <div className="relative overflow-hidden h-80 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Fixed Content Container */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sage-50 pt-20 overflow-hidden">
      <ScrollAnimations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Slider */}
        <div className="scroll-animate">
          <CategorySlider 
            title="Complete Catalog"
            subtitle="Discover our full collection of handcrafted, eco-printed garments"
            images={sliderImages}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 gradient-text">
            Our Complete Catalog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our full collection of handcrafted, eco-printed garments. Each piece is a unique work of art, 
            created through our sustainable botanical printing process.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-animate">
          <button className="group relative bg-gradient-to-r from-sage-600 to-earth-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl ripple">
            <span className="relative z-10">All Items</span>
          </button>
          <button className="group relative bg-white text-sage-600 border-2 border-sage-600 px-8 py-3 rounded-full font-medium hover:bg-sage-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl magnetic">
            Dresses
          </button>
          <button className="group relative bg-white text-sage-600 border-2 border-sage-600 px-8 py-3 rounded-full font-medium hover:bg-sage-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl magnetic">
            Tops
          </button>
          <button className="group relative bg-white text-sage-600 border-2 border-sage-600 px-8 py-3 rounded-full font-medium hover:bg-sage-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl magnetic">
            Accessories
          </button>
        </div>

        {/* Products Grid - Uniform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={product.id} className={`scroll-animate stagger-${(index % 4) + 1}`}>
              <UniformProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center scroll-animate">
          <button className="group relative bg-gradient-to-r from-earth-500 to-rose-500 hover:from-earth-600 hover:to-rose-600 text-white px-10 py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ripple magnetic">
            <span className="relative z-10">Load More Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sage-500 to-earth-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Collection Info */}
        <div className="mt-20 bg-gradient-to-r from-white to-rose-50 rounded-3xl shadow-2xl p-12 scroll-animate hover-glow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 gradient-text">
              Curated with Love
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every item in our catalog represents hours of careful craftsmanship and nature's own artistry. 
              Our collection reflects the changing beauty of the natural world, bringing fresh patterns and 
              colorways inspired by the seasons.
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

export default Catalog