import React, { useState } from "react";
import PurchaseProductTopInfo from "../components/PurchaseProductTopInfo";
import PurchaseProductBottomInfo from "../components/PurchaseProductBottomInfo";
import PurchaseProduct from "../components/PurchaseProduct";
const PurchaseWrapper = ({ order }) => {
    const [status, setStatus] = useState("");
    return (
        <>
            <div
                key={`top-${order.brand}`}
                className="mt-4 bg-primary p-4 rounded-lg text-white"
            >
                <PurchaseProductTopInfo
                    key={`product-top-${order.brand}`}
                    data={order}
                    status={status}
                />
                {order.items.map((item) => (
                    <div key={item.id}>
                        <PurchaseProduct data={item} setStatus={setStatus} />
                        <PurchaseProductBottomInfo data={item} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PurchaseWrapper;
