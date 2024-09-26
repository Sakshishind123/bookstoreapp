import React from 'react'

const Cards = ({item}) => {
    console.log(item)
  return (
    <>
     
      <div className='my-3 p-3 mt-5 '>
      <div className="card bg-base-100 w-92 shadow-xl  hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline px-3">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500  hover:text-white pt-3 pb-3 cursor-pointer  border-[1px]">Buy now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
