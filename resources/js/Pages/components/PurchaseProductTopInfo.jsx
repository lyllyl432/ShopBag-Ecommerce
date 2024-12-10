import React from "react";

const PurchaseProductTopInfo = ({ data, status }) => {
    const getStatusText = (status) => {
        if (status === "to_ship") return "To Ship";
        if (status === "pending") return "Pending";
        if (status === "to_receive") return "To Receive";
        if (status === "completed") return "Completed";
        if (status === "refunded") return "Refunded";
        return "Unknown Status";
    };
    return (
        <div className="flex justify-between">
            <div>
                <h2 className="font-bold">{data.brand}</h2>
            </div>
            <div>
                <h2 className="font-bold">{getStatusText(status)}</h2>
            </div>
        </div>
    );
};

export default PurchaseProductTopInfo;
