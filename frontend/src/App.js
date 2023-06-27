import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Welcome } from './Welcome';
import { Home } from './Home';
import { Learning1 } from './Learning1';
import { Quiz } from './Quiz';
import { Bot } from './Bot';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Learning1" element={<Learning1 />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Bot" element={<Bot />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
