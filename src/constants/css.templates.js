/** 
 * Font layout
 * font-family: "Open Sans";
 * font-style: normal;
 * font-weight: normal;
 * font-size: 16px;
 * line-height: 22px;
 * letter-spacing: 0.05em;
 * color: ${ Colors.neutral.grey };
 */

export const FONT_LAYOUT = ( fontFamily, fontStyle, fontWeight, fontSize, lineHeight, letterSpacing, fontColor ) => (
`
  font-family: ${ fontFamily };
  font-style: ${ fontStyle };
  font-weight: ${ fontWeight };
  font-size: ${ fontSize };
  line-height: ${ lineHeight };
  letter-spacing: ${ letterSpacing };
  color: ${ fontColor };
`);

