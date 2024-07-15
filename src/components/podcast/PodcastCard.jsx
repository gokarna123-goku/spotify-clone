import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdPlay } from "react-icons/io";

const PodcastCard = ({ podcastImg, podcastName, podcastPublishDate, podcastDuration }) => {
  return (
      <Link to={"/"} className='w-full p-3 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 flex flex-col ease-in-out duration-100 group curspor-pointer'>
          <div className="w-full h-auto relative">
              <img src={podcastImg} alt="album img" className="w-full aspect-square rounded-md object-cover object-center" />
              <div className="absolute bottom-1 right-3 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:-translate-y-2 hover:scale-105 opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                  <IoMdPlay className='w-6 h-6 ml-1' />
              </div>
          </div>
          <div className="space-y-1">
              <h5 className="text-base font-medium text-neutral-100 line-clamp-1">{podcastName}</h5>
              <div className="flex items-center gap-x-2 text-sm text-neutral-400">
                  <p>{podcastPublishDate}</p>
                  <p>•</p>
                  <p>{podcastDuration}</p>
              </div>
          </div>
      </Link>
  )
}

export default PodcastCard