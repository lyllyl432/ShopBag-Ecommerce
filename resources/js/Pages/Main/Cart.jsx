import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Head } from "@inertiajs/react";
import ProductBoard from "../components/ProductBoard";
import ProductCart from "../components/ProductCart";
import Button from "../components/Button";
import ProductTopBoard from "../components/ProductTopBoard";
import axios from "axios";
const Cart = ({ productIds }) => {
    const [carts, setCart] = useState([]);
    const api = "7|Xt27EeIh3cvAYPiWj009Qt5FEPzYEGtC8rdbHAgscfef42fa";
    const data = { product_id: productIds };
    useEffect(() => {
        axios
            .post("http://127.0.0.1:80/api/v1/cart", data, {
                headers: { Authorization: `Bearer ${api}` },
            })
            .then((response) => {
                setCart(response.data); // Update state with the response data
                console.log(response);
            })
            .catch((error) => {
                console.error("Error fetching cart data:", error);
            });
    }, []);
    return (
        <>
            {console.log(carts)}
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
                    {carts.data
                        ? carts.data.map((cart) => (
                              <div>
                                  <ProductBoard
                                      checkbox={true}
                                      cart={cart}
                                  ></ProductBoard>
                                  {cart.products.map((product) => {
                                      return (
                                          <ProductCart
                                              type={"cart"}
                                              product={product}
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
