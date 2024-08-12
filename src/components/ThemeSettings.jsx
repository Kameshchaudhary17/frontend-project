import React, { useState } from 'react';

const ThemeSettings = () => {
    const [formData, setFormData] = useState({
        themeName: '',
        viewName: ''
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
        
        console.log(formData);
      };
  return (
    <>
     <form onSubmit={handleSubmit}>
      <h2>Theme Settings</h2>
      <input type="text" name="themeName" value={formData.themeName} onChange={handleChange} placeholder="Theme Name" required />
      <input type="text" name="viewName" value={formData.viewName} onChange={handleChange} placeholder="View Name" required />
      <button type="submit">Save Theme Settings</button>
    </form>
    </>
  )
}

export default ThemeSettings
