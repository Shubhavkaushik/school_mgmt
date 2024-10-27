"use client";
import { useState } from 'react';
import SideBar from "@/Component/SideBar";

export default function Delete() {
  const [srNumber, setSrNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const fetchClassData = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/students_delete/${srNumber}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error('Class not found');
      }
      const data = await response.json();
      console.log(data); // Log the response to check its structure
      setResult(data); // Assuming data is an object
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClick = async () => {
    const userConfirmed = window.confirm("Are you sure you want to delete this?");
    if (userConfirmed) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/students_delete/${srNumber}`, {
          method: "PUT",
        });
        if (!response.ok) {
          throw new Error('Class not found');
        }
        const data = await response.json();
        alert("Item deleted successfully!");
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("There was an error deleting the item.");
      }
    } else {
      alert("Deletion canceled.");
    }
  };

  return (
    <>
      <SideBar />
      <h2 className="text-2xl font-semibold mb-4">Fetch Student Data</h2>
      <form onSubmit={fetchClassData}>
        <input
          type="text"
          value={srNumber}
          onChange={(e) => setSrNumber(e.target.value)}
          placeholder="Enter SR Number"
          className="border p-2 w-half mb-4 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Fetch Data
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && (
        <div className="mt-4">
          <h3 className="font-semibold">Student Data:</h3>
          <table className="min-w-full bg-white border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">SR Number</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Class</th>
                <th className="py-3 px-6 text-left">Aadhar No</th>
                <th className="py-3 px-6 text-left">Date of Birth</th>
                <th className="py-3 px-6 text-left">Phone Number</th>
                <th className="py-3 px-6 text-left">Delete Student</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6">{result.srNumber}</td>
                <td className="py-3 px-6">{result.name}</td>
                <td className="py-3 px-6">{result.class}</td>
                <td className="py-3 px-6">{result.aadharCardNo}</td>
                <td className="py-3 px-6">{new Date(result.dob).toLocaleDateString()}</td>
                <td className="py-3 px-6">{result.contactNumber}</td>
                <td>
                  <button className="bg-red-600 py-3 px-6" onClick={handleClick}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
