import styled from "styled-components";

import { fontLayout } from "../../constants/api";
import { ENJOY_LIST } from '../../constants/common';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Autoplay, FreeMode } from "swiper"; // import required modules


// use list, map all items as props to `Enjoy`;
const EnjoyCarouselBox = styled.div`
  width: auto;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      transition-timing-function : linear;

      .swiper-slide {
        position: relative;
        width: 27.3rem !important;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center;
        background-size: cover;
        border-radius: .5rem;

        >.enjoy-card-details {
          display: none;
        }

        &:hover {
          letter-spacing: 0.15em;
          text-align: center;

          ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.white) }
          
          &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
            border-radius: .5rem;
          }
          .enjoy-card-details {
            display: flex;
            width: 19.2rem;
            height: 11.9rem;
            flex-direction: column;
            align-items: center;
            z-index: 2;

            .enjoy-card-name, .enjoy-card-desc {
              margin-bottom: .8rem;
            }
          }
        }
      }
    }
  }
`;

const EnjoyCarousel = props => {
  return (
    <EnjoyCarouselBox>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={5} 
        spaceBetween={16} 
        loop={true} 
        grabCursor={true}
        freeMode={true}
        freeModeMomentum={false}
        speed={2000}
        autoplay={{
          "delay": 1,
          "disableOnInteraction": false,
          "pauseOnMouseEnter": true,
        }}
        className="mySwiper"
      >
        {
          ENJOY_LIST.map( ( item, index ) => (
            <SwiperSlide key={ index } style={{ backgroundImage: `url(${ item.img_src })` }}>
              <div className="enjoy-card-details">
                <span className="enjoy-card-name">{ item.img_name }</span>
                <span className="enjoy-card-desc">{ item.img_desc }</span>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </EnjoyCarouselBox>
  )
}

export default EnjoyCarousel;