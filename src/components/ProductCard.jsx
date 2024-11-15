import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl">
      <img
        src={product.image}
        alt={product.title}
        className="w-50 h-50 object-cover transition-transform duration-200 ease-in-out hover:scale-110"
      />
      <div className="flex items-center justify-center p-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;


