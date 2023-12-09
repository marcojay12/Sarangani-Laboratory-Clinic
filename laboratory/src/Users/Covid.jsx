import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
//import { PhotoIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
export default function Covid() {
    const [patient_information_id, setPatientID] = useState('');
  const [type_of_specimen, setSpecimen] = useState('');
  const [test_kit_brand, setTestKit] = useState('');
  const [method_test, setMethod] = useState('');
  const [value_test, setValue] = useState('');
  const [result, setResult] = useState('');
  const [remarks, setRemarks] = useState('');

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
             "http://localhost:8000/api/save_covid",
             {
                patient_information_id: patient_information_id,
                type_of_specimen: type_of_specimen,
                test_kit_brand: test_kit_brand,
                method_test: method_test,
                value_test: value_test,
                result: result,
                remarks: remarks,



             });
             alert("Patient Successfully Registered");
             setPatientID("");
             setSpecimen("");
             setTestKit("");
             setMethod("");
             setResult("");
             setValue("");
             setRemarks("");

     }
     catch(err)
     {
         alert("Patient Registration Failed");
     }
  }

    return (
<PageComponent title='Covid 19 Rapid Test'>

    <form action="#" method="POST">
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
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
{/* Covid */}
<div className="border-b border-gray-900/10 pb-12">
                 <div className="sm:col-span-1 " >

            <h2 className="text-2xl text-center font-semibold leading-7 text-gray-900">COVID-19 RAPID ANTIGEN TEST</h2>
            </div>
</div>

          <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Type of Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="type_of_specimen"
                  id="type-of-specimen"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={type_of_specimen}
                  onChange={(event) => {
                    setSpecimen(event.target.value)
                }}
                />
              </div>
            </div>

                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Test Kit Brand
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="test_kit_brand"
                  id="test-kit-brand"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={test_kit_brand}
                  onChange={(event) => {
                    setTestKit(event.target.value)
                }}
               />
              </div>
            </div>
                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Method
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="method_test"
                  id="method-test"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={method_test}
                  onChange={(event) => {
                    setMethod(event.target.value)
                }}
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
                  value={result}
                  onChange={(event) => {
                    setResult(event.target.value)
                }}
                />
              </div>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Value mIU/ml    References:0-0.04
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="value_test"
                  id="value_test"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={value_test}
                  onChange={(event) => {
                    setValue(event.target.value)
                }}
                />
              </div>
            </div>



             <div className="sm:col-span-8 " >
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={remarks}
                  onChange={(event) => {
                    setRemarks(event.target.value)
                }}
               />
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


                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6"
                                onClick={save}
                            >
                                    <Tbutton>Add</Tbutton>
                            </div>

                    </div>
                </div>
            </form>

</PageComponent>
        )
}


