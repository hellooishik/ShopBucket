import React from 'react'

function NewsLetterBox() {
    const onSubmitHandler = (event) =>{
            event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-700'>Subcribe now and get 10% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit distinctio provident voluptas expedita quas et laborum</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email'></input>
        <button type="submit" className='bg-black text-white px-10 py-4'>Submit</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
