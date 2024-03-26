import { UserContext } from "./UserContext";

const user = {
    id: 123,
    name: 'Yeyo Foster',
    email: 'yeyo.foster@gmail.com'
};

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};