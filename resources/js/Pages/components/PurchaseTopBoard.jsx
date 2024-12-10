import React from "react";
import PurchaseNav from "./PurchaseNav";
import { useState } from "react";
const PurchaseTopBoard = ({ user, setOrders }) => {
    const [activeNav, setActiveNav] = useState("All");
    const navs = [
        { title: "All", status: "all" },
        { title: "Pending", status: "pending" },
        { title: "To Ship", status: "to_ship" },
        { title: "To Receive", status: "to_receive" },
        { title: "Completed", status: "completed" },
        { title: "Cancelled", status: "cancelled" },
        { title: "Returned", status: "refunded" },
    ];
    return (
        <div>
            <ul className="flex">
                {navs.map((nav) => (
                    <PurchaseNav
                        title={nav.title}
                        key={nav.title}
                        isActive={activeNav === nav.title}
                        setActiveNav={setActiveNav}
                        status={nav.status}
                        user={user}
                        setOrders={setOrders}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PurchaseTopBoard;
