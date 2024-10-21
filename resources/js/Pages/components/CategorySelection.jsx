import React from "react";
import { Link } from "@inertiajs/react";

const CategorySelection = ({ category, handleOnClick, setCategoryId }) => {
    return (
        <li
            onClick={(e) => handleOnClick(e, setCategoryId)}
            data-category-id={category.id}
            data-category-name={category.categoryName}
            className="hover:underline"
        >
            {category.categoryName}
        </li>
    );
};

export default CategorySelection;
