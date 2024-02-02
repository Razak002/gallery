import Image from 'next/image'
import React from 'react'
import images from './ImageCon'

const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-green-800 p-4 '>

      <div>
        <Image src={images.gallery} alt='' width={100} height={100} />
      </div>

      <div className='text-white text-left p-5 w-1/2 space-y-4'>
        <p className='text-[0.7rem]'>
          Capturing moments,framing memories. Let my lens tell your story. Explore the art of photography with gallery's vision. Every click is a journey, every image is a chapter.
          cherish the moments,relive the emotions. Welcome to a gallery of timeless tales through the lens.</p>
        <p className='text-[0.6rem] text-black'>copyright©aliyubdulrazak 2024</p>
      </div>

    </div>
  )
}

export default Footer