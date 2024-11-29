import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import Tittle from '../Components/Tittle';
import ProductItems from '../Components/ProductItems';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext); // Assuming products have `category` and `subCategory` fields.
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  // Function to apply all filters
  const applyFilters = () => {
    let filtered = [...products];

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by subcategories
    if (selectedSubCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedSubCategories.includes(product.subCategory)
      );
    }

    // Filter by search query
    if (showSearch && search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(filtered);
  };

  // Effect to update filtered products on dependency changes
  useEffect(() => {
    applyFilters();
  }, [products, selectedCategories, selectedSubCategories, search, showSearch]);

  // Handle category checkbox change
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // Handle subcategory checkbox change
  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategory)
        ? prev.filter((item) => item !== subCategory)
        : [...prev, subCategory]
    );
  };

  // Handle sorting
  const handleSortChange = (value) => {
    const sortedProducts = [...filterProducts];
    if (value === 'low-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'high-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilterProducts(sortedProducts);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
        </p>
        <img
          className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          src={assets.dropdown_icon}
          alt=""
        />
        {/* Category Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 m-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Men', 'Women', 'Kids'].map((category) => (
              <p className="flex gap-2" key={category}>
                <input
                  className="w-3"
                  type="checkbox"
                  value={category}
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategories.includes(category)}
                />
                {category}
              </p>
            ))}
          </div>
        </div>
        {/* Sub-Category Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 m-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SUB-CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['TopWear', 'BottomWear', 'WinterWear'].map((subCategory) => (
              <p className="flex gap-2" key={subCategory}>
                <input
                  className="w-3"
                  type="checkbox"
                  value={subCategory}
                  onChange={() => handleSubCategoryChange(subCategory)}
                  checked={selectedSubCategories.includes(subCategory)}
                />
                {subCategory.replace(/([A-Z])/g, ' $1').trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Product List */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Tittle text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItems
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
