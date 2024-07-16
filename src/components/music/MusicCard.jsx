import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa6'
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";

const MusicCard = ({counter, musicImg, musicName, views, duration}) => {
  return (
      <div className="w-full grid grid-cols-4 gap-4 items-center rounded-md px-6 py-2 group hover:bg-neutral-600/40 ease-in-out duration-100">
          <div className="col-span-2 flex items-center gap-x-2">
              <p className="text-neutral-300 text-sm font-medium pt-1">
                  <span className='group-hover:hidden block w-5 h-5'>{counter}</span>
                  <span className='group-hover:block hidden w-5 h-5 pt-0.5'>
                      <FaPlay />
                  </span>
              </p>
              <img src={musicImg} alt="music cover img" className="w-10 h-10 rounded-md object-cover object-center" />
              <Link to={"/"} className="text-sm text-neutral-100 font-medium ml-1 hover:underline ease-in-out duration-100">
                  {musicName}
              </Link>
          </div>
          <div className="col-span-1 flex items-center justify-center">
              <p className="text-sm text-neutral-400 font-medium group-hover:text-neutral-200 ease-in-out duration-100">
                {views}
              </p>
          </div>
          <div className="col-span-1 flex items-center justify-end gap-x-3">
              <p className='w-6 text-neutral-400 flex items-center justify-end mr-4'>
                  <MdFavoriteBorder className='group-hover:block hidden text-xl' />
              </p>
              <p className="text-base text-neutral-400 font-normal">{duration}</p>
              <p className='w-6 text-neutral-200 flex items-center justify-end'>
                  <HiEllipsisHorizontal className='group-hover:block hidden text-2xl' />
              </p>
          </div>
      </div>
  )
}

export default MusicCard