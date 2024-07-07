import React from 'react'
import { FaWindowClose } from "react-icons/fa";

const Disclaimer = ({setModelOn}) => {

    const handleClose = () => {
        setModelOn(false)
    }


  return (
    <div className='max-w-[90%] md:max-w-[40%]  border relative p-4 rounded-md overflow-hidden top-[30%] left-[50%] translate-x-[-50%] transform-y-[-50%] bg-white text-gray-600'>
        <div className='flex items-center justify-end text-2xl'>
        <FaWindowClose onClick={handleClose} className='cursor-pointer' />
        </div>
        

        <h1 className='text-2xl text-red-600 font-bold'>Disclaimer</h1>
        <p className='mt-4'>
            Downloading videos from YouTube without permission is generally illegal. It violates copyright laws and can result in penalties. To enjoy YouTube content safely, use the platform's official features like downloading for offline viewing (with YouTube Premium) or watching videos directly on the site.
            </p>
    </div>
  )
}

export default Disclaimer