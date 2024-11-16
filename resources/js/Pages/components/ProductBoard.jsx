import React from "react";

const ProductBoard = ({ checkbox = false, cart }) => {
    return (
        <div className="p-4 bg-primary rounded-xl mt-4">
            <div className="border-b border-white pb-1">
                {checkbox ? (
                    <input
                        type="checkbox"
                        className="size-6 mr-4 align-middle"
                    ></input>
                ) : (
                    ""
                )}
                <span className="text-white font-semibold">
                    {cart.brandName}
                </span>
            </div>
        </div>
    );
};

export default ProductBoard;
