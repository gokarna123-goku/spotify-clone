import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';

import Tag from '../../../../components/tag/Tag'
import PodcastCard from '../../../../components/podcast/PodcastCard';
import breakPoints from '../../../../constant/breakPoints';
import podcastData from '../../../../constant/podcastData';

const Podcast = () => {
    return (
        <div className='w-full space-y-4'>
            <Tag title={"Episodes for you"} link={"/"} />

            {/* Album list */}
            <Swiper
                slidesPerView={5}
                spaceBetween={false}
                freeMode={true}
                modules={[FreeMode]}

                breakpoints={breakPoints}
                className="mySwiper [&_.swiper-wrapper]:!ease-linear [&_.swiper-wrapper]:!duration-100"
            >
                {podcastData.map((data, ind) => (
                    <SwiperSlide key={ind}>
                        <PodcastCard podcastImg={data.podcastImg} podcastName={data.podcastName} podcastPublishDate={data.podcastPublishDate} podcastDuration={data.podcastDuration} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Podcast