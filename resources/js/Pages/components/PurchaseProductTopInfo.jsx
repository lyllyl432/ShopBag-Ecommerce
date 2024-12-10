import React from "react";

const PurchaseProductTopInfo = ({ data }) => {
    return (
        <div className="flex justify-between">
            <div>
                <h2 className="font-bold">{data.brand}</h2>
            </div>
            <div>
                <h2 className="font-bold">{data.items[0].status}</h2>
            </div>
        </div>
    );
};

export default PurchaseProductTopInfo;
