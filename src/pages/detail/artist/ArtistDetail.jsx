import React from 'react'
import Sidebar from '../../main/sidebar/Sidebar'
import Player from '../../../components/player/Player'
import ArtistLayout from './ArtistLayout'

const ArtistDetail = () => {
  return (
      <div className="w-full flex-1 flex gap-x-2 relative">
          {/* Sidebar */}
          <Sidebar />

          {/* Artist Detail */}
          <ArtistLayout />

          {/* Bottom or Player */}
          <Player />
      </div>
  )
}

export default ArtistDetail