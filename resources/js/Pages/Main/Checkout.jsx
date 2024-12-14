import { useState, useEffect, React } from "react";
import Layout from "../components/Layout";
import { Head, Link, router } from "@inertiajs/react";
import AddressBoard from "../components/AddressBoard";
import ProductTopBoard from "../components/ProductTopBoard";
import ProductBoard from "../components/ProductBoard";
import ProductCart from "../components/ProductCart";
import Button from "../components/Button";
import { API_KEY } from "../../constants";
import { formatDate } from "../../custom";
const Checkout = ({ checkouts = [], user }) => {
    // console.log(checkouts);
    const [checkoutItems, setCheckoutItems] = useState([]);
    const [totalPayment, setTotalPayment] = useState(0);
    //calculate total payment for the checkout
    const calculateTotalPayment = () => {
        let total = 0;
        checkouts.forEach((checkout) => {
            total += checkout.total_amount;
        });
        setTotalPayment(total);
    };
    //handle place order
    const handlePlaceOrder = async () => {
        try {
            const checkoutData = checkouts.map((checkout) => ({
                total_amount: checkout.total_amount,
                total_quantity: checkout.total_quantity,
                created_at: formatDate(checkout.created_at),
                updated_at: formatDate(checkout.updated_at),
            }));
            const orderResponse = await axios.post(
                "http://127.0.0.1:80/api/v1/orders/bulk",
                checkoutData,
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-type": "application/json",
                    },
                }
            );
            const orderId = orderResponse.data.order_id[0];
            const checkoutItemsData = checkouts.flatMap((checkout) =>
                checkout.checkout_items.map((item) => ({
                    user_id: checkout.user_id,
                    sub_total: item.sub_total,
                    product_id: item.product_id,
                    quantity: item.quantity,
                    price: item.price,
                    status: "pending",
                    order_id: orderId,
                    shipping_fee: checkout.shipping_fee,
                    created_at: formatDate(checkout.created_at),
                }))
            );
            console.log(checkoutItemsData);

            const orderItemsResponse = await axios.post(
                "http://127.0.0.1:80/api/v1/orderitems/bulk",
                checkoutItemsData,
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-type": "application/json",
                    },
                }
            );
            console.log("Order placed successfully:", orderResponse.data);
            console.log(
                "Order Items placed successfully:",
                orderItemsResponse.data
            );
            router.visit(route("purchase.index"));
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };
    //api key will hide soon
    const api = API_KEY;
    const productIds = checkouts.flatMap((checkout) =>
        checkout.checkout_items.map((item) => item.product_id)
    );
    const data = { product_id: productIds };
    useEffect(() => {
        axios
            .post("http://127.0.0.1:80/api/v1/cart", data, {
                headers: { Authorization: `Bearer ${api}` },
            })
            .then((response) => {
                response.data.data.forEach((data) => {
                    data.products.forEach((product) => {
                        const checkoutItem = checkouts[0].checkout_items.find(
                            (item) => item.product_id == product.id
                        );
                        product.quantity = checkoutItem
                            ? checkoutItem.quantity
                            : 0;
                    });
                });
                setCheckoutItems(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching cart data:", error);
            });
    }, []);
    useEffect(() => {
        calculateTotalPayment();
    }, [checkouts]);

    return (
        <>
            <Head title="Checkout"></Head>
            <Layout user={user}>
                <AddressBoard></AddressBoard>
                <div className="mt-4">
                    <ProductTopBoard title="Products Ordered"></ProductTopBoard>
                </div>
                {checkoutItems.length > 0 &&
                    checkoutItems.map((checkout) => (
                        <div className="mt-4" key={checkout.id}>
                            <ProductBoard
                                cart={checkout}
                                key={checkout.id}
                            ></ProductBoard>
                            {checkout.products.map((product) => (
                                <ProductCart
                                    type="checkout"
                                    product={product}
                                    key={product.id}
                                ></ProductCart>
                            ))}
                        </div>
                    ))}

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
                                    ₱{checkouts[0].shipping_fee}
                                </span>
                            </p>
                            <p className="font-semibold mt-4">
                                Total Payment:{" "}
                                <span className="lg:text-display-4">
                                    ₱{totalPayment}
                                </span>
                            </p>
                            <Button
                                onClick={handlePlaceOrder}
                                className="w-full px-4 py-2 bg-accent text-white rounded-xl mt-4 mb-4"
                            >
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
