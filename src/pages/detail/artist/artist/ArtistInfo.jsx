import React from 'react'
import { MdVerified } from "react-icons/md";

const ArtistInfo = () => {
    return (
        <div className='w-full h-auto flex items-center gap-x-7 md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className="w-52 aspect-square rounded-full object-cover object-center shadow-xl" />
            <div className="space-y-3">
                <div className="flex items-center gap-x-2">
                    <MdVerified className='w-7 h-7 text-blue-500' />
                    <p className="text-sm text-neutral-100">Verified Artist</p>
                </div>
                <h1 className="text-8xl font-black text-neutral-50">Artist Name</h1>
                <p className="text-sm text-neutral-100">40,373,319 monthly listeners</p>
            </div>
        </div>
    )
}

export default ArtistInfo