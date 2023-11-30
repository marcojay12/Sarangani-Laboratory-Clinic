import { PlusCircleIcon } from "@heroicons/react/24/outline";
import DoctorsList from "../components/DoctorsList";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";

export default function DoctorsInformation() {
    const { doctors } = useStateContext();
    console.log(doctors);

    const onDeleteClick = () =>{

        console.log("Delete");
    }

    return (
<PageComponent
title='Doctors List and Speciality'
buttons={ (
    <Tbutton color="green" to="/doctor/new">
        <PlusCircleIcon className="h-6 w-6 mr-2" />
        Add new Physician
    </Tbutton>
) }>
 <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-6">
 {doctors.map(doctor =>(
            <DoctorsList doctor={doctor} key={doctor.id} onDeleteClick={onDeleteClick} />
        ))}
 </div>
</PageComponent>
    )
}
