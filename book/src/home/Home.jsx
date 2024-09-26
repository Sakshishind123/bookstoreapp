import React from 'react';
import Navbar from '../assets/navbar';   // Importing from the same folder
import Banner from '../assets/Banner';   // Importing from the same folder
import Footer from '../assets/footer';   // Importing from the same folder
import Freebook from '../assets/freebook'; // Importing from the same folder
// import { useNavigate } from 'react-router-dom';

const Home = () => {
   
  // const navigate=useNavigate()
  // const navb=()=>{
  //   navigate('/')
  // }
  
    return (
    <>
    <div>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
      </div>
    </>
  );
};

export default Home;
