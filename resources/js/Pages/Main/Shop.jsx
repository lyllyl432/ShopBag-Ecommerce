import React from "react";
import Layout from "../components/Layout";
import { Head } from "@inertiajs/react";
import Selector from "../components/Selector";
import Product from "../components/Product";

const Shop = () => {
    return (
        <>
            <Head title="Shopping"></Head>
            <Layout>
                <h1 className="text-display-3 font-semibold">GET INSPIRED</h1>
                <p className="max-w-screen-sm xl:block hidden mt-4">
                    Browsing for your next long - haul trip, everyday journey,
                    or just fancy a look at whats new? From community favourites
                    to about-to-sell-out items, see them all here.{" "}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4 md:flex xl:relative">
                    <Selector
                        selections={[
                            "ALL CATEGORIES",
                            "NIKE",
                            "ADIDAS",
                            "JOURNEY",
                        ]}
                        title="CATEGORY"
                        className="bg-white px-4 py-2 relative rounded-lg flex-1 xl:flex-initial xl:basis-52 cursor-pointer"
                    ></Selector>
                    <Selector
                        selections={[
                            "ALL CATEGORIES",
                            "NIKE",
                            "ADIDAS",
                            "JOURNEY",
                        ]}
                        title="Brand"
                        className="bg-white px-4 py-2 relative rounded-lg flex-1 xl:flex-initial xl:basis-52 cursor-pointer"
                    ></Selector>
                    <Selector
                        selections={[
                            "FROM - 0 - 1000 PESOS",
                            "NIKE",
                            "ADIDAS",
                            "JOURNEY",
                        ]}
                        title="Price"
                        className="bg-white px-4 py-2 relative rounded-lg flex-1 xl:flex-initial xl:basis-56 cursor-pointer"
                    ></Selector>
                    <Selector
                        selections={["NEW IN", "NIKE", "ADIDAS", "JOURNEY"]}
                        title="Sort"
                        className="bg-white px-4 py-2 relative rounded-lg flex-1 self-start xl:flex-initial xl:w-52 xl:absolute xl:right-4 md:self-stretch cursor-pointer"
                    ></Selector>
                </div>
                <div className="mt-8 grid gap-y-2 md:grid-cols-2 md:gap-x-2 xl:grid-cols-4">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </Layout>
        </>
    );
};

export default Shop;
