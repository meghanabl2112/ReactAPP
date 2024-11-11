import React, { useState, useEffect} from "react";
import axios from 'axios';
import '../App.css';



const ProductList = ({ selectedCategory, searchTerm }) => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [modalImageUrl, setModalImageUrl] = useState("");
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
        id: 3,
        name: "Frock",
        description: "wedding frock" , 
        price: 25.49,
        category: "clothes",
        imageUrl: "/images/wfrock.jpg"
    },
    {
        id: 4,
        name: "gown",
        description: "white frock" , 
        price: 100.49,
        discountPrice: 50.99,
        category: "clothes",
        imageUrl: "/images/mfrock.jpg"
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
    const isInSelectedCategory = 
     product.category === selectedCategory || 
     (selectedCategory === "sale" && product.discountPrice);
     const matchesSearchTerm = searchTerm 
     ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
     : true;

 return isInSelectedCategory && matchesSearchTerm;
});

const openModal  = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
};

const closeModal = () =>{
    setIsModalOpen(false);
    setModalImageUrl("");
}
    return(
        <div className="product-list">
            {filteredProducts.map(product => {
                const discountPercentage = product.discountPrice
                ? ((product.price - product.discountPrice) / product.price)*100
                : 0;
                return(
                <div key={product.id} className="product-item">
                     <img src={product.imageUrl} alt={product.name} className="product-image" 
                     onClick={() => openModal(product.imageUrl)} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    {product.discountPrice ? (
                        <>
                    
                        <span className="original-price">{" Reg.Price:$" + product.price.toFixed(2)}</span>
                        <span className="discount-percentage"> ({discountPercentage.toFixed(0)}% off)</span>
                        <p className="discount-price">{"Price: $ " + product.discountPrice.toFixed(2)}</p>
                    
                    </>
                ) : (
                    <p>{"Price: $ " + product.price.toFixed(2)}</p>
                )}
                </div>
                );
})}

{isModalOpen && (
    <div className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImageUrl} alt="Enlarged" className="modal-image"/>
        </div>
        </div>
)}
        </div>
    );
};

export default ProductList;
