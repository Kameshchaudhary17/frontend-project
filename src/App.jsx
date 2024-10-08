import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AuthState from './context/AuthState';
import Register from './pages/Register';
import ThemeSettings from './components/ThemeSettings';
import UserMessage from './components/UserMessage';
import WebHeading from './components/WebHeading';
import CompanyInfo from './components/CompanyInfo';
import WebSettings from './components/WebSettings';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';

function App() {
  return (
    <>
    <AuthState>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/theme" element={<ThemeSettings />} />
          <Route path="/message" element={<UserMessage />} />
          <Route path="/heading" element={<WebHeading />} />
          <Route path="/info" element={<CompanyInfo />} />
          <Route path="/setting" element={<WebSettings />} />
          <Route path="/login" element={<Login />} />
          

        </Routes>
      </BrowserRouter>
      </AuthState>
    </>
  );
}

export default App;
