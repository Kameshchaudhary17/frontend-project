import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import ThemeSettings from './components/ThemeSettings'
import UserMessage from './components/UserMessage'
import WebHeading from './components/WebHeading'
import CompanyInfo from './components/CompanyInfo'
import WebSettings from './components/WebSettings'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    
    <Route path = '/register' element = {<Register/>}/>
    <Route path = '/theme' element = {<ThemeSettings/>}/>
    <Route path = '/message' element = {<UserMessage/>}/>
    <Route path = '/heading' element = {<WebHeading/>}/>
    <Route path = '/info' element = {<CompanyInfo/>}/>
    <Route path = '/setting' element = {<WebSettings/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
