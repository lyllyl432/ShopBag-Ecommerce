import React from "react";
import Layout from "../components/Layout";
import { Head } from "@inertiajs/react";
const Address = ({ user }) => {
    return (
        <Layout user={user}>
            <Head title="Address" />
        </Layout>
    );
};

export default Address;
