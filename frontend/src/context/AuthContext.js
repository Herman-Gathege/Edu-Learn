// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const login = () => {
//         setIsAuthenticated(true);
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if user is authenticated on initial load
        const token = localStorage.getItem('auth_token');
        if (token) {
            setIsAuthenticated(true); // If token exists, set as authenticated
        }
    }, []);

    const login = () => {
        localStorage.setItem('auth_token', 'your_auth_token'); // Set your token
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('auth_token'); // Remove token on logout
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
