import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import { fontLayout } from "../../constants/api";
import { HeartIcon } from "../../constants/svg";
import { LogoIcon, FaqIcon, FaqFilledIcon, CancelIcon } from "../../assets";


const Container = styled.div`
  position: relative; //*
  /* grid-area: header; */
  width: 100%;
  max-width: 144rem;
  height: 100%;
  max-height: 6.4rem; //*
  display: flex;
  justify-content: center;
  background-color: ${ ({ theme }) => theme.palette.white };
  box-shadow: 0 .2rem .4rem rgba(0, 0, 0, 0.1);
  /* z-index: 3; //* */
`;

const NaviWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 15rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1.6rem;
`;

const NaviItem = styled.div`
  grid-column: ${ ({ StartCol, EndCol }) => `${StartCol} / ${EndCol}` };
  display: flex;
  justify-content: ${ ({ JustifyContent }) => JustifyContent };
  align-items: center;
`;

const LogoItem = styled.img`
  width: 100%;
  height: 100%;
  max-width: 11.922rem; //*
  max-height: 6.4rem; //*
`;

const NoticeItem = styled.div`
  width: 17.6rem;
  height: 2.9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${ ({ theme }) => theme.palette.primary.light };
  border-radius: .5rem;

  span {
    letter-spacing: .05em;
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.white) }
  }
  svg {
    width: 2rem;
    height: 2rem;
    path {
      fill: ${ ({ theme }) => theme.palette.white };
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

const FuncIconBox = styled.div`
  width: 100%; 
  height: 100%;
  display: flex;
  gap: 2.8rem;
  justify-content: flex-end;
  align-items: center;
`;

const FaqIconBox = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = props => {
  const [isFaqHover, setIsFaqHover] = useState( false );
  const theme = useTheme();

  return (
    <Container>
      <NaviWrapper>
        <NaviItem StartCol={ 1 } EndCol={ 3 } JustifyContent="left">
          <LogoItem src={ LogoIcon } alt='Logo' />
        </NaviItem>
        <NaviItem StartCol={ 4 } EndCol={ 10 } JustifyContent="center">
          <NoticeItem>
            <span>已加入收藏</span>
            <CancelIcon />
          </NoticeItem>
        </NaviItem>
        <NaviItem StartCol={ 11 } EndCol={ 13 } JustifyContent="right">
          <FuncIconBox>
            <HeartIcon
              FillColor={ theme.palette.primary.main }
              StrokeColor={ theme.palette.primary.main }
            />
            <FaqIconBox
              onMouseEnter={ () => setIsFaqHover( !isFaqHover ) }
              onMouseLeave={ () => setIsFaqHover( !isFaqHover ) }> 
            { 
              isFaqHover ? 
              <FaqFilledIcon style={{ cursor: 'pointer' }} /> :
              <FaqIcon
                style={{ width: '2.1rem', height: '2.1rem', fill: theme.palette.primary.main }}
              />
            }
            </FaqIconBox>
          </FuncIconBox>
        </NaviItem>
      </NaviWrapper>
    </Container>
  );
}

export default Header;
