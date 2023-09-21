import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from "./Login";
import FindId from "./FindId";
import FindPwd from "./FindPwd";
import SignUp from "./SignUp";
import Kakao from './SocialLogin/Kakao';
import Naver from './SocialLogin/Naver';
import Google from './SocialLogin/Google';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpwd" element={<FindPwd />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/kakao" element={<Kakao />} />
        <Route path="/naver" element={<Naver />} />
        <Route path="/google" element={<Google />} />
      </Routes>
    </Router>
  )
}

export default App;