import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import PriceSortButton from "./PriceSortButton";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSort = (direction: "asc" | "desc") => {
    const sorted = [...sortedProducts].sort((a, b) => {
      if (direction === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedProducts(sorted);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSortedProducts(filtered);
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0'>
        <SearchBar onSearch={handleSearch} />
        <PriceSortButton onSort={handleSort} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {sortedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
