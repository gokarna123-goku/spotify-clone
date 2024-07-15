import React from 'react'
import { GoPlusCircle } from "react-icons/go";
import { PiShuffleBold, PiDevicesBold } from "react-icons/pi";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { IoPlaySharp } from "react-icons/io5";
import { BiRepeat } from "react-icons/bi";
import { FiMaximize2 } from "react-icons/fi";
import { CgMiniPlayer, CgVolume } from "react-icons/cg";
import { HiOutlineQueueList } from "react-icons/hi2";
import { TbMicrophone2 } from "react-icons/tb";
import { BsFilePlay } from "react-icons/bs";

const Player = () => {
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
            <div className="col-span-2 flex items-center justify-center flex-col space-y-2">
                <div className="w-full flex items-center justify-center flex-col space-y-2">
                    <div className="flex items-center justify-center gap-x-5">
                        <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                            <PiShuffleBold className='w-5 h-5' />
                        </button>
                        <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                            <GiPreviousButton className='w-5 h-5' />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-900 flex items-center justify-center">
                            <IoPlaySharp className='w-5 h-5 ml-1' />
                        </button>
                        <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                            <GiNextButton className='w-5 h-5' />
                        </button>
                        <button className="text-neutral-400 hover:text-neutral-200 ease-in-out duration-100">
                            <BiRepeat className='rotate-180 w-5 h-5' />
                        </button>
                    </div>
                    <div className="md:w-3/4 w-full flex items-center justify-center gap-x-3">
                        <p className="text-xs text-neutral-400 font-medium">0:00</p>
                        <div className="flex-1 h-1 bg-neutral-800/30 rounded-full">
                            <div className="w-1/3 h-1 bg-neutral-100 hover:bg-green-600 rounded-full ease-in-out duration-100"></div>
                        </div>
                        <p className="text-xs text-neutral-400 font-medium">0:00</p>
                    </div>
                </div>
            </div>

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
                    <div className="flex-1 h-1 bg-neutral-800/30 rounded-full">
                        <div className="w-10/12 h-1 bg-neutral-100 hover:bg-green-600 rounded-full ease-in-out duration-100"></div>
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