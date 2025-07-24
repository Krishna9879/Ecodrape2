import ScrollAnimations from '../components/ScrollAnimations'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sage-50 pt-20 overflow-hidden">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-sage-600 via-earth-600 to-rose-600 overflow-hidden">
        <div className="absolute inset-0 liquid opacity-20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full floating"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full floating"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-sage-100 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have questions about our sustainable practices, 
              need styling advice, or want to learn more about our eco-printing process, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="scroll-animate-left">
            <div className="bg-gradient-to-br from-white to-rose-50 rounded-3xl shadow-2xl p-8 hover-glow">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 gradient-text">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-sage-600 transition-colors duration-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all duration-300 hover:border-sage-400 hover:shadow-md"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-sage-600 transition-colors duration-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all duration-300 hover:border-sage-400 hover:shadow-md"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-sage-600 transition-colors duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all duration-300 hover:border-sage-400 hover:shadow-md"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-sage-600 transition-colors duration-300">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all duration-300 hover:border-sage-400 hover:shadow-md"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Information</option>
                    <option value="sustainability">Sustainability Questions</option>
                    <option value="custom">Custom Orders</option>
                    <option value="wholesale">Wholesale Opportunities</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-sage-600 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all duration-300 hover:border-sage-400 hover:shadow-md resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="group relative bg-gradient-to-r from-sage-600 to-earth-600 hover:from-sage-700 hover:to-earth-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ripple magnetic"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-sage-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="scroll-animate-right">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-sage-50 rounded-3xl shadow-xl p-8 hover-glow">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 gradient-text">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-sage-100 to-earth-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-sage-700 transition-colors duration-300">Email Us</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">hello@ecodrape.com</p>
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-earth-100 to-rose-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <svg className="w-6 h-6 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-earth-700 transition-colors duration-300">Call Us</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-rose-100 to-sage-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-rose-700 transition-colors duration-300">Visit Our Studio</h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">San Francisco, CA</p>
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gradient-to-br from-white to-earth-50 rounded-3xl shadow-xl p-8 hover-glow">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 gradient-text">
                  Frequently Asked
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors duration-300">How long does shipping take?</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">We ship within 3-5 business days, with delivery in 5-7 business days.</p>
                  </div>
                  <div className="group">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-earth-700 transition-colors duration-300">Do you offer custom orders?</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Yes! We love creating custom pieces. Contact us to discuss your vision.</p>
                  </div>
                  <div className="group">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors duration-300">What's your return policy?</h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">30-day returns for unworn items in original condition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center scroll-animate">
          <div className="bg-gradient-to-r from-sage-600 via-earth-600 to-rose-600 rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 liquid opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold text-white mb-6">
                Follow Our Journey
              </h3>
              <p className="text-sage-100 mb-8 max-w-2xl mx-auto">
                Stay connected with us on social media to see behind-the-scenes content, 
                new arrivals, and sustainable fashion inspiration.
              </p>
              <div className="flex justify-center space-x-6">
                <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl magnetic">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl magnetic">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z"/>
                  </svg>
                </button>
                <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl magnetic">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact