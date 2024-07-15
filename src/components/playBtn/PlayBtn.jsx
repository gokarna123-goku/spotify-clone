import React from 'react'
import { IoMdPlay } from "react-icons/io";
const PlayBtn = () => {
  return (
      <div className="absolute bottom-1 right-3 md:w-12 sm:w-10 w-8 md:h-12 sm:h-10 h-8 rounded-full bg-green-500 flex items-center justify-center group-hover:-translate-y-2 hover:scale-105 opacity-0 group-hover:opacity-100 ease-in-out duration-300">
          <IoMdPlay className='md:w-6 w-5 md:h-6 h-5 ml-1' />
      </div>
  )
}

export default PlayBtn