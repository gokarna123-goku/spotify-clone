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
import PodcastCard from '../../../../components/podcast/PodcastCard';

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
              className="mySwiper [&_.swiper-wrapper]:!ease-linear [&_.swiper-wrapper]:!duration-100"
          >
              <SwiperSlide>
                  <PodcastCard podcastImg={"https://cdn.pixabay.com/photo/2024/04/09/20/58/ai-generated-8686819_640.jpg"} podcastName={"Mahabharat Episode 1: The Beginning"} podcastPublishDate={"18 July, 2021"} podcastDuration={"24 min"} />
              </SwiperSlide>
              <SwiperSlide>
                  <PodcastCard podcastImg={"https://cdn.pixabay.com/photo/2024/07/11/15/48/ai-generated-8888600_640.jpg"} podcastName={"Mahadev ki Pratik"} podcastPublishDate={"18 July, 2021"} podcastDuration={"24 min"} />
              </SwiperSlide>
              <SwiperSlide>
                  <PodcastCard podcastImg={"https://cdn.pixabay.com/photo/2024/02/28/04/52/ai-generated-8601193_640.jpg"} podcastName={"Hanuman Chalisa"} podcastPublishDate={"18 July, 2021"} podcastDuration={"24 min"} />
              </SwiperSlide>
              <SwiperSlide>
                  <PodcastCard podcastImg={"https://cdn.pixabay.com/photo/2024/03/24/05/23/ai-generated-8652449_640.png"} podcastName={"How to control your Anger"} podcastPublishDate={"18 July, 2021"} podcastDuration={"24 min"} />
              </SwiperSlide>
              <SwiperSlide>
                  <PodcastCard podcastImg={"https://cdn.pixabay.com/photo/2019/05/10/04/47/lens-4192777_640.jpg"} podcastName={"Control your focus on yourself"} podcastPublishDate={"18 July, 2021"} podcastDuration={"24 min"} />
              </SwiperSlide>
              <SwiperSlide>
                  <PodcastCard podcastImg={"https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg"} podcastName={"Technology Revolution"} podcastPublishDate={"18 July, 2021"} podcastDuration={"24 min"} />
              </SwiperSlide>
              <SwiperSlide>
                  <PodcastCard podcastImg={"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"} podcastName={"Who is G-Tech Official?"} podcastPublishDate={"18 July, 2021"} podcastDuration={"24 min"} />
              </SwiperSlide>
          </Swiper>
      </div>
  )
}

export default Podcast