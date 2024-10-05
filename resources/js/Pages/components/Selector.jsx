import React from "react";
import { Link } from "@inertiajs/react";

const Selector = ({ title, selections, ...props }) => {
    return (
        <div {...props}>
            <p className="text-body-xs">{title}</p>
            <Link className="font-semibold text-body-small">
                {selections[0]}
            </Link>
            <ul className="hidden">
                {selections.map((selection) => (
                    <li>
                        <Link>{selection}</Link>
                    </li>
                ))}
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
