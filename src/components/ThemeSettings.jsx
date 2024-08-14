import React, { useState } from 'react';

const ThemeSettings = () => {
  const [formData, setFormData] = useState({
    themeName: '',
    viewName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Typically, you would send this data to an API here.
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Theme Settings</h2>
        <input
          type="text"
          name="themeName"
          value={formData.themeName}
          onChange={handleChange}
          placeholder="Theme Name"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          name="viewName"
          value={formData.viewName}
          onChange={handleChange}
          placeholder="View Name"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Theme Settings
        </button>
      </form>
    </div>
  );
};

export default ThemeSettings;
