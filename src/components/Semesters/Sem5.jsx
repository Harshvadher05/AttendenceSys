import React from 'react'
import { Link } from 'react-router'

function Sem5() {
  return (
    <div className="w-full h-full">
      <div className="w-full m-4">
        <h1 className="bg-blue-400 text-gray-900 font-bold text-lg h-auto w-full p-2 ">
          Semester-5 / Subjects 
        </h1>
        <div className="flex flex-wrap mt-2">
          <Link to="" className="flex flex-col justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white">MPI</Link>
          <Link to="" className="flex flex-col justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white"></Link>
          <Link to="" className="flex flex-col justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white"></Link>
          <Link to="" className="flex flex-col justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white"></Link>
        </div>
      </div>
    </div>
  );
}

export default Sem5
