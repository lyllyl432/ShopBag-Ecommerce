import React from "react";
import Variation from "./Variation";
import Quantity from "./Quantity";
import { Link } from "@inertiajs/react";
const ProductCart = ({ type }) => {
    return (
        <div className="flex items-center gap-4 bg-primary rounded-xl p-4 mt-4">
            {type === "cart" && <input type="checkbox" className="lg:size-6" />}
            <img
                className="w-20 md:w-20"
                src="images/product.png"
                alt="Product Name"
            />
            <div className="flex-1 text-white md:flex">
                <div className="lg:flex lg:gap-8 lg:flex-initial md:block">
                    <div>
                        <h6>SHIBUYA TOTEPACK</h6>
                        <p>Recycled PET RIP Stop </p>
                    </div>
                    <Variation></Variation>
                </div>
                <div
                    className={`flex justify-between md:justify-end  items-center md:flex-1 md:gap-8 ${
                        type === "cart" ? " lg:gap-20" : "md:gap-8 lg:gap-32"
                    }`}
                >
                    <p>₱1000</p>
                    {type === "cart" ? (
                        <Quantity></Quantity>
                    ) : (
                        <p className="hidden md:block">1</p>
                    )}

                    <p className="hidden md:block font-semibold text-background">
                        ₱1000
                    </p>
                    {type === "cart" && (
                        <Link className="hidden md:inline-block" href="#">
                            Delete
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
