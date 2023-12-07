import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useState } from "react";

export default function Hematology() {
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
<PageComponent title='Hematology'>

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

   <div className="sm:col-span-1 " >
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Hematology Examination Result</h2>
            </div>



 <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">

            <div className="grid grid-col-2 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Complete Blood Count</h2>
            </div>
                        <div className="text-sm font-semibold">Hemoglobin</div>
                        <div className="text-sm font-semibold">Hematocrit</div>
                        <div className="text-sm font-semibold">RBC Count</div>
                        <div className="text-sm font-semibold">WBC Count</div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="hemoglobin"
                                id="hemoglobin"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="hematocrit"
                                id="hematocrit"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="rbc_count"
                                id="rbc-count"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="wbc_count"
                                id="wbc-count"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>

                        <div>g/L</div>
                        <div>L/L</div>
                        <div>x10/L</div>
                        <div>x10/L</div>



            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>

                        <div>120-170</div>
                        <div>0.40-0.54</div>
                        <div>4.60-6.00</div>
                        <div>5.10-10.00</div>

            </div>

               <div className="grid grid-col-2 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Differential Count</h2>
            </div>
                        <div className="text-sm font-semibold">Neutrophils</div>
                        <div className="text-sm font-semibold">Lymphocytes</div>
                        <div className="text-sm font-semibold">Monocytes</div>
                        <div className="text-sm font-semibold">Eosinophils</div>
                        <div className="text-sm font-semibold">Basophils</div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>
                        <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="neutrophils"
                                id="neutrophils"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
            <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="lymphocytes"
                                id="lumpocytes"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="monocytes"
                                id="monocytes"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="eosinophils"
                                id="eosinophils"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="basophils"
                                id="basophils"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>

                        <div>%</div>
                        <div>%</div>
                        <div>%</div>
                        <div>%</div>
                        <div>%</div>




            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>

                        <div>0.50-0.65</div>
                        <div>0.25-0.40</div>
                        <div>0.02-0.09</div>
                        <div>0.01-0.03</div>
                        <div>0.00-0.01</div>
            </div>


        </div>
         <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">

            <div className="grid grid-col-2 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Red Cell Indices</h2>
            </div>
                        <div className="text-sm font-semibold">MCV</div>
                        <div className="text-sm font-semibold">MCH</div>
                        <div className="text-sm font-semibold">MCHC</div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>

                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="mcv"
                                id="mcv"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="mch"
                                id="mch"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="mchc"
                                id="mchc"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>

                        <div>fL</div>
                        <div>pg</div>
                        <div>gL</div>



            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>

                        <div>75.00-100.00</div>
                        <div>25.00-35.00</div>
                        <div>310.00-380.00</div>

            </div>

               <div className="grid grid-col-2 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Platelet Count</h2>
            </div>
                        <div className="text-sm font-semibold">Platelet Count</div>
                        <div className="text-sm font-semibold">Clotting Time</div>
                        <div className="text-sm font-semibold">Bleeding Time</div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>


                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="platelet_count"
                                id="platelet-count"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="time"
                                name="clotting_time"
                                id="clotting-time"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="time"
                                name="bleeding_time"
                                id="bleeding_time"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>

                        <div>x10 /L</div>
                        <div>Minutes</div>
                        <div>Minutes</div>





            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>

                        <div>150-400</div>
                        <div>3-5 Mins</div>
                        <div>1-3 Mins</div>

            </div>


        </div>
         <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">

            <div className="grid grid-col-2 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Test</h2>
            </div>
                        <div className="text-sm font-bold">Erythrocyte Sedimentation Rate</div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>

                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="erythrocyte"
                                id="erythrocyte"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900"></h2>
            </div>

                        <div>mm/Hr</div>




            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>

                        <div>0-20</div>

            </div>

               <div className="grid grid-col-2 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Test</h2>
            </div>
                        <div className="text-md font-bold">Reticulocyte Count</div>


            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>


                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="reticulocyte"
                                id="reticulocyte"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>

                        <div>%</div>






            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>

                        <div>0.5-2.5</div>


            </div>


        </div>

<div className="sm:col-span-8 " >
                    <h2 className="text-lg font-bold leading-7 text-gray-900">Remarks</h2>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks"
                  id="remarks"
                  placeholder="Remarks"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                <div className="border-b border-gray-900/10 pb-12"></div>
            <div className="sm:col-span-1 " >
            <h2 className="text-2xl text-center font-bold leading-7 text-gray-900">Coagulation Studies</h2>
            </div>
            <div className="mt-8 border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-2">
                                    <div className="sm:cols-span-2">
                                         <div className="text-2xl text-center font-bold leading-7 text-gray-900">Prothrombin Time (Protime)</div>
                                    </div>
                                     <div className="sm:cols-span-8">
                                         <div className="text-2xl text-center font-bold leading-7 text-gray-900">Activated Partial Thromboplastin Time (APTT)</div>
                                    </div>
            </div>



 <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
               <div className="grid grid-col-2 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Test</h2>
            </div>
                        <div className="text-sm font-semibold">PT</div>
                        <div className="text-sm font-semibold">Control</div>
                        <div className="text-sm font-semibold">% Activity</div>
                        <div className="text-sm font-semibold">INR</div>

            </div>

        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="pt"
                                id="pt"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="control"
                                id="control"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="activity"
                                id="activity"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
             <div><br/></div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>

                        <div>Seconds</div>
                        <div>Seconds</div>
                        <div>%</div>
                        <div><br/></div>




            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div><br/></div>
                        <div>8.8-13.2</div>
                        <div><br/></div>
                        <div><br/></div>

            </div>

               <div className="grid grid-col-2 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Test</h2>
            </div>
                        <div className="text-sm font-semibold">PTT</div>
                        <div className="text-sm font-semibold">Control</div>
                        <div className="text-sm font-semibold">Ratio</div>
                        <div><br/></div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>
                        <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ptt"
                                id="ptt"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
            <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="control"
                                id="control"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ratio"
                                id="ratio"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
             <div><br/></div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>

                        <div>Seconds</div>
                        <div>Seconds</div>
                        <div><br/></div>
                        <div><br/></div>





            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>

                        <div><br/></div>
                        <div>30.5-45.8</div>
                        <div>Up to 1.20</div>
                        <div><br/></div>
            </div>


        </div>



<div className="sm:col-span-8 " >
                    <h2 className="text-lg font-bold leading-7 text-gray-900">Remarks</h2>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks"
                  id="remarks"
                  placeholder="Remarks"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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


