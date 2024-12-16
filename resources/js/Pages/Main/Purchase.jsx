import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Layout from "../components/Layout";
import PurchaseTopBoard from "../components/PurchaseTopBoard";
import DeliveryAddress from "../components/DeliveryAddress";
import PurchaseWrapper from "../components/PurchaseWrapper";
import axios from "axios";
import { API_KEY } from "../../constants";
const Purchase = ({ user, address }) => {
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
                <DeliveryAddress address={address[0]} />
                {orders.map((data) => (
                    <PurchaseWrapper
                        key={data.grouped_orders.brand_name}
                        grouped_orders={data.grouped_orders}
                    />
                ))}
            </Layout>
        </>
    );
};

export default Purchase;
