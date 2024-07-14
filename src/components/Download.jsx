import React from 'react';



const Download = () => {

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex justify-center items-center'>
        <a className="bg-red-700 hover:scale-110 duration-100 text-white font-bold px-4 py-2 rounded" 
        href="../../Ritik's Resume.pdf" download="Ritik's Resume.pdf">Download Resume</a>
      </div>
    </div>
  )
}

export default Download
