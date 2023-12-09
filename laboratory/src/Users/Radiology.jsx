import { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Tbutton from "../components/core/TButton";
import axios from "axios";

export default function Radiology() {
   const [patient_information_id, setPatientID] = useState('');
  const [examination_ultrasound, setExamUltraSound] = useState('');
  const [result_ultrasound, setResultUltraSound] = useState('');
    const [image_ultrasound, setImageUltrasound] = useState('');
  const [examination_xray, setExamXray] = useState('');
    const [result_xray, setResultXray] = useState('');
  const [image_xray, setImageXray] = useState('');

//   async function Load()
//   {
//      const result = await axios.get(
//          "http://localhost:8000/api/patients");
//          setUsers(result.data);
//          console.log(result.data);
//   }

  async function save(event)
  {
     event.preventDefault();
     try {
       await axios.post(
             "http://localhost:8000/api/save_radiology",
             {
                patient_information_id: patient_information_id,
                 examination_ultrasound: examination_ultrasound,
                 result_ultrasound: result_ultrasound,
                 image_ultrasound: image_ultrasound,
                 examination_xray: examination_xray,
                 result_xray: result_xray,
                 image_xray: image_xray


             });
             alert("Patient Successfully Registered");
             setPatientID("");
             setExamUltraSound("");
             setResultUltraSound("");
             setImageUltrasound("");
             setExamXray("");
             setResultXray("");
             setImageXray("");

     }
     catch(err)
     {
         alert("Patient Registration Failed");
     }
  }

    return (
        <PageComponent title='Radiology'>

            <div className="sm:col-span-2 " >
    <label htmlFor="first-name" className="block text-2xl text-center font-medium leading-6 text-gray-900">
  Search
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="patient_information_id"
        id="remarks"
        autoComplete="given-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={patient_information_id}
        onChange={(event) => {
            setPatientID(event.target.value)
        }}
      />
      </div>
      </div>
            <form action="#" method="POST">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
{/* Blood Typing */}

          <div className="border-b border-gray-900/10 pb-12">
            <div className="text-3xl font-bold">Ultrasound Report</div>
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">
                         <div className="sm:col-span-1 " ></div>
             <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-2xl  font-medium leading-6 text-gray-900">
                Examination Performed
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="examination_ultrasound"
                  id="examUltrasound"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 value={examination_ultrasound}
        onChange={(event) => {
            setExamUltraSound(event.target.value)
        }}/>
              </div>
            </div>
            <div className="sm:col-span-1 " ></div>
             <div className="sm:col-span-1 " ></div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-2xl text-center font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <textarea
                  id="resultUltrasound"
                  name="result_ultrasound"
                  rows={10}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                value={result_ultrasound}
        onChange={(event) => {
            setResultUltraSound(event.target.value)
        }} />
              </div>


            </div>
            <div className="sm:col-span-1 " ></div>
            <div className="sm:col-span-1 " ></div>
            <div className="sm:col-span-2">
                            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="image_ultrasound" type="file" class="sr-only"
                   value={image_ultrasound}
        onChange={(event) => {
            setImageUltrasound(event.target.value)
        }}/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
            </div>
            <div className="sm:col-span-1 " ></div>


          </div>
        </div>

                  <div className="border-b border-gray-900/10 pb-12">
            <div className="text-3xl font-bold">Radiographic Report</div>
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">
                         <div className="sm:col-span-1 " ></div>
             <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-2xl  font-medium leading-6 text-gray-900">
                Examination Performed
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="examination_xray"
                  id="examXray"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 value={examination_xray}
        onChange={(event) => {
            setExamXray(event.target.value)
        }}/>
              </div>
            </div>
            <div className="sm:col-span-1 " ></div>
             <div className="sm:col-span-1 " ></div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-2xl text-center font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <textarea
                  id="resultXray"
                  name="result_xray"
                  rows={10}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                 value={result_xray}
        onChange={(event) => {
            setResultXray(event.target.value)
        }}/>
              </div>


            </div>
            <div className="sm:col-span-1 " ></div>
            <div className="sm:col-span-1 " ></div>
            <div className="sm:col-span-2">
                            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="image_xray"
                   type="file"
                   class="sr-only"
                   value={image_xray}
        onChange={(event) => {
            setImageXray(event.target.value)
        }}/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
            </div>
            <div className="sm:col-span-1 " ></div>


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
                Name of Radiologic Technologist prepared by
              </label>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-sm leading-6 text-gray-900">
                Name of Radiologist verified by
              </label>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-sm leading-6 text-gray-900">
                Name of
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
                    Radiologic Technologist
              </label>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
                                    Radiologist
              </label>
            </div>

          </div>
        </div>



                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6"
                            onClick={save}>
                                    <Tbutton>Add</Tbutton>
                            </div>
                            {/* <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <Tbutton>Print</Tbutton>
                            </div> */}
                    </div>
                </div>
            </form>
        </PageComponent>
    )
}
