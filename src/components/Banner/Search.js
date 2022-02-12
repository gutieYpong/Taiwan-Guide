import React, { useState } from "react";
import styled, { css } from "styled-components";

import Suggestion from "./Suggestion";
import { SearchIcon } from "../../assets";
import { fontLayout } from "../../constants/api";


const SearchTitle = styled.div`
  width: 100%;
  height: 14.2rem;
  margin-bottom: 1.6rem;

  letter-spacing: 0.15em;
  text-shadow: .2rem .2rem .2rem rgba(0, 0, 0, 0.6);
  ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '4.8rem', '7rem', theme.palette.white) }
`;

/**
 * ... search input ...
 */
const SearchInputBox = styled.div`
  position: relative;
  width: 100%;
  height: ${ ({ isFocus }) => ( isFocus ? "36.8rem" : "6.4rem" ) };
  border: .05rem solid rgba(255, 255, 255, 0.5);
  border-radius: .5rem;
  box-shadow: 0 .2rem .6rem rgba(0, 0, 0, 0.8);
  background-color: ${ ({ theme }) => theme.palette.white };
`;

const SearchIconBox = styled.img`
  position: absolute;
  top: ${ ({ isFocus }) => isFocus ? '8.7%' : '50%' };
  transform: translateY(-50%);
  right: 3.7rem;
  cursor: pointer;
  filter: invert(62%) sepia(33%) saturate(405%) hue-rotate(54deg) brightness(84%) contrast(86%);

  &:hover {
    filter: invert(86%) sepia(10%) saturate(682%) hue-rotate(54deg) brightness(83%) contrast(85%);
  }
`;

const SearchInput = styled.input( ({ isFocus, theme }) => {
  const FontColor = isFocus ? theme.palette.neutral.lightest : theme.palette.neutral.main;
  const FontLayout = fontLayout( 'Open Sans', 'normal', 'normal', '1.6rem', '2.3rem', FontColor );
  return css`
    /* Layout */
    position: relative;
    width: 100%;
    height: ${ isFocus ? "36.8rem" : "6.4rem" };
    padding: 1.6rem 8rem ${ isFocus ? "32rem" : "1.6rem" } 3.2rem; // 320px: new height - old height + original padding-bottom
    border: .5rem solid rgba(255, 255, 255, 0.5); // or 0?
    border-radius: .5rem;
    outline: none;

    /* Font layout */
    letter-spacing: 0.1em;
    ${ FontLayout }

    &::placeholder {
      color: rgba(115, 115, 115, 0.5);
    }

    &:hover {
      /* box-shadow: 0 .2rem .4rem rgba(0, 0, 0, 0.1); */
      box-shadow: 0 0 .4rem rgba(255, 255, 255, 0.5), inset 0 0 .4rem rgba(255, 255, 255, 0.5);
      border-radius: .5rem;
    }
`});

const Search = props => {
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
    <>
      <SearchTitle>
        遠離日常喧囂<br />讓旅行豐富你的生活
      </SearchTitle>
      <SearchInputBox isFocus={ isFocus }>
        <SearchInput
          type="text"
          placeholder="想去哪裡?"
          isFocus={ isFocus }
          onFocus={ ( event ) => focusHandler( true, event ) }
          onBlur={ ( event ) => focusHandler( false, event ) }
        />
        <Suggestion isFocus={ isFocus } />
        <SearchIconBox src={ SearchIcon } alt="search-icon" isFocus={ isFocus } />
      </SearchInputBox>
    </>
  )
}

export default Search;