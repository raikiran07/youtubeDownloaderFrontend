import React from 'react'

const Youtube = () => {
  return (
    <div>
        <h2>Browse Youtube to copy the link</h2>
        <iframe
        src="https://www.youtube.com/"
        className='md:min-w-[640px] md:min-h-[300px] border-2 mx-auto mt-4'
        >

        </iframe>
    </div>
  )
}

export default Youtube