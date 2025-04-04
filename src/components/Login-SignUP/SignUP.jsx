import React, { useState } from "react";

function Signup() {
  const [role, setRole] = useState("student");

  return (
    <div className="flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-6">
          Sign Up
        </h2>

        <label className="block mb-2 font-medium text-gray-700">
          Select Role
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>

        {role === "faculty" ? (
          <>
            <input
              type="text"
              placeholder="Faculty Name"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 mb-4 border rounded-md"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="text"
              placeholder="Enrollment Number"
              className="w-full p-2 mb-4 border rounded-md"
            />
             {/* <input
              type="file"
              placeholder="Your Image"
              className="w-full p-2 mb-4 border rounded-md"
            />  */}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 mb-4 border rounded-md"
            />

          <label className="block mb-2 text-gray-700 font-medium">Upload Your Image</label>
          <div className="relative w-full mb-4">
            <input required
              type="file"
              accept="image/*"
              id="fileInput"
              className="hidden"
              onChange={(e) => console.log(e.target.files[0])} // Handle file selection
            />
            <label
              htmlFor="fileInput"
              className="w-full p-2 border rounded-md cursor-pointer bg-white text-gray-600 text-center block"
            >
              Choose Your Image
            </label>
          </div>

          </>
        )}

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;