import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
//import CategoryPage from './components/CategoryPage'; // Importing the CategoryPage component
import './App.css';
import ProductList from './components/ProductList';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/clothes" element={<ProductList selectedCategory="clothes" />} />
                    <Route path="/electronics" element={<ProductList selectedCategory="electronics" />} />
                    <Route path="/sale" element={<ProductList selectedCategory="sale" />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
