import React from 'react'
import { MdVerified } from "react-icons/md";

const ArtistInfo = () => {
    return (
        <div className='w-full h-auto flex items-center flex-wrap gap-x-7 gap-y-6 md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className="w-52 aspect-square rounded-full object-cover object-center shadow-xl" />
            <div className="space-y-3">
                <div className="md:flex hidden items-center gap-x-2">
                    <MdVerified className='w-7 h-7 text-blue-500' />
                    <p className="text-sm text-neutral-100">Verified Artist</p>
                </div>
                <h1 className="md:text-8xl sm:text-6xl text-4xl font-black text-neutral-50">Arijit Singh</h1>
                <p className="text-base text-neutral-100">40,373,319 monthly listeners</p>
            </div>
        </div>
    )
}

export default ArtistInfo