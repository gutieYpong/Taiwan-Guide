import { useSelector } from 'react-redux';
import styled from "styled-components";

import { tourismInfo } from "../../../features/tourismSlice";
import { layoutInfo } from "../../../features/layoutSlice";
import { fontLayout } from "../../../constants/api";
import { SortingDropdown } from "../../../stories/mine/Dropdown";
import { CATE_SELECTOR_MAP, SORTING_FILTER_LIST, SERVICE_FILTER_LIST, THEME_FILTER_LIST } from "../../../constants/common";


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

const SortingFilterBox = styled.div`
  width: 100%;
  height: 7.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2.4rem;
`;

const ServiceFilterBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.2rem;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .4rem;
  }
`;

const ServiceFilterOption = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  letter-spacing: 0.05em;
  ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.neutral.main) }

  input[type='checkbox'] {
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    display: grid;
    place-content: center;
    border: .1rem solid ${ ({ theme }) => theme.palette.neutral.main };
    border-radius: .2rem;
    margin: 0;

    &::before {
      content: "";
      width: 0.75em;
      height: 0.75em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em #663399;
      background-color: ${ ({ theme }) => theme.palette.white };
      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
    &:checked {
      background-color: ${ ({ theme }) => theme.palette.primary.main };
      border: 0;
      &::before {
        transform: scale(1);
      }
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

      &:hover {
        color: ${ ({ theme }) => theme.palette.primary.main };
        border-color: ${ ({ theme }) => theme.palette.primary.main };
      }
      &:focus {
        color: ${ ({ theme }) => theme.palette.white };
        border-color: ${ ({ theme }) => theme.palette.primary.main };
        background-color: ${ ({ theme }) => theme.palette.primary.main };
      }
    }
  }
`;

const Filter = props => {
  const tourismStates = useSelector(tourismInfo);
  const _cateSelector = useSelector(layoutInfo).cateSelector;

  return (
    <Container>
      <SearchCount>
        共有<span>{ tourismStates.data[_cateSelector].length }</span>筆搜尋結果
      </SearchCount>
      <SortingFilterBox>
        <Label>排序方式</Label>
        <SortingDropdown
          FILTER_LIST={ SORTING_FILTER_LIST }
          width="100%" style={{ height: '4.5rem'}}
        />
      </SortingFilterBox>
      <ServiceFilterBox>
        <Label>{ CATE_SELECTOR_MAP[_cateSelector] === 2 ? '活動檔期' : '服務資訊' }</Label>
        <div>
          {
            SERVICE_FILTER_LIST[CATE_SELECTOR_MAP[_cateSelector]].map((item, index) => (
              <ServiceFilterOption
                key={`service-filter-${_cateSelector}-${index}`}
                htmlFor={`serviceFilter${index}`}
              >
                { item }
                <input
                  id={`serviceFilter${index}`}
                  type="checkbox"
                  name={`service-filter-${index}`}
                  // checked={}
                  onChange={ () => {} }
                />
              </ServiceFilterOption>
            ))
          }
        </div>
      </ServiceFilterBox>
      <ThemeCategory>
        <Label>主題類別</Label>
        <div>
          {
            THEME_FILTER_LIST[CATE_SELECTOR_MAP[_cateSelector]].map((item, index) => (
              <button key={`theme-filter-${index}`}>{ item }</button>
            ))
          }
        </div>
      </ThemeCategory>
    </Container>
  )
}

export default Filter;