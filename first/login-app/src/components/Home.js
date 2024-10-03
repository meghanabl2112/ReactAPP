import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Hamburger icon
import Categories from "./Categories";
import ProductList from "./ProductList";
import '../App.css';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [ searchTerm,setSearchTerm] = useState('');

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggles the dropdown menu
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value); //updates search term on typing
    };

    return (
        <div className="home">
            <nav className="navbar">
                <button className="menu-btn" onClick={toggleDropdown}>
                    <FaBars size={24}/>   {/* Menu icon */}         
                </button>
                <div className="nav-links">
                    <Link to ="/clothes">Clothes</Link>
                    <Link to ="/electronics">Electronics</Link>
                    <Link to ="/sale">SALE</Link>
                </div>
                <div className="searchbar">
                    <input
                       type="text"
                       placeholder="Search Products..."
                       value={searchTerm}
                       onChange={handleSearch}
                       />
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li><Link to ="/profile">profile</Link></li>
                            <li><Link to ="/settings">settings</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
            <div className="auth-buttons">
                <Link to="/register">
                    <button className="home-button">Sign Up</button>
                </Link>
                <Link to="/login">
                    <button className="home-button">Login</button>
                </Link>
            </div>
            <Categories onSelectCategory={handleSelectCategory} />
            <ProductList selectedCategory={selectedCategory} searchTerm={searchTerm}/>
        </div>
    );
};

export default Home;
