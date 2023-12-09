import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useState } from "react";
import axios from 'axios';

export default function Microscopy() {
    const [patient_information_id, setPatientID] = useState('');
  const [specimen, setSpecimen] = useState('');
  const [result, setResult] = useState('');
    const [remarks_pregnancy, setPregnancy] = useState('');
  const [color, setColor] = useState('');
    const [transparency, setTransparency] = useState('');
  const [wbc_urine, setWbcUrine] = useState('');
    const [rbc_urine, setRbcUrine] = useState('');
  const [epithelial_cell, setEpithelial] = useState('');
    const [bacteria, setBacteria] = useState('');
  const [mucus_threads, setMucus] = useState('');
    const [reaction, setReaction] = useState('');
  const [sp_gravity, setGravity] = useState('');
    const [glucose, setGlucos] = useState('');
  const [protein, setProtein] = useState('');
    const [amorphous_urates, setUrates] = useState('');
  const [amorphous_phosphates, setPhosphate] = useState('');
    const [calcium_oxalates, setOxalate] = useState('');
  const [triple_phosphates, setTriplePhosphate] = useState('');
    const [uric_acid, setUricAcid] = useState('');
  const [others_crystal, setOtherCrystal] = useState('');
    const [hyaline_cast, setHyaline] = useState('');
  const [wbc_cast, setWbcCast] = useState('');
    const [rbc_cast, setRbcCast] = useState('');
  const [granular_cast, setGranularCast] = useState('');
    const [pregnancy_test, setPregnancyTest] = useState('');
  const [remarks_cast, setRemarksCast] = useState('');
    const [color_fecal, setColorFecal] = useState('');
  const [consistency, setConsistency] = useState('');
    const [rbc_fecal, setRbcFecal] = useState('');
  const [wbc_fecal, setWbcFecal] = useState('');
    const [fat_globules, setFatGlobules] = useState('');
  const [yeast_cells, setYeastCell] = useState('');
    const [fecal_occult_blood, setOccult] = useState('');
  const [lumbricoides_ova, setLumbricoid] = useState('');
    const [trichiura_ova, setTrichiura] = useState('');
  const [hookworm_ova, setHookWorm] = useState('');
    const [histolytica_cyst, setCyst] = useState('');
  const [histolytica_trophozoite, setTrophozoite] = useState('');
    const [entamoeba_coli_cyst, setEntamoebaCyts] = useState('');
    const [entamoeba_coli_trophozoite, setEntamoeba] = useState('');
  const [giardia_lamblia_cyst, setlambliaCyts] = useState('');
    const [giardia_lamblia_trophozoite, setGiardiaLamblia] = useState('');
  const [others_fecal, setOtherFecal] = useState('');
    const [remarks_fecal, setRemarksFecal] = useState('');


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
             "http://localhost:8000/api/save_microscopy",
             {
                patient_information_id: patient_information_id,
                 specimen: specimen,
                 result: result,
                 remarks_pregnancy: remarks_pregnancy,
                 color: color,
                 transparency: transparency,
                 wbc_urine: wbc_urine,
                 rbc_urine: rbc_urine,
                 epithelial_cell: epithelial_cell,
                 bacteria: bacteria,
                 mucus_threads: mucus_threads,
                 reaction: reaction,
                 sp_gravity: sp_gravity,
                 glucose: glucose,
                 protein: protein,
                 amorphous_urates: amorphous_urates,
                 amorphous_phosphates: amorphous_phosphates,
                 calcium_oxalates: calcium_oxalates,
                 triple_phosphates: triple_phosphates,
                 uric_acid: uric_acid,
                 others_crystal: others_crystal,
                 hyaline_cast: hyaline_cast,
                 wbc_cast: wbc_cast,
                 rbc_cast: rbc_cast,
                 granular_cast: granular_cast,
                 pregnancy_test: pregnancy_test,
                 remarks_cast: remarks_cast,
                 color_fecal: color_fecal,
                 consistency: consistency,
                 rbc_fecal: rbc_fecal,
                 wbc_fecal: wbc_fecal,
                 fat_globules: fat_globules,
                 yeast_cells: yeast_cells,
                 fecal_occult_blood: fecal_occult_blood,
                 lumbricoides_ova: lumbricoides_ova,
                 trichiura_ova: trichiura_ova,
                 hookworm_ova: hookworm_ova,
                 histolytica_cyst: histolytica_cyst,
                 histolytica_trophozoite: histolytica_trophozoite,
                 entamoeba_coli_cyst: entamoeba_coli_cyst,
                 entamoeba_coli_trophozoite: entamoeba_coli_trophozoite,
                 giardia_lamblia_cyst: giardia_lamblia_cyst,
                 giardia_lamblia_trophozoite: giardia_lamblia_trophozoite,
                 others_fecal: others_fecal,
                 remarks_fecal: remarks_fecal


             });
             alert("Patient Successfully Registered");
             setPatientID("");
             setSpecimen("");
             setResult("");
             setPregnancy("");
             setColor("");
             setTransparency("");
             setWbcUrine("");
             setRbcUrine("");
             setEpithelial("");
             setBacteria("");
             setMucus("");
             setReaction("");
             setGravity("");
             setGlucos("");
             setProtein("");
             setUrates("");
             setPhosphate("");
             setOxalate("");
             setTriplePhosphate("");
             setUricAcid("");
             setOtherCrystal("");
             setHyaline("");
             setWbcCast("");
             setRbcCast("");
             setGranularCast("");
             setPregnancyTest("");
             setRemarksCast("");
             setColorFecal("");
             setConsistency("");
             setRbcFecal("");
             setWbcFecal("");
             setFatGlobules("");
             setYeastCell("");
             setOccult("");
             setLumbricoid("");
             setTrichiura("");
             setHookWorm("");
             setCyst("");
             setTrophozoite("");
             setEntamoeba("");
             setEntamoebaCyts("");
             setlambliaCyts("");
             setGiardiaLamblia("");
             setOtherFecal("");
             setRemarksFecal("");

     }
     catch(err)
     {
         alert("Patient Registration Failed");
     }
  }
    return (
<PageComponent title='Microscopy'>

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
                <div className="text-3xl text-center font-bold">Pregnancy Test Result</div>
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-8">

<div className="sm:col-span-3 " >

</div>

             <div className="sm:col-span-2 " >
              <label htmlFor="pt-specimen" className="block text-2xl text-center font-medium leading-6 text-gray-900">
                Specimen
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="specimen"
                  id="pt-specimen"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={specimen}
        onChange={(event) => {
            setSpecimen(event.target.value)
        }}
      />
              </div>
            </div>
            <div className="sm:col-span-3 " >

</div>
<div className="sm:col-span-3 " >

</div>

                         <div className="sm:col-span-2 " >
              <label htmlFor="pt-result" className="block text-center text-2xl font-medium leading-6 text-gray-900">
                Result
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="result"
                  id="pt-result"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={result}
        onChange={(event) => {
            setResult(event.target.value)
        }}
      />
              </div>
            </div>
             <div className="sm:col-span-8 " >
              <label htmlFor="pt-remarks" className="block text-2xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_pregnancy"
                  id="pt-remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       value={remarks_pregnancy}
        onChange={(event) => {
            setPregnancy(event.target.value)
        }}
     />
              </div>
            </div>

          </div>
        </div>

<div className="border-b border-gray-900/10 pb-12">
     <div className="text-3xl text-center font-bold">Urine Examination Result</div>
    <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-3">


     <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">

            <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Macroscopic Examination</h2>
            </div>
                        <div className="text-lg font-semibold text-gray-900">Color</div>
                        <div className="text-lg font-semibold text-gray-900">Transparent</div>

            </div>
                        <div className="grid grid-col-1 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="color"
                                id="color"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                         value={color}
        onChange={(event) => {
            setColor(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="transparency"
                                id="transparency"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={transparency}
        onChange={(event) => {
            setTransparency(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
            </div>
     </div>

          <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">

            <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Crystals</h2>
            </div>
                        <div className="text-md font-semibold text-gray-900">Amorphous Urates</div>
                        <div className="text-md font-semibold text-gray-900">Amorphous Phosphates</div>
                        <div className="text-md font-semibold text-gray-900">Calcium Oxalates</div>
                        <div className="text-md font-semibold text-gray-900">Triple Phosphates</div>
                        <div className="text-md font-semibold text-gray-900">Uric Acid</div>
                        <div className="text-md font-semibold text-gray-900">Others</div>

            </div>
                        <div className="grid grid-col-1 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="amorphous_urates"
                                id="amorphous_urates"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={amorphous_urates}
        onChange={(event) => {
            setUrates(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="amorphous_phosphates"
                                id="amorphous_phosphates"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={amorphous_phosphates}
        onChange={(event) => {
            setPhosphate(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="calcium_oxalates"
                                id="calcium_oxalates"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={calcium_oxalates}
        onChange={(event) => {
            setOxalate(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="triple_phosphates"
                                id="triple_phosphates"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={triple_phosphates}
        onChange={(event) => {
            setTriplePhosphate(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="uric_acid"
                                id="uric_acid"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={uric_acid}
        onChange={(event) => {
            setUricAcid(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="others_crystal"
                                id="others"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={others_crystal}
        onChange={(event) => {
            setOtherCrystal(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
            </div>
     </div>

          <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">

            <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Chemical Examination</h2>
            </div>
                        <div className="text-md font-semibold text-gray-900">Reaction(pH)</div>
                        <div className="text-md font-semibold text-gray-900">Sp. Gravity</div>
                        <div className="text-md font-semibold text-gray-900">Glucose</div>
                        <div className="text-md font-semibold text-gray-900">Protein</div>

            </div>
                        <div className="grid grid-col-1 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="reaction"
                                id="reaction"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              value={reaction}
        onChange={(event) => {
            setReaction(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="sp_gravity"
                                id="sp-gravity"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={sp_gravity}
        onChange={(event) => {
            setGravity(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="glucose"
                                id="glucose"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                         value={glucose}
        onChange={(event) => {
            setGlucos(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="protein"
                                id="protein"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                         value={protein}
        onChange={(event) => {
            setProtein(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
            </div>
     </div>

    </div>
</div>

<div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-2">
      <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">

            <div className="grid grid-col-4 gap-1">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Microscopic Examination</h2>
            </div>
                        <div className="text-md font-semibold text-gray-900">WBC</div>
                        <div className="text-md font-semibold text-gray-900">RBC</div>
                        <div className="text-md font-semibold text-gray-900">Epithelial Cell</div>
                        <div className="text-md font-semibold text-gray-900">Bacteria</div>
                        <div className="text-md font-semibold text-gray-900">Mucus Threads</div>

            </div>
                        <div className="grid grid-col-1 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="wbc_urine"
                                id="wbc"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={wbc_urine}
        onChange={(event) => {
            setWbcUrine(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="rbc_urine"
                                id="rbc"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={rbc_urine}
        onChange={(event) => {
            setRbcUrine(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="epithelial_cell"
                                id="epithelial-cell"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={epithelial_cell}
        onChange={(event) => {
            setEpithelial(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="bacteria"
                                id="bacteria"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={bacteria}
        onChange={(event) => {
            setBacteria(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="mucus_threads"
                                id="mucus-threads"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block  rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={mucus_threads}
        onChange={(event) => {
            setMucus(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
            </div>
<div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Reference</h2>
            </div>
                        <div className="text-md font-semibold text-gray-900">0-2/hpf</div>
                        <div className="text-md font-semibold text-gray-900">0-2/hpf</div>
<div><br/></div>
<div><br/></div>
<div><br/></div>

            </div>

     </div>

     <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">

            <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Casts</h2>
            </div>
                        <div className="text-md font-semibold text-gray-900">Hyaline Cast</div>
                        <div className="text-md font-semibold text-gray-900">WBC Cast</div>
                        <div className="text-md font-semibold text-gray-900">RBC Cast</div>
                        <div className="text-md font-semibold text-gray-900">Granular Cast</div>
                         <div className="text-md font-bold text-gray-900">Pregnancy Test</div>


            </div>
                        <div className="grid grid-col-1 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="hyaline_cast"
                                id="hyaline-cast"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                         value={hyaline_cast}
        onChange={(event) => {
            setHyaline(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="wbc_cast"
                                id="wbc-cast"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={wbc_cast}
        onChange={(event) => {
            setWbcCast(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="rbc_cast"
                                id="rbc-cast"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                         value={rbc_cast}
        onChange={(event) => {
            setRbcCast(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="granular_cast"
                                id="granular-cast"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={granular_cast}
        onChange={(event) => {
            setGranularCast(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="pregnancy_test"
                                id="pregnancy-test"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={pregnancy_test}
        onChange={(event) => {
            setPregnancyTest(event.target.value)
        }} />
                             </div>
                        </div>
             </div>

            </div>
                        <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >

            </div>
            <br/>
                        <div className="text-md font-semibold text-gray-900">/LPF</div>
                        <div className="text-md font-semibold text-gray-900">/LPF</div>
                        <div className="text-md font-semibold text-gray-900">/LPF</div>
                        <div className="text-md font-semibold text-gray-900">/LPF</div>
                        <div className="text-md font-semibold text-gray-900"><br/></div>


            </div>
     </div>
                 <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_cast"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={remarks_cast}
        onChange={(event) => {
            setRemarksCast(event.target.value)
        }}/>
              </div>
            </div>
</div>

<div className="border-b border-gray-900/10 pb-12"></div>
<div className="text-3xl text-center font-bold">Fecalysis Examination Result</div>
<div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-2">
      <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">

            <div className="grid grid-col-4 gap-1">
            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Test</h2>
            </div>
                        <div className="text-lg font-bold text-gray-900">Microscopic Examination</div>
                        <div className="text-md font-semibold text-gray-900">Color</div>
                        <div className="text-md font-semibold text-gray-900">Consistency</div>
                        <div className="text-lg font-bold text-gray-900">Microscopic Examination</div>
                        <div className="text-md font-semibold text-gray-900">RBC</div>
                        <div className="text-md font-semibold text-gray-900">WBC</div>
                        <div className="text-md font-semibold text-gray-900">Fat Globules</div>
                        <div className="text-md font-semibold text-gray-900">Yeast Cells</div>
                        <div className="text-lg font-bold text-gray-900">Fecal Occult Blood</div>

            </div>
                        <div className="grid grid-col-1 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7">Result</h2>

            </div>
            <div><br/></div>
            <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="color_fecal"
                                id="color"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={color_fecal}
        onChange={(event) => {
            setColorFecal(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="consistency"
                                id="consistency"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={consistency}
        onChange={(event) => {
            setConsistency(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
             <div><br/></div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="rbc_fecal"
                                id="rbc"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={rbc_fecal}
        onChange={(event) => {
            setRbcFecal(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="wbc_fecal"
                                id="wbc"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={wbc_fecal}
        onChange={(event) => {
            setWbcFecal(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="fat_globules"
                                id="fat-globules"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block  rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       value={fat_globules}
        onChange={(event) => {
            setFatGlobules(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="yeast_cells"
                                id="yeast-cells"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       value={yeast_cells}
        onChange={(event) => {
            setYeastCell(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="fecal_occult_blood"
                                id="fecal-occult-blood"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       value={fecal_occult_blood}
        onChange={(event) => {
            setOccult(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
            </div>

     </div>

     <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">

            <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Test</h2>
            </div>
                        <div className="text-md font-semibold text-gray-900">Ascaris Lumbricoides Ova</div>
                        <div className="text-md font-semibold text-gray-900">Trichiuris trichiura Ova</div>
                        <div className="text-md font-semibold text-gray-900">Hookworm Ova</div>
                        <div className="text-md font-semibold text-gray-900">Entamoeba histolytica Cyst</div>
                        <div className="text-md font-semibold text-gray-900">E. histolytica Trophozoite</div>
                        <div className="text-md font-semibold text-gray-900">Etamoeba Coli Cyst</div>
                        <div className="text-md font-semibold text-gray-900">Entamoeba Coli Trophozoite</div>
                        <div className="text-md font-semibold text-gray-900">Giardia lambia Cyst</div>
                        <div className="text-md font-semibold text-gray-900">Giardia Lamblia Trophozoite</div>


            </div>
                        <div className="grid grid-col-1 gap-2">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7">Result</h2>

            </div>
            <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="lumbricoides_ova"
                                id="lumbabricoides-ova"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={lumbricoides_ova}
        onChange={(event) => {
            setLumbricoid(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="trichiura_ova"
                                id="trichiura-ova"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       value={trichiura_ova}
        onChange={(event) => {
            setTrichiura(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="hookworm_ova"
                                id="hookwormova"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       value={hookworm_ova}
        onChange={(event) => {
            setHookWorm(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="histolytica_cyst"
                                id="histolyticaCyst"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={histolytica_cyst}
        onChange={(event) => {
            setCyst(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="histolytica_trophozoite"
                                id="histolyticaTrophozoite"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={histolytica_trophozoite}
        onChange={(event) => {
            setTrophozoite(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="entamoeba_coli_cyst"
                                id="entamoebaCyst"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       value={entamoeba_coli_cyst}
        onChange={(event) => {
            setEntamoebaCyts(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="entamoeba_coli_trophozoite"
                                id="entamoeba-coli-trophozoite"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       value={entamoeba_coli_trophozoite}
        onChange={(event) => {
            setEntamoeba(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="giardia_lamblia_cyst"
                                id="giardia-lamblia-cyst"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       value={giardia_lamblia_cyst}
        onChange={(event) => {
            setlambliaCyts(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="giardia_lamblia_trophozoite"
                                id="giardia-lamblia-trophozoite"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                       value={giardia_lamblia_trophozoite}
        onChange={(event) => {
            setGiardiaLamblia(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>

            </div>
     </div>
     <div className="sm:col-span-1 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Others
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="others_fecal"
                  id="others"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      value={others_fecal}
        onChange={(event) => {
            setOtherFecal(event.target.value)
        }}  />
              </div>
            </div>
                 <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_fecal"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={remarks_fecal}
        onChange={(event) => {
            setRemarksFecal(event.target.value)
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


