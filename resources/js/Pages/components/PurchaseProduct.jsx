import React, { useEffect } from "react";

const PurchaseProduct = ({ data, setStatus }) => {
    useEffect(() => {
        setStatus(data.status);
    }, [data.status]);
    return (
        <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4 items-center">
                <div>
                    <img className="w-20" src="images/product.png" alt="" />
                </div>
                <div>
                    <h2>{data.product.productName}</h2>
                    <p>{`x${data.quantity}`}</p>
                </div>
            </div>
            <div>
                <p>{data.price * data.quantity}</p>
            </div>
        </div>
    );
};

export default PurchaseProduct;
