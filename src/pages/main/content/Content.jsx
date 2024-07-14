import React from 'react'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import Artist from './artist/Artist'
import Album from './album/Album'

const Content = () => {
    return (
        <div className='flex-1 h-[calc(100vh-8.5ch)] overflow-y-scroll overflow-x-hidden bg-neutral-800/30 rounded-md relative'>
            {/* Navbar */}
            <div className="w-full sticky top-0">
                <Navbar />
            </div>

            <div className="w-full h-full py-6 bg-gradient-to-b from-neutral-700/20 via-transparent to-transparent pl-5 pr-7 space-y-11">
                {/* Popular artists */}
                <Artist />

                {/* Popular Albums */}
                <Album />

                {/* Popular Radio */}

                {/* Featured Charts */}

                {/* Spotify Playlist */}

                {/* Footer */}
                <Footer />
            </div>

        </div>
    )
}

export default Content