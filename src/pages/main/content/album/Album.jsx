import React from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';

import Tag from '../../../../components/tag/Tag'
import AlbumCard from '../../../../components/album/AlbumCard';
import breakPoints from '../../../../constant/breakPoints';
import albumData from '../../../../constant/albumData';

const Album = () => {
    return (
        <div className='w-full space-y-4'>
            <Tag title={"Popular albums"} link={"/"} />

            {/* Album list */}
            <Swiper
                slidesPerView={5}
                spaceBetween={false}
                freeMode={true}
                modules={[FreeMode]}
                breakpoints={breakPoints}
                className="mySwiper [&_.swiper-wrapper]:!ease-linear [&_.swiper-wrapper]:!duration-100"
            >
                {albumData.map((data, ind) => (
                    <SwiperSlide key={ind}>
                        <AlbumCard albumImg={data.albumImg} albumName={data.albumName} albumArtist={data.albumArtist} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Album