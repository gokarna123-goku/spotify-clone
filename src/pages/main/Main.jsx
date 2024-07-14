import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'
import Player from '../../components/player/Player'

const Main = () => {
    return (
        <>
            <div className="w-full flex-1 flex gap-x-2 relative">
                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <Content />

                {/* Bottom or Player */}
                <Player />
            </div>
        </>
    )
}

export default Main