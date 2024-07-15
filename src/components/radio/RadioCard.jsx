import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdPlay } from "react-icons/io";
import { FaSpotify } from 'react-icons/fa6';

const RadioCard = ({ artist1, artist2, artist3, artist, radioTitle, artistsNames, className }) => {
    return (
        <Link to={"/"} className='w-full p-3 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 flex flex-col ease-in-out duration-100 group curspor-pointer'>
            <div className={`w-full aspect-square relative ${className} rounded-md flex items-center justify-center`}>
                <div className="absolute top-2 left-0 w-full flex items-center justify-between px-2">
                    <FaSpotify className='w-5 h-5 text-neutral-800' />
                    <h6 className="text-base text-neutral-800 font-bold">RADIO</h6>
                </div>
                <div className="grid grid-cols-3">
                    <img src={artist1} alt="album img" className="w-full aspect-square rounded-full object-cover object-center" />
                    <img src={artist2} alt="album img" className={`w-full aspect-square rounded-full object-cover object-center scale-150 p-0.5 ${className}`} />
                    <img src={artist3} alt="album img" className="w-full aspect-square rounded-full object-cover object-center" />
                </div>
                <div className="absolute bottom-2 left-0 px-2 w-fit">
                    <h1 className="text-[1.7rem] text-neutral-900 font-black">{artist}</h1>
                </div>
                <div className="absolute bottom-1 right-3 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:-translate-y-2 hover:scale-105 opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                    <IoMdPlay className='w-6 h-6 ml-1' />
                </div>
            </div>
            <div className="space-y-1">
                <h5 className="text-base font-medium text-neutral-100">{radioTitle}</h5>
                <p className="text-sm text-neutral-400">{artistsNames}</p>
            </div>
        </Link>
    )
}

export default RadioCard