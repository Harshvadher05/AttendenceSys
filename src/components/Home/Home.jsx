import React from "react";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import dashboard from "../../assets/dashboard.png";

function Home () {
  return (

    <div className="flex flex-col min-h-screen">
      

      {/* Header */}
      <header className="h-64 bg-blue-400 flex justify-center items-center text-white text-4xl font-bold shadow-lg uppercase tracking-wide">
        Attendance Management System
      </header>

      {/* Content Section */}
      <main className="flex flex-col md:flex-row justify-around items-center flex-1 p-10 gap-10">
        {/* Info Box 1 */}
        <div className="bg-white text-center p-6 rounded-xl w-full md:w-1/3 shadow-lg border-l-4 border-blue-900 flex flex-col items-center hover:shadow-2xl hover:bg-blue-100 transition">
          <img src={photo1} alt="Attendance Tracker" className="w-32 h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-blue-900 text-2xl font-semibold">Attendance Tracker</h3>
          <p className="text-gray-600 mt-2">Students can easily track their attendance records in real-time, ensuring they meet academic requirements without hassle.</p>
        </div>

        {/* Info Box 2 */}
        <div className="bg-white text-center p-6 rounded-xl w-full md:w-1/3 shadow-lg border-l-4 border-blue-900 flex flex-col items-center hover:shadow-2xl hover:bg-blue-100 transition">
          <img src={photo2} alt="Photo Recognition" className="w-32 h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-blue-900 text-2xl font-semibold">Attendance with Photo Recognition</h3>
          <p className="text-gray-600 mt-2">Our AI-powered facial recognition system automates attendance marking, ensuring accuracy and reducing manual errors.</p>
        </div>

        {/* Info Box 3 */}
        <div className="bg-white text-center p-6 rounded-xl w-full md:w-1/3 shadow-lg border-l-4 border-blue-900 flex flex-col items-center hover:shadow-2xl hover:bg-blue-100 transition">
          <img src={dashboard} alt="Dashboard View" className="w-32 h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-blue-900 text-2xl font-semibold">Dashboard View</h3>
          <p className="text-gray-600 mt-2">Both students and faculty can access detailed attendance statistics, graphical reports, and attendance history through an interactive dashboard.</p>
        </div>
      </main>


    </div>

  );
};

export default Home;

