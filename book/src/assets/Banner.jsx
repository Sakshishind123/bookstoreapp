import React from 'react'
import banner from "../../public/book.jpg"
const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex'>
                <div className='md:full order-2 md:order-1 w-1/2 mt-12 md:mt-32' >
                    <h1 className='text-4xl font-bold pt-[100px]'>Hello , Welcome here to learn something <span className='text-pink-500'> new everyday!!!</span> </h1>
                    <div className='space-y-12'>
                    <p className='pt-[50px] text-xl'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Nam error officia culpa suscipit natus! Nemo voluptatum quisquam quas? 
                Pariatur, quidem culpa! Exercitationem, quia debitis aliquid quaerat corporis rerum earum distinctio?</p>
                <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-info w-full max-w-xs" />
                <button className="btn btn-active btn-primary">Button</button>
             
                    </div>
                     </div>

                 <div className='md:full order-1 w-1/2'><img src={banner} className='w-92 h-92' alt="" /></div>
            </div>
            
        </>
    )
}
export default Banner
