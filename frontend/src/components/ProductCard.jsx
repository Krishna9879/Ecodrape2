const ProductCard = ({ product }) => {
  return (
    <div className="group bg-gradient-to-br from-rose-50 to-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover-lift card-3d">
      <div className="card-3d-inner">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-gradient-to-r from-sage-600 to-earth-600 text-white px-3 py-1 rounded-full text-xs font-medium transform rotate-12 group-hover:rotate-0 transition-transform duration-300 shimmer">
            Eco-Friendly
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 to-sage-500/0 group-hover:from-rose-500/10 group-hover:to-sage-500/10 transition-all duration-500"></div>
        </div>
        <div className="p-6 relative">
          <h3 className="font-serif text-xl font-semibold mb-3 text-gray-800 group-hover:text-sage-700 transition-colors duration-300 text-reveal">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-sage-600 to-earth-600 bg-clip-text text-transparent">
              {product.price}
            </span>
            <button className="group/btn relative bg-gradient-to-r from-earth-500 to-sage-500 hover:from-earth-600 hover:to-sage-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 ripple overflow-hidden">
              <span className="relative z-10">View Details</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-earth-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-rose-200 to-sage-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-0"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-earth-200 to-rose-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-100 scale-0"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard