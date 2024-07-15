import React from 'react'
import Top from './top/Top'
import Playlist from './playlist/Playlist'

const Sidebar = () => {
  return (
      <div className='w-[18.5%] max-h-[calc(100vh-12ch)] h-[calc(100vh-12vh)] min-h-[calc(100vh-12vh)] space-y-2 md:block hidden'>
        {/* Top section */}
        <Top />

        {/* Your Playlist or library section */}
        <Playlist />
    </div>
  )
}

export default Sidebar