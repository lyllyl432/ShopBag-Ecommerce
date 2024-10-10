import React from "react";
import Layout from "../components/Layout";
import { Head } from "@inertiajs/react";
import ProductBoard from "../components/ProductBoard";
import ProductCart from "../components/ProductCart";
import Button from "../components/Button";
import ProductTopBoard from "../components/ProductTopBoard";
const Cart = () => {
    return (
        <>
            <Head title="Cart"></Head>
            <Layout>
                <h1 className="mb-4 text-display-4 font-semibold">
                    ADD TO CARTS
                </h1>
                <div className="mb-6">
                    <ProductTopBoard
                        checkbox={true}
                        title="Products"
                    ></ProductTopBoard>
                </div>
                <div className="mb-20">
                    <ProductBoard checkbox={true}></ProductBoard>
                    <ProductCart type={"cart"}></ProductCart>
                    <ProductCart type={"cart"}></ProductCart>
                    <ProductCart type={"cart"}></ProductCart>
                    <ProductCart type={"cart"}></ProductCart>

                    <div className="fixed bottom-0 right-4 flex gap-4 items-center text-color-text px-4 bg-secondary p-4 rounded-l-xl rounded-bl-xl md:right-0">
                        <p className="whitespace-nowrap">
                            Total (0 Item): <span>₱ 0</span>
                        </p>
                        <Button className="w-full px-4 py-2 bg-accent text-white rounded-xl">
                            CHECK OUT
                        </Button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Cart;
