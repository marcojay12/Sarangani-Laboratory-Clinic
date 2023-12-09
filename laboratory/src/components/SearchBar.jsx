

export const SearchBar = () => {


    return  <div className="sm:col-span-2 " >
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
      />
      </div>
      </div>
};
