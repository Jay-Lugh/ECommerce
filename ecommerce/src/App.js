import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './Components/Header.js';
import Dashboard from './Pages/Dashboard.js';
import Profile from './Pages/Profile.js';
import ProductList from './Pages/ProductList.js';
import Navigation from './Components/Navigation';
import Edit from './Pages/Edit.js';
import Add from './Pages/Add.js';
import Login from './Pages/Login.js';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Example recent purchases data
  const recentPurchases = [
    {
      image: 'https://via.placeholder.com/50',
      name: 'Product 1',
      category: 'Electronics',
      description: 'Description for Product 1',
      qty: 2,
      price: 99.99,
      barcode: '1234567890123',
    },
    {
      image: 'https://via.placeholder.com/50',
      name: 'Product 2',
      category: 'Books',
      description: 'Description for Product 2',
      qty: 1,
      price: 14.99,
      barcode: '2345678901234',
    },
    {
      image: 'https://via.placeholder.com/50',
      name: 'Product 3',
      category: 'Clothing',
      description: 'Description for Product 3',
      qty: 5,
      price: 29.99,
      barcode: '3456789012345',
    },
  ];

  const location = useLocation(); 

  return (
    <>
    
      {location.pathname !== '/' && (
        <>
          <Header />
          <Navigation isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        </>
        
      )}

      <div
        className="mainContent"
        style={{
          marginLeft: isCollapsed ? '5%' : '10%',
          flexGrow: 1,
          transition: 'ease-in-out 0.5s'
        }}
      >
        <div className="scrollContainer">
          <Routes>
            <Route path="/dashboard" element={<Dashboard items={recentPurchases} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/productlist" element={<ProductList items={recentPurchases} />} />
            <Route path="/edit/:barcode" element={<Edit />} />
            <Route path="/add" element={<Add />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
