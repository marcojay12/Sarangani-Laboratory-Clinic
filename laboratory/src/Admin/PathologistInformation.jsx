import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import PathologistList from "../components/PathologistList";
import Tbutton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";

export default function PathologistInformation() {
            const { pathologist }= useStateContext();
        console.log(pathologist);

        const onDeleteClick = () =>{
            console.log("Delete")
        }

    return (
<PageComponent title='List of Pathologist'
buttons={(<Tbutton color="green" >
        <PlusCircleIcon className="h-6 w6 mr-2" />
        Add new Pathologist
</Tbutton>)}>
<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-6">
    {pathologist.map(pathologist =>(
        <PathologistList pathologist={pathologist} key={pathologist.id} onDeleteClick={onDeleteClick} />
    ))}
</div>

</PageComponent>
    )
}

