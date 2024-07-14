import React from 'react'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import Artist from './artist/Artist'

const Content = () => {
    return (
        <div className='flex-1 h-[calc(100vh-8.5ch)] overflow-y-scroll overflow-x-hidden bg-neutral-800/30 rounded-md'>
            {/* Navbar */}
            <Navbar />

            <div className="w-full h-full pt-[9ch] bg-gradient-to-b from-neutral-700/20 via-transparent to-transparent px-5 space-y-11">
                {/* Popular artists */}
                <Artist />

                {/* Popular Albums */}

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