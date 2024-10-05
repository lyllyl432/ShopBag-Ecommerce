import React from "react";

const Variation = () => {
    return (
        <div className="relative">
            <div className="flex gap-3 items-center">
                <p>VARIATIONS</p>
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
            {/* partial data for UI purposes */}
            <p>White</p>
            <ul className="hidden">
                <li></li>
            </ul>
        </div>
    );
};

export default Variation;
