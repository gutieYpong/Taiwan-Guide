import styled from "styled-components";

import { fontLayout } from "../../../constants/api";


/**
 * ... delicay menu part ... (same as attraction)
 */

const DelicacyMenuItemBox = styled.div`
  width: 14.5rem;
  height: 6.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    filter: invert(62%) sepia(33%) saturate(405%) hue-rotate(54deg) brightness(84%) contrast(86%);
  }

  span {
    text-align: center;
    letter-spacing: 0.05em;

    ${ ({ theme }) => fontLayout('Open Sans', 'normal', 'normal', '1.6rem', '2.2rem', theme.palette.neutral.main) }
  }
`;

const DelicacyMenuBox = styled.div`
  position: absolute;
  width: 100%;
  height: 10rem;
  top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  /* transform: translateY(0.5); */
  /* visibility: visible;
  opacity: 1;
  transition: all 2.5s ease; */

  /* background-color: transparent; */
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0 0 .5rem .5rem;
  filter: drop-shadow(0 .2rem .4rem rgba(0, 0, 0, 0.1));
`;


const DelicacyMenu = ({ ItemList }) => {
  return (
    <DelicacyMenuBox>
      {
        ItemList.map((item, index) => (
          <DelicacyMenuItemBox key={ index }>
            <img src={ item.icon_src } alt={ item.icon_desc } />
            <span>{ item.icon_desc }</span>
          </DelicacyMenuItemBox>
        ))
      }
    </DelicacyMenuBox>
  );
};

export default DelicacyMenu;