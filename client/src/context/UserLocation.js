// context/UserLocationContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const UserLocationContext = createContext();

// Create the provider component
export const UserLocationProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [location, setLocation] = useState({
        county: '',
        constituency: ''
    });

    return (
        <UserLocationContext.Provider value={{ username, setUsername, location, setLocation }}>
            {children}
        </UserLocationContext.Provider>
    );
};
