import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";
import MedTechList from "../components/MedTechList";

export default function MTInformation() {
        const { medtechs }= useStateContext();
        console.log(medtechs);

        const onDeleteClick = () =>{
            console.log("Delete")
        }

    return (
<PageComponent
title='List of Medical Technologist'
buttons={(<Tbutton color="green" >
        <PlusCircleIcon className="h-6 w6 mr-2" />
        Add new Medical Technologies
</Tbutton>)}>
<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-6">
    {medtechs.map(medtechs =>(
        <MedTechList medtechs={medtechs} key={medtechs.id} onDeleteClick={onDeleteClick} />
    ))}
</div>

</PageComponent>
    )
}
