import React, { useState } from "react";
import Variation from "./Variation";
import Quantity from "./Quantity";
import { router } from "@inertiajs/react";
import Button from "./Button";
const ProductCart = ({
    type,
    product = {},
    handleProductSelect = () => {},
    isProductChecked = () => {},
    setSelectedProducts = () => {},
    setCart = () => {},
}) => {
    const [initialQuantity, setInitialQuantity] = useState(product.quantity);

    const handleDelete = () => {
        router.delete(route("cart.destroy", product.cartId));
    };
    return (
        <div className="flex items-center gap-4 bg-primary rounded-xl p-4 mt-4">
            {type === "cart" && (
                <input
                    type="checkbox"
                    className="lg:size-6"
                    onChange={handleProductSelect}
                    checked={isProductChecked(product.id)}
                />
            )}
            <img
                className="w-20 md:w-20"
                src="images/product.png"
                alt="Product Name"
            />
            <div className="flex-1 text-white md:flex">
                <div className="lg:flex lg:gap-8 lg:flex-initial md:block">
                    <div>
                        <h6>{product.productName}</h6>
                        <p>Recycled PET RIP Stop </p>
                    </div>
                    <Variation></Variation>
                </div>
                <div
                    className={`flex justify-between md:justify-end  items-center md:flex-1 md:gap-8 ${
                        type === "cart" ? " lg:gap-20" : "md:gap-8 lg:gap-32"
                    }`}
                >
                    {/* {console.log(initialQuantity)} */}
                    <p>₱{product.productPrice}</p>
                    {type === "cart" ? (
                        <Quantity
                            type="cart"
                            cartId={product.cartId}
                            productId={product.id}
                            initialQuantity={initialQuantity}
                            setInitialQuantity={setInitialQuantity}
                            setSelectedProducts={setSelectedProducts}
                            setCart={setCart}
                        ></Quantity>
                    ) : (
                        <p className="hidden md:block">{initialQuantity}</p>
                    )}

                    <p className="hidden md:block font-semibold text-background">
                        ₱{initialQuantity * product.productPrice}
                    </p>
                    {type === "cart" && (
                        <Button onClick={handleDelete}>Delete</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
