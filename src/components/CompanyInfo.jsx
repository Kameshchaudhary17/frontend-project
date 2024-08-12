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
        developerSite: ''
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
    <>
     <form onSubmit={handleSubmit}>
      <h2>Company Info</h2>
      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" required />
      <input type="text" name="companyShortName" value={formData.companyShortName} onChange={handleChange} placeholder="Company Short Name" required />
      <input type="text" name="companyAddress" value={formData.companyAddress} onChange={handleChange} placeholder="Company Address" required />
      <input type="tel" name="companyPrimaryPhone" value={formData.companyPrimaryPhone} onChange={handleChange} placeholder="Primary Phone" required />
      <input type="tel" name="companySecondaryPhone" value={formData.companySecondaryPhone} onChange={handleChange} placeholder="Secondary Phone" />
      <input type="url" name="companySiteUrl" value={formData.companySiteUrl} onChange={handleChange} placeholder="Company Site URL" required />
      <input type="email" name="companyEmailAddress" value={formData.companyEmailAddress} onChange={handleChange} placeholder="Company Email" required />
      <input type="text" name="developedBy" value={formData.developedBy} onChange={handleChange} placeholder="Developed By" required />
      <label>
        <input type="checkbox" name="isCopyrightToDeveloper" checked={formData.isCopyrightToDeveloper} onChange={handleChange} />
        Copyright to Developer
      </label>
      <input type="url" name="developerSite" value={formData.developerSite} onChange={handleChange} placeholder="Developer Site" required />
      <button type="submit">Save Company Info</button>
    </form></>
  )
}

export default CompanyInfo;