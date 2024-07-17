import React from 'react'
import { Link } from 'react-router-dom';
import MusicCard from '../../../../components/music/MusicCard';
import musicData from '../../../../constant/musicData';

const MusicList = () => {
    return (
        <div className='w-full space-y-4'>
            <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
                Popular
            </h1>
            {/* Music list */}
            <div className="space-y-0">
                {musicData.map((data) => (
                    <MusicCard
                        counter={data.counter}
                        musicImg={data.musicImg}
                        musicName={data.musicName}
                        views={data.views}
                        duration={data.duration} />
                ))}
            </div>

            {/* more */}
            <Link to={"/"} className='px-6 block text-sm text-neutral-400 font-medium hover:text-neutral-200 cursor-default ease-in-out duration-75'>
                See more
            </Link>

            {/* Pick up by artist */}
            <div className="space-y-4">
                <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
                    Artist pick
                </h1>

                {/* Music list */}
                <div className="space-y-0">
                    <div className="flex items-start gap-x-3">
                        <img src="https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_640.jpg" alt="" className="w-24 h-24 rounded-md object-cover object-center" />
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-x-1.5">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className="w-6 h-6 rounded-full object-cover object-center" />
                                <h6 className="text-sm text-neutral-400 font-medium">Posted by Artist Name</h6>
                            </div>
                            <h5 className="text-sm text-neutral-100 font-medium">Song Name</h5>
                            <p className="text-sm text-neutral-400 font-normal">Song</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicList