import React from "react";
import { Link } from "react-router";

const InnerHome = () => {
  return (
    <div className="w-full h-full pr-8">
      <div className="w-full m-4 mr-8">
        <h1 className="bg-blue-400 text-gray-900 font-bold text-lg h-auto w-full p-2 ">
          Odd term Samesters
        </h1>
        <div className="flex flex-wrap mt-2">
          <Link to="/innerhome/sem1" className="flex flex-col md:flex-grow justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white">Semester <br /> <span className="text-3xl">1</span></Link>
          <Link to="/innerhome/sem3" className="flex flex-col md:flex-grow justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white">Semester <br /> <span className="text-3xl">3</span></Link>
          <Link to="/innerhome/sem5" className="flex flex-col md:flex-grow justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white">Semester <br /> <span className="text-3xl">5</span></Link>
          <Link to="/innerhome/sem7" className="flex flex-col md:flex-grow justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white">Semester <br /> <span className="text-3xl">7</span></Link>
        </div>
      </div>

      <div className="w-full m-4">
        <h1 className="bg-blue-400 text-gray-900 font-bold text-lg h-auto w-full p-2 ">
          Even term Samesters
        </h1>
        <div className="flex flex-wrap mt-2">
        <Link to="/innerhome/sem2" className="flex flex-col md:flex-grow justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white">Semester <br /> <span className="text-3xl">2</span></Link>
        <Link to="/innerhome/sem4" className="flex flex-col md:flex-grow justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white">Semester <br /> <span className="text-3xl">4</span></Link>
        <Link to="/innerhome/sem6" className="flex flex-col md:flex-grow justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white">Semester <br /> <span className="text-3xl">6</span></Link>
        <Link to="/innerhome/sem8" className="flex flex-col md:flex-grow justify-center items-center font-semibold text-lg h-36 w-28 text-blue-900 bg-gray-200 border-gray-400 border-4 rounded-2xl m-2 drop-shadow-lg hover:bg-white">Semester <br /> <span className="text-3xl">8</span></Link>
        </div>
      </div>
    </div>
  );
};

export default InnerHome;
