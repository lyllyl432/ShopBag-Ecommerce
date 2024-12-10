import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Layout from "../components/Layout";
import PurchaseTopBoard from "../components/PurchaseTopBoard";
import PurchaseProductTopInfo from "../components/PurchaseProductTopInfo";
import PurchaseProductBottomInfo from "../components/PurchaseProductBottomInfo";
import PurchaseProduct from "../components/PurchaseProduct";
import axios from "axios";
import { API_KEY } from "../../constants";
const Purchase = ({ user }) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:80/api/v1/orderitems?status=all&user_id=1`, {
                headers: { Authorization: `Bearer ${API_KEY}` },
            })
            .then((response) => {
                setOrders(response.data.data);
            });
    }, []);
    return (
        <>
            <Head title="Purchase"></Head>
            <Layout user={user}>
                <PurchaseTopBoard user={user} setOrders={setOrders} />
                {orders.map((order) => (
                    <div
                        key={`top-${order.brand}`}
                        className="mt-4 bg-primary p-4 rounded-lg text-white"
                    >
                        <PurchaseProductTopInfo
                            key={`product-top-${order.brand}`}
                            data={order}
                        />
                        {order.items.map((item) => (
                            <PurchaseProduct key={item.id} data={item} />
                        ))}
                        <PurchaseProductBottomInfo
                            key={`bottom-${order.brand}`}
                            data={order}
                        />
                    </div>
                ))}
            </Layout>
        </>
    );
};

export default Purchase;
