
import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter((product) => {
    if (filter === 'available') return product.inStock;
    if (filter === 'unavailable') return !product.inStock;
    return true;
  });

  const handleRemove = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setFilter('all')}>All Products</button>
      <button onClick={() => setFilter('available')}>In Stock</button>
      <button onClick={() => setFilter('unavailable')}>Out of Stock</button>

      <ProductList
        products={filteredProducts}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default App;
