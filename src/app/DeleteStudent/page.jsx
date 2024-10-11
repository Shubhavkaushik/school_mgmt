"use client"
import { useState } from 'react';
import SideBar from "@/Component/SideBar"

export default function Delete() {
  const [classNumber, setClassNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const fetchClassData = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/students/${classNumber}`,{
        method:"GET"
      });
      if (!response.ok) {
        throw new Error('Class not found');
      }
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <><SideBar></SideBar>
 
        <h2 className="text-2xl font-semibold mb-4">Fetch Class Data</h2>
        <form onSubmit={fetchClassData}>
          <input
            type="text"
            value={classNumber}
            onChange={(e) => setClassNumber(e.target.value)}
            placeholder="Enter Class Number"
            className="border p-2 w-half mb-4 rounded"
            required
          />
          {"                                      "}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded ">
            Fetch Data
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {result && result.length > 0 && (
  <div className="mt-4">
    <h3 className="font-semibold">Class Strength:   {result.length}</h3>
    <table className="min-w-full bg-white border border-gray-300 mt-2">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">SR Number</th>
          <th className="py-3 px-6 text-left">Name</th>
          <th className="py-3 px-6 text-left">Class</th>
          <th className="py-3 px-6 text-left">Aadhar No</th>
          <th className="py-3 px-6 text-left">Date of Birth</th>
          <th className="py-3 px-6 text-left">Phone Number</th>
          <th className="py-3 px-6 text-left">Edit Student</th>
          <th className="py-3 px-6 text-left">Delete Student</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {result.map((student) => (
          <tr key={student.srNumber} className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6">{student.srNumber}</td>
            <td className="py-3 px-6">{student.name}</td>
            <td className="py-3 px-6">{student.class}</td>
            <td className="py-3 px-6">{student.aadharCardNo}</td>
            <td className="py-3 px-6">{new Date(student.dob).toLocaleDateString()}</td>
            <td className="py-3 px-6">{student.contactNumber}</td>
           <td><button className="bg-gray-400 m-3 py-3 round-3 px-6" onClick>Edit</button></td> 
           <td> <button className=" bg-red-600 py-3 px-6" onClick>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

  
    </>
  );
}
