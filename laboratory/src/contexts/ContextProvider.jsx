import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => { },
    setUserToken: () => {}
})



export const ContextProvider =({children}) => {
    const [currentUser, setCurrentUser] = useState({
        // user validation for login page admin
    })
    const [userToken, setUserToken] = useState('123')//to login

    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
