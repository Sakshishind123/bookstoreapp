import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun ,faMoon} from '@fortawesome/free-regular-svg-icons';
// import { useNavigate } from "react-router-dom";
import Login from './Login';
const Navbar = () => {
  const [sticky, setsticky]=useState(false);
  const[dark,setdark]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setsticky(true)
  }
      else{
        setsticky(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
 
  const darklight=()=>{
  setdark(!dark)
  document.documentElement.classList.toggle('dark');
  }
//   const navigate=useNavigate()
//   const navigation=()=>{
// navigate("/login")
//   }
  const nav = (
    <>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/courses'>Course</a>
      </li>
      <li>
        <a href='/Contact'>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );

  return (
    <>
   
      <div className={`navbar bg-base-100 fixed top-0 left-0 right-0 z-50 ${ 
  sticky ? "sticky-nav shadow-md bg-base-200 duration-300  transition-all ease-in-out" : "" }`}>


        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Bookstore</a>
        </div>
        <div className="flex-none flex items-center space-x-4">
          <ul className="menu menu-horizontal px-1 space-x-4">
            {nav}
          </ul>
         
          {/* <FontAwesomeIcon
            icon={dark ? faMoon : faSun}
            onClick={darklight}
            className="cursor-pointer"
          /> */}

<FontAwesomeIcon
            icon={dark ? faMoon : faSun}
            onClick={darklight}
           
          />
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="search"
              className="input input-bordered"
            />
            <button className="btn btn-primary " onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>
         
          </div>
       
        </div>
        <Login/>
      </div>
    </>
  );
};

export default Navbar;


