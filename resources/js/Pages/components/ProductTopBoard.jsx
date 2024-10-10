import React from "react";

const ProductTopBoard = ({ checkbox = false, title }) => {
    return (
        <>
            <div className="lg:flex justify-between items-center p-4 bg-primary rounded-xl text-white hidden">
                <div className="flex items-center gap-4">
                    {checkbox && (
                        <input
                            className="size-6"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    )}
                    <p>{title}</p>
                </div>
                <ul className="flex gap-20">
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total Price</li>
                    {checkbox && <li>Action</li>}
                </ul>
            </div>
        </>
    );
};

export default ProductTopBoard;
