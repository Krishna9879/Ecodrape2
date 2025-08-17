import { useState, useRef } from 'react';
import HeroSlider from '../components/HeroSlider';
import ScrollAnimations from '../components/ScrollAnimations';

const Home = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const testimonialsRef = useRef(null);

  const featuredProducts = [
    {
      id: 1,
      name: "Blazer Set",
      price: "₹7,599",
      image: "/assets/img15_1.jpg",
      description: "Flowing maxi with hand-printed leaves"
    },
    {
      id: 2,
      name: "Organic Printed Saree",
      price: "₹4,699",
      image: "/assets/img11_1.jpeg",
      description: "Luxurious scarf with eco-prints"
    },
    {
      id: 3,
      name: "Shirt Short",
      price: "₹5,799",
      image: "/assets/img26_1.jpg",
      description: "Elegant blouse with botanical designs"
    },
    {
      id: 4,
      name: "Natural Silk Saree",
      price: "₹6,299",
      image: "/assets/img9_1.jpg",
      description: "Comfortable tunic with leaf motifs"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The quality and beauty of Eco Drape's pieces are unmatched. Each garment tells a story.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      text: "Finally, sustainable fashion that doesn't compromise on style. Absolutely love my collection!",
      rating: 5
    },
    {
      name: "Anjali Desai",
      text: "The eco-printing process creates such unique patterns. I get compliments every time I wear them.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      text: "Incredible craftsmanship! The botanical prints are so detailed and the fabric feels amazing.",
      rating: 5
    },
    {
      name: "Meera Kapoor",
      text: "As someone who cares about the environment, I love that these clothes are truly sustainable.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      text: "The colors are so vibrant and natural. Each piece is like wearing a piece of art.",
      rating: 5
    },
    {
      name: "Kavya Reddy",
      text: "Perfect fit and comfort. The organic materials make all the difference.",
      rating: 5
    },
    {
      name: "Aditya Malhotra",
      text: "I've never seen such unique designs. Every piece is conversation starter!",
      rating: 5
    },
    {
      name: "Zara Khan",
      text: "The attention to detail is remarkable. You can tell each piece is made with love.",
      rating: 5
    },
    {
      name: "Rohan Gupta",
      text: "Sustainable fashion that actually looks good! Finally found my perfect brand.",
      rating: 5
    },
    {
      name: "Ishita Joshi",
      text: "The eco-printing technique is fascinating. Love supporting innovative sustainable practices.",
      rating: 5
    },
    {
      name: "Aarav Mehta",
      text: "These clothes make me feel connected to nature. Beautiful and meaningful fashion.",
      rating: 5
    }
  ];

  // Mouse and touch event handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - testimonialsRef.current.offsetLeft);
    setScrollLeft(testimonialsRef.current.scrollLeft);
    testimonialsRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    testimonialsRef.current.style.animationPlayState = 'running';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    testimonialsRef.current.style.animationPlayState = 'running';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - testimonialsRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - testimonialsRef.current.offsetLeft);
    setScrollLeft(testimonialsRef.current.scrollLeft);
    testimonialsRef.current.style.animationPlayState = 'paused';
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    testimonialsRef.current.style.animationPlayState = 'running';
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - testimonialsRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialsRef.current.scrollLeft = scrollLeft - walk;
  };

  // Uniform Product Card Component
  const UniformProductCard = ({ product }) => {
    return (
      <div className="flex flex-col">
        <div className="relative overflow-hidden h-96">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
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
    );
  };

  return (
    <div className="overflow-hidden min-h-screen bg-white">
      <ScrollAnimations />

      {/* Hero Slider */}
      <div className="relative">
        <HeroSlider />
      </div>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
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
                  src="/assets/aboutimg1.jpg"
                  alt="Eco printing process"
                  className="rounded-2xl shadow-2xl w-full h-96 object-contain bg-gray-100 transform transition-all duration-700 group-hover:scale-102 hover-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-300 to-sage-300 rounded-full floating opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-earth-300 to-rose-300 rounded-full floating opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Eco Drape Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-gray-900 mb-6">
              Why Choose Eco Drape
            </h2>
            <p className="text-xl font-serif text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the fusion of sustainable innovation and timeless elegance in every garment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative group scroll-animate stagger-1 bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sage-600 to-earth-600 rounded-t-2xl"></div>
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-sage-600 to-gold-500 w-16 h-16 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-sage-600 transition-colors duration-300">Artisanal Excellence</h3>
              <p className="text-gray-600 font-serif leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Every piece is meticulously handcrafted by skilled artisans, ensuring unparalleled quality and attention to detail.
              </p>
            </div>

            <div className="relative group scroll-animate stagger-2 bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-earth-600 to-sage-600 rounded-t-2xl"></div>
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-earth-600 to-sage-600 w-16 h-16 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-earth-600 transition-colors duration-300">Inspired by Nature</h3>
              <p className="text-gray-600 font-serif leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Our designs draw inspiration from nature’s beauty, using organic materials and eco-friendly dyes to create timeless elegance.
              </p>
            </div>

            <div className="relative group scroll-animate stagger-3 bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-600 to-sage-600 rounded-t-2xl"></div>
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-rose-600 to-sage-600 w-16 h-16 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors duration-300">Eco-Conscious Innovation</h3>
              <p className="text-gray-600 font-serif leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Sustainable practices and innovative eco-printing techniques ensure our fashion respects the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
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
      <section className="py-20 bg-white relative">
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
                <UniformProductCard product={product} />
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
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from people who love sustainable fashion
            </p>
          </div>

          <div className="relative overflow-hidden testimonials-container">
            <div
              ref={testimonialsRef}
              className="flex animate-scroll-testimonials select-none"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-80 md:w-96 mx-4 group bg-gray-100 rounded-2xl p-6 text-center transform transition-all duration-700 hover:scale-105 hover:bg-gray-200 hover-glow">
                  <div className="mb-4">
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-sage-400 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-sm">
                    "{testimonial.text}"
                  </p>
                  <h4 className="text-gray-800 font-semibold text-base group-hover:text-sage-700 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 md:w-96 mx-4 group bg-gray-100 rounded-2xl p-6 text-center transform transition-all duration-700 hover:scale-105 hover:bg-gray-200 hover-glow">
                  <div className="mb-4">
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-sage-400 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-sm">
                    "{testimonial.text}"
                  </p>
                  <h4 className="text-gray-800 font-semibold text-base group-hover:text-sage-700 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
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
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Stay Connected with Nature
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Subscribe to our newsletter for sustainable fashion tips and new collection updates
            </p>
            <div className="max-w-md mx-auto flex group">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-l-full focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 text-gray-800 bg-gray-100"
              />
              <button className="bg-gradient-to-r from-earth-500 to-rose-500 hover:from-earth-600 hover:to-rose-600 text-white px-8 py-4 rounded-r-full font-medium transition-all duration-300 transform hover:scale-105 ripple">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;