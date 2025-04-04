import React from "react";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import dashboard from "../../assets/dashboard.png";
import { Link } from "react-router";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <header className=" mt-3 h-64 bg-blue-400 flex justify-center items-center text-white text-4xl font-bold shadow-lg uppercase tracking-wide">
        ATTENDENCE MANAGEMENT SYSTEM
      </header>

      {/* Content Section */}
      <main className="flex flex-col md:flex-row justify-around items-center flex-1 p-10 gap-10">
        {/* Info Box 1 */}

        <div className="bg-white text-center p-6 rounded-xl w-full md:w-1/3 shadow-lg border-l-4 border-blue-900 border-r-4 border-blue-900 flex flex-col items-center hover:shadow-2xl hover:bg-blue-100 transition">
          <img src={photo1} alt="Attendance Tracker" className="w-32 h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-blue-900 text-2xl font-semibold">Attendance Tracker</h3>
          <p className="text-gray-600 mt-2">Students can easily track their attendance records in real-time, ensuring they meet academic requirements without hassle.</p>
        </div>

        {/* Info Box 2 */}
        <div className="bg-white text-center p-6 rounded-xl w-full md:w-1/3 shadow-lg border-l-4 border-blue-900 border-r-4 border-blue-900 flex flex-col items-center hover:shadow-2xl hover:bg-blue-100 transition">
          <img src={photo2} alt="Photo Recognition" className="w-32 h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-blue-900 text-2xl font-semibold">Attendance with Photo Recognition</h3>
          <p className="text-gray-600 mt-2">Our AI-powered facial recognition system automates attendance marking, ensuring accuracy and reducing manual errors.</p>
        </div>

        {/* Info Box 3 */}
        <div className="bg-white text-center p-6 rounded-xl w-full md:w-1/3 shadow-lg border-l-4 border-blue-900 border-r-4 border-blue-900 flex flex-col items-center hover:shadow-2xl hover:bg-blue-100 transition">
          <img src={dashboard} alt="Dashboard View" className="w-32 h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-blue-900 text-2xl font-semibold">Dashboard View</h3>
          <p className="text-gray-600 mt-2">Both students and faculty can access detailed attendance statistics, graphical reports, and attendance history through an interactive dashboard.</p>
        </div>
      </main>

      <div className="flex justify-center items-center">
        <Link
        to="/innerhome"
          type="button"
          class="mb-4 text-white bg-blue-900 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
         Take Attendence
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>

    </div>

    

  );
}

export default Home;
