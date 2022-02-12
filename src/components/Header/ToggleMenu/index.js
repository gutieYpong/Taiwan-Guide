import React from "react";

import AttractionMenu from "./AttractionMenu";
import DelicacyMenu from "./DelicacyMenu";
import ActivityMenu from "./ActivityMenu";
import {
  ATTRACTION_MENU_ITEM_LIST,
  DELICACY_MENU_ITEM_LIST,
  ACTIVITY_MENU_ITEM_LIST
} from "../../../constants/common";


/**
 * the whole toggle menu part
 */

const ToggleMenu = ({ menuSelector }) => {
  return (
    <>
      {(() => {
        switch (menuSelector) {
          case 'attraction':
            return <AttractionMenu ItemList={ ATTRACTION_MENU_ITEM_LIST } />
          case 'delicacy':
            return <DelicacyMenu ItemList={ DELICACY_MENU_ITEM_LIST } />
          case 'activity':
            return <ActivityMenu ItemList={ ACTIVITY_MENU_ITEM_LIST } />
          default:
            return null
        }
      })()}
    </>
  )
};

export default ToggleMenu;