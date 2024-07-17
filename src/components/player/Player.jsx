import React, { useState } from 'react';
import { GoPlusCircle } from "react-icons/go";
import { PiDevicesBold } from "react-icons/pi";
import { FiMaximize2 } from "react-icons/fi";
import { CgMiniPlayer, CgVolume } from "react-icons/cg";
import { HiOutlineQueueList } from "react-icons/hi2";
import { TbMicrophone2 } from "react-icons/tb";
import { BsFilePlay } from "react-icons/bs";
import PlayingControl from './playing/PlayingControl';

const Player = () => {
    const [volume, setVolume] = useState(0.5); // Default volume is 50%

    const handleVolumeDrag = (e) => {
        const volumeBar = e.target;
        const newVolume = e.nativeEvent.offsetX / volumeBar.offsetWidth;
        setVolume(newVolume);
    };


    return (
        <div className='w-full grid md:grid-cols-4 grid-cols-2 absolute left-0 bottom-0 rounded-md px-2'>
            {/* Artist Img, Song name */}
            <div className="col-span-1 md:flex hidden items-center gap-x-3.5">
                <img src="https://cdn.pixabay.com/photo/2016/07/27/18/03/singer-1545903_640.jpg" alt="" className="w-14 h-14 rounded-lg object-cover object-center p-0.5" />
                <div className="space-y-0.5">
                    <h6 className="text-sm text-neutral-200 font-semibold">Song Name</h6>
                    <p className="text-xs text-neutral-400 font-normal">Artist Name</p>
                </div>
                <button className='pt-1.5'>
                    <GoPlusCircle className='text-neutral-400 w-5 h-5 mb-0' />
                </button>
            </div>

            {/* Player control */}
            <PlayingControl />

            {/* Volume control */}
            <div className="w-full col-span-1 md:flex hidden items-center justify-end gap-x-3">
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                    <BsFilePlay className='w-5 h-5' />
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                    <TbMicrophone2 className='w-5 h-5' />
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                    <HiOutlineQueueList className='w-5 h-5' />
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                    <PiDevicesBold className='w-5 h-5' />
                </button>
                <button className="w-[30%] flex items-center gap-x-2 text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                    <CgVolume className='w-5 h-5' />
                    <div className="flex-1 h-1 bg-neutral-700/60 rounded-full">
                        <div
                            className="h-1 bg-green-600 ease-in-out duration-100 rounded-full"
                            style={{ width: `${volume * 100}%` }}
                        ></div>
                    </div>
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                    <CgMiniPlayer className='w-5 h-5' />
                </button>
                <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                    <FiMaximize2 className='w-4 h-4' />
                </button>
            </div>
        </div>
    )
}

export default Player