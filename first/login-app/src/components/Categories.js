import React from 'react';
import axios from 'axios';
import '../App.css';

const Categories = ({ onSelectCategory}) => {
    const categories = [];
 
    return (
        <div>
                {categories.map(category => (
                    <button key={category} onClick={() => onSelectCategory(category)}>
                        {category}
                    </button>
                ))}
            
        </div>
    );
};

export default Categories;