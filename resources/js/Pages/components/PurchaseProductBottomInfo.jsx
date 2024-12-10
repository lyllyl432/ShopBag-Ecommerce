import React from "react";

const PurchaseProductBottomInfo = ({ data }) => {
    return (
        <div className="text-right">
            <p>
                Order Total: <span>{data.subTotal + data.shippingFee}</span>
            </p>
        </div>
    );
};

export default PurchaseProductBottomInfo;
