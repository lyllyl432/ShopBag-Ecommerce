import React, { useState } from "react";
import PurchaseProductTopInfo from "../components/PurchaseProductTopInfo";
import PurchaseProductBottomInfo from "../components/PurchaseProductBottomInfo";
import PurchaseProduct from "../components/PurchaseProduct";
const PurchaseWrapper = ({ grouped_orders }) => {
    const [status, setStatus] = useState("");
    return (
        <>
            <div
                key={`top-${grouped_orders.brand_name}`}
                className="mt-4 bg-primary p-4 rounded-lg text-white"
            >
                <PurchaseProductTopInfo
                    key={`product-top-${grouped_orders.brand_name}`}
                    data={grouped_orders}
                    status={status}
                />
                {grouped_orders.order_items.map((item) => (
                    <div key={item.order_id}>
                        <PurchaseProduct item={item} setStatus={setStatus} />
                        <PurchaseProductBottomInfo item={item} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PurchaseWrapper;
