import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import axios from 'axios';
import { useState } from "react";

export default function CrossMatching() {
  const [patient_information_id, setPatientID] = useState('');
  const [blood_type, setBloodType] = useState('');
  const [method_test, setMethodTest] = useState('');
  const [serial_number, setSerialNumber] = useState('');
  const [donor_blood_type, setBloodDonor] = useState('');
  const [source, setSource] = useState('');
  const [component, setComp] = useState('');
  const [content, setCont] = useState('');
  const [extract_date, setExtractDate] = useState('');
  const [expiry_date, setExpiryDate] = useState('');
  const [crossmatching_result, setMatchingResult] = useState('');
  const [others, setOther] = useState('');
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
             "http://localhost:8000/api/save_crossmatch",
             {
                patient_information_id: patient_information_id,
                 blood_type: blood_type,
                 method_test: method_test,
                 serial_number: serial_number,
                 donor_blood_type: donor_blood_type,
                 source: source,
                 component: component,
                 content: content,
                 extract_date: extract_date,
                 expiry_date: expiry_date,
                 crossmatching_result: crossmatching_result,
                 others: others


             });
             alert("Patient Successfully Registered");
             setPatientID("");
             setBloodType("");
             setMethodTest("");
             setSerialNumber("");
             setBloodDonor("");
             setSource("");
             setComp("");
             setCont("");
             setExtractDate("");
             setExpiryDate("");
             setMatchingResult("");
             setOther("");

     }
     catch(err)
     {
         alert("Patient Registration Failed");
     }
  }



    return (
<PageComponent title='Cross Matching'>

    <form action="#" method="POST">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">


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



{/* Blood Typing */}
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="text-3xl text-center font-bold">Cross Matching Examination</div>
                        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
                              <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                PATIENT BLOOD TYPE
              </label>
              <div className="mt-2">
                <input
                  id="blood-type"
                  name="blood_type"
                  type="text"

                  placeholder="Ex: Type O"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        value={blood_type}
        onChange={(event) => {
            setBloodType(event.target.value)
        }}
      />
              </div>
            </div>


                                          <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                METHOD
              </label>
              <div className="mt-2">
                <input
                  id="method-test"
                  name="method_test"
                  type="test"
                  placeholder="Ex: Saliva Extraction"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                 value={method_test}
        onChange={(event) => {
            setMethodTest(event.target.value)
        }}/>
              </div>
            </div>


                        </div>
                        </div>



        <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-8 grid border gap-4 sm:grid-cols-8">
            <div className="grid grid-col-1 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Serial Number</h2>
            </div>
                         <div className="mt-2">
                <input
                  id="serial_number"
                  name="serial_number"
                  type="text"
                  placeholder="Ex: 123456789"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 value={serial_number}
        onChange={(event) => {
            setSerialNumber(event.target.value)
        }}/>
              </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Donor's Blood Type</h2>
            </div>
              <div className="mt-2">
                <input
                  id="donor-blood-type"
                  name="donor_blood_type"
                  type="text"

                  placeholder="Ex. Type O"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 value={donor_blood_type}
        onChange={(event) => {
            setBloodDonor(event.target.value)
        }}/>
              </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Source</h2>
            </div>
                          <div className="mt-2">
                <input
                  id="source"
                  name="source"
                  type="text"
                  placeholder="Ex. Saliva"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 value={source}
        onChange={(event) => {
            setSource(event.target.value)
        }}/>
              </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Component</h2>
            </div>
                          <div className="mt-2">
                <input
                  id="component"
                  name="component"
                  type="text"
                  placeholder="Component"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 value={component}
        onChange={(event) => {
            setComp(event.target.value)
        }}/>
              </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Content</h2>
            </div>
                          <div className="mt-2">
                <input
                  id="content"
                  name="content"
                  type="text"
                  placeholder="Content"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 value={content}
        onChange={(event) => {
            setCont(event.target.value)
        }}/>
              </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Extract Date</h2>
            </div>
                          <div className="mt-2">
                <input
                  id="extract-date"
                  name="extract_date"
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={extract_date}
        onChange={(event) => {
            setExtractDate(event.target.value)
        }} />
              </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Expiry Date</h2>
            </div>
                          <div className="mt-2">
                <input
                  id="expiry-date"
                  name="expiry_date"
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={expiry_date}
        onChange={(event) => {
            setExpiryDate(event.target.value)
        }} />
              </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Crossmatching Result</h2>
            </div>
                          <div className="mt-2">
                <input
                  id="crossmatching-result"
                  name="crossmatching_result"
                  type="text"
                  placeholder="Positive/Negative"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={crossmatching_result}
        onChange={(event) => {
            setMatchingResult(event.target.value)
        }} />
              </div>
            </div>

            </div>


        </div>
        <div className="border-b border-gray-900/10 pb-12">
             <div className="grid grid-col-2 gap-2">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Others</h2>
            </div>
                          <div className="mt-2">
                <input
                  id="others"
                  name="others"
                  type="test"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 value={others}
        onChange={(event) => {
            setOther(event.target.value)
        }}/>
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
                            onClick={save}>
                                    <Tbutton>Add</Tbutton>
                            </div>
                    </div>
                </div>
            </form>

</PageComponent>
        )
}


