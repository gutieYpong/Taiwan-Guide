import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled, { useTheme } from "styled-components";
import { Pagination, Stack, Skeleton } from '@mui/material';

import usePagination from "../../../hooks/usePagination";
import { CardContainer, Card } from "./Card";
import { spotInfo } from "../../../features/fetchDataSlice";
import { API_INFO_MAP } from "../../../constants/common";
import { fontLayout } from "../../../constants/api";

import spotJson from "../../../constants/scenic.spot.json"
// import tmpJson from "../../../constants/tmp.json";

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
  const { selectedIdx } = props;
  const theme = useTheme();
  const states = useSelector(spotInfo);

  const NUM_OF_ITEMS = states.data.length;
  const ITEMS_PER_PAGE = 18;
  const [page, setPage] = useState(1);

  const count = Math.ceil( NUM_OF_ITEMS / ITEMS_PER_PAGE );
  const _DATA = usePagination( states.data, ITEMS_PER_PAGE );

  const handleChange = ( e, p ) => {
    setPage(p);
    _DATA.jumpPage(p);
  }

  useEffect(() => {
    setPage(1);
  }, [selectedIdx]);

  return (
    <Container>
      <CardBox>
        {/* <div>{ states.status }</div> */}
        {
          states.status === 'loading' ?
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
                key={ item[API_INFO_MAP[selectedIdx].id_key] }
                ItemName={ item[API_INFO_MAP[selectedIdx].name_key] }
                Item={ item }
                Theme={ theme }
                selectedIdx={ selectedIdx }
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