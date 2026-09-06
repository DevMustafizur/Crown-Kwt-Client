import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [activePage, setActivePage] = useState("Home")

    const login = (userData) => {
        setUser(userData);
        setisLoggedIn(true)
    };

    const logout = () => {
        setUser(null);
    };

    const changeActiveHandler = (value) =>{
        setActivePage(value)
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                isLoggedIn,
                activePage,
                changeActiveHandler
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};