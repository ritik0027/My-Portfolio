import React from 'react';



const Download = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "../../public/Ritik's Resume.pdf";
    link.setAttribute('download', "Ritik's Resume");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex justify-center items-center'>
       <button onClick={handleDownload} className="bg-red-700 hover:scale-110 duration-100 text-white font-bold px-4 py-2 rounded">Download Resume</button>
      </div>
    </div>
  )
}

export default Download
