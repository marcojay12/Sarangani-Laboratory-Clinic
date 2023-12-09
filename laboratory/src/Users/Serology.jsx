import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useState } from "react";
import axios from 'axios';
export default function Serology() {
 const [patient_information_id, setPatientID] = useState('');
  const [troponin_feia, setTroponinFeia] = useState('');
  const [ck_mb, setCkMb] = useState('');
    const [remarks_feia, setRemarksFeia] = useState('');
  const [hbsag, setHbsag] = useState('');
    const [anti_hbs, setHbs] = useState('');
  const [anti_hcv, setHcv] = useState('');
    const [syphilis, setSyphilis] = useState('');
  const [aso, setAso] = useState('');
    const [ra_rf, setRaRf] = useState('');
  const [crp, setCrp] = useState('');
    const [troponin, setTroponin] = useState('');
  const [remarks_serology, setRemarksSerology] = useState('');
    const [ns, setNs] = useState('');
  const [ig_g_dengue, setIgDengue] = useState('');
    const [ig_m_dengue, setImDengue] = useState('');
  const [typhi_h, setTyphiH] = useState('');
    const [paratyphi_ah, setParaAh] = useState('');
  const [paratyphi_bh, setParaBh] = useState('');
    const [paratyphi_ch, setParaCh] = useState('');
  const [typhi_o, setTyphiO] = useState('');
    const [paratyphi_ao, setParaAo] = useState('');
  const [paratyphi_bo, setParaBo] = useState('');
    const [paratyphi_co, setParaCo] = useState('');
  const [ig_g_typoid, setIgTyphoid] = useState('');
  const [ig_m_typoid, setImTypoid] = useState('');

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
             "http://localhost:8000/api/save_serology",
             {
                patient_information_id: patient_information_id,
                 troponin_feia: troponin_feia,
                 ck_mb: ck_mb,
                 remarks_feia: remarks_feia,
                  hbsag: hbsag,
                 anti_hbs: anti_hbs,
                  anti_hcv: anti_hcv,
                 syphilis: syphilis,
                  aso: aso,
                 ra_rf: ra_rf,
                  crp: crp,
                 troponin: troponin,
                  remarks_serology: remarks_serology,
                 ns: ns,
                  ig_g_dengue: ig_g_dengue,
                 ig_m_dengue: ig_m_dengue,
                  typhi_h: typhi_h,
                 paratyphi_ah: paratyphi_ah,
                  paratyphi_bh: paratyphi_bh,
                 paratyphi_ch: paratyphi_ch,
                  typhi_o: typhi_o,
                 paratyphi_ao: paratyphi_ao,
                  paratyphi_bo: paratyphi_bo,
                 paratyphi_co: paratyphi_co,
                ig_g_typoid: ig_g_typoid,
                 ig_m_typoid: ig_m_typoid


             });
             alert("Patient Successfully Registered");
             setPatientID("");
             setTroponinFeia("");
             setCkMb("");
             setRemarksFeia("");
             setHbsag("");
             setHbs("");
             setHcv("");
             setSyphilis("");
             setAso("");
             setRaRf("");
             setCrp("");
             setTroponin("");
             setRemarksSerology("");
             setNs("");
             setIgDengue("");
             setImDengue("");
             setTyphiH("");
             setParaAh("");
             setParaBh("");
             setParaCh("");
             setTyphiO("");
             setParaAo("");
             setParaBo("");
             setParaCo("");
             setIgTyphoid("");
             setImTypoid("");

     }
     catch(err)
     {
         alert("Patient Registration Failed");
     }
  }
    return (
<PageComponent title='Serology'>
           <div className="sm:col-span-1 " >
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
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-1">
        <div className="text text-xl font-bold ">FLUORESCENCE ENZYME IMMUNOASSAY</div>
    </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-1">
        <div className="text text-xl font-bold ">CARDIAC MARKERS</div>
    </div>
        <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-8">

            <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Test</h2>
            </div>
                <div className="text-xl font-bold text-gray-900">Troponin-I</div>
            </div>

            <div className="grid grid-col-4 gap-2">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Result</h2>
            </div>
                  <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="troponin_feia"
                                id="troponin"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={troponin_feia}
        onChange={(event) => {
            setTroponinFeia(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
            </div>

            <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Unit</h2>
            </div>
                <div className="text-md font-semibold text-gray-900">ng/ml</div>
            </div>
                        <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Reference Range</h2>
            </div>
                <div className="text-md font-semibold text-gray-900">{'< 0.06'}</div>
            </div>
                        <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Test</h2>
            </div>
                <div className="text-xl font-bold text-gray-900">CK - MB</div>
            </div>

            <div className="grid grid-col-4 gap-2">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Result</h2>
            </div>
                  <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ck_mb"
                                id="ck_mb"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={ck_mb}
        onChange={(event) => {
            setCkMb(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
            </div>

            <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Unit</h2>
            </div>
                <div className="text-md font-semibold text-gray-900">ng/ml</div>
            </div>
                        <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Reference Range</h2>
            </div>
                <div className="text-md font-semibold text-gray-900">{'< 3.7'}</div>
            </div>

        </div>
        <div><br/></div>
                             <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_feia"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               value={remarks_feia}
        onChange={(event) => {
            setRemarksFeia(event.target.value)
        }} />
              </div>
            </div>
</div>



<div className="border-b border-gray-900/10 pb-12">
    <div className="text-2xl text-center font-bold">Serology Examination Result</div>
    <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-2">
             <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">

            <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Test</h2>
            </div>
                        <div className="text-md font-semibold text-gray-900">HBsAG (Hepatitis B Surface Antigen)</div>
                        <div className="text-md font-semibold text-gray-900">Anti - HBS</div>
                        <div className="text-md font-semibold text-gray-900">Anti - HCV</div>
                        <div className="text-md font-semibold text-gray-900">Syphilis (Rapid Test)</div>
                        <div className="text-md font-semibold text-gray-900">ASO (Antistreptolysin O Titer)</div>
                        <div className="text-md font-semibold text-gray-900">RA/RF (Rheumatoid Factor)</div>
                        <div className="text-md font-semibold text-gray-900">CRP (C-Reactive Protein)</div>
                        <div className="text-md font-semibold text-gray-900">Troponin-I</div>


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
                                name="hbsag"
                                id="hbsag"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               value={hbsag}
        onChange={(event) => {
            setHbsag(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="anti_hbs"
                                id="anti-hbs"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={anti_hbs}
        onChange={(event) => {
            setHbs(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="anti_hcv"
                                id="anti-hcv"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={anti_hcv}
        onChange={(event) => {
            setHcv(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="syphilis"
                                id="syphilis"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={syphilis}
        onChange={(event) => {
            setSyphilis(event.target.value)
        }}/>
                             </div>
                        </div>
             </div>
              <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="aso"
                                id="aso"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               value={aso}
        onChange={(event) => {
            setAso(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
              <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ra_rf"
                                id="ra-rf"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={ra_rf}
        onChange={(event) => {
            setRaRf(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
              <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="crp"
                                id="crp"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={crp}
        onChange={(event) => {
            setCrp(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="troponin"
                                id="troponin"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={troponin}
        onChange={(event) => {
            setTroponin(event.target.value)
        }} />
                             </div>
                        </div>
             </div>

            </div>
                        <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >

            </div>
                        <div className="text-md font-semibold text-gray-900"><br/></div>
                        <div className="text-md font-semibold text-gray-900"><br/></div>
                        <div className="text-md font-semibold text-gray-900"><br/></div>
                        <div className="text-md font-semibold text-gray-900">IU/ml 0-200</div>
                        <div className="text-md font-semibold text-gray-900"><br/></div>
                        <div className="text-md font-semibold text-gray-900"><br/></div>




            </div>
     </div>

        <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">

         <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-2xl font-bold leading-7 ">Dengue Duo Test</h2>
            </div>
                        <div className="text-md text-center font-semibold text-gray-900">NS1</div>
                        <div className="text-md text-center font-semibold text-gray-900">IgG</div>
                        <div className="text-md text-center font-semibold text-gray-900">IgM</div>


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
                                name="ns"
                                id="ns"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={ns}
        onChange={(event) => {
            setNs(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ig_g_dengue"
                                id="ig-g"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={ig_g_dengue}
        onChange={(event) => {
            setIgDengue(event.target.value)
        }} />
                             </div>
                        </div>
             </div>

             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ig_m_dengue"
                                id="ig-m"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={ig_m_dengue}
        onChange={(event) => {
            setImDengue(event.target.value)
        }} />
                             </div>
                        </div>
             </div>

            </div>

                     <div className="grid grid-col-4 gap-1">

            <div className="sm:col-span-1 " >
            <h2 className="text-2xl font-bold leading-7 ">Typhoid Test</h2>
            </div>
                        <div className="text-md text-center font-semibold text-gray-900">IgG</div>
                        <div className="text-md text-center font-semibold text-gray-900">IgM</div>
                        <div><br/></div>


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
                                name="ig_g_typoid"
                                id="ig-g"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={ig_g_typoid}
        onChange={(event) => {
            setIgTyphoid(event.target.value)
        }} />
                             </div>
                        </div>
             </div>

             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ig_m_typoid"
                                id="ig-m"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={ig_m_typoid}
        onChange={(event) => {
            setImTypoid(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                          <div><br/></div>

            </div>

     </div>

                  <div className="mt-8 border rounded-md border-gray-300 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2">

            <div className="grid grid-col-4 gap-3">

            <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7 ">Test</h2>
            <div className="text-2xl font-bold text-gray-900">Widal Test (Qualitative)</div>
            </div>

                        <div className="text-md font-semibold text-gray-900">Salmonella Typhi H</div>
                        <div className="text-md font-semibold text-gray-900">Salmonella Paratyphi AH</div>
                        <div className="text-md font-semibold text-gray-900">Salmonella Paratyphi BH</div>
                        <div className="text-md font-semibold text-gray-900">Salmonella Paratyphi CH</div>
                        <div className="text-md font-semibold text-gray-900">Salmonella Typhi O</div>
                        <div className="text-md font-semibold text-gray-900">Salmonella Paratyphi AO</div>
                        <div className="text-md font-semibold text-gray-900">Salmonella Paratyphi BO</div>
                        <div className="text-md font-semibold text-gray-900">Salmonella Paratyphi CO</div>


            </div>
                        <div className="grid grid-col-1 gap-3">
                                        <div className="sm:col-span-1 " >
            <h2 className="text-lg font-bold leading-7">Result</h2>
                                    <div><br/></div>

            </div>
            <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="typhi_h"
                                id="typhi-h"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={typhi_h}
        onChange={(event) => {
            setTyphiH(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="paratyphi_ah"
                                id="paratyphi-ah"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={paratyphi_ah}
        onChange={(event) => {
            setParaAh(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="paratyphi_bh"
                                id="paratyphi-bh"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={paratyphi_bh}
        onChange={(event) => {
            setParaBh(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="paratyphi_ch"
                                id="paratyphi-ch"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={paratyphi_ch}
        onChange={(event) => {
            setParaCh(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
              <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="typhi_o"
                                id="typhi-o"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={typhi_o}
        onChange={(event) => {
            setTyphiO(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
              <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="paratyphi_ao"
                                id="paratyphi-ao"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={paratyphi_ao}
        onChange={(event) => {
            setParaAo(event.target.value)
        }} />
                             </div>
                        </div>
             </div>
              <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="paratyphi_bo"
                                id="paratyphi-bo"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               value={paratyphi_bo}
        onChange={(event) => {
            setParaBo(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>
             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="paratyphi_co"
                                id="paratyphi-co"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               value={paratyphi_co}
        onChange={(event) => {
            setParaCo(event.target.value)
        }}  />
                             </div>
                        </div>
             </div>

            </div>
     </div>
    </div>
                     <div className="sm:col-span-2 " >
              <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
                Remarks
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="remarks_serology"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={remarks_serology}
        onChange={(event) => {
            setRemarksSerology(event.target.value)
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


