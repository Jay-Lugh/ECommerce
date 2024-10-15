import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './assets/Components/Header.jsx';
import Dashboard from './assets/Pages/Dashboard.jsx';
import Profile from './assets/Pages/Profile.jsx';
import ProductList from './assets/Pages/ProductList.jsx';
import Navigation from './assets/Components/Navigation';


function App(){

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Navigation isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      <div className="mainContent"
      style={{
        marginLeft: isCollapsed ? '4%' : '10%',
        flexgrow: 1,
        transition: 'ease-in-out 0.5s'
      }} >
        <div className="scrollContainer">
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/productlist" element={<ProductList/>} />
      </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
      
      
      
  )
}
  

export default App;