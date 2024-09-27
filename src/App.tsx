import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  return (
    <Router basename='/product-catalog'>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route
          path='/'
          element={<ProductList searchTerm={searchTerm} />}
        />
        <Route
          path='/product/:id'
          element={<ProductDetails />}
        />
      </Routes>
    </Router>
  );
};

export default App;
