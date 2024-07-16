import React from 'react'
import { HiEllipsisHorizontal } from 'react-icons/hi2'
import { IoMdPlay } from 'react-icons/io'
import { MdFavoriteBorder } from "react-icons/md";
import { FaList } from "react-icons/fa";

const Like = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <div className='w-full flex items-center gap-x-7 py-1'>
                <div className="md:w-14 sm:w-12 w-10 md:h-14 sm:h-12 h-10 rounded-full bg-green-500 flex items-center justify-center hover:scale-105 cursor-pointer ease-in-out duration-300">
                    <IoMdPlay className='md:w-7 w-6 md:h-7 h-6 ml-1' />
                </div>
                <button className="text-neutral-500 text-4xl hover:text-neutral-200 hover:scale-110 cursor-pointer ease-in-out duration-100">
                    <MdFavoriteBorder className='' />
                </button>
                <button className="text-neutral-500 text-4xl hover:text-neutral-200 hover:scale-110 cursor-pointer ease-in-out duration-100">
                    <HiEllipsisHorizontal className='' />
                </button>
            </div>

            <button className="flex items-center gap-x-2 text-neutral-400 hover:text-neutral-200">
                <p className="text-sm font-medium">List</p>
                <FaList className='' />
            </button>
        </div>
    )
}

export default Like