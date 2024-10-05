import React from "react";

const ProductBoard = ({ checkbox = false }) => {
    return (
        <div className="p-4 bg-primary rounded-xl">
            <div className="border-b border-white pb-1">
                {checkbox ? (
                    <input
                        type="checkbox"
                        className="size-6 mr-4 align-middle"
                    ></input>
                ) : (
                    ""
                )}
                <span className="text-white font-semibold">NIKE</span>
            </div>
        </div>
    );
};

export default ProductBoard;
