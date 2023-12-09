import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import axios from 'axios';

export default function Chemistry() {
    const [lab_number, setLabNumber] = useState('');
    const [speciment_type, setSpecimentType] = useState('');
const [source_of_speciment, setSourceSpecimen] = useState('');
    const [result, setResults] = useState('');
const [remarks_culture, setRemarksCulture] = useState('');

    const [fbs, setFbs] = useState('');
const [rbs, setRbs] = useState('');
    const [creatinine, setCreatinine] = useState('');
const [uric_acid, setUricAcid] = useState('');
    const [sgot, setSgot] = useState('');
const [sgpt, setSgpt] = useState('');
 const [alkaline_phos, setAlkalinePhos] = useState('');
 const [ldh, setLdh] = useState('');
 const [ggt, setGgt] = useState('');
 const [magnesium, setMagnesium] = useState('');
 const [phosphorus, setPhosphorus] = useState('');
 const [amylase, setAmylase] = useState('');
 const [remarks_chem, setRemarksChem] = useState('');

  const [cholesterol, setCholesterol] = useState('');
 const [triglyceride, setTryleceride] = useState('');
 const [hdl, setHdl] = useState('');
 const [ldl, setLdl] = useState('');

 const [hbac, setHbac] = useState('');

  const [urine_volume, setUrineVolume] = useState('');
 const [serum_creatinine, setSerumCreatinine] = useState('');
 const [urine_creatinine, setUrineCreatinine] = useState('');
 const [hours_urine_creatinine, setHoursUrineCreatinine] = useState('');
 const [creatinine_clearance, setCreatinineClearance] = useState('');


 const [sodium, setSodium] = useState('');
 const [potassium, setPotassium] = useState('');
 const [calcium_total, setCalciumTotal] = useState('');
 const [calcium_ionized, setCalciumIonized] = useState('');
 const [ph, setPh] = useState('');
 const [chloride, setChloride] = useState('');


 const [total_bilirubin, setTotalBilirubin] = useState('');
 const [direct_bilirubin, setDirectBilirubin] = useState('');
 const [indirect_bilirubin, setIndirectBilirubin] = useState('');


 const [total_protein, setTotalProtein] = useState('');
 const [albumin, setAlbumin] = useState('');
 const [globulin, setGlobulin] = useState('');
 const [ag_ratio, setAgRatio] = useState('');

 const [urea, setUrea] = useState('');

 const [glucose_load, setGlucoseLoad] = useState('');
  const [glucose_result, setGlucoseResult] = useState('');
   const [remark_glucos, setRemarksGlucose] = useState('');

 const [blood_fbs, setBloodFbs] = useState('');
 const [first_hour, setFirstHour] = useState('');
 const [second_hour, setSecondHour] = useState('');
 const [third_hour, setThirdHour] = useState('');

 const [fasting, setFasting] = useState('');
 const [fasting_first_hour, setFastingFirst] = useState('');
 const [fasting_second_hour, setFastingSecond] = useState('');
 const [fasting_third_hour, setFastingThird] = useState('');
 const [patient_information_id, setPatientID] = useState('');
//  async function Load()
//      {
//         const result = await axios.get(
//             "http://localhost:8000/api/patients");
//             setUsers(result.data);
//             console.log(result.data);
//      }

     async function save(event)
     {
        event.preventDefault();
        try {
          await axios.post(
                "http://localhost:8000/api/save_chemistry",
                {
                patient_information_id: patient_information_id,
                    lab_number: lab_number,
                    speciment_type: speciment_type,
                    source_of_speciment: source_of_speciment,
                    result: result,
                    remarks_culture: remarks_culture,

                    fbs: fbs,
                    rbs: rbs,
                    creatinine: creatinine,
                    uric_acid: uric_acid,
                    sgot: sgot,
                    sgpt: sgpt,
                    alkaline_phos:alkaline_phos,
                    ldh:ldh,
                    ggt: ggt,
                    magnesium: magnesium,
                    phosphorus: phosphorus,
                    amylase: amylase,
                    remarks_chem: remarks_chem,

                    sodium: sodium,
                    potassium: potassium,
                    calcium_total: calcium_total,
                    calcium_ionized: calcium_ionized,
                    ph: ph,
                    chloride: chloride,

                    total_bilirubin: total_bilirubin,
                    direct_bilirubin: direct_bilirubin,
                    indirect_bilirubin: indirect_bilirubin,

                    cholesterol: cholesterol,
                    triglyceride: triglyceride,
                    hdl: hdl,
                    ldl: ldl,

                    hbac: hbac,

                    total_protein: total_protein,
                    albumin: albumin,
                    globulin: globulin,
                    ag_ratio: ag_ratio,

                    urine_volume: urine_volume,
                    serum_creatinine: serum_creatinine,
                    urine_creatinine: urine_creatinine,
                    hours_urine_creatinine: hours_urine_creatinine,
                    creatinine_clearance: creatinine_clearance,

                    urea: urea,

                    glucose_load: glucose_load,
                    glucose_result: glucose_result,
                    remark_glucos: remark_glucos,

                    blood_fbs: blood_fbs,
                    first_hour: first_hour,
                    second_hour: second_hour,
                    third_hour: third_hour,

                    fasting: fasting,
                    fasting_first_hour: fasting_first_hour,
                    fasting_second_hour: fasting_second_hour,
                    fasting_third_hour: fasting_third_hour

                });
                alert("Patient Successfully Registered");
                setPatientID("");
                setLabNumber("");
                setSpecimentType("");
                setSourceSpecimen("");
                setResults("");
                setRemarksCulture("");
                setFbs("");
                setCreatinine("");
                setUricAcid("");
                setSgot("");
                setSgpt("");
                setAlkalinePhos("");
                setLdh("");
                setGgt("");
                setMagnesium("");
                setPhosphorus("");
                setAmylase("");
                setSodium("");
                setPotassium("");
                setCalciumTotal("");
                setCalciumIonized("");
                setPh("");
                setChloride("");
                setTotalBilirubin("");
                setDirectBilirubin("");
                setIndirectBilirubin("");
                setCholesterol("");
                setTryleceride("");
                setHdl("");
                setLdl("");
                setHbac("");
                setTotalProtein("");
                setAlbumin("");
                setGlobulin("");
                setAgRatio("");
                setUrineVolume("");
                setSerumCreatinine("");
                setUrineCreatinine("");
                setHoursUrineCreatinine("");
                setCreatinineClearance("");
                setUrea("");
                setRemarksChem("");
                setGlucoseLoad("");
                setFbsGlucose("");
                setFirstHour("");
                setSecondHour("");
                setThirdHour("");
                setFasting("");
                setFastingFirst("");
                setFastingSecond("");
                setFastingThird("");
                setGlucoseResult("");
                setRemarksGlucose("");

        }
        catch(err)
        {
            alert("Patient Registration Failed");
        }
     }


    return (
<PageComponent title='Chemistry'>




            <form action="#" method="POST">

{/* Chemistry*/}
<div className="sm:col-span-2 " >
    <label className="block text-2xl text-center font-medium leading-6 text-gray-900">
  Search
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="patient_information_id"
        id="patientInfo"
        autoComplete="given-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={patient_information_id}
        onChange={(event) => {
            setPatientID(event.target.value)
        }}
      />
      </div>
      </div>


   <div className="sm:col-span-1 " >
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Culture And Sensitivity Initial Result</h2>
            </div>


          <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Laboratory No.
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lab_number"
                  id="laboratory-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                   value={lab_number}
                   onChange={(event)=>
                 {
                     setLabNumber(event.target.value);
                 }}
                />
              </div>
            </div>


            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Specimen Type
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="speciment_type"
                  id="specimenType"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  value={speciment_type}
                  onChange={(event)=>
                {
                    setSpecimentType(event.target.value);
                }}
                />
              </div>
            </div>
                        <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Source of Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="source_of_speciment"
                  id="sourceSpecimen"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={source_of_speciment}
                  onChange={(event)=>
                {
                    setSourceSpecimen(event.target.value);
                }}
                />
              </div>
            </div>

          </div>
        </div>
            <div className="sm:col-span-8 " >
              <label className="block text-2xl text-center font-medium leading-6 text-gray-900">
                RESULT
              </label>
              <div className="mt-2">
                <textarea
                  id="result"
                  name="result"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={result}
                  onChange={(event)=>
                {
                    setResults(event.target.value);
                }}
                />
                 </div>
                </div>

               <div className="sm:col-span-8 " >
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_culture"
                  id="remarks"
                  placeholder="Remarks"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={remarks_culture}
                  onChange={(event)=>
                {
                    setRemarksCulture(event.target.value);
                }}
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
                                name="fbs"
                                id="fbs"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                   value={fbs}
                  onChange={(event)=>
                {
                    setFbs(event.target.value);
                }}

                                 />
                             </div>
                        </div>
                         </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="rbs"
                                id="rbs"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={rbs}
                  onChange={(event)=>
                {
                    setRbs(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="creatinine"
                                id="creatinine"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                  value={creatinine}
                  onChange={(event)=>
                {
                    setCreatinine(event.target.value);
                }}
                                />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="uric_acid"
                                id="uric-acid"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={uric_acid}
                  onChange={(event)=>
                {
                    setUricAcid(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="sgot"
                                id="sgot"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={sgot}
                  onChange={(event)=>
                {
                    setSgot(event.target.value);
                }}
                                />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="sgpt"
                                id="sgpt"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={sgpt}
                  onChange={(event)=>
                {
                    setSgpt(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="alkaline_phos"
                                id="alkaline-phos"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                   value={alkaline_phos}
                  onChange={(event)=>
                {
                    setAlkalinePhos(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="ldh"
                                id="ldh"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={ldh}
                  onChange={(event)=>
                {
                    setLdh(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="ggt"
                                id="ggt"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={ggt}
                  onChange={(event)=>
                {
                    setGgt(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="magnesium"
                                id="magnesium"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={magnesium}
                  onChange={(event)=>
                {
                    setMagnesium(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="phosphorus"
                                id="phosphorus"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={phosphorus}
                  onChange={(event)=>
                {
                    setPhosphorus(event.target.value);
                }}

                                />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="amylase"
                                id="amylase"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={amylase}
                  onChange={(event)=>
                {
                    setAmylase(event.target.value);
                }}

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
            <h2 className="text-lg font-bold leading-7 text-gray-900">Electrolytes Test</h2>
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



            </div>
                        <div className="grid grid-col-1 gap-1">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Result</h2>
            </div>

            <div>
                        <div className="sm:col-span-1">
                            <div className="mt">
                                <input
                                type="text"
                                name="sodium"
                                id="sodium"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={sodium}
                  onChange={(event)=>
                {
                    setSodium(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="potassium"
                                id="potassium"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={potassium}
                  onChange={(event)=>
                {
                    setPotassium(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="calcium_total"
                                id="calcium-total"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={calcium_total}
                  onChange={(event)=>
                {
                    setCalciumTotal(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="calcium_ionized"
                                id="calcium-ionized"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={calcium_ionized}
                  onChange={(event)=>
                {
                    setCalciumIonized(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="ph"
                                id="ph"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={ph}
                  onChange={(event)=>
                {
                    setPh(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
             <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="chloride"
                                id="chloride"

                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={chloride}
                  onChange={(event)=>
                {
                    setChloride(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
<br/>

                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="total_bilirubin"
                                id="total-bilirubin"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={total_bilirubin}
                  onChange={(event)=>
                {
                    setTotalBilirubin(event.target.value);
                }}

                                />
                             </div>
                        </div>
             </div>

                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="direct_bilirubin"
                                id="direct-bilirubin"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={direct_bilirubin}
                  onChange={(event)=>
                {
                    setDirectBilirubin(event.target.value);
                }}
                                />
                             </div>
                        </div>
             </div>
                                      <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="indirect_bilirubin"
                                id="indirect-bilirubin"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={indirect_bilirubin}
                  onChange={(event)=>
                {
                    setIndirectBilirubin(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>



            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>

                        <div>mmol/L</div>
                        <div>mmol/L</div>
                        <div>mmol/L</div>
                        <div>mmol/L</div>
                        <div>mmol/L</div>
                        <div><br /></div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>


            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>

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
                        <div className="text-md font-semibold">HbA1C</div>
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
                                name="cholesterol"
                                id="cholesterol"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={cholesterol}
                  onChange={(event)=>
                {
                    setCholesterol(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="triglyceride"
                                id="trygleceride"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={triglyceride}
                  onChange={(event)=>
                {
                    setTryleceride(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="hdl"
                                id="hdl"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={hdl}
                  onChange={(event)=>
                {
                    setHdl(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="ldl"
                                id="ldl"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={ldl}
                  onChange={(event)=>
                {
                    setLdl(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="hbac"
                                id="hbac"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={hbac}
                  onChange={(event)=>
                {
                    setHbac(event.target.value);
                }}

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
                        <div>%</div>

            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div>0-200</div>
                        <div>0-150</div>
                        <div>{'> 60'}</div>
                        <div>0-150</div>
                        <div>4.0-5.7</div>


            </div>


        </div>
 <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">

            <div className="grid grid-col-2 gap-2">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">TP A/G Test</h2>
            </div>
                        <div>Total Protein</div>
                        <div>< br/></div>
                        <div>Albumin</div>
                        <div><br/></div>
                        <div><br /></div>
                        <div>Globulin</div>
                        <div>A/G Ratio</div>
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
                                name="total_protein"
                                id="total-protein"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={total_protein}
                  onChange={(event)=>
                {
                    setTotalProtein(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
             <div><br/></div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="albumin"
                                id="albumin"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={albumin}
                  onChange={(event)=>
                {
                    setAlbumin(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
             <br/>
             <br/>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="globulin"
                                id="globulin"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={globulin}
                  onChange={(event)=>
                {
                    setGlobulin(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="ag_ratio"
                                id="ag-ratio"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={ag_ratio}
                  onChange={(event)=>
                {
                    setAgRatio(event.target.value);
                }}

                                 />
                             </div>
                        </div>
             </div>



            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>
                        <div>g/dL</div>
                        <br />
                        <div>g/dL</div>
                        <br />
                        <br />
                        <div>g/dL</div>
                        <br />


            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div>6.4-8.3 Ambulatory</div>
                        <div>6.0-7.8 at Rest</div>
                        <div>Age: {'< 60 | 3.5-5.2'}</div>
                        <div>60-90 | 3.2-4.6</div>
                        <div>{'> 90'} | 2.9-4.5</div>
                        <div>2.0-3.9</div>
                        <br/>


            </div>


        </div>


         <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">

            <div className="grid grid-col-2 gap-2">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Urine Creatinine</h2>
            </div>
                        <div>24 Hours urine Volumn</div>
                        <div>Serum Creatinine</div>
                        <div>Urine Creatinine</div>
                        <div>24 Hours Urine Creatinine</div>
                        <div>Creatinine Clearance</div>
                        <div><br /></div>
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
                                name="urine_volume"
                                id="urine-volume"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={urine_volume}
                  onChange={(event)=>
                {
                    setUrineVolume(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="serum_creatinine"
                                id="serum-creatinine"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={serum_creatinine}
                  onChange={(event)=>
                {
                    setSerumCreatinine(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="urine_creatinine"
                                id="urine-creatinine"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={urine_creatinine}
                  onChange={(event)=>
                {
                    setUrineCreatinine(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="hours_urine_creatinine"
                                id="hours-urine-creatinine"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={hours_urine_creatinine}
                  onChange={(event)=>
                {
                    setHoursUrineCreatinine(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="creatinine_clearance"
                                id="creatinine-clearance"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={creatinine_clearance}
                  onChange={(event)=>
                {
                    setCreatinineClearance(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
             <div><br /></div>




            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>
                        <div>mL</div>
                        <div>mg/dL</div>
                        <div>mg/dL</div>
                        <div>mg</div>
                        <div>mL/min</div>
                        <div>U/L</div>
                        <div><br /></div>

            </div>
                        <div className="grid grid-col-2 gap-4">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div><br /></div>
                        <div><br /></div>
                        <div><br /></div>
                        <div>1000-1500</div>
                        <div>M=98-156</div>
                        <div>F=95-160</div>


            </div>


        </div>


         <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">

            <div className="grid grid-col-2 gap-2">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Test</h2>
            </div>
                        <div className="text-md font-bold">UREA</div>
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
                                name="urea"
                                id="urea"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={urea}
                  onChange={(event)=>
                {
                    setUrea(event.target.value);
                }}
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


            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div>Age: 21-60 | 3.5-5.2</div>
                        <div>60-90 | 17.2-49.3</div>
                        <div>{'> 90 | 17.2-49.3'}</div>



            </div>


        </div>




    </div>

                   <div className="sm:col-span-8 " >
                    <h2 className="text-lg font-bold leading-7 text-gray-900">Remarks</h2>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_chem"
                  id="remarks"
                  autoComplete="given-name"
                  placeholder="Remarks"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={remarks_chem}
                  onChange={(event)=>
                {
                    setRemarksChem(event.target.value);
                }}
                />
              </div>
            </div>
 </div>


 <div className="border-b border-gray-900/10 pb-12">
            <div className="sm:col-span-1 " >
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Oral Glucos Tolerance Test (OGTT)</h2>
            </div>


    <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">
         <div className="sm:col-span-1">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Glucose Load
              </label>
              <div className="mt-2">
                <input
                  id="glucose-load"
                  name="glucose_load"
                  type="text"
                  placeholder="Glucose Load"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={glucose_load}
                  onChange={(event)=>
                {
                    setGlucoseLoad(event.target.value);
                }}
                />
              </div>
            </div>
    </div>





         <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-8">

            <div className="grid grid-col-2 gap-2">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Blood Glucose</h2>
            </div>
                        <div className="text-md font-bold">FBS</div>
                         <div className="text-md font-bold">1st Hour</div>
                          <div className="text-md font-bold">2nd Hour</div>
                           <div className="text-md font-bold">3rd Hour</div>

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
                                name="blood_fbs"
                                id="fbs"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={blood_fbs}
                  onChange={(event)=>
                {
                    setBloodFbs(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="first_hour"
                                id="first-hour"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={first_hour}
                  onChange={(event)=>
                {
                    setFirstHour(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="second_hour"
                                id="second-hour"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={second_hour}
                  onChange={(event)=>
                {
                    setSecondHour(event.target.value);
                }}
                                />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="third_hour"
                                id="third_hour"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={third_hour}
                  onChange={(event)=>
                {
                    setThirdHour(event.target.value);
                }}

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


            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div>{'< 95 mg/dL'}</div>
                        <div>{'< 180 mg/dL'}</div>
                        <div>{'< 155 mg/dL'}</div>
                          <div>{'< 1140 mg/dL'}</div>



            </div>
             <div className="grid grid-col-2 gap-2">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Urine Glucose</h2>
            </div>
                                               <div className="text-md font-bold">Fasting</div>
                         <div className="text-md font-bold">1st Hour</div>
                          <div className="text-md font-bold">2nd Hour</div>
                           <div className="text-md font-bold">3rd Hour</div>
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
                                name="fasting"
                                id="fasting"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={fasting}
                  onChange={(event)=>
                {
                    setFasting(event.target.value);
                }}
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="fasting_first_hour"
                                id="first-hour"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={fasting_first_hour}
                                onChange={(event)=>
                              {
                                  setFastingFirst(event.target.value);
                              }}

                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="fasting_second_hour"
                                id="second-hour"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                value={fasting_second_hour}
                                onChange={(event)=>
                              {
                                  setFastingSecond(event.target.value);
                              }}
                              />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-2">
                            <div className="mt">
                                <input
                                type="text"
                                name="fasting_third_hour"
                                id="third-hour"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={fasting_third_hour}
                                onChange={(event)=>
                              {
                                  setFastingThird(event.target.value);
                              }}
                                 />
                             </div>
                        </div>
             </div>
            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Unit</h2>
            </div>



            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
            </div>



        </div>



 <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4">

            <div className="grid grid-col-2 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Test</h2>
            </div>
                        <div className="text-lg font-bold">50 Grams Oral Glucose Challenge</div>

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
                                name="glucose_result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={glucose_result}
                                onChange={(event)=>
                              {
                                  setGlucoseResult(event.target.value);
                              }}
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



            </div>
                        <div className="grid grid-col-2 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 text-gray-900">Reference Range</h2>
            </div>
                        <div>{'< 140 mg/dL'}</div>



            </div>
        </div>


<div className="sm:col-span-8 " >
                    <h2 className="text-lg font-bold leading-7 text-gray-900">Remarks</h2>
              <div className="mt-2">
                <input
                  type="text"
                  name="remark_glucos"
                  id="remarksGlucos"
                  autoComplete="given-name"
                  placeholder="Remarks"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={remark_glucos}
                                onChange={(event)=>
                              {
                                  setRemarksGlucose(event.target.value);
                              }}
                />
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



                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6" onClick={save}>
                                    <Tbutton>Add</Tbutton>
                            </div>


            </form>


</PageComponent>
        )
}


