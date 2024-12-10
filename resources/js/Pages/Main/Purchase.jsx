import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Layout from "../components/Layout";
import PurchaseTopBoard from "../components/PurchaseTopBoard";

import PurchaseWrapper from "../components/PurchaseWrapper";
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
                console.log(response.data.data);
                setOrders(response.data.data);
            });
    }, []);
    return (
        <>
            <Head title="Purchase"></Head>
            <Layout user={user}>
                <PurchaseTopBoard user={user} setOrders={setOrders} />
                {orders.map((order) => (
                    <PurchaseWrapper key={order.brand} order={order} />
                ))}
            </Layout>
        </>
    );
};

export default Purchase;
