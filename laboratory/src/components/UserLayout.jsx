import { useStateContext } from "../contexts/ContextProvider"





export default function Userlayout() {
   const {currentUser, userToken} = useStateContext();

   if (userToken){
        return <Navigator to='/' />
   }

   return (
        <Outlet />
    )
}
