import styled from "styled-components";

import { fontLayout } from "../../../constants/api";


/**
 * ... activity menu part ...
//  * @param { string } IconSrc source of svg icon
//  * @param { string } MapDesc name of Taiwan's east, north, south & central
//  * @param { List } DistrictList list of different districts 
//  * @returns { React.DetailedHTMLProps } the whole activity menu content
 */

const ActivityMenuItemBox = styled.div`
  width: 34.9rem;
  height: 8.6rem;
  place-self: ${ ({ AlignStyle }) => AlignStyle };
  display: flex;
  align-items: center;

  background-color: transparent;
`;

const ItemMapBox = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    filter: invert(62%) sepia(33%) saturate(405%) hue-rotate(54deg) brightness(84%) contrast(86%);
  }
  span {
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.2rem', '1.7rem', theme.palette.primary.main) }

    letter-spacing: 0.1em;
  }
`;

const ItemCityBox = styled.div`
  width: 26.4rem;
  height: 6.4rem;
  display: flex;
  flex-wrap: wrap;

  span {
    width: 6.6rem;
    height: 3.2rem;

    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.6rem', '3.2rem', theme.palette.neutral.main) }

    text-align: center;
    letter-spacing: 0.05em;
  }
`;

const ActivityMenuItem = ({ IconSrc, MapDesc, DistrictList, AlignStyle }) => {
  return (
    <ActivityMenuItemBox AlignStyle={ AlignStyle }>
      <ItemMapBox>
        <img src={ IconSrc } alt={ MapDesc } />
        <span>{ MapDesc }</span>
      </ItemMapBox>
      <ItemCityBox>
        {
          DistrictList.map( ( item, index ) => (
            <span key={ index }>{ item }</span>
          ))
        }
      </ItemCityBox>
    </ActivityMenuItemBox>
  );
};

const ActivityMenuBox = styled.div`
  position: absolute;
  width: 100%;
  height: 28.4rem;
  top: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 4rem;
  grid-row-gap: 4.8rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0 0 .5rem .5rem;
  filter: drop-shadow(0 .2rem .4rem rgba(0, 0, 0, 0.1));
  
  &::before {
    position: absolute;
    content: "";
    width: 78.7rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: .1rem solid ${ ({ theme }) => theme.palette.neutral.lightest };
  }
`;

const ActivityMenu = ({ ItemList }) => {
  return (
    <ActivityMenuBox>
      {
        ItemList.map( ( item, index ) => (
          <ActivityMenuItem 
            key={ index }
            IconSrc={ item.icon_src }
            MapDesc={ item.zone_desc }
            DistrictList={ item.district_desc }
            AlignStyle={ item.align_style }
          />
        ))
      }
    </ActivityMenuBox>
  );
};

export default ActivityMenu;