import React from "react";

const PurchaseProductBottomInfo = ({ data }) => {
    return (
        <div className="text-right">
            <p>
                Order Total:{" "}
                <span>
                    {data.items[0].subTotal + data.items[0].order.shippingFee}
                </span>
            </p>
        </div>
    );
};

export default PurchaseProductBottomInfo;
