// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// const Signup = () => {
//     const navigate=useNavigate()
//     const handlelogin = () => {
//     navigate('/')
//     }
//   return (
//     <>
//       <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-md rounded">
//         <form>
//           <h3 className="font-bold text-lg mb-5">Signup</h3>
          
//           <label className="block mb-2">
//             <span className="font-medium">Name</span>
//             <input
//               type="text"
//               placeholder="name"
//               className="block w-full bg-slate-200 p-2 mt-1 rounded"
//             />
//           </label>

//           <label className="block mb-2">
//             <span className="font-medium">Email</span>
//             <input
//               type="email"
//               placeholder="email"
//               className="block w-full bg-slate-200 p-2 mt-1 rounded"
//             />
//           </label>

//           <label className="block mb-4">
//             <span className="font-medium">Password</span>
//             <input
//               type="password"
//               placeholder="password"
//               className="block w-full bg-slate-200 p-2 mt-1 rounded"
//             />
//           </label>

//           <div className="flex items-center justify-between">
//             <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">
//               Signup
//             </button>
//             <p>
//              already registered?{' '}
//               <span className="text-blue-400 underline cursor-pointer" onClick={handlelogin}>
//                 Login
//               </span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

// export default Signup







 import React from 'react'
 import { useNavigate } from 'react-router-dom'
import Login from './Login'
 import { Link } from 'react-router-dom'
 import { useForm } from 'react-hook-form';
const Signup = () => {
  const navigate=useNavigate()
       const handlelogin = () => {
       navigate('/')
       }
       const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      // Function to handle form submission
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <>
      <div className="max-w-xxl flex h-screen items-center justify-center ">
      <div className="modal-box">
        
      <form action="" className="" method="dialog" onSubmit={handleSubmit(onSubmit)}>
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Signup</h3>
    <br />
    <span>Name</span>
    <br />
    <input type="text" placeholder='name' className=' bg-slate-200 p-1'  {...register('name', { required: true })}/>
    {errors.name && <span className="text-red-500">Name is required</span>}
         
    <br />
    <span>Email</span>
    <br />
    <input type="text" placeholder='email'  className='w-50 bg-slate-200 p-1'  {...register('email', { required: true })}/>
    {errors.email && <span className="text-red-500">Email is required</span>}
         
    <br /> 
    <span>Password</span>
    <br />
    <input type="text" placeholder='password' className=' bg-slate-200 p-1'  {...register('password', { required: true })}/>
    {errors.password && <span className="text-red-500">Password is required</span>}
         
    <br />
    <div className='pl-10 flex items-center justify-between mt-5 pr-10'>
    <button className='bg-pink-500 px-2 py-1 rounded-lg '>Signup</button>
    <p>already registered?    <button className="btn btn-primary  className='text-blue-400 underline cursor-pointer'" onClick={()=>document.getElementById("my_modal_3").showModal()} >Login</button></p>
   
    </div>
    <Login/>
    </form>
      </div>
      </div>
    </>
  )
}

export default Signup