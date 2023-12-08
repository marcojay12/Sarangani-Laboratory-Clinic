import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useState } from "react";

export default function Serology() {
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
<PageComponent title='Serology'>

    <form action="#" method="POST" onSubmit={onSubmit}>
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
                                name="troponin"
                                id="troponin"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
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
                                 />
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
                  name="remarks"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ig_g"
                                id="ig-g"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>

             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ig_m"
                                id="ig-m"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
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
                                name="ig_g"
                                id="ig-g"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>

             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="ig_m"
                                id="ig-m"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                  name="remarks"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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


