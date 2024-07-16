import React from 'react'
import Sidebar from '../../main/sidebar/Sidebar'
import Player from '../../../components/player/Player'
import DetailLayout from './DetailLayout'

const Detail = () => {
  return (
      <div className="w-full flex-1 flex gap-x-2 relative">
          {/* Sidebar */}
          <Sidebar />

          {/* Other Detail */}
          <DetailLayout />

          {/* Bottom or Player */}
          <Player />
      </div>
  )
}

export default Detail