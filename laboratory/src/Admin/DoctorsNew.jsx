import { useState } from "react";
import PageComponent from "../components/PageComponent";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Tbutton from "../components/core/TButton";

export default function DoctorNew() {
    const [doctor, setDoctor] = useState({
        fullname: '',
        license_number: '',
        ptr_number: '',
         slug: '',
         status: false,
         image: null,
         image_url:null,

    });

    const onImageChoose = () => {
        console.log('On image choose')
    }
    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log(ev);
    }

    return (
        <PageComponent title='New Physician'>
            <form action="#" method="POST" onSubmit={onSubmit}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <label className="block text-sm font-medium">
                                Photo
                            </label>
                            <div className="mt-1 flex items-center">
                                {doctor.image_url && (
                                        <img
                                         src={doctor.image_url}
                                          alt=""
                                          className="w-32 h2-32 object-cover"
                                          />
                                )}
                                {!doctor.image_url && (
                                    <span className="flex justify-center items-center text-gray-400 h-12 w-12
                                    overflow-hidden rounded-full bg-gray-100">
                                        <PhotoIcon className="w-8 h-8" />
                                    </span>
                                )}

                                <button
                                type="button"
                                className="relative ml-5 rounded-md border border-gray-300 bg-white py-2
                                px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50
                                focus:outline-none focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    <input type="file"
                                    className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                                    onChange={onImageChoose}
                                    />
                                    Change
                                </button>
                            </div>

                            <div className="sm:col-span-2">
                                 <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Physician Name
                                  </label>
                                 <div className="mt-2">
                                     <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                              </div>
                          </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    License Number
                                </label>
                                <div className="mt-2">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                              </div>
                          </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    PTR number
                                </label>
                                <div className="mt-2">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                              </div>
                          </div>

                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <Tbutton>Add</Tbutton>
                            </div>
                    </div>
                </div>
            </form>
        </PageComponent>
    )
}
