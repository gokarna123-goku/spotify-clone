import React from 'react'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import Info from './info/Info'
import Like from './like/Like'
import MusicCard from '../../../components/music/MusicCard'
import TitleNav from './titleNav/TitleNav'

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

                        <MusicCard
                            counter={"1"}
                            musicImg={"https://cdn.pixabay.com/photo/2024/02/26/19/51/guitar-8598823_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"2:50"} />
                        <MusicCard
                            counter={"2"}
                            musicImg={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"3:25"} />
                        <MusicCard
                            counter={"3"}
                            musicImg={"https://cdn.pixabay.com/photo/2015/07/13/02/52/girl-842719_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"4:30"} />
                        <MusicCard
                            counter={"4"}
                            musicImg={"https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"3:50"} />
                        <MusicCard
                            counter={"5"}
                            musicImg={"https://cdn.pixabay.com/photo/2016/11/23/00/43/audio-1851517_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"4:40"} />
                        <MusicCard
                            counter={"1"}
                            musicImg={"https://cdn.pixabay.com/photo/2024/02/26/19/51/guitar-8598823_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"2:50"} />
                        <MusicCard
                            counter={"2"}
                            musicImg={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"3:25"} />
                        <MusicCard
                            counter={"3"}
                            musicImg={"https://cdn.pixabay.com/photo/2015/07/13/02/52/girl-842719_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"4:30"} />
                        <MusicCard
                            counter={"4"}
                            musicImg={"https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"3:50"} />
                        <MusicCard
                            counter={"5"}
                            musicImg={"https://cdn.pixabay.com/photo/2016/11/23/00/43/audio-1851517_640.jpg"}
                            musicName={"Song Name"}
                            views={"Song Album Name"}
                            duration={"4:40"} />
                    </div>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default DetailLayout