import React, { useState } from 'react';

const UserMessage = () => {
  const [formData, setFormData] = useState({
    umessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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
        <h2 className="text-2xl font-bold mb-4 text-center">User Messages</h2>
        <textarea
          name="umessage"
          value={formData.umessage}
          onChange={handleChange}
          placeholder="Message"
          required
          className="w-full border border-gray-300 rounded-lg p-2 resize-none h-32"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default UserMessage;
