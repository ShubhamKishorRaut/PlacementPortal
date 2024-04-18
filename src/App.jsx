import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import StudRegister from './component/StudRegister';
import RectRegister from './component/RectRegister';
import TPORegister from './component/TPORegister';
import Login from './component/Login';
import SetPassword from './component/SetPassword';
import StudentDashboard from './component/StudentDashboard';
import StudProfile from './component/StudProfile';
function App() {

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/stud' element={<StudRegister/>}/>
        <Route path='/rect' element={<RectRegister/>}/>
        <Route path='/tpo' element={<TPORegister/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/setpass' element={<SetPassword/>}/>
        <Route path='/studdashboard' element={<StudentDashboard/>}/>
        <Route path='/studprofile' element={<StudProfile/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
