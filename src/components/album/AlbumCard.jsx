import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdPlay } from "react-icons/io";

const AlbumCard = ({ albumImg, albumName, albumArtist }) => {
    return (
        <Link to={"/"} className='w-full p-3 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 flex flex-col ease-in-out duration-100 group curspor-pointer'>
            <div className="w-full h-auto relative">
                <img src={albumImg} alt="album img" className="w-full aspect-square rounded-md object-cover object-center" />
                <div className="absolute bottom-1 right-3 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:-translate-y-2 hover:scale-105 opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                    <IoMdPlay className='w-6 h-6 ml-1' />
                </div>
            </div>
            <div className="space-y-1">
                <h5 className="text-base font-medium text-neutral-100">{albumName}</h5>
                <p className="text-sm text-neutral-400">{albumArtist}</p>
            </div>
        </Link>
    )
}

export default AlbumCard