import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './Components/Header';
import Profile from './Pages/Profile';
import ProductList from './Pages/ProductList';
import Navigation from './Components/Navigation';
import Edit from './Pages/Edit';
import Add from './Pages/Add';
import Login from './Pages/Login';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Example recent purchases data

  const location = useLocation(); 

  return (
    <>
      {location.pathname !== '/' && (
        <>
          <Header />
          <Navigation isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <div
            className="mainContent"
            style={{
              marginLeft: isCollapsed ? '8%' : '11%',
              marginRight: isCollapsed ? '3%' : '1%',
              flexGrow: 1,
              transition: 'ease-in-out 0.5s'
            }}
          >
            <div className="scrollContainer">
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/add" element={<Add />} />
                <Route path="/" element={<Login />} />
              </Routes>
            </div>
          </div>
        </>
      )}
      
      {location.pathname === '/' && (
        <div className="loginContainer">
          <Login />
        </div>
      )}
    </>
  );
}

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
