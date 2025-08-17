import React from 'react';
import CategorySlider from '../components/CategorySlider';
import ScrollAnimations from '../components/ScrollAnimations';

const Catalog = () => {
  // Hero slider images
  const sliderImages = [
    "/assets/hero_img1.png",
    "/assets/hero_img17.jpg",
    "/assets/hero_img2.png",
    "/assets/hero_img9.png",
    "/assets/hero_img14.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sage-50 pt-16 overflow-hidden">
      <ScrollAnimations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Slider - Reduced top spacing */}
        <div className="mt-4 scroll-animate">
          <CategorySlider 
            title="Our Collection is Coming Soon"
            subtitle="Discover sustainable fashion crafted with nature's touch"
            images={sliderImages}
          />
        </div>

        {/* Main Content */}
        <div className="py-12 md:py-16 text-center">
          {/* Coming Soon Message */}
          <div className="mb-12 scroll-animate">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Catalog is Blooming Soon
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're carefully cultivating our sustainable collection. Be the first to know when we launch!
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto scroll-animate">
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage-100">
              <div className="text-sage-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Preview</h3>
              <p className="text-gray-600">
                Sign up for early access to our sustainable collection before official launch
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage-100">
              <div className="text-sage-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Handcrafted with Care</h3>
              <p className="text-gray-600">
                Each piece is eco-printed using sustainable materials and natural dyes
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage-100">
              <div className="text-sage-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nature-Inspired</h3>
              <p className="text-gray-600">
                Botanical prints and organic patterns that celebrate Earth's beauty
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 max-w-xl mx-auto scroll-animate">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-6">
              Join Our Waitlist
            </h2>
            <p className="text-gray-600 mb-8">
              Get notified when our sustainable collection launches and receive exclusive early-bird offers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white rounded-lg transition duration-300 font-medium">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog;