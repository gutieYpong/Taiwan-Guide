import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled, { css } from "styled-components";

import { layoutInfo, setCateSelector } from "../../features/layoutSlice";
import { fontLayout } from "../../constants/api";


const Container = styled.div( () => {
  // How many menu items do we have?
  const findingMenuItems = 3;

  // Dynamic Variables
  const basicWidth = ( 100 / findingMenuItems ); // makes each item the right size
  const menuItemsLoopOffset = findingMenuItems - 1; // the number of items in the menu

  let findingMenuItemCSSLayout = "";
  for( let i = 1; i <= menuItemsLoopOffset; i++ )
  {
    findingMenuItemCSSLayout += `
    .finding-menu-item:nth-child(${i}).is-active ~ .finding-menu-item:last-child:before {
      left: ${ basicWidth * i - ( basicWidth / 2 ) }%;
    }
    .finding-menu-item:nth-child(${i}):hover ~ .finding-menu-item:last-child:before {
      left: ${ basicWidth * i - ( basicWidth / 2 ) }% !important;
    }
    `
  }

  return css`
    position: relative;
    width: 35%;
    max-width: 144rem;
    height: 100%;
    max-height: 6.2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: ${ ({ theme }) => theme.palette.white };

    ${ findingMenuItemCSSLayout }
  `;
});

const StyledLink = styled(Link)`
  --category-item-width: 9.6rem;
  place-self: center;
  width: var(--category-item-width);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  letter-spacing: 0.1em;
  ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '2rem', '2.9rem', theme.palette.primary.main) }

  &:last-child {
    &::before {
      position: absolute;
      content: "";
      width: var(--category-item-width);
      height: .2rem;
      left: 16.65%;
      bottom: 0;
      transition: all 1s ease;
      transform: translateX(-50%);
      background: ${ ({ theme }) => theme.palette.primary.main };
    }
    &:hover, &.is-active {
      &::before {
        left: 83.35% !important;
      }
    }
  }
`;

const Category = props => {
  const dispatch = useDispatch();
  const params = useParams();
  const _cateSelector = params.cateSelector;
  // const _cateSelector = useSelector(layoutInfo).cateSelector;
  
  return (
    <Container>
      <StyledLink
        to="/scenicSpot"
        className={ `finding-menu-item ${ _cateSelector === 'scenicSpot' ? "is-active" : "" }` }
        children="找景點"
        onClick={ () => _cateSelector !== 'scenicSpot' && dispatch(setCateSelector('scenicSpot')) }
      />
      <StyledLink
        to="/delicacy"
        className={ `finding-menu-item ${ _cateSelector === 'delicacy' ? "is-active" : "" }` }
        children="找美食"
        onClick={ () => _cateSelector !== 'delicacy' && dispatch(setCateSelector('delicacy')) }
      />
      <StyledLink
        to="/activity"
        className={ `finding-menu-item ${ _cateSelector === 'activity' ? "is-active" : "" }` }
        children="找活動"
        onClick={ () => _cateSelector !== 'activity' && dispatch(setCateSelector('activity')) }
      />
    </Container>
  )
}

export default Category;