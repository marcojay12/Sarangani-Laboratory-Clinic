import { useState } from "react";
import PageComponent from "../components/PageComponent";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Tbutton from "../components/core/TButton";

export default function Chemistry() {

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
<PageComponent title='Chemistry'>

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


{/* Chemistry*/}

                                    {/* Culture And Sensitivity Initial Result */}
            <div className="sm:col-span-1 " >
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Culture And Sensitivity Initial Result</h2>
            </div>


          <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
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


            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Specimen Type
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
                        <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Source of Specimen
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

          </div>
        </div>
            <div className="sm:col-span-8 " >
              <label htmlFor="first-name" className="block text-2xl text-center font-medium leading-6 text-gray-900">
                RESULT
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
                 </div>
                </div>

               <div className="sm:col-span-8 " >
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Remarks"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



                                    {/* Chemistry Exam Result */}
 <div className="border-b border-gray-900/10 pb-12">
    <div className="border-b border-gray-900/10 pb-12">
            <div className="sm:col-span-1 " >
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Chemistry Examination Result</h2>
            </div>

    </div>
    <div className="mt-2  grid grid-cols-2 gap-x-1 gap-y-1 sm:grid-cols-2">
        <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">
            <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Test</h2>
            </div>
                        <div>FBS</div>
                        <div>RBS</div>
                        <div>Creatinine</div>
                        <div>Uric Acid</div>
                        <div>SGOT</div>
                        <div>SGPT</div>
                        <div>Alkaline Phos.</div>
                        <div>LDH</div>
                        <div>GGT</div>
                        <div>Magnesium</div>
                        <div>Phosphorus</div>
                        <div>Amylase</div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
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
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>U/L</div>
                        <div>U/L</div>
                        <div>U/L</div>
                        <div>U/L</div>
                        <div>U/L</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>U/L</div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div>70-110</div>
                        <div><br /></div>
                        <div>0.6-1.3</div>
                        <div>2.6-7.2</div>
                        <div>{'<'} 40</div>
                        <div>10-40</div>
                        <div>M= 10-71,F= {'<'} 240</div>
                        <div>125-220</div>
                        <div>M= 10-71, F= 6-42</div>
                        <div>1.5-2.6</div>
                        <div>2.5-4.5</div>
                        <div>31-107</div>

            </div>


        </div>

        <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-1 sm:grid-cols-4">
            <div className="grid grid-col-2 gap-1">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Test</h2>
            <div className="text-md font-semibold leading-7 text-gray-900" >Electrolytes</div>
            </div>
                        <div>Sodium</div>
                        <div>Potassium</div>
                        <div>Calcium(Total)</div>
                        <div>Calcium(Ionized)</div>
                        <div>pH</div>
                        <div>Chloride</div>
                        <div className="text-sm font-semibold">BILIRUBIN</div>
                        <div>Total Bilirubin</div>
                        <div>Direct Bilirubin</div>
                        <div>Indirect Bilirubin</div>
                        <div className="text-sm font-semibold">TP A/G (Total Protein A/G Ratio)</div>
                        <div>Total Protein</div>
                        <div>Albumin</div>
                        <div>Globulin</div>
                        <div>A/G Ratio</div>


            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>
            </div>
            <br />
            <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>


                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>

                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                        <div><br /></div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
             <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
             <div><br /></div>
             <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
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
                        <br />
                        <div>mmol/L</div>
                        <div>mmol/L</div>
                        <div>mmol/L</div>
                        <div>mmol/L</div>
                        <div>mmol/L</div>
                        <div><br /></div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div><br /></div>
                        <div>g/dL</div>
                        <div>g/dL</div>
                        <div>g/dL</div>
                        <div><br /></div>
                        <div><br /></div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <br />
                        <div>135-145</div>
                        <div>3.5-5.5</div>
                        <div>2.20-2.90</div>
                        <div>1.10-1.40</div>
                        <div><br /></div>
                        <div>98-108</div>
                        <div><br/ ></div>
                        <div>0.2-1.2</div>
                        <div>{'<'} 0.2</div>
                        <div>0.2-1.2</div>
                        <div><br /></div>
                        <div className="text-sm">6.4-8.3 Ambulatory 6.0-7.8 at Rest  </div>
                        <div className="text-sm"> Age: {'< 60 | 3.5-5.2'} 60-90 | 3.2-4.6 {'> 90 | 2.9-4.5'}</div>
                        <div>2.0-3.9</div>
                        <div><br /></div>
                        <div><br /></div>

            </div>


        </div>



        <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">
            <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >

            <h2 className="text-lg font-bold leading-7 text-gray-900">Lipid Test</h2>
            </div>
                        <div>Cholesterol</div>
                        <div>Triglyceride</div>
                        <div>HDL</div>
                        <div>LDL</div>
                        <div>SGOT</div>
                        <div class="text-md font-semibold">HbA1C</div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
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
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>U/L</div>
                        <div>U/L</div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div>70-110</div>
                        <div><br /></div>
                        <div>0.6-1.3</div>
                        <div>2.6-7.2</div>
                        <div>{'<'} 40</div>
                        <div>10-40</div>


            </div>


        </div>

 <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">

            <div className="grid grid-col-2 gap-2">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">24 Hours</h2>
            </div>
                        <div>Cholesterol</div>
                        <div>Triglyceride</div>
                        <div>HDL</div>
                        <div>LDL</div>
                        <div>SGOT</div>
                        <div class="text-md font-semibold">HbA1C</div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
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
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>U/L</div>
                        <div>U/L</div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div>70-110</div>
                        <div><br /></div>
                        <div>0.6-1.3</div>
                        <div>2.6-7.2</div>
                        <div>{'<'} 40</div>
                        <div>10-40</div>


            </div>


        </div>




    </div>
 </div>






                                    {/* Performer */}
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


