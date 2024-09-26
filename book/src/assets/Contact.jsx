import React from 'react'
import { useFormData } from 'herotofu-react';
const Contact = () => {
    const { formState, getFormSubmitHandler } = useFormData('https://herotofu.com/start');

  return (
    <>
   <div className='mt-28 text-center '>
        <h1 className='text-3xl font-bold mb-3'>Contact Us</h1>
      </div>
       <div className='flex items-center justify-center  max-w-screen-2xl container mx-auto md:px-20 px-4'>
   
   
    {!!formState.status && <div className="py-2" ></div>}
    <form onSubmit={getFormSubmitHandler()} className='border-[3px] shadow-md p-10'>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Send a message (simple)
        </button>
      </div>
    </form>
    </div>
  </>
);
};


export default Contact
