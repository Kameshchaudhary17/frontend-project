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
    <>
     <form onSubmit={handleSubmit}>
      <h2>Web Heading</h2>
      <input type="text" name="headingName" value={formData.headingName} onChange={handleChange} placeholder="Heading Name" required />
      <input type="text" name="headingCaption" value={formData.headingCaption} onChange={handleChange} placeholder="Heading Caption" required />
      <label>
        <input type="checkbox" name="allowMultipleFile" checked={formData.allowMultipleFile} onChange={handleChange} />
        Allow Multiple Files
      </label>
      <label>
        <input type="checkbox" name="hasCategory" checked={formData.hasCategory} onChange={handleChange} />
        Has Category
      </label>
      <button type="submit">Save Web Heading</button>
    </form>
    </>
  )
}

export default WebHeading;