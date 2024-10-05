import React from "react";
import Variation from "./Variation";
import Quantity from "./Quantity";
const ProductCart = () => {
    return (
        <div className="flex items-center gap-4 bg-primary rounded-xl p-4 mt-4">
            <input type="checkbox" />
            <img className="w-20" src="images/product.png" alt="Product Name" />
            <div className="flex-1 text-white">
                <h6>SHIBUYA TOTEPACK</h6>
                <p>Recycled PET RIP Stop </p>
                <Variation></Variation>
                <div className="flex justify-between">
                    <p>₱1000</p>
                    <Quantity></Quantity>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
