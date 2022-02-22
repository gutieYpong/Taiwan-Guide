import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled, { useTheme } from "styled-components";
import { Pagination, Stack, Skeleton } from '@mui/material';
import { isEmpty } from 'lodash';

import usePagination from "../../../hooks/usePagination";
import { CardContainer, Card } from "./Card";
import { fetchData, tourismInfo } from "../../../features/tourismSlice";
import { layoutInfo } from "../../../features/layoutSlice";
import { API_INFO_MAP, CATE_SELECTOR_MAP } from "../../../constants/common";
import { fontLayout } from "../../../constants/api";


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
  const theme = useTheme();
  const dispatch = useDispatch();
  const _cateSelector = useSelector(layoutInfo).cateSelector;
  const tourismStates = useSelector(tourismInfo);
  const tourismData = tourismStates.data[_cateSelector];

  // console.log(`cateSelector: ${layoutStates.cateSelector}`)
  // console.log(`tourismData: ${tourismData}`)
  const NUM_OF_ITEMS = tourismData.length;
  const ITEMS_PER_PAGE = 18;
  const [page, setPage] = useState(1);

  const count = Math.ceil( NUM_OF_ITEMS / ITEMS_PER_PAGE );
  const _DATA = usePagination( tourismData, ITEMS_PER_PAGE );

  const handleChange = ( e, p ) => {
    setPage(p);
    _DATA.jumpPage(p);
  }

  // useEffect(() => {
  //   // clean up controller
  //   let isSubscribed = true;

  //   (
  //     async() => {
  //       if( isSubscribed && isEmpty(tourismStates.data[_cateSelector]) )
  //         await dispatch(fetchData(
  //           `https://ptx.transportdata.tw/MOTC/v2/Tourism/${_cateSelector}?%24top=200&%24format=JSON`
  //         ));
  //       else
  //         throw new Error('jump to end.');
  //     }
  //   )()
  //     .then( () => console.log(`data fetcted.`) )
  //     .catch( error => console.log(error.message) );

  //   // cancel subscription to useEffect
  //   return () => (isSubscribed = false)
  // }, [_cateSelector]);

  // useEffect(() => {
  //   setPage(1);
  // }, [selectedIdx]);

  return (
    <Container>
      <CardBox>
        {
          tourismStates.status === 'loading' ?
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
                key={ item[API_INFO_MAP[CATE_SELECTOR_MAP[_cateSelector]].id_key] }
                ItemName={ item[API_INFO_MAP[CATE_SELECTOR_MAP[_cateSelector]].name_key] }
                Item={ item }
                Theme={ theme }
                CateIndex={ CATE_SELECTOR_MAP[_cateSelector] }
              />
            )
          })
        }
      </CardBox>
      <Stack spacing={2} sx={{ alignSelf: 'end' }}>
        <Pagination
          count={ count }
          page={ page }
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