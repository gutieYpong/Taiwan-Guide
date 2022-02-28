import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import styled from "styled-components";

import { fetchData, tourismInfo, setThemeSelector, setPage, setFilterData } from "../../../features/tourismSlice";
import { fontLayout, SCENIC_SPOT_FILTER_API, RESTAURANT_FILTER_API, ACTIVITY_FILTER_API, getSortedAPI } from "../../../constants/api";
import { SortingDropdown } from "../../../stories/mine/Dropdown";
import { DATA_FILTER_OBJECT } from "../../../constants/common";
import { getFilteredData } from "../../../features/filterFunc";


const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1.6rem;

  /* border: 1px solid lightblue; */
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
  }
`;

const ThemeItem = styled.button`
  width: 100%;
  height: 3.7rem;
  border: .05rem solid ${ ({ theme, ItemIdx, themeSelector }) => themeSelector === ItemIdx ?theme.palette.primary.main : theme.palette.neutral.main };
  border-radius: .5rem;
  background-color: ${ ({ theme, ItemIdx, themeSelector }) => themeSelector === ItemIdx ?theme.palette.primary.main : theme.palette.neutral.lightest };
  cursor: pointer;

  letter-spacing: 0.05em;
  ${ ({ theme, ItemIdx, themeSelector }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', themeSelector === ItemIdx ? theme.palette.white : theme.palette.neutral.main) }

  &:hover {
    color: ${ ({ theme, ItemIdx, themeSelector }) => themeSelector !== ItemIdx && theme.palette.primary.main };
    border-color: ${ ({ theme }) => theme.palette.primary.main };
  }
`;

const Filter = props => {
  const { CateSelector } = props;

  const dispatch = useDispatch();
  const _tourismStates = useSelector(tourismInfo);
  // const _tourismData = _tourismStates.status === 'succeeded' ? 
  // ( isEmpty(_tourismStates.dataStates[CateSelector].filtered) ? 
  //   _tourismStates.dataStates[CateSelector].data : 
  //   _tourismStates.dataStates[CateSelector].filtered
  // ) : [];
  const _themeSelector = _tourismStates.dataStates[CateSelector].themeSelector;
  const [filterList, setFilterList] = useState([]);
  
  const handleSorting = ( order ) => {
    dispatch(
      fetchData({
        url: getSortedAPI( DATA_FILTER_OBJECT[CateSelector].api_category, order ),
        cateType: CateSelector
      })
    );
  }

  const handleChange = e => {
    const { name, value, type, checked, dataset } = e.target;
    // console.log(`value: ${checked}, dataset: ${dataset.filterIndicator}`)
    
    if( e.target.checked ) {
      let enlist = [...filterList, dataset.filterIndicator];
      setFilterList( prev => [...prev, dataset.filterIndicator] );
      console.log(`enlist... list: ${enlist}, filterList: ${filterList}`);

      if( isEmpty( _tourismStates.dataStates[CateSelector].filtered) ) {
        dispatch(
          setFilterData({ 
            cateType: CateSelector,
            filteredData: getFilteredData(_tourismStates.dataStates[CateSelector].data, dataset.filterIndicator)
          })
        );
      } else {
        dispatch(
          setFilterData({ 
            cateType: CateSelector,
            filteredData: getFilteredData(_tourismStates.dataStates[CateSelector].filtered, dataset.filterIndicator)
          })
        );
      }
    }
    else {
      let delist = filterList.filter( item => item !== dataset.filterIndicator );
      setFilterList( delist );
      console.log(`delist... list: ${delist}, filterList: ${filterList}`);

      if( delist.length > 0 ) {
        let tmpData = _tourismStates.dataStates[CateSelector].data;
        delist.forEach( filterItem =>
          tmpData = getFilteredData(tmpData, filterItem)
        )
        dispatch(setFilterData({ cateType: CateSelector, filteredData: tmpData }));
      } else {
        dispatch(setFilterData({ cateType: CateSelector, filteredData: [] }));
      }
    }
    dispatch( setPage({ cateType: CateSelector, pageNum: 1 }) );
  }

  const handleClick = (conditions, idx) => {
    switch( CateSelector ) {
      case 'scenicSpot':
        dispatch(
          fetchData({
            url: SCENIC_SPOT_FILTER_API(
              conditions.reduce((prev, curr, reduceIdx) => {
                return prev + (reduceIdx ? " or " : "") + `Class1 eq '${curr}' or Class2 eq '${curr}' or Class3 eq '${curr}'`
              }, "")),
            cateType: CateSelector
          })
        );
        break;
      case 'delicacy':
        dispatch(
          fetchData({
            url: RESTAURANT_FILTER_API(
              conditions.reduce((prev, curr, reduceIdx) => {
                return prev + (reduceIdx ? " or " : "") + `Class eq '${curr}'`
              }, "")),
            cateType: CateSelector
          })
        );
        break;
      case 'activity':
        dispatch(
          fetchData({
            url: ACTIVITY_FILTER_API(
              conditions.reduce((prev, curr, reduceIdx) => {
                return prev + (reduceIdx ? " or " : "") + `Class1 eq '${curr}' or Class2 eq '${curr}'`
              }, "")),
              cateType: CateSelector
          })
        );
        break;
      default:
        break;
    }
    
    dispatch( setPage({ cateType: CateSelector, pageNum: 1 }) );
    dispatch( setThemeSelector({ cateType: CateSelector, index: idx }) );
  }

  useEffect(() => {
    let filters = document.querySelectorAll('#serviceFilter');
    filters.forEach( item => item.checked = false );

    dispatch(setFilterData({ cateType: CateSelector, filteredData: [] }));

    return () => {
    };
  }, [_tourismStates.dataStates[CateSelector].themeSelector]);

  return (
    <Container>
      <SearchCount>
        共有<span>{ _tourismStates.dataStates[CateSelector].data.length }</span>筆搜尋結果
      </SearchCount>
      <SortingFilterBox>
        <Label>排序方式</Label>
        <SortingDropdown
          OPTIONS={ DATA_FILTER_OBJECT.sorting }
          HandleSorting={ handleSorting }
          width="100%" style={{ height: '4.5rem'}}
        />
      </SortingFilterBox>
      <ServiceFilterBox>
        <Label>{ CateSelector === 'activity' ? '活動檔期' : '服務資訊' }</Label>
        <div>
          {
            DATA_FILTER_OBJECT[CateSelector].service.map((item, index) => (
              <ServiceFilterOption
                key={`service-filter-${CateSelector}-${index}`}
                htmlFor={`serviceFilter${index}`}
              >
                { item.title }
                <input
                  // id={`serviceFilter${index}`}
                  id="serviceFilter"
                  type="checkbox"
                  name={`service-filter-${index}`}
                  // checked={ isFilter }
                  // checked={ false }
                  onChange={ handleChange }
                  data-filter-indicator={ item.filter_indicator }
                />
              </ServiceFilterOption>
            ))
          }
        </div>
      </ServiceFilterBox>
      <ThemeCategory>
        <Label>主題類別</Label>
        <div className="theme-fiilter--container">
          {
            DATA_FILTER_OBJECT[CateSelector].theme.map((item, index) => (
              <ThemeItem
                key={`theme-filter-${index}`}
                children={ item.title }
                ItemIdx={ index }
                themeSelector={ _themeSelector }
                onClick={ () => _themeSelector !== index && handleClick(item.filter, index) }
              />
            ))
          }
        </div>
      </ThemeCategory>
    </Container>
  )
}

export default Filter;