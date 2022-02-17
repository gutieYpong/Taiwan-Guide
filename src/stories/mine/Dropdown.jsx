import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './dropdown.css';
import { fontLayout } from '../../constants/api';
import { default as MenuArrowIcon } from '../assets/menu-arrow.svg';
import { default as CancelIcon } from '../assets/cancel.svg';


const Container = styled.div`
  --dropdown-width: ${ ({ Width }) => Width ? Width : '36.8rem' }; // 36.8? 46.6?
  --side-padding: 1.6rem;
  --max-height: 27.1rem;
  --close-height: 4.6rem;

  position: relative;
  width: ${ ({ FullWidth }) => FullWidth ? '100%' : 'var(--dropdown-width)' };
`;

const AbsoluteBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${ ({ IsOpen }) => IsOpen ? 'fit-content' : 'var(--close-height)' };
  max-height: var(--max-height);
  display: grid;
  grid-template-rows: var(--close-height) auto;

  border: .05rem solid #737373; //*
  border-radius: .5rem;
  background-color: #FFFFFF;
  overflow: hidden;
  /* cursor: pointer; */

  ${ ({ IsOpen }) => IsOpen && `
    &::before {
      position: absolute;
      content: "";
      width: calc( 100% - var(--side-padding) * 2 );
      height: .05rem;
      top: var(--close-height);
      left: 50%;
      transform: translateX(-50%);
      background-color: #737373;
    }`
  }
`;

const Top = styled.div`
  width: 100%;
  height: var(--close-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;

  label {
    letter-spacing: 0.05em;
    ${ ({ LabelColor }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', LabelColor ? LabelColor : '#ACACAC') }
  }

  img {
    width: 2em; // 16px * 2
    height: 2em;
    filter: invert(82%) sepia(11%) saturate(0%) hue-rotate(166deg) brightness(83%) contrast(89%); // #ACACAC
    transform: ${ ({ IsOpen }) => IsOpen ? 'rotate(180deg)' : 'none' };
    cursor: pointer;
  }
`;

const Down = styled.div`
  width: 100%;
  height: auto;
  max-height: calc( var(--max-height) - var(--close-height) );
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: .4rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #C4C4C4; 
    border-radius: .4rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ACACAC; 
  }

  div {
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    span {
      margin: 0 1.6rem;
      letter-spacing: 0.05em;
      ${ fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', '#737373') }
    }
    &:hover {
      background-color: #F1F5EE;
    }
  }
`;

export const SortingDropdown = ({ className, width, fullWidth, color, FILTER_LIST, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState({
    label: FILTER_LIST[0],
    list: FILTER_LIST.slice(1)
  });

  const handleFilterSelection = (e) => {
    const selectedFilter = e.target.querySelector('span').innerHTML;
    const filteredList = FILTER_LIST.filter( item => item !== selectedFilter );

    setFilterValue({
      label: selectedFilter,
      list: filteredList
    })
    setIsOpen( false );
  }

  return (
    <Container Width={ width } { ...props }>
      <AbsoluteBox IsOpen={ isOpen }>
        <Top IsOpen={ isOpen } LabelColor="#737373">
          <label>{filterValue.label}</label>
          <img
            src={ MenuArrowIcon } alt='menu-arrow'
            style={{ filter: `invert(48%) sepia(2%) saturate(18%) hue-rotate(327deg) brightness(92%) contrast(89%)` }}
            onClick={ () => setIsOpen(!isOpen) }
          />
        </Top>
        {
          isOpen &&
          <Down>
            {
              filterValue.list.map((item, index) => (
                <div key={ index } onClick={ e => handleFilterSelection(e) }>
                  <span>{ item }</span>
                </div>
              ))
            }
          </Down>
        }
      </AbsoluteBox>
    </Container>
  )
}

const SelectedCityBox = styled.div`
  flex: 1;
  max-width: calc(var(--dropdown-width) * 0.85);
  height: 100%;
  display: flex;
  align-items: center;
  gap: .8rem;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
`;

const SelectedCity = styled.div`
  width: 8.4rem;
  height: 2.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4rem .8rem;
  border: 0;
  border-radius: .5rem;
  background-color: #F1F5EE;

  letter-spacing: 0.05em;
  ${ fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', '#769763') }

  img {
    width: 1.2em;
    height: 1.2em;
    filter: invert(57%) sepia(4%) saturate(3660%) hue-rotate(54deg) brightness(99%) contrast(77%); // #769763
  }
`;

export const Dropdown = ({ className, value, width, fullWidth, color, CITY_LIST, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleItemSelection = (e) => {
    setSelectedItem([...new Set([...selectedItem, e.target.querySelector('span').innerHTML])]);
  }
  const handleItemRemove = (removeItem) => {
    const filteredList = selectedItem.filter( item => item !== removeItem );
    setSelectedItem(filteredList);
  }

  return (
    <Container IsOpen={ isOpen } Width={ width } FullWidth={ fullWidth } { ...props }>
      <AbsoluteBox IsOpen={ isOpen }>
        <Top IsOpen={ isOpen }>
          {
            selectedItem.length ?
            <SelectedCityBox>
            {
              selectedItem.map((item, index) => (
                <SelectedCity key={ index } onClick={ () => handleItemRemove(item) }>
                  { item }
                  <img src={ CancelIcon } alt="cancel" />
                </SelectedCity>
              ))
            }
            </SelectedCityBox>
            :
            <label>選擇縣市</label>
          }
          <img
            src={ MenuArrowIcon } alt='menu-arrow'
            onClick={ () => setIsOpen(!isOpen) }
          />
        </Top>
        {
          isOpen &&
          <Down>
            {
              CITY_LIST.map((item, index) => (
                <div key={ index } onClick={ e => handleItemSelection(e) }>
                  <span>{ item }</span>
                </div>
              ))
            }
          </Down>
        }
      </AbsoluteBox> 
    </Container>
  );
};

Dropdown.propTypes = {
  /**
   * whether to embed a google material icon in front of the component content
   * icon name could be found via: https://fonts.google.com/icons
   */
  startIcon: PropTypes.string,
  /**
   * whether to embed a google material icon behind the component content
   * icon name could be found via: https://fonts.google.com/icons
   */
  endIcon: PropTypes.string,
  /**
   * value of component width
   */
  width: PropTypes.string,
  /**
   * the text content within the component
   */
  value: PropTypes.string,
  /**
   * choose to have input take the width of the parent
   */
  fullWidth: PropTypes.bool,
  /**
   * use Colorpicker or input string to select the font color
   */
  color: PropTypes.string,
  /**
   * onChange handler
   */
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  startIcon: null,
  endIcon: null,
  width: null,
  value: undefined,
  fullWidth: false,
  color: null,
  onChange: undefined,
};