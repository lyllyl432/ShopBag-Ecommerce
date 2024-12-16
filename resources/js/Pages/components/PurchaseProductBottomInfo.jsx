import React from "react";

const PurchaseProductBottomInfo = ({ item }) => {
    return (
        <div className="text-right">
            <p>
                Order Total: <span>{item.total_amount}</span>
            </p>
        </div>
    );
};

export default PurchaseProductBottomInfo;
