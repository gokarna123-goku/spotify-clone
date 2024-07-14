import React from 'react'
import { HiOutlinePlus } from "react-icons/hi";
import { IoLibrary } from "react-icons/io5";

const Playlist = () => {
    return (
        <div className='w-full h-[calc(88vh-10rem)] bg-neutral-800/30 rounded-md space-y-4 pb-3'>
            <div className="w-full flex items-center justify-between px-6 py-3">
                <div className="w-full h-auto flex items-center gap-x-3.5 text-neutral-400">
                    <IoLibrary className='w-6 h-6' />
                    <p className="text-sm font-semibold">Your Library</p>
                </div>
                <div className="w-9 h-8 hover:bg-neutral-700/15 rounded-full flex items-center justify-center text-neutral-300 cursor-pointer ease-in-out duration-300">
                    <HiOutlinePlus className='text-xl' />
                </div>
            </div>
            <div className="w-full h-full overflow-y-scroll overflow-x-hidden px-2 space-y-7">
                <div className="bg-neutral-700/40 w-full rounded-md px-5 py-3 space-y-5">
                    <div className="space-y-2">
                        <h6 className="text-sm font-semibold text-neutral-50 tracking-wide">
                            Create your first playlist
                        </h6>
                        <p className="text-xs text-neutral-100 font-medium">
                            It's easy, we will help you
                        </p>
                    </div>
                    <button className="w-fit px-4 h-8 bg-neutral-50 rounded-full text-sm text-neutral-950 font-semibold hover:scale-105 ease-in-out duration-100">
                        Create Playlist
                    </button>
                </div>
                <div className="bg-neutral-700/40 w-full rounded-md px-5 py-3 space-y-5">
                    <div className="space-y-2">
                        <h6 className="text-sm font-semibold text-neutral-50 tracking-wide">
                            Let's find some podcasts to follow
                        </h6>
                        <p className="text-xs text-neutral-100 font-medium">
                            We will keep updated on new episodes
                        </p>
                    </div>
                    <button className="w-fit px-4 h-8 bg-neutral-50 rounded-full text-sm text-neutral-950 font-semibold hover:scale-105 ease-in-out duration-100">
                        Create Playlist
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Playlist