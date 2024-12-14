import React from "react";
import { Link } from "@inertiajs/react";
const DeliveryAddress = ({ address }) => {
    return (
        <div className="flex justify-between p-4 bg-primary text-white rounded-md mt-4 items-center">
            <div>
                <div className="flex items-center gap-2">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div>
                        <h1>Delivery Address</h1>
                    </div>
                </div>
                <div className="mt-4">
                    <span>{address ? address.full_name : ""}</span>
                    <span>{address ? address.phone_number : ""}</span>
                    <span>{address ? address.street_address : ""}</span>
                    <span>
                        {address
                            ? address.full_address + " " + address.postal_code
                            : ""}
                    </span>
                </div>
            </div>
            <div>
                <Link className="underline" href={route("address.index")}>
                    Change Address
                </Link>
            </div>
        </div>
    );
};

export default DeliveryAddress;
