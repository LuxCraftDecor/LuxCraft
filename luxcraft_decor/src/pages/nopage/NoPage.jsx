import React from 'react'
import { BiSolidError } from "react-icons/bi";

function NoPage() {
  return (
    <div className=" display-flex items-center justify-center text-center m-40">


      <div>

      <div className="animate-bounce">
     <BiSolidError className="mx-auto h-16 w-16 text-red-500" />
    </div>
    <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
    <p className="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
   
    <p className="mt-4 text-gray-600">Let's get you back <a href="/" className="text-blue-500">home</a>.</p>

      </div>

  </div>

  );
}

export default NoPage