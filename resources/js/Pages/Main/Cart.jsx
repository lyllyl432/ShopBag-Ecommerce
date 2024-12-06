import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Head } from "@inertiajs/react";
import ProductBoard from "../components/ProductBoard";
import Button from "../components/Button";
import ProductTopBoard from "../components/ProductTopBoard";
import ProductCart from "../components/ProductCart";
import axios from "axios";
const Cart = ({ cartItems }) => {
    const [carts, setCart] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totals, setTotals] = useState({ totalQuantity: 0, totalAmount: 0 });
    //handle select all products
    const handleSelectAll = (e) => {
        if (!e.target.checked) {
            setSelectedProducts([]);
        } else {
            const allProducts = carts.flatMap((cart) =>
                cart.products.map((product) => ({
                    id: product.id,
                    quantity: product.quantity,
                }))
            );

            setSelectedProducts(allProducts);
        }
    };

    //handle select products by brand
    const handleBrandSelect = (e, brandId) => {
        let idQuantity = [];
        const brandProducts = carts.filter((cart) => cart.id === brandId);
        for (let i = 0; i < brandProducts.length; i++) {
            for (let j = 0; j < brandProducts[i].products.length; j++) {
                idQuantity.push({
                    id: brandProducts[i].products[j].id,
                    quantity: brandProducts[i].products[j].quantity,
                });
            }
        }
        if (e.target.checked) {
            setSelectedProducts((prev) => [...prev, ...idQuantity]);
        } else {
            setSelectedProducts((prev) =>
                prev.filter(
                    (item) =>
                        !idQuantity.some((product) => product.id === item.id)
                )
            );
        }
    };
    const handleProductSelect = (e, productId, quantity) => {
        if (e.target.checked) {
            setSelectedProducts((prev) => [
                ...prev,
                { id: productId, quantity },
            ]);
        } else {
            setSelectedProducts((prev) =>
                prev.filter((item) => item.id !== productId)
            );
        }
    };
    const isProductChecked = (productId) => {
        return selectedProducts.some((product) => product.id === productId);
    };
    const isBrandChecked = (brandId) => {
        const brandProducts = carts
            .filter((cart) => cart.id === brandId)[0]
            .products.map((product) => ({
                id: product.id,
                quantity: product.quantity,
            }));
        // Check if all brand products are in selectedProducts
        return brandProducts.every((product) =>
            selectedProducts.some((selected) => selected.id === product.id)
        );
    };
    // Add this function to check if all products are selected
    const isAllSelected = () => {
        const allProductsCount = carts.reduce(
            (total, cart) => total + cart.products.length,
            0
        );

        return selectedProducts.length === allProductsCount;
    };

    //api key will hide soon
    const api = "7|Xt27EeIh3cvAYPiWj009Qt5FEPzYEGtC8rdbHAgscfef42fa";
    const productIds = cartItems.map((cartItem) => cartItem.product_id);

    const data = { product_id: productIds };
    useEffect(() => {
        axios
            .post("http://127.0.0.1:80/api/v1/cart", data, {
                headers: { Authorization: `Bearer ${api}` },
            })
            .then((response) => {
                response.data.data.forEach((data) => {
                    data.products.forEach((product) => {
                        const cartItem = cartItems.find(
                            (item) => item.product_id === product.id
                        );
                        product.cartId = cartItem ? cartItem.id : 0;
                        product.quantity = cartItem ? cartItem.quantity : 0;
                    });
                });

                setCart(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching cart data:", error);
            });
    }, []);

    const calculateTotalCheckout = (selectedProducts) => {
        let totalQuantity = 0;
        let totalAmount = 0;
        selectedProducts.forEach((selectedProduct) => {
            carts.forEach((cart) => {
                cart.products.forEach((product) => {
                    if (product.id === selectedProduct.id) {
                        totalQuantity += selectedProduct.quantity;
                        totalAmount +=
                            product.productPrice * selectedProduct.quantity;
                    }
                });
            });
        });
        setTotals({ totalAmount, totalQuantity });
    };
    //reruns if the selected products change
    useEffect(() => {
        calculateTotalCheckout(selectedProducts);
    }, [selectedProducts]);
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
                        isAllSelected={isAllSelected}
                    ></ProductTopBoard>
                </div>
                <div className="mb-20">
                    {carts
                        ? carts.map((cart) => (
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
                                              handleProductSelect={(e) => {
                                                  handleProductSelect(
                                                      e,
                                                      product.id,
                                                      product.quantity
                                                  );
                                              }}
                                              isProductChecked={
                                                  isProductChecked
                                              }
                                              setSelectedProducts={
                                                  setSelectedProducts
                                              }
                                              setCart={setCart}
                                          ></ProductCart>
                                      );
                                  })}
                              </div>
                          ))
                        : ""}

                    <div className="fixed bottom-0 right-4 flex gap-4 items-center text-color-text px-4 bg-secondary p-4 rounded-l-xl rounded-bl-xl md:right-0">
                        <p className="whitespace-nowrap">
                            Total ({totals["totalQuantity"]}):{" "}
                            <span>₱ {totals["totalAmount"]}</span>
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
