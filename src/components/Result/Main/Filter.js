import styled from "styled-components";

import { fontLayout } from "../../../constants/api";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1.6rem;

  border: 1px solid lightblue;
`;

const SearchCount = styled.div`
  letter-spacing: 0.1em;
  ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '2rem', '2.9rem', theme.palette.neutral.main) }

  span {
    ${ ({ theme }) => fontLayout('Open Sans', 'normal', '600', '2.8rem', '3.8rem', theme.palette.primary.main) }
  }
`;

const Label = styled.label`
  letter-spacing: 0.05em;
  ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '1.2rem', '1.7rem', theme.palette.neutral.little) }
`;

const SortingDropdown = styled.div`
  width: 100%;
  height: 7.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2.4rem;

  div {
    width: 100%;
    height: 4.5rem;
    display: flex;
    align-items: center;
    border: .05rem solid ${ ({ theme }) => theme.palette.neutral.main };
    border-radius: .5rem;
    padding: 0 2.4rem;

    span {
      letter-spacing: 0.1em;
      ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.neutral.main) }
    }
  }
`;

const ServiceFilter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.2rem;

  ul {
    letter-spacing: 0.05em;
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.neutral.main) }

    li {
    }
  }
`;

const ThemeCategory = styled.div`
  width: 100%;
  height: 20.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.2rem;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      width: 100%;
      height: 3.7rem;
      border: .05rem solid ${ ({ theme }) => theme.palette.neutral.main };
      border-radius: .5rem;
      background-color: ${ ({ theme }) => theme.palette.neutral.lightest };
      cursor: pointer;

      letter-spacing: 0.05em;
      ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.neutral.main) }
    }
  }
`;

const Filter = props => {
  return (
    <Container>
      <SearchCount>
        共有<span>105</span>筆搜尋結果
      </SearchCount>
      <SortingDropdown>
        <Label>排序方式</Label>
        <div>
          <span>相關結果優先</span>
        </div>
      </SortingDropdown>
      <ServiceFilter>
        <Label>服務資訊</Label>
        <ul>
          <li>停車場</li>
          <li>購票資訊</li>
        </ul>
      </ServiceFilter>
      <ThemeCategory>
        <Label>主題類別</Label>
        <div>
          <button>自然風景</button>
          <button>觀光工廠</button>
          <button>文化古蹟</button>
          <button>溫泉風呂</button>
        </div>
      </ThemeCategory>
    </Container>
  )
}

export default Filter;