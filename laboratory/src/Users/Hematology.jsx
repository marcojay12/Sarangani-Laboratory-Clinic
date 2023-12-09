import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useState } from "react";
import axios from 'axios';

export default function Hematology() {
    const [patient_information_id, setPatientID] = useState('');
  const [hemoglobin, setHemog] = useState('');
  const [hematocrit, setHemato] = useState('');
    const [rbc_count, setRbcCount] = useState('');
  const [wbc_count, setWbcCount] = useState('');
    const [mcv, setMcv] = useState('');
  const [mch, setMch] = useState('');
    const [mchc, setMchc] = useState('');
  const [neutrophils, setNeutrophils] = useState('');
    const [lymphocytes, setlymphocytes] = useState('');
  const [monocytes, setMonocytes] = useState('');
    const [eosinophils, setEosinophils] = useState('');
  const [basophils, setBasophils] = useState('');
    const [platelet_count, setPlatelet] = useState('');
  const [clotting_time, setClotting] = useState('');
    const [bleeding_time, setBleeding] = useState('');
  const [erythrocyte, setErythrocyte] = useState('');
    const [reticulocyte, setReticulocyte] = useState('');
  const [remarks_hematology, setRemarksHemato] = useState('');
    const [pt, setPt] = useState('');
  const [protime_control, setProtimeControl] = useState('');
    const [activity, setActivity] = useState('');
  const [inr, setInr] = useState('');
    const [ptt, setPtt] = useState('');
  const [appt_control, setAppt] = useState('');
    const [ratio, setRatio] = useState('');
  const [remarks_coagulation, setRemarksCoagulation] = useState('');

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
             "http://localhost:8000/api/save_hematology",
             {
                patient_information_id: patient_information_id,
                 hemoglobin: hemoglobin,
                 hematocrit: hematocrit,
                  rbc_count: rbc_count,
                 wbc_count: wbc_count,
                  mcv: mcv,
                 mch: mch,
                  mchc: mchc,
                 neutrophils: neutrophils,
                  lymphocytes: lymphocytes,
                 monocytes: monocytes,
                  eosinophils: eosinophils,
                 basophils: basophils,
                  platelet_count: platelet_count,
                 clotting_time: clotting_time,
                  bleeding_time: bleeding_time,
                 erythrocyte: erythrocyte,
                  reticulocyte: reticulocyte,
                 remarks_hematology: remarks_hematology,
                  pt: pt,
                 protime_control: protime_control,
                  activity: activity,
                 inr: inr,
                  ptt: ptt,
                 appt_control: appt_control,
                  ratio: ratio,
                 remarks_coagulation: remarks_coagulation



             });
             alert("Patient Successfully Registered");
             setPatientID("");
             setHemog("");
             setHemato("");
             setRbcCount("");
             setWbcCount("");
             setMcv("");
             setMch("");
             setMchc("");
             setNeutrophils("");
             setlymphocytes("");
             setMonocytes("");
             setEosinophils("");
             setBasophils("");
             setPlatelet("");
             setClotting("");
             setBleeding("");
             setErythrocyte("");
             setReticulocyte("");
             setRemarksHemato("");
             setPt("");
             setProtimeControl("");
             setActivity("");
             setInr("");
             setPtt("");
             setAppt("");
             setRatio("");
             setRemarksCoagulation("");

     }
     catch(err)
     {
         alert("Patient Registration Failed");
     }
  }
    return (
<PageComponent title='Hematology'>
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
                                         value={hemoglobin}
        onChange={(event) => {
            setHemog(event.target.value)
        }}
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

                                         value={hematocrit}
        onChange={(event) => {
            setHemato(event.target.value)
        }}/>
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

                                        value={rbc_count}
        onChange={(event) => {
            setRbcCount(event.target.value)
        }}/>
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

                                        value={wbc_count}
        onChange={(event) => {
            setWbcCount(event.target.value)
        }}/>
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

                                         value={neutrophils}
        onChange={(event) => {
            setNeutrophils(event.target.value)
        }}/>
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

                                         value={lymphocytes}
        onChange={(event) => {
            setlymphocytes(event.target.value)
        }}/>
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

                                         value={monocytes}
        onChange={(event) => {
            setMonocytes(event.target.value)
        }}/>
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

                                         value={eosinophils}
        onChange={(event) => {
            setEosinophils(event.target.value)
        }}/>
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

                                        value={basophils}
        onChange={(event) => {
            setBasophils(event.target.value)
        }}/>
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

                                        value={mcv}
        onChange={(event) => {
            setMcv(event.target.value)
        }}/>
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

                                        value={mch}
        onChange={(event) => {
            setMch(event.target.value)
        }}/>
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

                                        value={mchc}
        onChange={(event) => {
            setMchc(event.target.value)
        }}/>
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

                                         value={platelet_count}
        onChange={(event) => {
            setPlatelet(event.target.value)
        }}/>
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

                                        value={clotting_time}
        onChange={(event) => {
            setClotting(event.target.value)
        }}/>
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

                                         value={bleeding_time}
        onChange={(event) => {
            setBleeding(event.target.value)
        }}/>
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

                                         value={erythrocyte}
        onChange={(event) => {
            setErythrocyte(event.target.value)
        }}/>
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

                                         value={reticulocyte}
        onChange={(event) => {
            setReticulocyte(event.target.value)
        }}/>
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
                  name="remarks_hematology"
                  id="remarksHematology"
                  placeholder="Remarks"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        value={remarks_hematology}
        onChange={(event) => {
            setRemarksHemato(event.target.value)
        }}/>
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

                                        value={pt}
        onChange={(event) => {
            setPt(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="protime_control"
                                id="control"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                        value={protime_control}
        onChange={(event) => {
            setProtimeControl(event.target.value)
        }}/>
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

                                        value={activity}
        onChange={(event) => {
            setActivity(event.target.value)
        }}/>
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

                                        value={ptt}
        onChange={(event) => {
            setPtt(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
            <div>
                        <div className="sm:col-span-2 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="appt_control"
                                id="control"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                         value={appt_control}
        onChange={(event) => {
            setAppt(event.target.value)
        }}/>

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

                                         value={ratio}
        onChange={(event) => {
            setRatio(event.target.value)
        }}/>
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

<div className="sm:col-span-8 " >
                    <h2 className="text-lg font-bold leading-7 text-gray-900">INR</h2>
              <div className="mt-2">
                <input
                  type="text"
                  name="inr"
                  id="inr"
                  placeholder="Remarks"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        value={inr}
        onChange={(event) => {
            setInr(event.target.value)
        }}/>
              </div>
            </div>

        </div>



<div className="sm:col-span-8 " >
                    <h2 className="text-lg font-bold leading-7 text-gray-900">Remarks</h2>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_coagulation"
                  id="remarks_coagulation"
                  placeholder="Remarks"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        value={remarks_coagulation}
        onChange={(event) => {
            setRemarksCoagulation(event.target.value)
        }}/>
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


