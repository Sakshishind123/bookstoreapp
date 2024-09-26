import React from 'react'
// import { useNavigate } from 'react-router-dom'
import list from '../../public/list.json'
import Cards from './Cards'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Courses = () => {
console.log(list)
// const navigate=useNavigate()
// const navi=()=>{
//   navigate('/')
// }
  return (
<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 justify-center items-center text-center'>
      
    <h1 className='text-2xl  md:text-4xl pb-10 '>
        We are delighted to have you <span className='text-pink-500' >here! :)</span> </h1>
    <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita ut autem nemo natus ipsa, eligendi magni. Itaque distinctio expedita similique rerum, dignissimos voluptatem in praesentium sapiente error delectus voluptate!</p>
 <Link to={'/'}>
 <button className='bg-pink-500 w-92 rounded-lg px-4 py-2 hover:bg-pink-700 text-white'>Back</button>
 </Link>
    </div> 

      <div className='grid grid-cols-1 md:grid-cols-4'>
     {  
  list.map((item)=>(

     <Cards item={item}  key={item.id} />
     ))
     }
     </div>
       </div>
    </>
  )
}

export default Courses
