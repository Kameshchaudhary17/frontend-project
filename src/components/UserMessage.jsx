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
    <>
    <form onSubmit={handleSubmit}>
      <h2>User Messages</h2>
      <textarea name="umessage" value={formData.umessage} onChange={handleChange} placeholder="Message" required />
      <button type="submit">Send Message</button>
    </form>
    </>
  )
}

export default UserMessage;