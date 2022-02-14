import styled from "styled-components";
import { Pagination, Stack } from '@mui/material';

import { fontLayout } from "../../../constants/api";
import CardImage from "../../../assets/image/search_page/烏腳病紀念館.jpg";


const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 6.2rem;
  margin-bottom: 8rem;

  background-color: lightblue;
`;

const CardBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1.6rem;
  padding: .8rem 0;

  background-color: lightsalmon;
`;

const ContentCard = styled.div`
  width: 28.367rem;
  height: 20.8rem;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  padding: .8rem;

  img {
    width: 100%;
    height: 13.7rem;
    object-fit: cover;
    /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(.jpg); */
    border-radius: .5rem;
  }

  .content-card--desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: 0 .4rem;

    .content-card--title {
      margin: 0;
      letter-spacing: 0.1em;
      ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '2rem', '2.9rem', theme.palette.neutral.main) }
    }
    .content-car--location {
      svg {

      }
      span {
        letter-spacing: 0.1em;
        ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.neutral.main) }
      }
    }
  }
`;

const Card = () => (
  <ContentCard>
    <img src={ CardImage } alt="test" />
    <div className="content-card--desc">
      <p className="content-card--title">綠島豆丁海馬海底郵筒</p>
      <div className="content-car--location">

        <span>臺南市 將軍區</span>
      </div>
    </div>
  </ContentCard>
)

const Content = props => {
  return (
    <Container>
      <CardBox>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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