import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { fetchData } from "../../../../features/tourismSlice";
import { setCateSelector } from "../../../../features/layoutSlice";
import { ACTIVITY_FILTER_LIST } from "../../../../constants/common";
import { fontLayout, ACTIVITY_FILTER_API } from "../../../../constants/api";


/**
 * ... activity menu part ... (same as delicay)
 */

const ActivityMenuItemBox = styled.div`
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

  a {
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.05em;

    ${ ({ theme }) => fontLayout('Open Sans', 'normal', 'normal', '1.6rem', '2.2rem', theme.palette.neutral.main) }
  }
`;

const ActivityMenuBox = styled.div`
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

const ActivityMenu = ({ ItemList }) => {
  const dispatch = useDispatch();

  return (
    <ActivityMenuBox>
      {
        ItemList.map((item, index) => (
          <ActivityMenuItemBox key={ `activity-${index}` }>
            <img src={ item.icon_src } alt={ item.icon_desc } />
            <Link to="/activity"
              children={ item.icon_desc }
              onClick={ () => {
                dispatch(
                  fetchData({
                    url: ACTIVITY_FILTER_API(
                      ACTIVITY_FILTER_LIST[item.icon_desc].reduce((prev, curr, idx) => {
                        return prev + (idx ? " or " : "") + `Class1 eq '${curr}' or Class2 eq '${curr}'`
                      }, "")),
                    cate_type: 'activity'
                  })
                );
                dispatch( setCateSelector('activity') );
              }}
            />
          </ActivityMenuItemBox>
        ))
      }
    </ActivityMenuBox>
  );
};

export default ActivityMenu;