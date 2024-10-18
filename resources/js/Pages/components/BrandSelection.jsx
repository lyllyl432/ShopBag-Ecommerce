import React from "react";
import { Link } from "@inertiajs/react";

const BrandSelection = ({ brand }) => {
    return (
        <li className="hover:underline">
            <Link>{brand.brandName}</Link>
        </li>
    );
};

export default BrandSelection;
