import styled from "styled-components";

import { fontLayout } from "../../constants/api";


const Container = styled.div`
  width: 100%;
  max-width: 144rem;
  height: 100%;
  max-height: 6.2rem;
  display: flex;
  justify-content: center;
  gap: 8rem;
  background-color: ${ ({ theme }) => theme.palette.white };
`;

const CategoryItem = styled.div`
  width: 9.6rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: .2rem solid ${ ({ theme }) => theme.palette.primary.main };

  letter-spacing: 0.1em;
  ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '2rem', '2.9rem', theme.palette.primary.main) }
`;

const Category = props => {
  return (
    <Container>
      <CategoryItem children="找景點" />
      <CategoryItem children="找美食" />
      <CategoryItem children="找活動" />
    </Container>
  )
}

export default Category;