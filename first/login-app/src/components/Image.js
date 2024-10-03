
import React from "react";

const Image = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className="product-image" />
    );
};

export default Image;
