import styled from "styled-components";
import { Pagination, Stack, Skeleton } from '@mui/material';
import { isEmpty } from "lodash";

import { fontLayout } from "../../../constants/api";
import { HeartOutlineIcon, GPSIcon, MissingSpotImg, MissingRestaurantImg, MissingActivityImg } from "../../../assets";
import { HeartIcon } from "../../../constants/svg";

export const CardContainer = styled.div`
  width: 28.367rem;
  height: 20.8rem;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  padding: .8rem;

  .content-card--image {
    position: relative;
    width: 100%;
    height: 13.7rem;
    border-radius: .5rem;
    overflow: hidden;

    &::before {
      display: ${ ({ IsMissing }) => IsMissing ? 'block' : 'none' };
      position: absolute;
      content: "此景點尚未提供圖片";
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 2;
      text-shadow: .2rem .2rem .2rem rgba(0, 0, 0, 0.6);
      letter-spacing: 0.05em;
      ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.white) }
    }
    .overlay {
      position: absolute;
      top: 1.2rem;
      right: 1.2rem;
      z-index: 3;
      &:hover {
        transform: scale(1);
      }
    }
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(85%);
      border-radius: .5rem;
      cursor: pointer;
      transition: transform .5s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .content-card--desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: 0 .4rem;

    .content-card--title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
      letter-spacing: 0.1em;
      ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '2rem', '2.9rem', theme.palette.neutral.main) }
      &:hover {
        font-weight: bold;
        color: ${ ({ theme }) => theme.palette.neutral.darker };
      }
    }
    .content-card--location {
      display: flex;
      align-items: center;
      gap: .8rem;

      span {
        letter-spacing: 0.1em;
        ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.neutral.main) }
      }
    }
  }
`;

export const Card = ({ Item, ItemName, Theme, selectedIdx }) => {
  const MISSING_IMG_MAP = [MissingSpotImg, MissingRestaurantImg, MissingActivityImg];
  const isMissing = isEmpty( Item.Picture );
  return (
    <CardContainer IsMissing={ isMissing }>
      <div className="content-card--image">
        <HeartIcon
          className="overlay"
          FillColor={ Theme.palette.primary.main }
          StrokeColor={ Theme.palette.white }
          // style={{ filter: 'brightness(85%)' }}
        />
        <img className="image" src={ isMissing ? MISSING_IMG_MAP[selectedIdx] : Item.Picture.PictureUrl1 } alt={ isMissing ? ItemName : Item.Picture.PictureDescription1 } />
      </div>
      <div className="content-card--desc">
        <p className="content-card--title">{ ItemName }</p>
        <div className="content-card--location">
          <GPSIcon />
          <span>{ Item.City }</span>
        </div>
      </div>
    </CardContainer>
)}