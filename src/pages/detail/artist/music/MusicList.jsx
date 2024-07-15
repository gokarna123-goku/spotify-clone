import React from 'react'
import { Link } from 'react-router-dom';
import MusicCard from '../../../../components/music/MusicCard';

const MusicList = () => {
    return (
        <div className='w-full space-y-4'>
            <h1 className="md:text-xl text-lg text-neutral-50 font-bold">
                Popular
            </h1>
            {/* Music list */}
            <div className="space-y-0">
                <MusicCard
                    counter={"1"}
                    musicImg={"https://cdn.pixabay.com/photo/2024/02/26/19/51/guitar-8598823_640.jpg"}
                    musicName={"Song Name"}
                    views={"95,868,559"}
                    duration={"2:50"} />
                <MusicCard
                    counter={"2"}
                    musicImg={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                    musicName={"Song Name"}
                    views={"45,868,559"}
                    duration={"3:25"} />
                <MusicCard
                    counter={"3"}
                    musicImg={"https://cdn.pixabay.com/photo/2015/07/13/02/52/girl-842719_640.jpg"}
                    musicName={"Song Name"}
                    views={"69,868,559"}
                    duration={"4:30"} />
                <MusicCard
                    counter={"4"}
                    musicImg={"https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_640.jpg"}
                    musicName={"Song Name"}
                    views={"86,868,559"}
                    duration={"3:50"} />
                <MusicCard
                    counter={"5"}
                    musicImg={"https://cdn.pixabay.com/photo/2016/11/23/00/43/audio-1851517_640.jpg"}
                    musicName={"Song Name"}
                    views={"73,868,559"}
                    duration={"4:40"} />
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