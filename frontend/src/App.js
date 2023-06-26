import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Welcome } from './Welcome';
import { Home } from './Home';
import { Learning1 } from './Learning1';

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
        </Routes>
      {/* </Router> */}
    </div>
  );
}

// import { Welcome } from './Welcome';
// function App() {
//   return (
//     <div className="App">
//       <Welcome />
//     </div>
//   );
// }

// import { Home } from './Home';
// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }


// import { Learning1 } from './Learning1';
// function App() {
//   return (
//     <div className="App">
//       <Learning1 />
//     </div>
//   );
// }


// import { CustomPieChart } from './PieChart';
// function App() {
//   return (
//     <div className="App">
//       <CustomPieChart />
//     </div>
//   );
// }

// import { ProgressBar } from './ProgressBar';
// function App() {
//   return (
//     <div className="App">
//       <ProgressBar />
//     </div>
//   );
// }


export default App;