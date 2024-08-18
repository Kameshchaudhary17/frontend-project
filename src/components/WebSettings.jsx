import React, { useState } from 'react';

const WebSettings = () => {
  const [formData, setFormData] = useState({
    maxCount: 10
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: parseInt(value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Web Settings</h2>
        <input
          type="number"
          name="maxCount"
          value={formData.maxCount}
          onChange={handleChange}
          placeholder="Max Count"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Web Settings
        </button>
      </form>
    </div>
  );
}

export default WebSettings;
