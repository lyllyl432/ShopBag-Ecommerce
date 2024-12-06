import React from "react";
import Layout from "../components/Layout";
import { Head, Link } from "@inertiajs/react";
import AddressBoard from "../components/AddressBoard";
import ProductTopBoard from "../components/ProductTopBoard";
import ProductBoard from "../components/ProductBoard";
import ProductCart from "../components/ProductCart";
import Button from "../components/Button";
const Checkout = () => {
    return (
        <>
            <Head title="Checkout"></Head>
            <Layout>
                <AddressBoard></AddressBoard>
                <div className="mt-4">
                    <ProductTopBoard title="Products Ordered"></ProductTopBoard>
                </div>
                <div className="mt-4">
                    {/* <ProductBoard></ProductBoard> */}
                </div>
                <div className="mt-4">
                    {/* <ProductCart type="checkout"></ProductCart> */}
                </div>
                <div className="mt-8">
                    <div className="flex justify-between">
                        <h3 className="font-semibold lg:text-display-3">
                            Payment Method
                        </h3>
                        <div>
                            <div className="flex gap-2">
                                <p>Cash On Delivery </p>
                                <Link
                                    href="#"
                                    className="underline lg:font-semibold"
                                >
                                    Change
                                </Link>
                            </div>
                            <p className="mt-4">
                                Shipping Total:{" "}
                                <span className="font-semibold lg:text-display-6">
                                    ₱120
                                </span>
                            </p>
                            <p className="font-semibold mt-4">
                                Total Payment:{" "}
                                <span className="lg:text-display-4">₱1000</span>
                            </p>
                            <Button className="w-full px-4 py-2 bg-accent text-white rounded-xl mt-4 mb-4">
                                Place Order
                            </Button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Checkout;
