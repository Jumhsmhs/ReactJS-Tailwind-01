//import React from 'react'

import { Link } from "react-router-dom";
import sky from "../../assets/sky.jpg";
function Login() {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={sky} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8 p-4">
              HOSPITAL
            </h2>
            <div className="flex flex-col mb-4 ">
              <label>Username</label>
              <input
                className="border relateive bg-gray-100 p-2 rounded"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                className="border relateive bg-gray-100 p-2 rounded "
                type="password"
              />
            </div>
            <Link to="/">
              <button className="w-full py-2 my-6 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold">
                Sign In
              </button>
            </Link>
            <div className="flex justify-center p-8">
              <p className="text-center">
                <Link to="/register">Create your account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
