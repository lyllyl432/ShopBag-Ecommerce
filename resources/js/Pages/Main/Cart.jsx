import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Head } from "@inertiajs/react";
import ProductBoard from "../components/ProductBoard";
import Button from "../components/Button";
import ProductTopBoard from "../components/ProductTopBoard";
import ProductCart from "../components/ProductCart";
import axios from "axios";
const Cart = ({ productIds }) => {
    const [carts, setCart] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    //handle select all products
    const handleSelectAll = (e) => {
        if (!e.target.checked) {
            setSelectedProducts([]);
        } else {
            let productIds = [];
            for (let i = 0; i < carts.data.length; i++) {
                for (let j = 0; j < carts.data[i].products.length; j++) {
                    productIds.push(carts.data[i].products[j].id);
                }
            }
            setSelectedProducts((prev) => [...prev, ...productIds]);
        }
    };
    //handle select products by brand
    const handleBrandSelect = (e, brandId) => {
        let productIds = [];
        const brandProducts = carts.data.filter((cart) => cart.id === brandId);
        for (let i = 0; i < brandProducts.length; i++) {
            for (let j = 0; j < brandProducts[i].products.length; j++) {
                productIds.push(brandProducts[i].products[j].id);
            }
        }
        if (e.target.checked) {
            setSelectedProducts((prev) =>
                Array.from(new Set([...prev, ...productIds]))
            );
        } else {
            setSelectedProducts((prev) =>
                prev.filter((id) => !productIds.includes(id))
            );
        }
    };
    const handleProductSelect = (e, productId) => {
        if (e.target.checked) {
            setSelectedProducts((prev) => [...prev, productId]);
        } else {
            setSelectedProducts((prev) =>
                prev.filter((id) => id !== productId)
            );
        }
    };
    const isProductChecked = (productId) => {
        return selectedProducts.includes(productId);
    };
    const isBrandChecked = (brandId) => {
        const brandProducts = carts.data
            .filter((cart) => cart.id === brandId)
            .map((p) => p.id);
        return brandProducts.every((id) => selectedProducts.includes(id));
    };

    //api key will hide soon
    const api = "7|Xt27EeIh3cvAYPiWj009Qt5FEPzYEGtC8rdbHAgscfef42fa";
    const data = { product_id: productIds };
    useEffect(() => {
        axios
            .post("http://127.0.0.1:80/api/v1/cart", data, {
                headers: { Authorization: `Bearer ${api}` },
            })
            .then((response) => {
                setCart(response.data);
            })
            .catch((error) => {
                console.error("Error fetching cart data:", error);
            });
    }, []);
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
                        handleSelectAll={handleSelectAll}
                    ></ProductTopBoard>
                </div>
                <div className="mb-20">
                    {carts.data
                        ? carts.data.map((cart) => (
                              <div key={cart.id}>
                                  <ProductBoard
                                      checkbox={true}
                                      cart={cart}
                                      key={cart.id}
                                      handleBrandSelect={handleBrandSelect}
                                      isBrandChecked={isBrandChecked}
                                  ></ProductBoard>
                                  {cart.products.map((product) => {
                                      return (
                                          <ProductCart
                                              key={product.id}
                                              type={"cart"}
                                              product={product}
                                              handleProductSelect={
                                                  handleProductSelect
                                              }
                                              isProductChecked={
                                                  isProductChecked
                                              }
                                          ></ProductCart>
                                      );
                                  })}
                              </div>
                          ))
                        : ""}

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
