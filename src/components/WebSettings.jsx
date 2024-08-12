
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
        // You would typically send this data to your API here
      };
  return (
    <>
     <form onSubmit={handleSubmit}>
      <h2>Web Settings</h2>
      <input type="number" name="maxCount" value={formData.maxCount} onChange={handleChange} placeholder="Max Count" required />
      <button type="submit">Save Web Settings</button>
    </form>
    </>
  )
}

export default WebSettings;