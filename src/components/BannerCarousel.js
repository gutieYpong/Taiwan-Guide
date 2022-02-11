import React, { useState } from "react";
import styled, { css } from "styled-components";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles must use direct files imports
// import "swiper/swiper.scss"; // core Swiper
// import "swiper/modules/effect-fade/effect-fade.scss" // EffectFade module
// import "swiper/modules/pagination/pagination.scss"; // Pagination module

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import Swiper core and required modules
// import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper';

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";


import { BANNER_IMAGES } from "../constants/common";
import { Colors } from "../constants/colors.config";
import { SearchIcon } from "../constants/svg";
import { FONT_LAYOUT } from "../constants/css.templates"

// install Swiper modules
// SwiperCore.use( [Autoplay, EffectFade, Pagination] );

const Banner = ({ className }) => {
  const [isFocus, setIsFocus] = useState( false );
  let timer;

  const focusHandler = ( payload, event ) => {
    clearTimeout( timer );
    if( !isFocus )
    {
      setIsFocus( payload );
    }
    else
    {
      timer = setTimeout(() => {
        setIsFocus( payload );
      }, 500); // 500? 1000?
    }

    // Do something with event
    // console.log(event);
  };

  return (
    <Container className={ className }
      isFocus={ isFocus }
    >
      <div className="search-div">
        <div className="search-desc">
          遠離日常喧囂<br />讓旅行豐富你的生活
        </div>
        <SearchInputContainer className="search-input-div" isFocus={ isFocus }>
          <SearchInput type="text" placeholder="想去哪裡?" 
            onFocus={ ( event ) => focusHandler( true, event ) }
            onBlur={ ( event ) => focusHandler( false, event ) }
            isFocus={ isFocus }
          />
          <SearchSuggestion className="search-suggestion-div" isFocus={ isFocus } >
            <SearchSuggestionCategoryContainer isFocus={ isFocus } />
            <SearchSuggestionListContainer  isFocus={ isFocus } />
          </SearchSuggestion>
          <SearchIcon />
        </SearchInputContainer>
      </div>
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
              <img src={ process.env.PUBLIC_URL + `/static/image/index_banner/${ item }` } alt={ item } />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  /* Layout */
  position: relative;

  .search-div {
    /* Layout */
    position: absolute;
    width: 562px;
    height: 526px; // 222px origin
    top: 32.5%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translateX(-50%);
    z-index: 999;

    /* background-color: pink; */
    .search-desc {
      /* Layout */
      width: 100%;
      height: 142px;
      margin-bottom: 16px;

      /* Font layout */
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 70px;
      letter-spacing: 0.15em;
      color: ${ Colors.white };
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    }
    /** search-input-div existed */
  }

  /* Carousel layout */
  .swiper {
    /* Layout */
    width: 100%;
    height: 86vh; // 85vh sees a line of the next div
    max-height: 924px;

    .swiper-slide {
      /* Slide image layout */
      background-position: center;
      background-size: cover;
      filter: brightness(75%);
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .swiper-pagination-bullet {
      /* Pagination layout */
      width: 25px;
      height: 4px;
      background: ${ Colors.white };
      border-radius: 4px;
    }
  }
`;

const SearchInputContainer = styled.div`
  /* Layout */
  position: relative;
  width: 100%;
  height: ${ ({ isFocus }) => ( isFocus ? "368px" : "64px" ) };
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.8);
  background-color: ${ Colors.white };

  svg {
    position: absolute;
    top: 17px;
    right: 37px;
    cursor: pointer;

    path {
      fill: ${ Colors.primary.lightgreen };
    }

    &:hover {
      path {
        fill: ${ Colors.primary.green };
      }
    }
  }
`;

const SearchInput = styled.input( ({ isFocus }) => {
  const fontColor = isFocus ? Colors.neutral.littlegrey : Colors.neutral.grey;
  const fontLayout = FONT_LAYOUT( "Open Sans", "normal", "normal", "16px", "23px", "0.1em", fontColor );
  return css`
    /* Layout */
    position: relative;
    width: 100%;
    height: ${ isFocus ? "368px" : "64px" };
    padding: 16px 80px ${ isFocus ? "320px" : "16px" } 32px; // 320px: new height - old height + original padding-bottom
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    outline: none;
    /* background: #FFFAE8; */
    /* box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.8); */

    /* Font layout */
    ${ fontLayout }


    &::placeholder {
      color: rgba(115, 115, 115, 0.5);
    }

    &:hover {
      border: 0.5px solid #FFFFFF;
      box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5), inset 0px 0px 4px rgba(255, 255, 255, 0.5);
      /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
      border-radius: 5px;
    }
    /* &:focus {
      outline: none;
      height: 368px;
      padding-bottom: 320px; // new height - old height + original padding-bottom

      ~.search-suggestion-div {
        opacity: 1;

        .search-suggestion-category-button, .search-suggestion-keyword-option {
          pointer-events: auto;
        }
      }
    } */
`});

const SearchSuggestion = styled.div`
  /* opacity: ${ ({ isFocus }) => ( isFocus ? 1 : 0 ) } ; */

  /* Ignore all events of this DOM and its children */
  pointer-events: none;

  /* Layout */
  position: absolute;
  width: 100%;
  height: calc( 368px - 64px ); // diff btw height of '.search-input-div &:focus-within' & 'input'
  top: 64px;
  display: ${ ({ isFocus }) => ( isFocus ? "flex" : "none" ) } ;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 32px 32px 24px;

  /* background-color: cyan; */
  &::before {
    /* Layout of that line under input box */
    position: absolute;
    content: "";
    width: 546px;
    height: 0.5px;
    top: 0px;
    left: calc( (564px - 546px) / 2 ); // width of diff between .search-div & this, divided by 2
    background-color: ${ Colors.neutral.grey };
  }
`;

const SearchSuggestionCategory = ({ className, isFocus }) => {
  return (
    <div className={ className }> {/* className choice: search-suggestion-category-div */}
      <SearchSuggestionTitle>想搜尋的類別</SearchSuggestionTitle>
      <div className="search-suggestion-keyword-option-div">
        <SearchSuggestionCategoryBtn className="search-suggestion-category-button" isFocus={ isFocus }>景點</SearchSuggestionCategoryBtn>
        <SearchSuggestionCategoryBtn className="search-suggestion-category-button" isFocus={ isFocus }>美食</SearchSuggestionCategoryBtn>
        <SearchSuggestionCategoryBtn className="search-suggestion-category-button" isFocus={ isFocus }>活動</SearchSuggestionCategoryBtn>
      </div>
    </div>
  )
}

const SearchSuggestionList = ({ className, isFocus }) => {
  return (
    <div className={ className }> {/* className choice: search-suggestion-keyword-div */}
      <SearchSuggestionTitle>熱門關鍵字</SearchSuggestionTitle>
      <div className="search-suggestion-category-button-div">
        <SearchSuggestionOption className="search-suggestion-keyword-option" isFocus={ isFocus }>澎湖花火節</SearchSuggestionOption>
        <SearchSuggestionOption className="search-suggestion-keyword-option" isFocus={ isFocus }>親子露營</SearchSuggestionOption>
        <SearchSuggestionOption className="search-suggestion-keyword-option" isFocus={ isFocus }>北投溫泉旅館</SearchSuggestionOption>
      </div>
    </div>
  )
}

const SearchSuggestionCategoryContainer = styled( SearchSuggestionCategory )`
  /* Layout */
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background-color: pink; */
`;

const SearchSuggestionListContainer = styled( SearchSuggestionList )`
  /* Layout */
  width: 100%;
  height: 162px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background-color: pink; */
  .search-suggestion-category-button-div {
    /* Layout */
    width: 100%;
    height: 138px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    /* background-color: lightgreen; */
  }
`;

const SearchSuggestionTitle = styled.span( () => {
  const fontLayout = FONT_LAYOUT( "Open Sans", "normal", "normal", "12px", "16px", "0.05em", Colors.neutral.littlegrey );
  return css`
    /* Layout */
    width: 100%;
    height: 16px;

    /* Font layout */
    ${ fontLayout }
`});

const SearchSuggestionCategoryBtn = styled.button( ({ isFocus }) => {
  const fontLayout = FONT_LAYOUT( "Open Sans", "normal", "normal", "16px", "22px", "0.05em", Colors.neutral.grey );
  return css`
    /* Bring back the event response in these options */
    pointer-events: ${ isFocus ? "auto" : "none" }; 

    /* Layout */
    width: 81px;
    height: 30px;
    border: 0.5px solid ${ Colors.neutral.grey };
    border-radius: 5px;
    margin-right: 16px;
    background-color: inherit;
    cursor: pointer;

    /* Font layout */
    ${ fontLayout }

    &:hover {
      border: 0.5px solid ${ Colors.primary.green };
      color: ${ Colors.primary.green };
    }

    &:active {
      background-color: ${ Colors.primary.green };
      color: ${ Colors.white };
    }
`});

const SearchSuggestionOption = styled.span( ({ isFocus }) => {
  const fontLayout = FONT_LAYOUT( "Open Sans", "normal", "normal", "16px", "22px", "0.05em", Colors.neutral.grey );
  return css`
    /* Bring back the event response in these options */
    pointer-events: ${ isFocus ? "auto" : "none" }; 

    /* Layout */
    width: 100%;
    height: 22px;
    cursor: pointer;

    /* Font layout */
    ${ fontLayout }

    /* background-color: grey; */
    &:hover {
      color: ${ Colors.primary.green };
    }
`});

export default Banner;