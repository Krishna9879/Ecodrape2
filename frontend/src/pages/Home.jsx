import HeroSlider from '../components/HeroSlider'
import ProductCard from '../components/ProductCard'
import ScrollAnimations from '../components/ScrollAnimations'

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Botanical Leaf Print Dress",
      price: "$89",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Handcrafted with natural leaf prints"
    },
    {
      id: 2,
      name: "Organic Cotton Scarf",
      price: "$45",
      image: "https://images.pexels.com/photos/7679746/pexels-photo-7679746.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Eco-printed with flower petals"
    },
    {
      id: 3,
      name: "Natural Dye Blouse",
      price: "$67",
      image: "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Made from organic plant dyes"
    },
    {
      id: 4,
      name: "Earth Tone Tunic",
      price: "$75",
      image: "https://images.pexels.com/photos/7679733/pexels-photo-7679733.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      description: "Sustainably crafted comfort wear"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The quality and beauty of Eco Drape's pieces are unmatched. Each garment tells a story.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Michael Chen",
      text: "Finally, sustainable fashion that doesn't compromise on style. Absolutely love my collection!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Emma Rodriguez",
      text: "The eco-printing process creates such unique patterns. I get compliments every time I wear them.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ]

  return (
    <div className="overflow-hidden min-h-screen">
      <ScrollAnimations />
      
      {/* Hero Slider */}
      <div className="relative">
        <HeroSlider />
      </div>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-sage-50 relative overflow-hidden">
        <div className="absolute inset-0 liquid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 gradient-text">
                Crafted by Nature, Designed for You
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Eco Drape, we believe fashion should be beautiful, sustainable, and meaningful. 
                Our unique eco-printing process captures the essence of nature in every piece, 
                creating textiles that are not just clothing, but wearable art.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Each garment tells a story of the earth - from the leaves that create the prints 
                to the organic materials that form the foundation. Join us in our mission to 
                make fashion more conscious and beautiful.
              </p>
              <button className="group relative bg-gradient-to-r from-sage-600 to-earth-600 hover:from-sage-700 hover:to-earth-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ripple magnetic">
                <span className="relative z-10">Learn Our Process</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-sage-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
            <div className="scroll-animate-right relative">
              <div className="relative group">
                <img
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Eco printing process"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover transform transition-all duration-700 group-hover:scale-105 hover-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-300 to-sage-300 rounded-full floating opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-earth-300 to-rose-300 rounded-full floating opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-sage-50 via-rose-50 to-earth-50 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sage-300 rounded-full floating"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-rose-300 rounded-full floating"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-earth-300 rounded-full floating"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 gradient-text">
              Why Choose Eco Drape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every piece we create embodies our commitment to sustainable fashion and artisanal craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group scroll-animate stagger-1">
              <div className="relative mb-6 inline-block">
                <div className="bg-gradient-to-br from-sage-600 to-earth-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 hover-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800 group-hover:text-sage-700 transition-colors duration-300">100% Natural</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Made with organic materials and natural dyes sourced sustainably from nature
              </p>
            </div>
            
            <div className="text-center group scroll-animate stagger-2">
              <div className="relative mb-6 inline-block">
                <div className="bg-gradient-to-br from-earth-500 to-rose-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 hover-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-sage-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800 group-hover:text-earth-700 transition-colors duration-300">Handcrafted</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Each piece is carefully handcrafted with attention to detail and artistic vision
              </p>
            </div>
            
            <div className="text-center group scroll-animate stagger-3">
              <div className="relative mb-6 inline-block">
                <div className="bg-gradient-to-br from-rose-600 to-sage-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 hover-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-earth-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800 group-hover:text-rose-700 transition-colors duration-300">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Sustainable production process that respects and honors our environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="py-20 bg-gradient-to-br from-white via-rose-50 to-sage-50 relative overflow-hidden">
        <div className="absolute inset-0 liquid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 gradient-text">
              Our Magical Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Witness the transformation from nature's gifts to wearable art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Gather",
                description: "Collecting nature's treasures",
                image: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                step: "02", 
                title: "Prepare",
                description: "Treating organic fabrics",
                image: "https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                step: "03",
                title: "Arrange",
                description: "Composing natural artwork",
                image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                step: "04",
                title: "Transform",
                description: "Creating wearable magic",
                image: "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              }
            ].map((item, index) => (
              <div key={index} className={`group text-center scroll-animate stagger-${index + 1}`}>
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-700 group-hover:scale-105 hover-glow">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-sage-600 to-earth-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-800 group-hover:text-sage-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-r from-white via-rose-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 gradient-text">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our latest creations where nature's artistry meets sustainable fashion
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`scroll-animate stagger-${index + 1}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 scroll-animate">
            <button className="group relative bg-gradient-to-r from-earth-500 to-sage-500 hover:from-earth-600 hover:to-sage-600 text-white px-10 py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ripple magnetic">
              <span className="relative z-10">View All Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-earth-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-sage-600 via-earth-600 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 liquid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-sage-100 max-w-3xl mx-auto leading-relaxed">
              Real stories from people who love sustainable fashion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform transition-all duration-700 hover:scale-105 hover:bg-white/20 scroll-animate stagger-${index + 1} hover-glow`}>
                <div className="relative mb-6 inline-block">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white/30 group-hover:border-white/50 transition-all duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-rose-400 to-sage-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-white/90 mb-6 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <h4 className="text-white font-semibold text-lg group-hover:text-rose-200 transition-colors duration-300">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 via-white to-sage-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Happy Customers", icon: "👥" },
              { number: "500+", label: "Unique Designs", icon: "🎨" },
              { number: "100%", label: "Eco-Friendly", icon: "🌱" },
              { number: "5★", label: "Average Rating", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className={`text-center group scroll-animate stagger-${index + 1}`}>
                <div className="text-4xl mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 gradient-text">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-sage-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-sage-600 via-earth-600 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 liquid opacity-20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full floating"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full floating"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Stay Connected with Nature
            </h2>
            <p className="text-xl text-sage-100 mb-10 leading-relaxed">
              Subscribe to our newsletter for sustainable fashion tips and new collection updates
            </p>
            <div className="max-w-md mx-auto flex group">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-l-full focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 text-gray-800 bg-white/95 backdrop-blur-sm"
              />
              <button className="bg-gradient-to-r from-earth-500 to-rose-500 hover:from-earth-600 hover:to-rose-600 text-white px-8 py-4 rounded-r-full font-medium transition-all duration-300 transform hover:scale-105 ripple">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home