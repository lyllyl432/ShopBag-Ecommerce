import React from "react";

const BrandSelection = ({ brand, handleOnClick, setBrandId }) => {
    return (
        <li
            onClick={(e) => handleOnClick(e, setBrandId)}
            data-brand-id={brand.id}
            data-brand-name={brand.brandName}
            className="hover:underline"
        >
            {brand.brandName}
        </li>
    );
};

export default BrandSelection;
