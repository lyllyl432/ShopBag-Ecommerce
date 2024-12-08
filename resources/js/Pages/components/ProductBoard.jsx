import React, { useState } from "react";
import ProductCart from "./ProductCart";

const ProductBoard = ({
    checkbox = false,
    cart = {},
    handleBrandSelect = () => {},
    isBrandChecked = () => {},
}) => {
    return (
        <>
            <div key={cart.id} className="p-4 bg-primary rounded-xl mt-4">
                <div className="border-b border-white pb-1">
                    {checkbox ? (
                        <input
                            type="checkbox"
                            className="size-6 mr-4 align-middle"
                            onChange={(e) => handleBrandSelect(e, cart.id)}
                            checked={isBrandChecked(cart.id)}
                        ></input>
                    ) : (
                        ""
                    )}
                    <span className="text-white font-semibold">
                        {cart.brandName}
                    </span>
                </div>
            </div>
        </>
    );
};

export default ProductBoard;
