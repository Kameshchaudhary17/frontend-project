import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userRole, setUserRole] = useState('Admin');
  const [userFile, setUserFile] = useState(null);
  const [companyId, setCompanyId] = useState(2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (userPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('userPassword', userPassword);
    formData.append('emailAddress', emailAddress);
    formData.append('userAddress', userAddress);
    formData.append('userPhone', userPhone);
    formData.append('userRole', userRole);
    formData.append('userFile', userFile);
    formData.append('companyId', companyId);

    formData.append('userProfile', userFile ? `/${userFile.name}` : '');

    try {
      const response = await axios.post('http://localhost:5555/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Create Users</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder="Email Address"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          placeholder="User Address"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
          placeholder="User Phone"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <select
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Manager">Manager</option>
        </select>
        <input
          type="file"
          onChange={(e) => setUserFile(e.target.files[0])}
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
