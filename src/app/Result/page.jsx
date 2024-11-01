"use client";
import { useState } from 'react';
import SideBar from "@/Component/SideBar";

export default function Home() {
  const [classNumber, setClassNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [marks, setMarks] = useState({});

  const fetchClassData = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    // API
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/students/${classNumber}`, {
        method: "GET"
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

  const handleMarksChange = (srNumber, subject, value) => {
    setMarks((prevMarks) => ({
      ...prevMarks,
      [srNumber]: {
        ...prevMarks[srNumber],
        [subject]: value
      }
    }));
  };

  const handleSubmitMarks = (srNumber) => {
    // Handle marks submission (e.g., send to an API, calculate results)
    console.log(`Submitting marks for SR Number: ${srNumber}`, marks[srNumber]);
  };

  return (
    <>
      <SideBar />
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
          <h3 className="font-semibold">Class Strength: {result.length}</h3>
          <table className="min-w-full bg-white border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">SR Number</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Class</th>
                <th className="py-3 px-6 text-left">Aadhar No</th>
                <th className="py-3 px-6 text-left">Date of Birth</th>
                <th className="py-3 px-6 text-left">Phone Number</th>
                <th className="py-3 px-6 text-left">Marks</th>
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
                  <td className="py-3 px-6">
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmitMarks(student.srNumber); }}>
                      {['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'].map((subject, index) => (
                        <div key={index} className="mb-2">
                          <label className="mr-2">{subject}:</label>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={marks[student.srNumber]?.[subject] || ''}
                            onChange={(e) => handleMarksChange(student.srNumber, subject, e.target.value)}
                            className="border p-1 rounded"
                            required
                          />
                        </div>
                      ))}
                      <button type="submit" className="bg-green-500 text-white p-1 rounded">
                        Submit Marks
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
