import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useState } from "react";

export default function Microbiology() {
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
<PageComponent title='Microbiology'>

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
                 <div className="sm:col-span-1 " >

            <h2 className="text-2xl font-bold leading-7 text-gray-900">Microbiology Examination Result</h2>
            </div>
</div>

          <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
            <div className="sm:col-span-1 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Laboratory Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lab_number"
                  id="lab-number"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                        <div className="sm:col-span-1 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Specimen Type
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="specimen_type"
                  id="specimen-type"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Source of Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="source_of_specimen"
                  id="source-of-specimen"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="result"
                  id="result"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Culture Isolate
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="culture_isolate"
                  id="culture-isolate"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>
<div className="border-b border-gray-900/10 pb-12">
    <div className="text-3xl text-center font-bold">Sensitivity Report</div>
    <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-6">
                    <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Sensitive
              </label>
              <div className="mt-2">
                               <textarea
                  id="sensitive"
                  name="sensitive"
                  rows={15}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Resistant
              </label>
              <div className="mt-2">
                               <textarea
                  id="resistant"
                  name="resistant"
                  rows={15}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Intermediate
              </label>
              <div className="mt-2">
                                <textarea
                  id="intermediate"
                  name="intermediate"
                  rows={15}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
    </div>
</div>

<div className="border-b border-gray-900/10 pb-12">
    <div className="text-3xl font-bold">Gram Stain</div>

 <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
            <div className="sm:col-span-1 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Laboratory Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lab_number"
                  id="lab-number"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                        <div className="sm:col-span-1 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="specimen"
                  id="specimen"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="result"
                  id="result"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Epithelial Cells
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="epithelial_cell"
                  id="epithelial-cell"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                POLYMORPHONUCLEARS
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="polymorphonuclears"
                  id="polymorphonuclears"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

</div>
<div className="border-b border-gray-900/10 pb-12">
    <div className="text-3xl font-bold">AFB Stain</div>

 <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
            <div className="sm:col-span-1 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Laboratory Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lab_number"
                  id="lab_number"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                        <div className="sm:col-span-1 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Specimen"
                  id="Specimen"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                        <div className="sm:col-span-3 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="result"
                  id="result"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>
        </div>

<div className="border-b border-gray-900/10 pb-12">
    <div className="text-3xl font-bold">KOH</div>

 <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
            <div className="sm:col-span-1 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Laboratory Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lab_number"
                  id="lab-number"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                        <div className="sm:col-span-1 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="specimen"
                  id="specimen"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                        <div className="sm:col-span-3 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="result"
                  id="result"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
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
                                    {/* blank */}
              </label>
            </div>

            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-sm leading-6 text-gray-900">
                Name of medical Technologist prepared by
              </label>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-sm leading-6 text-gray-900">
                Name of medical Technologist verified by
              </label>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-sm leading-6 text-gray-900">
                Name of Pathologist
              </label>
            </div>

                       <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-bold leading-6 text-gray-900">
                License No.:
              </label>
            </div>
                       <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-bold leading-6 text-gray-900">
                License No.:
              </label>
            </div>
                       <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-bold leading-6 text-gray-900">
                License No.:
              </label>
            </div>

            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
                    Medical Technologist
              </label>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
                                    Medical Technologist
              </label>
            </div>

             <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
                Anatomic and Clinic Pathologist
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


