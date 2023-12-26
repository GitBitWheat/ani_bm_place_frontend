import { createContext } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const user = { name: 'name', isMod: true };
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;