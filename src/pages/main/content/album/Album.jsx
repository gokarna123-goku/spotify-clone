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
import { IoMdPlay } from "react-icons/io";
import AlbumCard from '../../../../components/album/AlbumCard';

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
                className="mySwiper [&_.swiper-wrapper]:!ease-linear [&_.swiper-wrapper]:!duration-100"
            >
                <SwiperSlide>
                    <AlbumCard albumImg={"https://cdn.pixabay.com/photo/2021/09/13/23/10/vinyl-6622596_640.jpg"} albumName={"Album name"} albumArtist={"Artist name"} />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumCard albumImg={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"} albumName={"Album name"} albumArtist={"Artist name"} />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumCard albumImg={"https://cdn.pixabay.com/photo/2023/02/20/09/08/flowers-7801751_640.jpg"} albumName={"Album name"} albumArtist={"Artist name"} />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumCard albumImg={"https://cdn.pixabay.com/photo/2018/05/13/16/19/saxophone-3397023_640.jpg"} albumName={"Album name"} albumArtist={"Artist name"} />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumCard albumImg={"https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_640.jpg"} albumName={"Album name"} albumArtist={"Artist name"} />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumCard albumImg={"https://cdn.pixabay.com/photo/2013/11/03/08/05/cheers-204742_640.jpg"} albumName={"Album name"} albumArtist={"Artist name"} />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumCard albumImg={"https://cdn.pixabay.com/photo/2019/12/18/04/11/dj-4702977_640.jpg"} albumName={"Album name"} albumArtist={"Artist name"} />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumCard albumImg={"https://cdn.pixabay.com/photo/2021/09/29/22/59/viola-6668608_640.jpg"} albumName={"Album name"} albumArtist={"Artist name"} />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumCard albumImg={"https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"} albumName={"Album name"} albumArtist={"Artist name"} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Album