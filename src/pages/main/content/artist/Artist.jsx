import React from 'react'
import Tag from '../../../../components/tag/Tag'
import ArtistCard from '../../../../components/artist/ArtistCard'

const Artist = () => {
    return (
        <div className='w-full space-y-4'>
            {/* tag */}
            <Tag title="Popular artists" link={"/"} />

            {/* Artist list */}
            <div className="w-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
                <ArtistCard artistImg={"https://cdn.pixabay.com/photo/2018/04/17/14/50/performance-3327674_640.jpg"} artistName="Artist Name" artistTag="Artist" />
                <ArtistCard artistImg={"https://cdn.pixabay.com/photo/2018/03/11/08/50/performance-3216209_640.jpg"} artistName="Artist Name" artistTag="Artist" />
                <ArtistCard artistImg={"https://cdn.pixabay.com/photo/2022/09/17/08/43/concert-7460427_640.jpg"} artistName="Artist Name" artistTag="Artist" />
                <ArtistCard artistImg={"https://cdn.pixabay.com/photo/2018/10/09/13/28/music-3735000_640.jpg"} artistName="Artist Name" artistTag="Artist" />
                <ArtistCard artistImg={"https://cdn.pixabay.com/photo/2019/11/29/22/12/guitar-4662203_640.jpg"} artistName="Artist Name" artistTag="Artist" />
            </div>
        </div>
    )
}

export default Artist