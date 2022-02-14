import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import ToggleMenu from "./ToggleMenu";
import { fontLayout } from "../../../constants/api";
import { HeartIcon } from "../../../constants/svg";
import { LogoIcon, FaqIcon, FaqFilledIcon } from "../../../assets";


const Container = styled.div`
  /* position: relative;   */
  position: fixed;
  width: 100%;
  max-width: 144rem;
  height: 100%;
  max-height: 10rem;
  display: flex;
  justify-content: center;
  background-color: ${ ({ theme }) => theme.palette.white };
  box-shadow: 0 .2rem .4rem rgba(0, 0, 0, 0.1);
  z-index: 3;
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
  justify-content: space-around;
  align-items: center;
`;

const LogoItem = styled.img`
  width: 100%;
  height: 100%;
  max-width: 17.882rem;
  max-height: 9.6rem;
`;

const CategoryItemBox = styled.div`
  position: relative;
  width: 9.3rem;
  height: 5.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  &:hover {
    cursor: pointer;

    &::before {
      position: absolute;
      content: "";
      width: .8rem;
      height: .8rem;
      top: 0;
      background-color: ${ ({ theme }) => theme.palette.auxiliary.yellow };
      border-radius: .4rem;
      opacity: 1;
    }
  }
`;

const CategoryTitleCH = styled.span`
  letter-spacing: 0.15em;

  ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.6rem', '2.2rem', theme.palette.neutral.main) }
`;

const CategoryTitleEN = styled.span`
  letter-spacing: 0.05em;

  ${ ({ theme }) => fontLayout('Open Sans', 'normal', 'normal', '1.2rem', '1.7rem', theme.palette.neutral.main) }
`;

const CategoryItem = ({ TitleCH, TitleEN, menuSelector, setMenuSelector }) => {
  return (
    <CategoryItemBox
      onMouseEnter={ () => setMenuSelector( menuSelector ) }
    >
      <CategoryTitleCH>{ TitleCH }</CategoryTitleCH>
      <CategoryTitleEN>{ TitleEN }</CategoryTitleEN>
    </CategoryItemBox>
  )
};

const FuncIconBox = styled.div`
  width: 100%; 
  height: 100%;
  display: flex;
  gap: 2.8rem;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2.1rem;
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
  const [menuSelector, setMenuSelector] = useState(null);
  const theme = useTheme()

  return (
    <Container onMouseLeave={ () => setMenuSelector(null) }>
      <NaviWrapper>
        { menuSelector !== null && (
        <ToggleMenu 
          menuSelector={ menuSelector } 
          setMenuSelector={ setMenuSelector }
        />
        )}
        <NaviItem StartCol={ 1 } EndCol={ 3 }>
          <LogoItem src={ LogoIcon } alt='Logo' />
        </NaviItem>
        <NaviItem StartCol={ 5 } EndCol={ 9 } 
        >
          <Link to="/result" style={{ textDecoration: 'none' }}>
            <CategoryItem 
              TitleCH='找景點' TitleEN='ATTRACTION'
              menuSelector={ 'attraction' } setMenuSelector={ setMenuSelector }
            />
          </Link>
          <CategoryItem 
            TitleCH='找美食' TitleEN='DELICACY'
            menuSelector={ 'delicacy' } setMenuSelector={ setMenuSelector }
          />
          <CategoryItem 
            TitleCH='找活動' TitleEN='ACTIVITY' 
            menuSelector={ 'activity' } setMenuSelector={ setMenuSelector }
          />
        </NaviItem>
        <NaviItem StartCol={ 11 } EndCol={ 13 }>
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
