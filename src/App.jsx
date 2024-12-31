// src/App.jsx
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import Footer from './components/Footer';
import { products } from './data/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

function App() {
  // Define state variables
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-shrink-0">
        <Container>
          <h1 className="mb-4">Product Catalog</h1>
          
          <div className="mb-4">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <ProductList products={filteredProducts} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;