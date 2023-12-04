import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useState } from "react";
import Tab from "../components/tab";

export default function Microscopy() {
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
<PageComponent title='microscopy'>

    <form action="#" method="POST" onSubmit={onSubmit}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <label className="block text-lg font-medium">
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
                            </div>




          <div className="border-b border-gray-900/10 pb-12">

                                            <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">
             <div className="sm:col-span-2 " >

            </div>
             <div className="sm:col-span-1 " >

            <h2 className="text-base font-semibold leading-7 text-gray-900">Date Received:</h2>
            </div>
                         <div className="sm:col-span-1 " >
            <h2 className="text-base font-semibold leading-7 text-gray-900">Time:</h2>
            </div>


             <div className="sm:col-span-2 " >
            <h2 className="text-base font-semibold leading-7 text-gray-900">Date Printed:</h2>
            </div>
                <div className="sm:col-span-1 " >
            <h2 className="text-base font-semibold leading-7 text-gray-900">Date Released:</h2>
            </div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Time:</h2>
             <div className="sm:col-span-2 " >

            </div>

          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
            <div className="sm:col-span-4">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Fullname
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Age
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                gender
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Hospital No.
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

              <div className="col-span-6">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Laboratory No.
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-5">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Requesting Physician
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="age"
                  autoComplete="age"
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Ward
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="age"
                  autoComplete="age"
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Bed No.
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="age"
                  autoComplete="age"
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>


{/* Blood Typing */}
                           <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-6">

                                <div className="sm:col-span-1 " >

                                     <h2 className="text-2xl text-center font-semibold leading-7 text-gray-900">Clical Microscopy</h2>
                                </div>

                                    <Tab active={1}>
                                        {
                                           // tabContent.map((tab,idx) => <Tab.TabPanel key={`Tab-${idx}`} tab={tab.content}>{}</Tab.TabPanel>)













                                        }
                                    </Tab>



                            </div>
                           </div>




        <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-6">

             <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
                Performed By:
              </label>
            </div>
                <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
                Verified By:
              </label>
            </div>

             <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
                Pathologist
              </label>
            </div>

          </div>
        </div>



                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <Tbutton>Add</Tbutton>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <Tbutton>Print</Tbutton>
                            </div>
                    </div>
                </div>
            </form>

</PageComponent>
        )
}


