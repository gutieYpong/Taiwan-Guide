import styled from "styled-components";
import { Colors } from '../constants/colors.config';
import { ENJOY_LIST } from '../constants/common';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper";


const EnjoyCarousel = ({ className }) => {
  return (
    <div className={ className }>
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
        {/* <SwiperSlideList /> */}
        {
          ENJOY_LIST.map( ( item, index ) => (
            <SwiperSlide key={ index } style={{ backgroundImage: `url(${ process.env.PUBLIC_URL }/static/image/index_enjoy/${ item.img_url })` }}>
              <div className="enjoy-card-details">
                <span className="enjoy-card-name">{ item.img_name }</span>
                <span className="enjoy-card-desc">{ item.img_desc }</span>
              </div>
              
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}


// use list, map all items as props to `Enjoy`;
const Enjoy = styled( EnjoyCarousel )`
  .swiper {
    width: 100%;
    height: 400px;

    .swiper-wrapper {
      transition-timing-function : linear;

      .swiper-slide {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-image: url(${ ({ imgUrl }) => imgUrl }); */
        background-position: center;
        background-size: cover;
        width: 273px !important;
        height: 100%;
        border-radius: 5px;

        >.enjoy-card-details {
          display: none;
        }

        &:hover {
          font-family: "Noto Sans TC";
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.15em;
          text-align: center;
          color: ${ Colors.white };
          
          &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
            border-radius: 5px;
          }

          .enjoy-card-details {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 192px;
            height: 119px;
            z-index: 999;

            .enjoy-card-name, .enjoy-card-desc {
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }
`;

// const SwiperSlideList = ({ className }) => {
//   return (
//     ENJOY_LIST.map( ( item, index ) => (
//       <SwiperSlideStyled key={ index } className={ `swiper-slide-styled` } imgUrl={ process.env.PUBLIC_URL + `/static/image/index_enjoy/${ item.img_url }` }>
//         <div className="title" data-swiper-parallax="-300">{ item.img_name }</div>
//         {/* <div className="subtitle" data-swiper-parallax="-200">Subtitle</div> */}
//         <div className="text" data-swiper-parallax="-100">
//           <p>{ item.img_desc }</p>
//         </div>
//       </SwiperSlideStyled>
//     ))
//   )
// }

// const SwiperSlideStyled = styled( SwiperSlide )`
//   &.swiper-slide-styled {
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image: url(${ ({ imgUrl }) => imgUrl });
//   background-position: center;
//   background-size: cover;
//   width: 273px !important;
//   height: 100%;
//   border-radius: 5px;

//   div {
//     display: none;
//   }

//   &:hover {
//     font-family: "Noto Sans TC";
//     font-style: normal;
//     font-weight: normal;
//     font-size: 14px;
//     line-height: 20px;
//     letter-spacing: 0.15em;
//     text-align: center;
//     color: ${ Colors.white };
    
//     &::before {
//       position: absolute;
//       content: "";
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
//       border-radius: 5px;
//     }

//     div {
//       display: flex;
//       flex-direction: column;
//       /* justify-content: space-between; */
//       align-items: center;
//       width: 192px;
//       height: 119px;
//       z-index: 999;

//       /* background-color: pink; */
//       span {
//         margin-bottom: 8px;
//       }
//     }
//   }
// }
// `;

export default Enjoy;