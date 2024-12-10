import React from "react";
import axios from "axios";
import { API_KEY } from "../../constants";
const PurchaseNav = ({
    isActive = false,
    title,
    status,
    setActiveNav,
    user,
    setOrders,
}) => {
    const handleButtonClick = () => {
        axios
            .get(
                `http://127.0.0.1:80/api/v1/orderitems?status=${status}&user_id=${user.id}`,
                {
                    headers: { Authorization: `Bearer ${API_KEY}` },
                }
            )
            .then((response) => {
                setOrders(response.data.data);
            });
        setActiveNav(title);
    };
    return (
        <li
            className={`${
                isActive ? "border-b-2 border-accent text-accent" : ""
            } p-4 flex-1 text-center`}
        >
            <button onClick={handleButtonClick}>{title}</button>
        </li>
    );
};

export default PurchaseNav;
