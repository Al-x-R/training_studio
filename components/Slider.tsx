import React from 'react';
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import TrainerItem from './TrainerItem';

const Slider = () => {
  const countSlides = 5;
  return (
    <Box w={'100%'} px={16}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop
        speed={500}
        touchRatio={1.5}
        effect={"flip"}
      >
        {/*{productsList &&*/}
        {/*productsList.map((item) => (*/}
          <SwiperSlide >
              <TrainerItem />
          </SwiperSlide>
        <SwiperSlide >
          <TrainerItem />
        </SwiperSlide>
        <SwiperSlide >
          <TrainerItem />
        </SwiperSlide>
        <SwiperSlide >
          <TrainerItem />
        </SwiperSlide>
        <SwiperSlide >
          <TrainerItem />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;