"use client"
import { useState } from 'react';
import SideBar from "@/Component/SideBar"

export default function Delete() {
  const [srNumber, setSrNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const fetchClassData = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/students_delete/${srNumber}`,{
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

  const handleClick = async () => {
    // Show confirmation dialog
    const userConfirmed = window.confirm("Are you sure you want to delete this?");

    // Check user's response
    if (userConfirmed) {
        try {
            await deleteItem(); // Replace this with your actual delete function
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
    <><SideBar></SideBar>
 
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
          {"                                      "}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded ">
            Fetch Data
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {result && result.length > 0 && (
  <div className="mt-4">
    <h3 className="font-semibold">Student Data: </h3>
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
       
          <tr key={data.srNumber} className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6">{data.srNumber}</td>
            <td className="py-3 px-6">{data.name}</td>
            <td className="py-3 px-6">{data.class}</td>
            <td className="py-3 px-6">{data.aadharCardNo}</td>
            <td className="py-3 px-6">{new Date(data.dob).toLocaleDateString()}</td>
            <td className="py-3 px-6">{data.contactNumber}</td>
          
           <td> <button className=" bg-red-600 py-3 px-6" onClick={handleClick}>Delete</button></td>
          </tr>
  
      </tbody>
    </table>
  </div>
)}

  
    </>
  );
}
