import React, { useState } from 'react';

const WebHeading = () => {
  const [formData, setFormData] = useState({
    headingName: '',
    headingCaption: '',
    allowMultipleFile: false,
    hasCategory: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // You would typically send this data to your API here
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Web Heading</h2>
        <input
          type="text"
          name="headingName"
          value={formData.headingName}
          onChange={handleChange}
          placeholder="Heading Name"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          name="headingCaption"
          value={formData.headingCaption}
          onChange={handleChange}
          placeholder="Heading Caption"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            name="allowMultipleFile"
            checked={formData.allowMultipleFile}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">Allow Multiple Files</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="hasCategory"
            checked={formData.hasCategory}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">Has Category</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Web Heading
        </button>
      </form>
    </div>
  );
}

export default WebHeading;
