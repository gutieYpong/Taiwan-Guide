import styled, { useTheme } from "styled-components";
import { Pagination, Stack, Skeleton } from '@mui/material';

import { CardContainer, Card } from "./Card";
import spotJson from "../../../constants/scenic.spot.json"
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
  return (
    <Container>
      <CardBox>
        {
          spotJson.map((item, index) => {
            if( index >= 17 ) return null;
            return (
              <Card
                key={ item.ScenicSpotID }
                Item={ item }
                Theme={ theme }
              />
            )
          })
        }
        <CardContainer>
          <Skeleton sx={{ width: '100%', height: '13.7rem', borderRadius: '.5rem', backgroundColor: '#E7E7E7' }} animation="wave"  variant="rectangular" />
          <div className="content-card--desc">
            <Skeleton sx={{ width: '81.71%', backgroundColor: '#E7E7E7' }} animation="wave" variant="rectangular" />
            <Skeleton sx={{ width: '51.36%', backgroundColor: '#E7E7E7' }} animation="wave" variant="rectangular" />
          </div>
        </CardContainer>
      </CardBox>
      <Stack spacing={2} sx={{ alignSelf: 'end' }}>
        <Pagination
          count={10}
          siblingCount={1}
          boundaryCount={1}
          color="primary"
          variant="outlined"
          shape="rounded"
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