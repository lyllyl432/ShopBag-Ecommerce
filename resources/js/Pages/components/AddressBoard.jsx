import React from "react";
import { Link } from "@inertiajs/react";
const AddressBoard = () => {
    return (
        <div className="p-4 bg-primary text-white rounded-xl">
            <div className="flex gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                </svg>
                <h3>Delivery Address</h3>
            </div>
            <div className="flex items-center justify-between mt-4 gap-8">
                <p className="text-body-small w-max overflow-hidden text-ellipsis text-nowrap">
                    John Doe (+63) 9267269191 MASOY COMPOUND, PUROK CANDLE,
                    Linao Minglanillla, Visayas, Cebu 6046
                </p>
                <Link href="#">Change</Link>
            </div>
        </div>
    );
};

export default AddressBoard;
