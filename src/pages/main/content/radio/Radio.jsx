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
import breakPoints from '../../../../constant/Constant';

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
                <SwiperSlide>
                    <RadioCard
                        className={"bg-red-500"}
                        artist1={"https://cdn.pixabay.com/photo/2021/09/13/23/10/vinyl-6622596_640.jpg"}
                        artist2={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                        artist3={"https://cdn.pixabay.com/photo/2023/02/20/09/08/flowers-7801751_640.jpg"}
                        artist={"Artist Name"}
                        radioTitle={"Artist Name Radio"}
                        artistsNames={"With artist1, artist2, artist3 and more"} />
                </SwiperSlide>
                <SwiperSlide>
                    <RadioCard
                        className={"bg-yellow-500"}
                        artist1={"https://cdn.pixabay.com/photo/2021/09/13/23/10/vinyl-6622596_640.jpg"}
                        artist2={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                        artist3={"https://cdn.pixabay.com/photo/2023/02/20/09/08/flowers-7801751_640.jpg"}
                        artist={"Artist Name"}
                        radioTitle={"Artist Name Radio"}
                        artistsNames={"With artist1, artist2, artist3 and more"} />
                </SwiperSlide>
                <SwiperSlide>
                    <RadioCard
                        className={"bg-green-500"}
                        artist1={"https://cdn.pixabay.com/photo/2021/09/13/23/10/vinyl-6622596_640.jpg"}
                        artist2={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                        artist3={"https://cdn.pixabay.com/photo/2023/02/20/09/08/flowers-7801751_640.jpg"}
                        artist={"Artist Name"}
                        radioTitle={"Artist Name Radio"}
                        artistsNames={"With artist1, artist2, artist3 and more"} />
                </SwiperSlide>
                <SwiperSlide>
                    <RadioCard
                        className={"bg-violet-500"}
                        artist1={"https://cdn.pixabay.com/photo/2021/09/13/23/10/vinyl-6622596_640.jpg"}
                        artist2={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                        artist3={"https://cdn.pixabay.com/photo/2023/02/20/09/08/flowers-7801751_640.jpg"}
                        artist={"Artist Name"}
                        radioTitle={"Artist Name Radio"}
                        artistsNames={"With artist1, artist2, artist3 and more"} />
                </SwiperSlide>
                <SwiperSlide>
                    <RadioCard
                        className={"bg-indigo-500"}
                        artist1={"https://cdn.pixabay.com/photo/2021/09/13/23/10/vinyl-6622596_640.jpg"}
                        artist2={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                        artist3={"https://cdn.pixabay.com/photo/2023/02/20/09/08/flowers-7801751_640.jpg"}
                        artist={"Artist Name"}
                        radioTitle={"Artist Name Radio"}
                        artistsNames={"With artist1, artist2, artist3 and more"} />
                </SwiperSlide>
                <SwiperSlide>
                    <RadioCard
                        className={"bg-purple-500"}
                        artist1={"https://cdn.pixabay.com/photo/2019/12/18/04/11/dj-4702977_640.jpg"}
                        artist2={"https://cdn.pixabay.com/photo/2021/09/29/22/59/viola-6668608_640.jpg"}
                        artist3={"https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"}
                        artist={"Artist Name"}
                        radioTitle={"Artist Name Radio"}
                        artistsNames={"With artist1, artist2, artist3 and more"} />
                </SwiperSlide>
                <SwiperSlide>
                    <RadioCard
                        className={"bg-rose-500"}
                        artist1={"https://cdn.pixabay.com/photo/2021/09/13/23/10/vinyl-6622596_640.jpg"}
                        artist2={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                        artist3={"https://cdn.pixabay.com/photo/2023/02/20/09/08/flowers-7801751_640.jpg"}
                        artist={"Artist Name"}
                        radioTitle={"Artist Name Radio"}
                        artistsNames={"With artist1, artist2, artist3 and more"} />
                </SwiperSlide>
                <SwiperSlide>
                    <RadioCard
                        className={"bg-teal-500"}
                        artist1={"https://cdn.pixabay.com/photo/2021/09/13/23/10/vinyl-6622596_640.jpg"}
                        artist2={"https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_640.jpg"}
                        artist3={"https://cdn.pixabay.com/photo/2023/02/20/09/08/flowers-7801751_640.jpg"}
                        artist={"Artist Name"}
                        radioTitle={"Artist Name Radio"}
                        artistsNames={"With artist1, artist2, artist3 and more"} />
                </SwiperSlide>
                <SwiperSlide>
                    <RadioCard
                        className={"bg-amber-500"}
                        artist1={"https://cdn.pixabay.com/photo/2019/12/18/04/11/dj-4702977_640.jpg"}
                        artist2={"https://cdn.pixabay.com/photo/2021/09/29/22/59/viola-6668608_640.jpg"}
                        artist3={"https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"}
                        artist={"Artist Name"}
                        radioTitle={"Artist Name Radio"}
                        artistsNames={"With artist1, artist2, artist3 and more"} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Radio