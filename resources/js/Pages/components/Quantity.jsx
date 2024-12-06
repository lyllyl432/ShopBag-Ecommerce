import axios from "axios";

const Quantity = ({
    cartId,
    productId,
    initialQuantity,
    setInitialQuantity,
    setSelectedProducts,
    setCart,
}) => {
    const handleIncreaseQuantity = (cartId, currentQuantity) => {
        const url = route("cart.update", { cart: cartId });
        try {
            const response = axios.put(url, {
                quantity: currentQuantity + 1,
            });
            setInitialQuantity(currentQuantity + 1);
            setSelectedProducts((prev) => {
                const existingIndex = prev.findIndex(
                    (item) => item.id === productId
                );
                const newArray = [...prev];
                if (existingIndex >= 0) {
                    newArray[existingIndex].quantity = currentQuantity + 1;
                }
                return newArray;
            });
            setCart((prev) => {
                let cartIndex;
                let productIndex;
                prev.forEach((cart) => {
                    cart.products.forEach((item) => {
                        if (item.id === productId) {
                            cartIndex = prev.indexOf(cart);
                            productIndex = cart.products.indexOf(item);
                        }
                    });
                });
                const newArray = [...prev];

                if (cartIndex >= 0 && productIndex >= 0) {
                    newArray[cartIndex].products[productIndex].quantity =
                        currentQuantity + 1;
                }
                return newArray;
            });
            console.log(response.data.message);
        } catch (error) {
            if (error.response) {
                console.log("Error: ", error.response.data);
            }
        }
    };
    const handleDecreaseQuantity = (cartId, currentQuantity) => {
        if (initialQuantity <= 0) {
            return;
        }
        const url = route("cart.update", { cart: cartId });
        try {
            const response = axios.put(url, {
                quantity: currentQuantity - 1,
            });
            setInitialQuantity(currentQuantity - 1);
            setSelectedProducts((prev) => {
                const existingIndex = prev.findIndex(
                    (item) => item.id === productId
                );
                const newArray = [...prev];
                if (existingIndex >= 0) {
                    newArray[existingIndex].quantity = currentQuantity - 1;
                }
                return newArray;
            });
            setCart((prev) => {
                let cartIndex;
                let productIndex;
                prev.forEach((cart) => {
                    cart.products.forEach((item) => {
                        if (item.id === productId) {
                            cartIndex = prev.indexOf(cart);
                            productIndex = cart.products.indexOf(item);
                        }
                    });
                });
                const newArray = [...prev];

                if (cartIndex >= 0 && productIndex >= 0) {
                    newArray[cartIndex].products[productIndex].quantity =
                        currentQuantity - 1;
                }
                return newArray;
            });
            console.log(response.data.message);
        } catch (error) {
            if (error.response) {
                console.log("Error: ", error.response.data);
            }
        }
    };
    return (
        <>
            <div className="flex">
                <div
                    onClick={() =>
                        handleDecreaseQuantity(cartId, initialQuantity)
                    }
                    className="py-2 px-1 border border-white flex items-center cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                        />
                    </svg>
                </div>
                <p className="px-3 py-2 border border-white">
                    {initialQuantity}
                </p>
                <div
                    onClick={() =>
                        handleIncreaseQuantity(cartId, initialQuantity)
                    }
                    className="py-2 px-1 border border-white flex items-center cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Quantity;
