import React from 'react'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import Info from './info/Info'
import Like from './like/Like'
import MusicCard from '../../../components/music/MusicCard'
import TitleNav from './titleNav/TitleNav'
import musicData from '../../../constant/musicData'

const DetailLayout = () => {
    return (
        <div className='flex-1 h-[calc(100vh-8.5ch)] overflow-y-scroll overflow-x-hidden bg-neutral-800/30 rounded-md relative'>
            {/* Navbar */}
            <div className="w-full sticky top-0 z-50">
                <Navbar className={"bg-indigo-500"} />
            </div>

            <div className="w-full h-full py-6 bg-gradient-to-b from-indigo-500 via-indigo-300/10 to-transparent space-y-5">
                {/* Info */}
                <Info />

                <div className="w-full min-h-screen bg-gradient-to-b from-neutral-800/20 via-neutral-800/30 to-neutral-800/30 backdrop-blur md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 py-4 space-y-10 relative">
                    <div className="space-y-7">
                        {/* Play, like more */}
                        <Like />
                    </div>

                    {/* Music List */}
                    <div className="w-full space-y-3">
                        <TitleNav />

                        {/* Music Card */}
                        {musicData.map((data) => (
                            <MusicCard
                                counter={data.counter}
                                musicImg={data.musicImg}
                                musicName={data.musicName}
                                albumName={data.albumName}
                                duration={data.duration} />
                        ))}
                    </div>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default DetailLayout