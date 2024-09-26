import React from 'react'
import Navbar from '../assets/navbar'
import Courses from '../assets/Courses'
import Footer from '../assets/footer'


const Course = () => {
 
  return (
    <>
      <Navbar/>
      <div className='min-h-screen mt-50'>
      <Courses/>
      </div>
   
      <Footer/>

    </>
  )
}

export default Course
