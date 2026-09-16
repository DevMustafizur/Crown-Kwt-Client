import { createContext, useContext, useState } from "react";

const UtilitesContext = createContext();

export const UtilitiesProvider = ({ children }) => {
    const [visibility, setvisibility] = useState(false)
    return (
        <UtilitesContext.Provider
            value={{
                visibility, setvisibility
            }}
        >
            {children}
        </UtilitesContext.Provider>
    );
};

export const useUtilites = () => {
    return useContext(UtilitesContext);
};