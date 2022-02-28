import React from "react";
import styled from "styled-components";

import Search from "./Search";
import { BANNER_IMAGES } from "../../../constants/common";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Autoplay, EffectFade, Pagination } from "swiper"; // import required modules


const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 92.4rem;
  margin-top: 10rem; // height of Header
  overflow: hidden;

  //* Carousel layout
  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      filter: brightness(75%);

      img {
        display: block;
        width: 100%;
        /* max-width: 144rem; */
        height: 100%;
        object-fit: cover;
      }
    }
    .swiper-pagination-bullet {
      width: 2.5rem;
      height: .4rem;
      background: ${ ({ theme }) => theme.palette.white };
      border-radius: .4rem;
    }
  }
`;

const SearchBox = styled.div`
  position: absolute;
  width: 56.2rem;
  height: 52.6rem; // 222px origin
  top: 32.5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  z-index: 2; //* should set below ToggleMenu
`;

const Banner = props => {
  return (
    <Container aria-label="banner-carousel">
      <SearchBox>
        <Search />
      </SearchBox>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        effect={'fade'}
        grabCursor={true}
        autoplay={{
          "delay": 5000,
          "disableOnInteraction": false
        }}
        pagination={{
          "clickable": true,
        }}
        className="mySwiper"
      >
        {
          BANNER_IMAGES.map( ( item, index ) => (
            <SwiperSlide key={ index }>
              <img src={ item } alt={ `banner-${index + 1}` } />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  )
}

export default Banner;