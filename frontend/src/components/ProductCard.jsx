// ProductCard.jsx - Example of how to modify your product cards
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-light text-neutral-800 mb-2 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-light text-emerald-600">
            {product.price}
          </span>
          <button 
            className="text-emerald-600 hover:text-emerald-700 transition-colors flex items-center space-x-1"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click when clicking button
              handleCardClick();
            }}
          >
            <span className="text-sm">View Details</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;