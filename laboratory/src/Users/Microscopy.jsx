import { PhotoIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/TButton";
import { useState } from "react";
import Tab from "../components/tab";

export default function Microscopy() {
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
<PageComponent title='Microscopy'>

    <form action="#" method="POST" onSubmit={onSubmit}>
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
                  name="remarks"
                  id="pt-remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                 />
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
                                 />
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
                                id="amorphous-urates"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
                             </div>
                        </div>
             </div>
                             <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="others"
                                id="others"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block w-24 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                name="wbc"
                                id="wbc"
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
                                name="rbc"
                                id="rbc"
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
                                name="epithelial_cell"
                                id="epithelial-cell"
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
                                name="bacteria"
                                id="bacteria"
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
                                name="mucus_threads"
                                id="mucus-threads"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block  rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                  name="remarks"
                  id="remarks"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                                name="color"
                                id="color"
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
                                name="consistency"
                                id="consistency"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
                             </div>
                        </div>
             </div>
             <div><br/></div>
                <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="rbc"
                                id="rbc"
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
                                name="wbc"
                                id="wbc"
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
                                name="fat_globules"
                                id="fat-globules"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block  rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
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
                                 />
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
                                 />
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
                                 />
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
                                 />
                             </div>
                        </div>
             </div>
                         <div>
                        <div className="sm:col-span-1 ">
                            <div className="mt">
                                <input
                                type="text"
                                name="hookworm_ova"
                                id="hookworm-ova"
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
                                name="histolytica_cyst"
                                id="histolytica-cyst"
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
                                name="histolytica_trophozoite"
                                id="histolytica-trophozoite"
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
                                name="entamoeba_coli_cyst"
                                id="entamoeba-coli-cyst"
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
                                name="entamoeba_coli_trophozoite"
                                id="entamoeba-coli-trophozoite"
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
                                name="giardia_lamblia_cyst"
                                id="giardia-lamblia-cyst"
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
                                name="giardia_lamblia_trophozoitee"
                                id="giardia-lamblia-trophozoite"
                                autoComplete="family-name"
                                placeholder="Result"
                                className="block rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 />
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
                  name="others"
                  id="others"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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


