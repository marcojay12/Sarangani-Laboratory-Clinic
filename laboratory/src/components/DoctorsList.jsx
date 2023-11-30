import { ArrowTopRightOnSquareIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react"
import Tbutton from "./core/TButton";

export default function DoctorsList({doctor, onDeleteClick}){
    return (
        <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[250px]">
            <h6 className="mt-4 text-md font-bold">Physician: {doctor.fullname}</h6>
            <h4 className="mt-4 text-sm font-bold italic">License #: {doctor.license_number}</h4>
            <h6 className="mt-4 text-sm italic">PTR #: {doctor.ptr_number}</h6>
            {/* <img src="{doctor.image_url}" alt="" /> */}

            <div className="flex justify-between items-center mt-3">
                <Tbutton to={`doctor/${doctor.id}`}>
                    <PencilIcon className="w-5 h-5 mr-2" />
                    Edit
                </Tbutton>
                <Tbutton link={`/admin/doctor/${doctor.slug}`}>
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                </Tbutton>
                {doctor.id && (
                    <Tbutton onClick={onDeleteClick} circle link color="red">
                        <TrashIcon className="w-5 h-5 mr-2" />
                    </Tbutton>
                )}
            </div>
       </div>

    );
}
