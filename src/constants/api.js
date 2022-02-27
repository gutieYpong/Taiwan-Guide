import dayjs from 'dayjs';
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

export const SCENIC_SPOT_API = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Tainan?%24top=200&%24format=JSON";
export const RESTAURANT_API = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Taipei?%24top=30&%24format=JSON";
export const ACTIVITY_API = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?%24top=30&%24format=JSON";

export const SCENIC_SPOT_CITY_API = ( query ) => `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${query}?%24top=200&%24format=JSON`;
// export const SCENIC_SPOT_CATEGORY_API = ( query ) => `https://ptx.transportdata.tw/MOTC/v2/Tourism/${query}?%24top=200&%24format=JSON`;
export const RESTAURANT_ALL_API = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=200&%24format=JSON`;
export const ACTIVITY_ALL_API = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?%24top=200&%24format=JSON`;
export const CATEGORY_FILTER_API = ( filterCondition ) => `https://ptx.transportdata.tw/MOTC/v2/Tourism/${filterCondition}?%24top=200&%24format=JSON`;
export const SCENIC_SPOT_FILTER_API = ( filterCondition ) => `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=${filterCondition}&%24top=200&%24format=JSON`;
export const RESTAURANT_FILTER_API = ( filterCondition ) => `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=${filterCondition}&%24top=200&%24format=JSON`;
export const ACTIVITY_FILTER_API = ( filterCondition ) => `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=${filterCondition}&%24top=200&%24format=JSON`;


export const getSortedAPI = ( cateSelector, orderCondition ) => {
  switch( cateSelector ) {
    case 'ScenicSpot':
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/${cateSelector}?%24top=200&%24format=JSON&%24orderby=ScenicSpotID ${orderCondition}`;
    case 'Restaurant':
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/${cateSelector}?%24top=200&%24format=JSON&%24orderby=RestaurantID ${orderCondition}`;
    case 'Activity':
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/${cateSelector}?%24filter=EndTime gt ${dayjs().format('YYYY-MM-DD')}&%24top=200&%24format=JSON&%24orderby=StartTime ${orderCondition}`;
      default: return;
  }
}