import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useState } from "react";
import axios from 'axios';

export default function Microbiology() {
    const [patient_information_id, setPatientID] = useState('');
  const [lab_number, setLabnumber] = useState('');
  const [specimen_type, setSpecimenTest] = useState('');
    const [source_of_specimen, setSourceSpecimen] = useState('');
  const [result_sensitive, setResultSensitive] = useState('');
    const [culture_isolate, setCultureIsolate] = useState('');
  const [sensitive_report, setSensitiveReport] = useState('');
    const [resistant_report, setResistantReport] = useState('');
  const [intermediate_report, setIntermediate] = useState('');
    const [specimen_gram, setSpecimenGram] = useState('');
  const [result_gram, setResultGram] = useState('');
    const [epithelial_cell, setEpithelialCell] = useState('');
  const [polymorphonuclears, setPolymorphonus] = useState('');
    const [remarks_gram, setRemarksGram] = useState('');
  const [specimen_afb, setSpecimenAfb] = useState('');
    const [result_afb, setResultAfb] = useState('');
  const [remarks_afb, setRemarksAfb] = useState('');
   const [specimen_koh, setSpecimenKoh] = useState('');
    const [result_koh, setResultKoh] = useState('');
  const [remarks_koh, setRemarksKoh] = useState('');

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
             "http://localhost:8000/api/save_microbiology",
             {
                patient_information_id: patient_information_id,
                 lab_number: lab_number,
                 specimen_type: specimen_type,
                  source_of_specimen: source_of_specimen,
                 result_sensitive: result_sensitive,
                  culture_isolate: culture_isolate,
                 sensitive_report: sensitive_report,
                  resistant_report: resistant_report,
                 intermediate_report: intermediate_report,
                  specimen_gram: specimen_gram,
                 result_gram: result_gram,
                  epithelial_cell: epithelial_cell,
                 polymorphonuclears: polymorphonuclears,
                  remarks_gram: remarks_gram,
                 specimen_afb: specimen_afb,
                  result_afb: result_afb,
                 remarks_afb: remarks_afb,
                  specimen_koh: specimen_koh,
                  result_koh: result_koh,
                 remarks_koh: remarks_koh



             });
             alert("Patient Successfully Registered");
             setPatientID("");
             setLabnumber("");
             setSpecimenTest("");
            setSourceSpecimen("");
            setResultSensitive("");
            setCultureIsolate("");
            setSensitiveReport("");
            setResistantReport("");
            setIntermediate("");
            setSpecimenGram("");
            setResultGram("");
            setEpithelialCell("");
            setPolymorphonus("");
            setRemarksGram("");
            setSpecimenAfb("");
            setResultAfb("");
            setRemarksAfb("");
            setSpecimenKoh("");
            setResultKoh("");
            setRemarksKoh("");


     }
     catch(err)
     {
         alert("Patient Registration Failed");
     }
  }
    return (
<PageComponent title='Microbiology'>
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
                        value={lab_number}
        onChange={(event) => {
            setLabnumber(event.target.value)
        }}
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
                        value={specimen_type}
        onChange={(event) => {
            setSpecimenTest(event.target.value)
        }}/>
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
                        value={source_of_specimen}
        onChange={(event) => {
            setSourceSpecimen(event.target.value)
        }}/>
              </div>
            </div>

                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="result_sensitive"
                  id="result"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={result_sensitive}
        onChange={(event) => {
            setResultSensitive(event.target.value)
        }}/>
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
                        value={culture_isolate}
        onChange={(event) => {
            setCultureIsolate(event.target.value)
        }}/>
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
                  name="sensitive_report"
                  rows={15}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

value={sensitive_report}
        onChange={(event) => {
            setSensitiveReport(event.target.value)
        }} />

              </div>
            </div>
                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Resistant
              </label>
              <div className="mt-2">
                               <textarea
                  id="resistant"
                  name="resistant_report"
                  rows={15}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                       value={resistant_report}
        onChange={(event) => {
            setResistantReport(event.target.value)
        }} />
              </div>
            </div>
                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Intermediate
              </label>
              <div className="mt-2">
                                <textarea
                  id="intermediate"
                  name="intermediate_report"
                  rows={15}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                       value={intermediate_report}
        onChange={(event) => {
            setIntermediate(event.target.value)
        }} />
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
                Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="specimen_gram"
                  id="specimen"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={specimen_gram}
        onChange={(event) => {
            setSpecimenGram(event.target.value)
        }}/>
              </div>
            </div>
                        <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="result_gram"
                  id="result"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={result_gram}
        onChange={(event) => {
            setResultGram(event.target.value)
        }}/>
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
                        value={epithelial_cell}
        onChange={(event) => {
            setEpithelialCell(event.target.value)
        }}/>
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
                        value={polymorphonuclears}
        onChange={(event) => {
            setPolymorphonus(event.target.value)
        }}/>
              </div>
            </div>
            <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_gram"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={remarks_gram}
        onChange={(event) => {
            setRemarksGram(event.target.value)
        }}/>
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
                Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="specimen_afb"
                  id="Specimen"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={specimen_afb}
        onChange={(event) => {
            setSpecimenAfb(event.target.value)
        }}/>
              </div>
            </div>
                        <div className="sm:col-span-3 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="result_afb"
                  id="result"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
value={result_afb}
        onChange={(event) => {
            setResultAfb(event.target.value)
        }}/>
              </div>
            </div>

            <div className="sm:col-span-3 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_afb"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={remarks_afb}
        onChange={(event) => {
            setRemarksAfb(event.target.value)
        }}/>
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
                Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="specimen_koh"
                  id="specimen"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={specimen_koh}
        onChange={(event) => {
            setSpecimenKoh(event.target.value)
        }}/>
              </div>
            </div>
                        <div className="sm:col-span-3 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="result_koh"
                  id="result"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       value={result_koh}
        onChange={(event) => {
            setResultKoh(event.target.value)
        }} />
              </div>
            </div>

            <div className="sm:col-span-3 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_koh"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={remarks_koh}
        onChange={(event) => {
            setRemarksKoh(event.target.value)
        }}/>
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


