import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import BrandSelection from "./BrandSelection";
const Selector = ({ title, selected, children, ...props }) => {
    const [isSelectionVisible, setSelectionVisible] = useState(false);
    const handleShowSelection = () => {
        setSelectionVisible(!isSelectionVisible);
    };
    return (
        <div {...props} onClick={handleShowSelection}>
            <p className="text-body-xs">{title}</p>
            <p className="font-semibold text-body-small">{selected}</p>
            <ul
                className={
                    !isSelectionVisible
                        ? "hidden"
                        : "absolute bg-white w-full left-0 top-16 z-20 p-4 rounded-xl space-y-4"
                }
            >
                {children}
            </ul>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Selector;
