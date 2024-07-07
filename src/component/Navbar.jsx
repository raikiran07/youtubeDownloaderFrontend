import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='margin-0 text-white bg-[#478CCF]'>
        <nav className=' py-4 px-8 md:px-16 flex items-center justify-between'>
            <Link to="/">
            <h2>YoutubeDownloader</h2>
            </Link>
            <Link to="/disclaimer">
            <h2>Disclaimer</h2>
            </Link>
            
            
        </nav>
    </div>
  )
}

export default Navbar