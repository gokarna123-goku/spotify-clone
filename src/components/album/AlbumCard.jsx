import React from 'react'
import { Link } from 'react-router-dom';
import PlayBtn from '../playBtn/PlayBtn';

const AlbumCard = ({ albumImg, albumName, albumArtist }) => {
    return (
        <Link to={"/detail"} className='w-full p-3 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 flex flex-col ease-in-out duration-100 group curspor-pointer'>
            <div className="w-full h-auto relative">
                <img src={albumImg} alt="album img" className="w-full aspect-square rounded-md object-cover object-center" />
                <PlayBtn />
            </div>
            <div className="space-y-1">
                <h5 className="text-base font-medium text-neutral-100">{albumName}</h5>
                <p className="text-sm text-neutral-400">{albumArtist}</p>
            </div>
        </Link>
    )
}

export default AlbumCard