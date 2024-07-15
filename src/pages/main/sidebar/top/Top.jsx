import React from 'react'
import { FaSpotify } from 'react-icons/fa6'
import { GoHomeFill, GoSearch } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div className='w-full h-40 bg-neutral-800/30 rounded-md px-6 py-5 space-y-5'>
        <Link to={"/"} className="flex items-center gap-x-0.5 text-neutral-50">
            <FaSpotify className='w-6 h-6' />
            <p className="text-base font-medium tracking-tight">Spotify</p>
        </Link>
        <Link to={"/"} className="flex items-center gap-x-5 text-neutral-100">
            <GoHomeFill className='w-7 h-7' />
            <p className="text-base font-medium">Home</p>
        </Link>
        <Link to={"/"} className="flex items-center gap-x-5 text-neutral-400">
              <GoSearch className='w-6 h-6' />
            <p className="text-base font-medium">Search</p>
        </Link>
    </div>
  )
}

export default Top