import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './assets/Components/Header.jsx';
import Dashboard from './assets/Pages/Dashboard.jsx';
import Profile from './assets/Pages/Profile.jsx';
import ProductList from './assets/Pages/ProductList.jsx';
import Navigation from './assets/Components/Navigation';
import Edit from './assets/Pages/Edit.jsx';
import Add from './assets/Pages/Add.jsx';


function App(){

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  //EXAMPLE OUTPUT FOR DISPLAYING PLEASE ERASE WHEN INTEGRATING LARAVEL
  const recentPurchases = [
    {
        image: 'https://via.placeholder.com/50', // Example image URL
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

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Navigation isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      <div className="mainContent"
      style={{
        marginLeft: isCollapsed ? '5%' : '10%',
        flexgrow: 1,
        transition: 'ease-in-out 0.5s'
      }} >
        <div className="scrollContainer">
        <Routes>
        <Route path="/" element={<Dashboard items={recentPurchases}/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/productlist" element={<ProductList items ={recentPurchases}/>} />
        <Route path="/edit/:barcode" element={<Edit />} />
        <Route path="/add" element={<Add />} />
      </Routes>
        </div>
      </div>
    </BrowserRouter>

    </>
      
      
      
  )
}
  

export default App;