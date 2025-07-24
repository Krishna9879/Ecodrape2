import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Eco Drape</h3>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">About Us</h4>
              <p className="text-sage-200 leading-relaxed">
                Eco Drape creates handcrafted, eco-printed textiles inspired by nature. 
                We use natural dyes and organic materials to celebrate slow, sustainable fashion. 
                Each piece tells a unique story, blending tradition, creativity, and ethical practices. 
                Our mission is to offer conscious, stylish alternatives that honor the earth.
              </p>
              <p className="text-sage-200 mt-3 font-medium">
                Join us in embracing a greener, more beautiful future.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sage-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/catalog" className="text-sage-200 hover:text-white transition-colors">Catalog</Link></li>
              <li><Link to="/new-arrivals" className="text-sage-200 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/about" className="text-sage-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sage-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Collections</h4>
            <ul className="space-y-2">
              <li><Link to="/womens-new-arrivals" className="text-sage-200 hover:text-white transition-colors">Women's</Link></li>
              <li><Link to="/mens-new-arrivals" className="text-sage-200 hover:text-white transition-colors">Men's</Link></li>
              <li><Link to="/blog" className="text-sage-200 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center">
          <p className="text-sage-200">
            © 2025 Eco Drape. All rights reserved. Crafted with love for sustainable fashion.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer