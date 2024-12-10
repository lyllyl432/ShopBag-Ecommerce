import React, { useState } from "react";
import Layout from "../components/Layout";
import { Head } from "@inertiajs/react";
import ProductList from "../components/axiosComponents/ProductList";
import BrandList from "../components/axiosComponents/BrandList";
import CategoryList from "../components/axiosComponents/CategoryList";
import { LevelContext, LevelProvider } from "../../Context/LevelContext";

const Shop = ({ user }) => {
    return (
        <>
            <Head title="Shopping"></Head>
            <LevelProvider>
                <Layout user={user}>
                    <h1 className="text-display-3 font-semibold">
                        GET INSPIRED
                    </h1>
                    <p className="max-w-screen-sm xl:block hidden mt-4">
                        Browsing for your next long - haul trip, everyday
                        journey, or just fancy a look at whats new? From
                        community favourites to about-to-sell-out items, see
                        them all here.{" "}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4 md:flex xl:relative">
                        <BrandList />
                        <CategoryList />
                    </div>
                    <div className="mt-8 grid gap-y-2 md:grid-cols-2 md:gap-x-2 xl:grid-cols-4">
                        <LevelContext.Consumer>
                            {({ brandId, categoryId }) => (
                                <ProductList
                                    categoryId={categoryId}
                                    brandId={brandId}
                                ></ProductList>
                            )}
                        </LevelContext.Consumer>
                    </div>
                </Layout>
            </LevelProvider>
        </>
    );
};

export default Shop;
