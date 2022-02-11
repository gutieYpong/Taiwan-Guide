import React from "react";
import styled from "styled-components";
import { TOGGLE_MENU_ITEM_LIST } from "../constants/common";
import { ACTIVITY_MENU_ITEM_LIST } from "../constants/common";
import { Colors } from "../constants/colors.config";

/**
 * the whole menu container part
 */

const ToggleMenu = styled.div`
  /* display: none; */
  /* visibility: hidden; */
  /* opacity: 0; */

  &.menu-open {
    position: absolute;
    width: 1140px;
    height: 100px;
    top: 100px;
    padding: 32px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transform: translateY(0.5); */
    /* visibility: visible;
    opacity: 1;
    transition: all 2.5s ease; */

    /* background-color: transparent; */
    background: rgba(255, 255, 255, 0.95);
    border-radius: 0px 0px 5px 5px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const ToggleMenuContainer = ({ menuIdxPayload, setMenuIdx }) => {
  return (
    <ToggleMenu className={ menuIdxPayload === -1 ? "" : "menu-open" }
      onMouseEnter={ () => setMenuIdx( menuIdxPayload ) }
      onMouseLeave={ () => setMenuIdx( -1 ) }
    >
      { menuIdxPayload === 2 ? 
        <ActivityMenuContainer /> :

        TOGGLE_MENU_ITEM_LIST[menuIdxPayload].map( ( item, index ) => (
          <AttractionDelicacyMenuContainer 
            key={ index } 
            text={ item.img_text } 
            imgSrc={ process.env.PUBLIC_URL + `/static/image/icon/menu-icon/${ item.img_name }.svg` } 
          />
        ))
      }
    </ToggleMenu>
  )
};


/**
 * the activity menu part
 * @param { string } className just className
 * @param { string } IconSrc the url of svg icon
 * @param { string } MapDesc name of Taiwan's east, north, south & central
 * @param { List } DistrictList list of different districts 
 * @returns { React.DetailedHTMLProps } the whole activity menu content
 */

const ActivityMenuItem = ({ className, IconSrc, MapDesc, DistrictList }) => {
  return (
    <div className={ className }>
      <div className="map-div">
        <div className="map-icon" IconSrc={ IconSrc }></div>
        <span className="map-desc">{ MapDesc }</span>
      </div>
      <div className="city-div">
        {
          DistrictList.map( ( item, index ) => (
            <span key={ index } className="city-desc">{ item }</span>
          ))
        }
      </div>
    </div>
  );
};

const ActivityMenuItemContainer = styled( ActivityMenuItem )`
  width: 349px;
  height: 86px;
  display: flex;
  align-items: center;

  /* background-color: ${ Colors.white }; */

  .map-div {
    width: 85px;
    height: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .map-icon {
      width: 60px;
      height: 60px;

      background-color: ${ Colors.primary.green };
      -webkit-mask: url(${ ({ IconSrc }) => IconSrc }) no-repeat center;
      mask: url(${ ({ IconSrc }) => IconSrc }) no-repeat center;
    }

    .map-desc {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 0.1em;
      color: ${ Colors.primary.green };
    }
  }

  .city-div {
    width: 264px;
    height: 64px;
    display: flex;
    flex-wrap: wrap;

    /* background-color: lightsalmon; */
    .city-desc {
      width: 66px;
      height: 32px;

      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.05em;
      color: ${ Colors.neutral.grey };
    }
  }
`;

const ActivityMenu = ({ className }) => {
  return (
    <div className={ className }>
      {
        ACTIVITY_MENU_ITEM_LIST.map( ( item, index ) => (
          <ActivityMenuItemContainer 
            key={ index }
            IconSrc={ process.env.PUBLIC_URL + `/static/image/icon/menu-icon/${ item.icon_name }.svg`}
            MapDesc={ item.zone_desc }
            DistrictList={ item.district_desc }
          />
        ))
      }
    </div>
  );
};

const ActivityMenuContainer = styled( ActivityMenu )`
  position: absolute;
  width: 788px; // 1140 - 176 * 2
  height: 220px; // 284 - 32 * 2
  top: 0px;
  margin: 0;
  padding: 32px 176px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  /* background-color: pink; */
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0px 0px 5px 5px;
  /* filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)); */

  &::before {
    position: absolute;
    content: "";
    width: 787px;
    top: 50%;
    border: 1px solid ${ Colors.neutral.littlegrey };
  }
`;

const AttractionDelicacyMenuItem = styled.div`
  width: 145px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  /* background-color: cyan; */

  div {
    width: 60px;
    height: 60px;

    background-color: ${ Colors.primary.green };
    -webkit-mask: url(${ ({ imgSrc }) => imgSrc }) no-repeat center;
    mask: url(${ ({ imgSrc }) => imgSrc }) no-repeat center;
  }

  span {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    text-align: center;
    letter-spacing: 0.05em;

    color: ${ Colors.neutral.grey };
  }
`;

const AttractionDelicacyMenuContainer = ({ className, text, imgSrc }) => {
  return (
    <AttractionDelicacyMenuItem className={ className } imgSrc={ imgSrc }>
      <div className="svg-icon"></div>
      <span>{ text }</span>
    </AttractionDelicacyMenuItem>
  );
};



const NavMenu = props => {
  const { menuIdxPayload, setMenuIdx } = props;

  return (
    <>
      { menuIdxPayload !== -1 && (
      <ToggleMenuContainer 
        menuIdxPayload={ menuIdxPayload } 
        setMenuIdx={ setMenuIdx }
      />
      )}
    </>
  );
}

export default NavMenu;