import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import UsersList from "../components/UsersList";
import { useStateContext } from "../contexts/ContextProvider";

export default function UserInformation() {
        const { userInfos }= useStateContext();
        console.log(userInfos);

        const onDeleteClick = () =>{
            console.log("Delete")
        }


    return (
<PageComponent title='User Information List'
buttons={(<Tbutton color="green" >
        <PlusCircleIcon className="h-6 w6 mr-2" />
        Add New Employee User
</Tbutton>)}>
<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-6">
    {userInfos.map(userInfos =>(
        <UsersList userInfos={userInfos} key={userInfos.id} onDeleteClick={onDeleteClick} />
    ))}
</div>

</PageComponent>
    )
}
