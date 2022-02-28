import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled, { useTheme } from "styled-components";
import { Pagination, Stack, Skeleton } from '@mui/material';
import { isEmpty } from 'lodash';

import usePagination from "../../../hooks/usePagination";
import { CardContainer, Card } from "./Card";
import { fetchData, tourismInfo, setPage } from "../../../features/tourismSlice";
import { DATA_FILTER_OBJECT } from "../../../constants/common";


const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 6.2rem;
  margin-bottom: 8rem;

  /* background-color: lightblue; */
`;

const CardBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1.6rem;
  padding: .8rem 0;

  /* background-color: lightsalmon; */
`;


const Content = props => {
  const { CateSelector } = props;

  const theme = useTheme();
  const dispatch = useDispatch();
  const _tourismStates = useSelector(tourismInfo);
  const _tourismData = _tourismStates.status === 'succeeded' ? 
    ( isEmpty(_tourismStates.dataStates[CateSelector].filtered) ? 
      _tourismStates.dataStates[CateSelector].data : 
      _tourismStates.dataStates[CateSelector].filtered
    ) : [];
  const _tourismDataPage = _tourismStates.status === 'succeeded' ? _tourismStates.dataStates[CateSelector].page : 1;

  /**
   * ... Pagination related ...
   */
  const ITEMS_PER_PAGE = 18;
  const pageCount = Math.ceil( _tourismData.length / ITEMS_PER_PAGE );
  const _DATA = usePagination( _tourismData, _tourismDataPage, ITEMS_PER_PAGE );

  const handleChange = ( e, p ) => {
    dispatch( setPage({ cateType: CateSelector, pageNum: p }) );
    _DATA.jumpPage(p);
    window.scrollTo(0, 0); // scroll to top most
  }

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;

    if( isSubscribed ) {
      if( isEmpty(_tourismStates.dataStates[CateSelector]) || (!_tourismStates.dataStates[CateSelector].isFetch && _tourismStates.status !== 'loading') ) {
        try {
          dispatch(
            fetchData({
              url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/${DATA_FILTER_OBJECT[CateSelector].api_category}/Tainan?%24top=200&%24format=JSON&%24orderby=ParkingInfo desc`,
              cateType: CateSelector
            })
          )
        } catch(e) {
          console.log(`Something wrong in Content fetching, error: ${e}`);
        }
      }
    }

    // cancel subscription to useEffect
    return () => (isSubscribed = false)
  }, [CateSelector]);


  return (
    <Container>
      <CardBox>
        {
          _tourismStates.status === 'loading' ?
          [...Array(10).keys()].map( item => (
            <CardContainer key={ `loading-item-${item}` }>
              <Skeleton sx={{ width: '100%', height: '13.7rem', borderRadius: '.5rem', backgroundColor: '#E7E7E7' }} animation="wave"  variant="rectangular" />
              <div className="content-card--desc">
                <Skeleton sx={{ width: '81.71%', backgroundColor: '#E7E7E7' }} animation="wave" variant="rectangular" />
                <Skeleton sx={{ width: '51.36%', backgroundColor: '#E7E7E7' }} animation="wave" variant="rectangular" />
              </div>
            </CardContainer> 
          )) :
          _DATA.currentData().map((item, index) => {
            return (
              <Card
                key={ item[DATA_FILTER_OBJECT[CateSelector].params.id] }
                ItemName={ item[DATA_FILTER_OBJECT[CateSelector].params.name] }
                Item={ item }
                Theme={ theme }
                MissingImgSrc={ DATA_FILTER_OBJECT[CateSelector].missing_img }
              />
            )
          })
        }
      </CardBox>
      <Stack spacing={2} sx={{ alignSelf: 'end' }}>
        <Pagination
          count={ pageCount }
          page={ _tourismDataPage }
          siblingCount={1}
          boundaryCount={1}
          color="primary"
          variant="outlined"
          shape="rounded"
          onChange={ handleChange }
          sx={{
            "& .MuiPaginationItem-root": {
              color: 'neutral.little',
              borderColor: 'neutral.little',
              "&:hover": {
                color: 'primary.main',
                borderColor: 'primary.main',
                backgroundColor: 'transparent'
              },
              "&.Mui-selected": {
                color: 'white',
                backgroundColor: 'primary.main',
                border: 0
              }
            },
          }}
        />
      </Stack>
    </Container>
  )
}

export default Content;