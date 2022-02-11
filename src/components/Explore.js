import styled from "styled-components";
import { EXPLORE_LIST } from "../constants/common";
import { Colors } from "../constants/colors.config";
import { ArrowIcon } from "../constants/svg";


const Container = styled.div`
  width: 100%;
  height: 1060px; // 100vh was used
  max-height: 1060px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: yellow; */
`;

const InnerExplore = styled.div`
  width: 90%;
  height: 740px; // 70% was used
  max-height: 740px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: white;
`;

const ExploreTopContent = styled.div`
  width: 100%;
  height: 350px;
  display: flex;

  /* background-color: gray; */
`;

const ExploreDesc = styled.div`
  width: 514px;
  height: 278px;
  margin-right: 32px;
  /* flex: 1; */

  /* background-color: cyan; */

  p:nth-child(1) {
    width: 175px;
    height: 65px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 65px;
    color: ${ Colors.primary.green };
    margin-top: 0;
    margin-bottom: 0;

    /* background-color: pink; */
  }
  p:nth-child(2) {
    width: 423px; // docs: 418px
    height: 71px;

    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 71px;
    letter-spacing: 0.1em;
    color: ${ Colors.neutral.grey };
    margin-top: 0;
    margin-bottom: 0;

    /* background-color: yellow; */
  }
  p:nth-child(3) {
    width: 514px;
    height: 72px;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.1em;
    color: ${ Colors.neutral.grey };
    margin-top: 16px;

    /* background-color: orange; */
  }
  span {
    width: 120px; // docs: 108px
    height: 24px;

    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    text-align: center;
    letter-spacing: 0.15em;
    color: ${ Colors.primary.green };
    margin-top: 32px;
    margin-right: 8px;

    /* background-color: purple; */
  }
`;

const ExploreTopRightContent = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;

  /* background-color: pink; */
`;

const ExploreBottomContent = styled.div`
  max-width: 100%;
  height: 350px;
  margin-top: 20px;
  margin-right: 76px;
  margin-left: auto;
  display: flex;

  /* background-color: blue; */
`;

const ExploreImg = ({ className, imgSrc, imgAlt, imgName }) => {
  return (
    <div className={ className }>
      <div className="explore-img-container">
        <img src={ imgSrc } alt={ imgAlt } />
      </div>
      <span>{ imgName }</span>
    </div>
  )
};

const ExploreImgContainer = styled( ExploreImg )`
  width: 273px;
  height: 350px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin-right: 14px; // docs: 16px

  /* background-color: green; */

  .explore-img-container {
    width: 251px;
    height: 350px;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .4s;
    }

    &:hover img {
      transform: scale(1.2);
      transform-origin: 50% 50%;
    }
  }
  

  
  span {
    width: 18px;
    height: 160px;
    font-family: "Noto Sans TC";
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15em;
    writing-mode: vertical-rl;
    text-orientation: upright;
    padding-top: 4px;
    margin-left: 4px;
    text-align: start;
    color: ${ Colors.primary.green };
  }
`;


const Explore = ( props ) => {
  return (
    <Container>
      <InnerExplore>
        <ExploreTopContent>
          <ExploreDesc>
            <p>Explore</p>
            <p>探索台灣每個角落</p>
            <p>台灣擁有高山峽谷及四面環海地理特性，因此擁有各種自然景致等待人們發現，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文的深度旅行，都可以在台灣這片土地上踏尋不同的風采。</p>
            <span>探索更多景色</span><ArrowIcon />
          </ExploreDesc>
          <ExploreTopRightContent>
            <ExploreImgContainer imgSrc={ process.env.PUBLIC_URL + `/static/image/index_explore/${ EXPLORE_LIST[0].img_url }` } imgName={ EXPLORE_LIST[0].img_name } />
            <ExploreImgContainer imgSrc={ process.env.PUBLIC_URL + `/static/image/index_explore/${ EXPLORE_LIST[1].img_url }` } imgName={ EXPLORE_LIST[1].img_name } />
            <ExploreImgContainer imgSrc={ process.env.PUBLIC_URL + `/static/image/index_explore/${ EXPLORE_LIST[2].img_url }`  } imgName={ EXPLORE_LIST[2].img_name } />
          </ExploreTopRightContent>
        </ExploreTopContent>
        <ExploreBottomContent>
          <ExploreImgContainer imgSrc={ process.env.PUBLIC_URL + `/static/image/index_explore/${ EXPLORE_LIST[3].img_url }`  } imgName={ EXPLORE_LIST[3].img_name } />
          <ExploreImgContainer imgSrc={ process.env.PUBLIC_URL + `/static/image/index_explore/${ EXPLORE_LIST[4].img_url }`  } imgName={ EXPLORE_LIST[4].img_name }/>
          <ExploreImgContainer imgSrc={ process.env.PUBLIC_URL + `/static/image/index_explore/${ EXPLORE_LIST[5].img_url }`  } imgName={ EXPLORE_LIST[5].img_name } />
          <ExploreImgContainer imgSrc={ process.env.PUBLIC_URL + `/static/image/index_explore/${ EXPLORE_LIST[6].img_url }`  } imgName={ EXPLORE_LIST[6].img_name } />
        </ExploreBottomContent>
      </InnerExplore>
    </Container>
  );
}

export default Explore;
