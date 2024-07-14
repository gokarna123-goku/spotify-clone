import React from 'react'
import { HiOutlinePlus } from "react-icons/hi";
import { IoLibrary } from "react-icons/io5";

const Playlist = () => {
    return (
        <div className='w-full h-auto bg-neutral-800/30 rounded-md space-y-4 pb-3'>
            <div className="w-full flex items-center justify-between px-6 py-3">
                <div className="w-full h-auto flex items-center gap-x-3.5 text-neutral-400">
                    <IoLibrary className='w-6 h-6' />
                    <p className="text-sm font-semibold">Your Library</p>
                </div>
                <div className="w-9 h-8 hover:bg-neutral-700/15 rounded-full flex items-center justify-center text-neutral-300 cursor-pointer ease-in-out duration-300">
                    <HiOutlinePlus className='text-xl' />
                </div>
            </div>
            <div className="w-full h-full overflow-y-scroll overflow-x-hidden px-2">
                <div className="bg-neutral-700/15 w-full rounded-md">
                    <p className="text-sm font-semibold text-neutral-400 px-6 py-3">PLAYLISTS</p>
                </div>
            </div>
        </div>
    )
}

export default Playlist