import { createContext, useContext, useState } from "react";

export const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
    const [brandId, setBrandId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    return (
        <LevelContext.Provider
            value={{ brandId, setBrandId, categoryId, setCategoryId }}
        >
            {children}
        </LevelContext.Provider>
    );
};
// Custom hook to use the context in child components
export const useLevelContext = () => {
    return useContext(LevelContext);
};
