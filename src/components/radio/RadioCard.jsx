import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdPlay } from "react-icons/io";
import { FaSpotify } from 'react-icons/fa6';
import PlayBtn from '../playBtn/PlayBtn';

const RadioCard = ({ artist1, artist2, artist3, artist, radioTitle, artistsNames, className }) => {
    return (
        <Link to={"/"} className='w-full p-3 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 flex flex-col ease-in-out duration-100 group curspor-pointer'>
            <div className={`w-full aspect-square relative ${className} rounded-md flex items-center justify-center`}>
                <div className="absolute top-2 left-0 w-full flex items-center justify-between px-2">
                    <FaSpotify className='sm:w-5 w-4 sm:h-5 h-4 text-neutral-800' />
                    <h6 className="sm:text-base text-sm text-neutral-800 sm:font-bold font-semibold">RADIO</h6>
                </div>
                
                <div className="grid grid-cols-3">
                    <img src={artist1} alt="album img" className="w-full aspect-square rounded-full object-cover object-center" />
                    <img src={artist2} alt="album img" className={`w-full aspect-square rounded-full object-cover object-center scale-150 p-0.5 ${className}`} />
                    <img src={artist3} alt="album img" className="w-full aspect-square rounded-full object-cover object-center" />
                </div>

                <div className="absolute bottom-2 left-0 px-2 w-fit">
                    <h1 className="md:text-[1.7rem] sm:text-xl text-lg text-neutral-900 font-black">{artist}</h1>
                </div>
                <PlayBtn />
            </div>

            <div className="space-y-1">
                <h5 className="text-base font-medium text-neutral-100 line-clamp-1">{radioTitle}</h5>
                <p className="text-sm text-neutral-400 line-clamp-2 text-ellipsis">{artistsNames}</p>
            </div>
        </Link>
    )
}

export default RadioCard