import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { productsData } from '../data.js'; 
import { ClipLoader } from 'react-spinners';
import { FaFilter, FaRedo, FaArrowLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const AllProducts = () => {
  const { t, i18n } = useTranslation(); // Translation hook
  const itemsPerPage = 9;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const navigate = useNavigate();
  console.log(i18n.language);
  
  // Filter products based on search term and sort option
  const filteredProductsData = productsData.filter((product) => 
    (!sortOption || product.type === sortOption) &&
    (!searchTerm || product.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Calculate total pages for the filtered data
  const totalPages = Math.ceil(filteredProductsData.length / itemsPerPage);

  const loadProducts = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the filtered data to load only the current page's products
    const paginatedProducts = filteredProductsData.slice(startIndex, endIndex);
    
    // Append new products or reset products based on the current page
    setProducts((prevProducts) => 
      page === 1 ? paginatedProducts : [...prevProducts, ...paginatedProducts]
    );
  };

  useEffect(() => {
    setLoading(true);
    loadProducts(currentPage); 
    setLoading(false);
  }, [currentPage, searchTerm, sortOption]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 700 &&
      currentPage < totalPages &&
      !loading
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, currentPage]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  const handleSortClick = (sortType) => {
    setSortOption(sortType);
    setCurrentPage(1); 
    setShowSortMenu(false);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSortOption(null);
    setCurrentPage(1); 
  };

  const handleBack = ()=> {
    navigate('/');
  }

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('updatebg.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto p-4 sm:p-6 bg-opacity-90 text-gray-800">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-green mb-6 transition-all duration-500 text-newAnimating">
          {t('Our Sourced Products')}
        </h1>

        <div className="absolute top-4 left-4 flex items-center space-x-3">
          <FaArrowLeft
            className="text-green-500 hover:text-green-800 cursor-pointer text-3xl"
            onClick={handleBack} // Redirect to home page on click
          />
        </div>

        {/* Search, Sort, and Reset Section */}
        <div className="top-0 left-0 w-full bg-opacity-90 p-4 sm:p-6 flex justify-center z-30 shadow-md">
          <div className="relative w-full sm:w-1/2 lg:max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder={t('Search by product title...')}
              className="w-full p-2 pr-20 border border-green-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
            />

            {/* Filter and Reset Icons inside the search bar */}
            <div className="absolute inset-y-0 right-2 flex items-center space-x-3">
              {/* Filter Icon with Tooltip */}
              <div className="relative group">
                <FaFilter
                  className="text-gray-600 hover:text-green-600 cursor-pointer text-lg"
                  onClick={() => setShowSortMenu((prev) => !prev)}
                />
                <div className="absolute bottom-8 right-0 invisible group-hover:visible text-md bg-black text-white p-1 rounded-lg">
                  {t('Sort')}
                </div>
              </div>

              {/* Refresh Icon with Tooltip */}
              <div className="relative group">
                <FaRedo
                  className="text-gray-600 hover:text-green-600 cursor-pointer text-lg"
                  onClick={handleReset}
                />
                <div className="absolute bottom-8 right-0 invisible group-hover:visible text-md bg-black text-white p-1 rounded-lg">
                  {t('Reset')}
                </div>
              </div>
            </div>

            {/* Sort Menu */}
            {showSortMenu && (
              <div
                className="absolute top-14 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48 py-2 z-40"
              >
                <button
                  onClick={() => handleSortClick('rice')}
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 w-full text-left text-sm"
                >
                  {t('Sort by Rice')}
                </button>
                <button
                  onClick={() => handleSortClick('pulses')}
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 w-full text-left text-sm"
                >
                  {t('Sort by Pulse')}
                </button>
                <button
                  onClick={() => handleSortClick('millets')}
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 w-full text-left text-sm"
                >
                  {t('Sort by Millets')}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="pt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {loading && (
          <div className="flex justify-center mt-6">
            <ClipLoader color="#48bb78" loading={loading} size={40} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
