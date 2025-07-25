import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNewArrivalsOpen, setIsNewArrivalsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    window.scrollTo(0, 0)
    setIsMenuOpen(false) // Close mobile menu when navigating
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={handleNavigation}>
            <span className="text-2xl font-serif font-bold text-sage-600">Eco Drape</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/') ? 'text-sage-600 border-b-2 border-sage-600' : 'text-gray-700 hover:text-sage-600'
              }`}
              onClick={handleNavigation}
            >
              Home
            </Link>
            <Link 
              to="/catalog" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/catalog') ? 'text-sage-600 border-b-2 border-sage-600' : 'text-gray-700 hover:text-sage-600'
              }`}
              onClick={handleNavigation}
            >
              Catalog
            </Link>
            
            {/* New Arrivals Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsNewArrivalsOpen(true)}
              onMouseLeave={() => setIsNewArrivalsOpen(false)}
            >
              <Link 
                to="/new-arrivals" 
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${
                  location.pathname.startsWith('/new-arrivals') ? 'text-sage-600 border-b-2 border-sage-600' : 'text-gray-700 hover:text-sage-600'
                }`}
                onClick={handleNavigation}
              >
                New Arrivals
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {isNewArrivalsOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 animate-fade-in">
                  <Link 
                    to="/mens-new-arrivals" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-sage-50 hover:text-sage-600 transition-colors"
                    onClick={handleNavigation}
                  >
                    Men's Collection
                  </Link>
                  <Link 
                    to="/womens-new-arrivals" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-sage-50 hover:text-sage-600 transition-colors"
                    onClick={handleNavigation}
                  >
                    Women's Collection
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-sage-600 border-b-2 border-sage-600' : 'text-gray-700 hover:text-sage-600'
              }`}
              onClick={handleNavigation}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-sage-600 border-b-2 border-sage-600' : 'text-gray-700 hover:text-sage-600'
              }`}
              onClick={handleNavigation}
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-sage-600 border-b-2 border-sage-600' : 'text-gray-700 hover:text-sage-600'
              }`}
              onClick={handleNavigation}
            >
              Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-sage-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sage-600"
                onClick={handleNavigation}
              >
                Home
              </Link>
              <Link 
                to="/catalog" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sage-600"
                onClick={handleNavigation}
              >
                Catalog
              </Link>
              <Link 
                to="/new-arrivals" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sage-600"
                onClick={handleNavigation}
              >
                New Arrivals
              </Link>
              <Link 
                to="/mens-new-arrivals" 
                className="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-sage-600"
                onClick={handleNavigation}
              >
                Men's
              </Link>
              <Link 
                to="/womens-new-arrivals" 
                className="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-sage-600"
                onClick={handleNavigation}
              >
                Women's
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sage-600"
                onClick={handleNavigation}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sage-600"
                onClick={handleNavigation}
              >
                Contact
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sage-600"
                onClick={handleNavigation}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar