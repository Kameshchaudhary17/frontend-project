import React, { useState } from 'react';

const CompanyInfo = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyShortName: '',
    companyAddress: '',
    companyPrimaryPhone: '',
    companySecondaryPhone: '',
    companySiteUrl: '',
    companyEmailAddress: '',
    developedBy: '',
    isCopyrightToDeveloper: false,
    developerSite: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    // You would typically send this data to your API here
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Company Info</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          name="companyShortName"
          value={formData.companyShortName}
          onChange={handleChange}
          placeholder="Company Short Name"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          name="companyAddress"
          value={formData.companyAddress}
          onChange={handleChange}
          placeholder="Company Address"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="tel"
          name="companyPrimaryPhone"
          value={formData.companyPrimaryPhone}
          onChange={handleChange}
          placeholder="Primary Phone"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="tel"
          name="companySecondaryPhone"
          value={formData.companySecondaryPhone}
          onChange={handleChange}
          placeholder="Secondary Phone"
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="url"
          name="companySiteUrl"
          value={formData.companySiteUrl}
          onChange={handleChange}
          placeholder="Company Site URL"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="email"
          name="companyEmailAddress"
          value={formData.companyEmailAddress}
          onChange={handleChange}
          placeholder="Company Email"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          name="developedBy"
          value={formData.developedBy}
          onChange={handleChange}
          placeholder="Developed By"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isCopyrightToDeveloper"
            checked={formData.isCopyrightToDeveloper}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Copyright to Developer</label>
        </div>
        <input
          type="url"
          name="developerSite"
          value={formData.developerSite}
          onChange={handleChange}
          placeholder="Developer Site"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Company Info
        </button>
      </form>
    </div>
  );
};

export default CompanyInfo;
