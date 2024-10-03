import React, { useState, useEffect} from "react";
import axios from 'axios';
import '../App.css';



const ProductList = ({ selectedCategory, searchTerm }) => {
const products = [
    {
        id: 1,
        name: "T-Shirt",
        description: "A comfortable cotton t-shirt.",
        price: 19.99,
        category: "clothes",
        imageUrl: "/images/t-shirt.jpg"
    },
    {
        id: 2,
        name: "Laptop",
        description: "A high-performance laptop.",
        price: 999.99,
        category: "electronics",
        imageUrl: "/images/laptop.jpg"
    }
];

const filteredProducts = products.filter(product => {
    return product.category === selectedCategory && 
    (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) :true);
});
    return(
        <div className="product-list">
            {filteredProducts.map(product => (
                <div key={product.id} className="product-item">
                     <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
