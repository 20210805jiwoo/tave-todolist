import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from "./pages/Login";
import FindId from "./pages/FindId";
import FindPwd from "./pages/FindPwd";
import SignUp from "./pages/SignUp";
import Google from './pages/SocialLogin/Google';
import TodoMain from './pages/TodoMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpwd" element={<FindPwd />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/google" element={<Google />} />
        <Route path="/todomain" element={<TodoMain />} />
      </Routes>
    </Router>
  )
}

export default App;