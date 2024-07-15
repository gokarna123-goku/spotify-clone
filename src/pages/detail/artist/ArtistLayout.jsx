import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import ArtistInfo from './artist/ArtistInfo'

const ArtistLayout = () => {
    return (
        <div className='flex-1 h-[calc(100vh-8.5ch)] overflow-y-scroll overflow-x-hidden bg-neutral-800/30 rounded-md relative'>
            {/* Navbar */}
            <div className="w-full sticky top-0 z-50">
                <Navbar className={"bg-rose-500"} />
            </div>

            <div className="w-full h-full py-6 bg-gradient-to-b from-rose-500 via-rose-300/5 to-transparent space-y-5">
                {/* Artist Info */}
                <ArtistInfo />

                <div className="w-full min-h-screen bg-gradient-to-b from-neutral-800/20 via-neutral-800/30 to-neutral-800/30 backdrop-blur md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 py-4">
                    {/* Play, Follow Section */}
                </div>
            </div>
        </div>
    )
}

export default ArtistLayout