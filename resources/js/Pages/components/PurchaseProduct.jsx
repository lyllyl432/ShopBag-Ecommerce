import React, { useEffect } from "react";

const PurchaseProduct = ({ item, setStatus }) => {
    useEffect(() => {
        setStatus(item.status);
    }, [item]);
    return (
        <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4 items-center">
                <div>
                    <img className="w-20" src="images/product.png" alt="" />
                </div>
                <div>
                    <h2>{item.product_name}</h2>
                    <p>{`x${item.quantity}`}</p>
                </div>
            </div>
            <div>
                <p>{item.price * item.quantity}</p>
            </div>
        </div>
    );
};

export default PurchaseProduct;
