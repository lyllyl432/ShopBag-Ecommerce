import React from "react";

const Product = ({ product }) => {
    return (
        <div className="bg-primary p-4 rounded-xl transition-opacity duration-1000 text-white relative group before:absolute before:h-full before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-black before:opacity-0 before:rounded-xl hover:before:opacity-30 before:z-0">
            <div className="overflow-hidden">
                <img
                    className="group-hover:scale-105 transition-transform duration-1000 ease-out"
                    src="images/product.png"
                    alt=""
                />
            </div>
            <div className="z-10 relative">
                <h4 className="body-small font-semibold mt-8">
                    {product.productName}
                </h4>
                <p className="font-light">{product.categoryName}</p>
                <p className="font-semibold">{product.productPrice}</p>
            </div>
            <div className="absolute right-4 bottom-4 transition-opacity duration-1000 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Product;
