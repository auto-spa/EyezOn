import React from 'react'
import GalleryPage from '../components/GalleryPage/galleryPage'
import { FaLongArrowAltRight } from 'react-icons/fa'


const gallery = () => {
  return (
    <div className='bg-gradient-to-r from-black via-black to-purple-900'>
         <div className="relative min-h-[60vh] bg-gradient-to-r from-purple-500 to-black bg-center bg-no-repeat bg-cover z-0">

<div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
<div className="relative z-10 p-10 w-full text-center">
  <h1
    className="text-white mt-32 text-5xl font-bold"
  >
    Gallery
  </h1>

  <div
    className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow"
  >
    <div className="flex gap-2 items-center">
      Home
      <FaLongArrowAltRight className="text-lg text-purple-600" />
      Gallery
    </div>
  </div>
</div>
</div>
      <GalleryPage/>
    </div>
  )
}

export default gallery
