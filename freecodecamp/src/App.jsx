import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Loginpage from './components/Loginpage/Loginpage';
import Dashboard from './components/Dashboard/Dashboard';
import Alert  from './components/Alert';


function App() {
  const [alert,setAlert] =useState(null)
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  return (
   
    <Router>
      <div className="App">
        <title>FreeCodeCamp</title>
        <Routes>
        <Route path="/signin" element={<SignIn showAlert={showAlert} />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/dashboard" element ={<Dashboard />}/>
        </Routes>
        <div className="screen">
          <Navbar 
          showAlert={showAlert}/>
          <Alert alert={alert}/>
          <Home/>
        </div>
      </div>
    </Router>
  );
}

export default App;