
// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import './App.css';

const API_ENDPOINT = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minprice=1&maxPrice=10000';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_ENDPOINT);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Sample data until we fetch from API
  const sampleProducts = [
    { id: 1, name: 'Sample Product 1', price: 100, rating: 4.5 },
    { id: 2, name: 'Sample Product 2', price: 150, rating: 4.2 },
    { id: 3, name: 'Sample Product 3', price: 120, rating: 4.8 },
    { id: 4, name: 'Sample Product 4', price: 200, rating: 4.6 },
    { id: 5, name: 'Sample Product 5', price: 180, rating: 4.3 },
    { id: 6, name: 'Sample Product 6', price: 170, rating: 4.7 },
    { id: 7, name: 'Sample Product 7', price: 130, rating: 4.9 },
    { id: 8, name: 'Sample Product 8', price: 160, rating: 4.4 },
    { id: 9, name: 'Sample Product 9', price: 140, rating: 4.1 },
    { id: 10, name: 'Sample Product 10', price: 190, rating: 4.0 },
  ];

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ProductList products={products.length ? products : sampleProducts} />
      )}
    </div>
  );
};

export default App;
