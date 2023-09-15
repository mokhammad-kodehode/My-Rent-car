import React from "react"

import { 
  HashRouter as Router,
  Routes,
  Route,
 } from "react-router-dom"

import  LandingPage  from "./routes/LandindPage"
import Navbar from "./components/Navbar/Navbar"
import SignUpPage from "./routes/signUp/SignUpPage"
import LoginPage from "./routes/LogIn/LoginPage"
import Footer from "./components/footer/Footer"
import { UserProvider } from "./UserContext"


function App() {

  return (
    <UserProvider>
        <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          </Routes>
          <Footer/>
        </Router>
    </UserProvider>
  )
}

export default App
