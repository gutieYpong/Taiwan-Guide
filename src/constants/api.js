/**
 * Example:
 * Font layout
 * font-family: "Open Sans";
 * font-style: normal;
 * font-weight: normal;
 * font-size: 16px;
 * line-height: 22px;
 * color: ${ Colors.neutral.grey };
 */

import jsSHA from "jssha";
import { AppID, AppKey } from "./api.key"

export const fontLayout = ( fontFamily, fontStyle, fontWeight, fontSize, lineHeight, color ) => {
  return `
    font-family: ${ fontFamily };
    font-style: ${ fontStyle };
    font-weight: ${ fontWeight };
    font-size: ${ fontSize };
    line-height: ${ lineHeight };
    color: ${ color };
  `;
}

export const getAuthorizationHeader = () => {
  //*  填入自己 ID、KEY 開始
  // let AppID = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
  // let AppKey = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';

  //*  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  let HMAC = ShaObj.getHMAC('B64');
  let Authorization = `hmac username="${ AppID }", algorithm="hmac-sha1", headers="x-date", signature="${ HMAC }"`;

  return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

export const SCENIC_SPOT_API = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Tainan?%24top=200&%24format=JSON"; // tainan, top200
export const RESTAURANT_API = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Taipei?%24top=30&%24format=JSON";
export const ACTIVITY_API = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?%24top=30&%24format=JSON";