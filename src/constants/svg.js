import styled from "styled-components";
import { Colors } from "./colors.config";

const HeartSvg = styled.svg`
  height: 2rem;
  width: 2rem;
  fill: none;
  stroke: ${ ({ StrokeColor }) => StrokeColor };

  &:hover {
    cursor: pointer;
    fill: ${ ({ FillColor }) => FillColor };
    transform: scale(1.5);
  }
`;

export const HeartIcon = ({ FillColor, StrokeColor }) => (
  <HeartSvg FillColor={ FillColor } StrokeColor={ StrokeColor } viewBox="0 0 30 30" fill="current" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.33426 8.33426C7.29459 7.38033 8.59428 6.84648 9.94793 6.85002C11.3024 6.85355 12.6 7.39483 13.5555 8.35484L14.158 7.75522L13.5576 8.35692L14.39 9.18748L14.9917 9.78786L15.5921 9.18614L16.4097 8.36673C16.41 8.36643 16.4103 8.36614 16.4106 8.36584C16.8864 7.8923 17.4508 7.5171 18.0717 7.26168C18.6929 7.0061 19.3584 6.87545 20.0302 6.8772C20.7019 6.87896 21.3667 7.01307 21.9866 7.27189C22.6065 7.53071 23.1693 7.90916 23.6428 8.3856L23.6459 8.38871C24.6055 9.34414 25.1464 10.6414 25.15 11.9955C25.1535 13.3491 24.6197 14.6488 23.6658 15.6091C23.6655 15.6095 23.6651 15.6098 23.6648 15.6101L15.0807 24.1887L15.0806 24.1888C15.0681 24.2013 15.0512 24.2083 15.0335 24.2083C15.0158 24.2083 14.9988 24.2013 14.9863 24.1888C14.9863 24.1888 14.9863 24.1888 14.9863 24.1888L6.35632 15.557L6.35484 15.5555C5.39483 14.6 4.85355 13.3024 4.85002 11.9479C4.84648 10.5943 5.38033 9.29459 6.33426 8.33426Z" stroke="current" stroke-width="1.7" />
  </HeartSvg>
);

export const ArrowIcon = () => {
  return (
    <svg width="74" height="10" viewBox="0 0 74 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9H73" stroke="#769763" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M73 9L61.48 1" stroke="#769763" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
};

export const SendIcon = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.7922 6.21868L23.8274 6.18324C23.7193 6.07566 23.5828 6.00118 23.4338 5.96855C23.2849 5.93592 23.1297 5.9465 22.9865 5.99903C22.9865 5.99904 22.9865 5.99904 22.9865 5.99904L6.46749 12.006L6.46749 12.006L6.46684 12.0062C6.31489 12.0638 6.18407 12.1663 6.09176 12.3001C5.99944 12.4338 5.95 12.5925 5.95 12.755C5.95 12.9175 5.99944 13.0762 6.09176 13.2099C6.18399 13.3436 6.31465 13.446 6.46642 13.5037C6.46656 13.5037 6.4667 13.5038 6.46684 13.5038L13.6545 16.3789L16.5298 23.5673L23.7922 6.21868ZM23.7922 6.21868L23.8283 6.18415C23.9332 6.29395 24.0047 6.43131 24.0344 6.5802C24.0642 6.72896 24.0511 6.8831 23.9966 7.0247C23.9966 7.02482 23.9965 7.02494 23.9965 7.02506L17.9899 23.5433C17.9899 23.5433 17.9899 23.5433 17.9899 23.5433C17.9349 23.6955 17.835 23.8275 17.7035 23.9219C17.572 24.0162 17.4149 24.0685 17.2531 24.0718L17.2506 24.0719L17.2506 24.0718C17.0943 24.0673 16.9428 24.017 16.8147 23.9274C16.6867 23.8377 16.5876 23.7126 16.5299 23.5674L23.7922 6.21868ZM18.7892 12.3511L18.8245 12.3158L18.7892 12.2804L17.7304 11.2217L17.6951 11.1863L17.6597 11.2217L14.0565 14.8249L8.98186 12.7615L21.9219 8.08896L17.2498 21.0277L15.2158 15.9245L18.7892 12.3511Z" fill="rgba(255, 255, 255, 0.5)" stroke="rgba(255, 255, 255, 0.5)" stroke-width="0.1"/>
    </svg>
  )
};

export const FacebookIcon = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.9603 24.2539H16.4862V15.4693H19.4344L19.8797 12.0517H16.4862V9.86161C16.4862 8.87485 16.7629 8.20096 18.1829 8.20096H20V5.13237C19.6871 5.09627 18.6161 5 17.3646 5C14.7413 5 12.9603 6.60048 12.9603 9.52467V12.0517H10V15.4693H12.9603V24.2539Z" fill="#ACACAC"/>
    </svg>
  )
};

export const InstagramIcon = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0375 15C18.0375 13.3125 16.6875 11.9625 15 11.9625C13.3125 11.9625 11.9625 13.3125 11.9625 15C11.9625 16.6875 13.3125 18.0375 15 18.0375C16.6875 18.0375 18.0375 16.6875 18.0375 15ZM19.6125 15C19.6125 17.5875 17.5875 19.6125 15 19.6125C12.4125 19.6125 10.3875 17.5875 10.3875 15C10.3875 12.4125 12.4125 10.3875 15 10.3875C17.5875 10.3875 19.6125 12.4125 19.6125 15ZM20.85 10.1625C20.85 10.8375 20.4 11.2875 19.725 11.2875C19.05 11.2875 18.6 10.8375 18.6 10.1625C18.6 9.4875 19.05 9.0375 19.725 9.0375C20.4 9.0375 20.85 9.6 20.85 10.1625ZM15 7.575C13.65 7.575 10.8375 7.4625 9.7125 7.9125C8.925 8.25 8.25 8.925 8.025 9.7125C7.575 10.8375 7.6875 13.65 7.6875 15C7.6875 16.35 7.575 19.1625 8.025 20.2875C8.25 21.075 8.925 21.75 9.7125 21.975C10.8375 22.425 13.7625 22.3125 15 22.3125C16.2375 22.3125 19.1625 22.425 20.2875 21.975C21.075 21.6375 21.6375 21.075 21.975 20.2875C22.425 19.05 22.3125 16.2375 22.3125 15C22.3125 13.7625 22.425 10.8375 21.975 9.7125C21.75 8.925 21.075 8.25 20.2875 8.025C19.1625 7.4625 16.35 7.575 15 7.575ZM24 15V18.7125C24 20.0625 23.55 21.4125 22.5375 22.5375C21.525 23.55 20.175 24 18.7125 24H11.2875C9.9375 24 8.5875 23.55 7.4625 22.5375C6.5625 21.525 6 20.175 6 18.7125V15V11.2875C6 9.825 6.5625 8.475 7.4625 7.4625C8.5875 6.5625 9.9375 6 11.2875 6H18.7125C20.0625 6 21.4125 6.45 22.5375 7.4625C23.4375 8.475 24 9.825 24 11.2875V15Z" fill="#ACACAC"/>
    </svg>
  )
};

export const YoutubeIcon = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 14.8495C25 14.8028 25 14.7496 24.9979 14.6879C24.9958 14.5157 24.9915 14.3222 24.9873 14.1159C24.9703 13.5226 24.9406 12.9314 24.894 12.3743C24.8304 11.6066 24.7371 10.9665 24.6098 10.4859C24.4756 9.98437 24.2124 9.52695 23.8466 9.15938C23.4808 8.7918 23.0252 8.52695 22.5253 8.39128C21.9252 8.22966 20.7504 8.12972 19.0964 8.06805C18.3097 8.03828 17.4679 8.01914 16.626 8.00851C16.3312 8.00425 16.0577 8.00213 15.8117 8H15.1883C14.9423 8.00213 14.6687 8.00425 14.374 8.00851C13.5321 8.01914 12.6903 8.03828 11.9036 8.06805C10.2496 8.13184 9.07266 8.23179 8.47467 8.39128C7.97464 8.52661 7.51887 8.79136 7.15303 9.15898C6.78718 9.52661 6.52411 9.9842 6.39018 10.4859C6.26083 10.9665 6.16964 11.6066 6.10603 12.3743C6.05937 12.9314 6.02969 13.5226 6.01272 14.1159C6.00636 14.3222 6.00424 14.5157 6.00212 14.6879C6.00212 14.7496 6 14.8028 6 14.8495V14.9686C6 15.0154 6 15.0686 6.00212 15.1302C6.00424 15.3025 6.00848 15.496 6.01272 15.7023C6.02969 16.2956 6.05937 16.8868 6.10603 17.4439C6.16964 18.2116 6.26295 18.8517 6.39018 19.3323C6.66161 20.3509 7.45893 21.1547 8.47467 21.4269C9.07266 21.5885 10.2496 21.6885 11.9036 21.7501C12.6903 21.7799 13.5321 21.799 14.374 21.8097C14.6687 21.8139 14.9423 21.8161 15.1883 21.8182H15.8117C16.0577 21.8161 16.3312 21.8139 16.626 21.8097C17.4679 21.799 18.3097 21.7799 19.0964 21.7501C20.7504 21.6863 21.9273 21.5864 22.5253 21.4269C23.5411 21.1547 24.3384 20.353 24.6098 19.3323C24.7392 18.8517 24.8304 18.2116 24.894 17.4439C24.9406 16.8868 24.9703 16.2956 24.9873 15.7023C24.9936 15.496 24.9958 15.3025 24.9979 15.1302C24.9979 15.0686 25 15.0154 25 14.9686V14.8495V14.8495ZM23.4732 14.9601C23.4732 15.0048 23.4732 15.0537 23.4711 15.1111C23.469 15.277 23.4647 15.4599 23.4605 15.6576C23.4456 16.2233 23.416 16.7889 23.3714 17.3142C23.3142 17.9989 23.2336 18.5603 23.1339 18.9367C23.0025 19.428 22.6165 19.8171 22.1288 19.9468C21.6835 20.0659 20.5617 20.1616 19.0371 20.219C18.2652 20.2488 17.4339 20.2679 16.6048 20.2786C16.3143 20.2828 16.045 20.285 15.8032 20.285H15.1968L14.3952 20.2786C13.5661 20.2679 12.7369 20.2488 11.9629 20.219C10.4383 20.1595 9.3144 20.0659 8.87121 19.9468C8.38348 19.815 7.99754 19.428 7.86607 18.9367C7.76641 18.5603 7.68583 17.9989 7.62857 17.3142C7.58404 16.7889 7.55647 16.2233 7.53951 15.6576C7.53315 15.4599 7.53103 15.2749 7.52891 15.1111C7.52891 15.0537 7.52679 15.0027 7.52679 14.9601V14.8581C7.52679 14.8134 7.52679 14.7645 7.52891 14.7071C7.53103 14.5412 7.53527 14.3583 7.53951 14.1606C7.55435 13.5949 7.58404 13.0292 7.62857 12.504C7.68583 11.8192 7.76641 11.2578 7.86607 10.8814C7.99754 10.3902 8.38348 10.0011 8.87121 9.87134C9.31652 9.75226 10.4383 9.65657 11.9629 9.59915C12.7348 9.56938 13.5661 9.55024 14.3952 9.53961C14.6857 9.53535 14.955 9.53323 15.1968 9.53323H15.8032L16.6048 9.53961C17.4339 9.55024 18.2631 9.56938 19.0371 9.59915C20.5617 9.65869 21.6856 9.75226 22.1288 9.87134C22.6165 10.0032 23.0025 10.3902 23.1339 10.8814C23.2336 11.2578 23.3142 11.8192 23.3714 12.504C23.416 13.0292 23.4435 13.5949 23.4605 14.1606C23.4669 14.3583 23.469 14.5433 23.4711 14.7071C23.4711 14.7645 23.4732 14.8155 23.4732 14.8581V14.9601ZM13.6127 17.7586L18.5324 14.8878L13.6127 12.0595V17.7586Z" fill="black"/>
    </svg>
  )
};