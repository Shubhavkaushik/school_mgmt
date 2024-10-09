// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [classNumber, setClassNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const fetchClassData = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      const response = await fetch(`/api/classes/${classNumber}`);
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
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Fetch Class Data</h2>
        <form onSubmit={fetchClassData}>
          <input
            type="text"
            value={classNumber}
            onChange={(e) => setClassNumber(e.target.value)}
            placeholder="Enter Class Number"
            className="border p-2 w-full mb-4 rounded"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
            Fetch Data
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {result && (
          <div className="mt-4">
            <h3 className="font-semibold">Class Data:</h3>
            <p>{JSON.stringify(result)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
