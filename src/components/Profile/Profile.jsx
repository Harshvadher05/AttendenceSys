import React, { useState, useEffect } from 'react';

function Profile({ userId }) {
  const [studentData, setStudentData] = useState({
    name: '',
    studentId: '',
    email: '',
    major: '',
    phone: '',
    address: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`/api/student/profile/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        setErrorMessage('Failed to load profile data.');
        console.error('Error fetching student profile:', error);
      }
    };

    if (userId) {
      fetchStudentData();
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setUpdateMessage('');
    setErrorMessage('');
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdateMessage('');
    setErrorMessage('');
    // Optionally, refetch data
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`/api/student/profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setStudentData(data);
      setIsEditing(false);
      setUpdateMessage('Profile updated successfully!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to update profile.');
      console.error('Error updating student profile:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Student Profile</h2>
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      {updateMessage && <p className="text-green-500 mb-2">{updateMessage}</p>}

      {!isEditing ? (
        <div>
          <p className="mb-2"><strong className="font-medium">Name:</strong> {studentData.name}</p>
          <p className="mb-2"><strong className="font-medium">Student ID:</strong> {studentData.studentId}</p>
          <p className="mb-2"><strong className="font-medium">Email:</strong> {studentData.email}</p>
          <p className="mb-2"><strong className="font-medium">Major:</strong> {studentData.major}</p>
          <p className="mb-2"><strong className="font-medium">Phone:</strong> {studentData.phone}</p>
          <p className="mb-2"><strong className="font-medium">Address:</strong> {studentData.address}</p>
          <button onClick={handleEditClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Edit Profile
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" value={studentData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-gray-700 text-sm font-bold mb-2">Student ID:</label>
            <input type="text" id="studentId" name="studentId" value={studentData.studentId} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" value={studentData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="major" className="block text-gray-700 text-sm font-bold mb-2">Major:</label>
            <input type="text" id="major" name="major" value={studentData.major} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
            <input type="tel" id="phone" name="phone" value={studentData.phone} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <textarea id="address" name="address" value={studentData.address} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-vertical min-h-[80px]"></textarea>
          </div>
          <button onClick={handleSaveClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
            Save Changes
          </button>
          <button onClick={handleCancelClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;