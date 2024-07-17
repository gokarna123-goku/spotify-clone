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
import RadioCard from '../../../../components/radio/RadioCard';
import breakPoints from '../../../../constant/breakPoints';
import radioData from '../../../../constant/radioData';

const Radio = () => {
    return (
        <div className='w-full space-y-4'>
            <Tag title={"Popular radio"} link={"/"} />

            {/* Album list */}
            <Swiper
                slidesPerView={5}
                spaceBetween={false}
                freeMode={true}
                modules={[FreeMode]}
                breakpoints={breakPoints}
                className="mySwiper [&_.swiper-wrapper]:!ease-linear [&_.swiper-wrapper]:!duration-100"
            >
                {radioData.map((data, ind) => (
                <SwiperSlide key={ind}>
                    <RadioCard
                        className={data.className}
                        artist1={data.artist1}
                        artist2={data.artist2}
                        artist3={data.artist3}
                        artist={data.artist}
                        radioTitle={data.radioTitle}
                        artistsNames={data.artistsNames} />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Radio