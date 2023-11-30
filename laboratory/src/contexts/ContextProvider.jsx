import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    doctors: [],
    setCurrentUser: () => { },
    setUserToken: () => {}
})


const tmpDoctors = [
    {
    'id': 1,
    'fullname': 'marco jay mendoza phd.',
    'license_number': '125114233644',
    'ptr_number': '142254',
    'image_url': '/src/assets/images/sarangani.png'
    },
    {
        'id': 2,
    'fullname': 'helary miles phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 3,
    'fullname': 'joshua perks phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 4,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 5,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 6,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 7,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 8,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 9,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 10,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 11,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 12,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 13,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 14,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 15,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 16,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 17,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 18,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 19,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },
    {
        'id': 20,
    'fullname': 'james tragan phd.',
    'license_number': '125114233644',
    'ptr_number': '142254'
    },

] // doctors information temporary

export const ContextProvider =({children}) => {
    const [currentUser, setCurrentUser] = useState({
        // user validation for login page admin
    })
    const [userToken, setUserToken] = useState('')//to login
    const [doctors, setDoctors] = useState(tmpDoctors)

    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            doctors
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
