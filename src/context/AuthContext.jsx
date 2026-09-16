import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const login = (userData) => {
        setUser(userData);
        setisLoggedIn(true)
        return userData;
    };

    const logout = () => {
        setisLoggedIn(false)
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                isLoggedIn,
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};