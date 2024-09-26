import React from 'react';
import Home from './home/Home';     // Adjust the import paths if necessary
import Course from './course/Course'; // Adjust the path if needed
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './assets/Signup';
// import Login from './assets/Login';
// import Contact from './assets/Contact';
import Contacts from './Contact/Contacts';
const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Course/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contacts/>} />    
        {/* <Route path='/login' element={<Login/>} /> */}
       
            </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
