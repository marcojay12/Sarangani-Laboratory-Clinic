import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import axiosClient from '../axios';

export default function AdminSignup() {
      const [name,setName] = useState(' ');
      const [admin_username,setAdmin_Username] = useState(' ');
      const [password,setPassword] = useState(' ');
      const [error,setError] = useState({__html: ''});

      const onSubmit = (ev) => {
        ev.preventDefault();
        setError({__html: '' });

        axiosClient
        .post("/signup", {
          name,
          admin_username,
          password
        })

        .then(({ data }) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        });
      }

    return (
     <>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="/src/assets/images/sarangani.png"
             alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Administrator Signup
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-400"
              >
                Login to Existing Administrator Account
              </Link>

            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Fullname"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="admin-username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="admin-username"
                    name="admin_username"
                    type="admin-username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Username"
                  />
                </div>
              </div>

              <div>
               <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                   <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <UserIcon
                  className="h-5 w-5 text-white group-hover:text-blue-400"
                  aria-hidden="true"
                  />
                  Signup
                </button>
             </div>
            </form>

          </div>
        </div>
      </>
    )
  }
