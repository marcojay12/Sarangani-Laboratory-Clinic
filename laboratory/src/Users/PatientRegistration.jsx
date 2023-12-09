import { useState } from "react";
import PageComponent from "../components/PageComponent";
// { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import axios from 'axios';
// { Await } from "react-router-dom";


export default function PatientRegistration() {
    const [surname, setSurName] = useState('');
        const [middlename, setMiddleName] = useState('');
    const [firstname, setFirstName] = useState('');
        const [suffix, setExtension] = useState('');
    const [age, setAges] = useState('');
        const [gender, setGenders] = useState('');
    const [hospital_number, setHospitalNumber] = useState('');
        const [lab_number, setLabNumber] = useState('');
    const [address, setStreetAddress] = useState('');
        const [physician, setPhysicians] = useState('');
    const [ward, setWards] = useState('');
     const [bed_number, setBedNumber] = useState('');
     const [birthday, setBirthday] = useState('');
     //const [users, setUsers] = useState([]);


    //  useEffect(()=> {
    //     (async () => await Load())();
    //  },[]);


    //  async function Load()
    //  {
    //     const result = await axios.get(
    //         "http://localhost:8000/api/patients");
    //         setUsers(result.data);
    //         console.log(result.data);
    //  }

     async function save(event)
     {
        event.preventDefault();
        try {
          await axios.post(
                "http://localhost:8000/api/save",
                {
                    surname: surname,
                    middlename: middlename,
                    firstname: firstname,
                    suffix: suffix,
                    age: age,
                    gender: gender,
                    hospital_number: hospital_number,
                    lab_number: lab_number,
                    address: address,
                    physician: physician,
                    ward: ward,
                    bed_number:bed_number,
                    birthday:birthday

                });
                alert("Patient Successfully Registered");
                setSurName("");
                setMiddleName("");
                setFirstName("");
                setExtension("");
                setAges("");
                setGenders("");
                setHospitalNumber("");
                setLabNumber("");
                setStreetAddress("");
                setPhysicians("");
                setWards("");
                setBedNumber("");
                setBirthday("");

        }
        catch(err)
        {
            alert("Patient Registration Failed");
        }
     }


    return (
<PageComponent title='Patient Registration'>

<form>
      <div className="space-y-8">

        <div className="border border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Patient Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:grid-cols-8">
            <div className="sm:col-span-2">
              <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">
                Lastname
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="surname"
                  id="surName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={surname}
                    onChange={(event) =>
                    {
                        setSurName(event.target.value)
                    }}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Firstname
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstname"
                  id="firstName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={firstname}
                    onChange={(event) =>
                    {
                        setFirstName(event.target.value)
                    }}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Middlename
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="middlename"
                  id="middleName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={middlename}
                    onChange={(event) =>
                    {
                        setMiddleName(event.target.value)
                    }}
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Suffix
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="suffix"
                  id="extension"

                  className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={suffix}
                    onChange={(event) =>
                    {
                        setExtension(event.target.value)
                    }}
                />
              </div>
            </div>

                        {/* <div className="sm:col-span-2">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Birthday
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="birthday"
                  id="birthdate"

                  className="block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={birthdate}
                    onChange={(event) =>
                    {
                        setBirthDate(event.target.value)
                    }}
                />
              </div>
            </div> */}

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Age
              </label>
              <div className="mt-2">
                <input
                  id="ages"
                  name="age"
                  type="text"
                  className="w-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={age}
                    onChange={(event) =>
                    {
                        setAges(event.target.value)
                    }}
                />
              </div>
            </div>

            {/* <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <input
                  id="genders"
                  name="gender"
                  type="text"
                  className="w-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={gender}
                    onChange={(event) =>
                    {
                        setGenders(event.target.value)
                    }}
                />
              </div>
            </div> */}

* <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Status
              </label>
              <div className="mt-2">
                <select
                  id="genders"
                  name="gender"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                   value={gender}
                    onChange={(event) =>
                    {
                        setGenders(event.target.value)
                    }}
               >
                  <option>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
        </div>
                    <div className="sm:col-span-2">
              <label htmlFor="hospitalNumber" className="block text-sm font-medium leading-6 text-gray-900">
                Hospital Number
              </label>
              <div className="mt-2">
                <input
                  id="hospitalNumber"
                  name="hospital_number"
                  type="text"
                  className="w-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    value={hospital_number}
                    onChange={(event) =>
                    {
                        setHospitalNumber(event.target.value)
                    }}
                    />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="hospitalNumber" className="block text-sm font-medium leading-6 text-gray-900">
                Birthday
              </label>
              <div className="mt-2">
                <input
                  id="birthdays"
                  name="birthday"
                  type="date"
                  className="w-90 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    value={birthday}
                    onChange={(event) =>
                    {
                        setBirthday(event.target.value)
                    }}
                    />
              </div>
            </div>

                        <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Laboratory Number
              </label>
              <div className="mt-2">
                <input
                  id="labNumber"
                  name="lab_number"
                  type="text"
                  className="w-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={lab_number}
                    onChange={(event) =>
                    {
                        setLabNumber(event.target.value)
                    }}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="streetAddress"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={address}
                    onChange={(event) =>
                    {
                        setStreetAddress(event.target.value)
                    }}
                />
              </div>
            </div>
          </div>
        </div>
                    <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Physicians
              </label>
              <div className="mt-2">
                <input
                  id="physicians"
                  name="physician"
                  type="text"
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={physician}
                    onChange={(event) =>
                    {
                        setPhysicians(event.target.value)
                    }}
                />
              </div>
            </div>
                        <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Ward
              </label>
              <div className="mt-2">
                <input
                  id="wards"
                  name="ward"
                  type="text"
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={ward}
                    onChange={(event) =>
                    {
                        setWards(event.target.value)
                    }}
                />
              </div>
            </div>
                        <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Bed number
              </label>
              <div className="mt-2">
                <input
                  id="bedNumber"
                  name="bed_number"
                  type="text"
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={bed_number}
                    onChange={(event) =>
                    {
                        setBedNumber(event.target.value)
                    }}
                />
              </div>
            </div>

      <div className="mt-6 flex items-center justify-start gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={save}
        >
          Save
        </button>
      </div>
    </form>

</PageComponent>

    )
}
