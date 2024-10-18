import React from "react";
import { Link } from "@inertiajs/react";

const BrandSelection = ({ category }) => {
    return (
        <li className="hover:underline">
            <Link>{category.categoryName}</Link>
        </li>
    );
};

export default BrandSelection;
