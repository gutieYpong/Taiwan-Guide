import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { fetchData } from "../../../../features/tourismSlice";
import { fontLayout, SCENIC_SPOT_CITY_API } from "../../../../constants/api";


/**
 * ... attraction menu part ...
//  * @param { string } IconSrc source of svg icon
//  * @param { string } MapDesc name of Taiwan's east, north, south & central
//  * @param { List } DistrictList list of different districts 
//  * @returns { React.DetailedHTMLProps } the whole activity menu content
 */

const AttractionMenuItemBox = styled.div`
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

  a {
    width: 6.6rem;
    height: 3.2rem;
    text-decoration: none;

    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.6rem', '3.2rem', theme.palette.neutral.main) }

    text-align: center;
    letter-spacing: 0.05em;
  }
`;

const AttractionMenuItem = ({ IconSrc, MapDesc, CityListCH, CityListENG, AlignStyle }) => {
  const dispatch = useDispatch();
  return (
    <AttractionMenuItemBox AlignStyle={ AlignStyle }>
      <ItemMapBox>
        <img src={ IconSrc } alt={ MapDesc } />
        <span>{ MapDesc }</span>
      </ItemMapBox>
      <ItemCityBox>
        {
          CityListCH.map( ( item, index ) => (
            <Link to="/scenicSpot"
              key={ `city-${index}` }
              children={ item }
              onClick={ () => {
                dispatch(
                  fetchData({
                    url: SCENIC_SPOT_CITY_API(CityListENG[index]),
                    cateType: 'scenicSpot'
                  })
                );
              }}
            />
          ))
        }
      </ItemCityBox>
    </AttractionMenuItemBox>
  );
};

const AttractionMenuBox = styled.div`
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
    border: .1rem solid ${ ({ theme }) => theme.palette.neutral.little };
  }
`;

const AttractionMenu = ({ ItemList }) => {
  return (
    <AttractionMenuBox>
      {
        ItemList.map( ( item, index ) => (
          <AttractionMenuItem 
            key={ index }
            IconSrc={ item.icon_src }
            MapDesc={ item.zone_desc }
            CityListCH={ item.city_name_ch }
            CityListENG={ item.city_name_eng }
            AlignStyle={ item.align_style }
          />
        ))
      }
    </AttractionMenuBox>
  );
};

export default AttractionMenu;