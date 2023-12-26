import { useState, createContext } from "react";

export const SelectedColorContext = createContext(null);

export const SelectedColorContextProvider = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const value = { selectedColor, setSelectedColor };

    return (
        <SelectedColorContext.Provider value={value}>
            {children}
        </SelectedColorContext.Provider>
    )
};

export default SelectedColorContext;