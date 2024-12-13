import React from "react";

const SettingsTopBoard = ({ title, desc, children }) => {
    return (
        <div
            className={`${
                children
                    ? "flex justify-between"
                    : "pb-4 border-b border-gray-600"
            }`}
        >
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="font-light text-sm">{desc}</p>
        </div>
    );
};

export default SettingsTopBoard;
