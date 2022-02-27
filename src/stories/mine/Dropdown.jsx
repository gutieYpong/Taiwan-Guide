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
  --closed-height: 4.6rem;

  --color-white: #FFFFFF;
  --color-neutral-little: #ACACAC;
  --color-neutral-light: #C4C4C4;
  --color-neutral-main: #737373;
  --color-primary-little: #F1F5EE;
  --color-primary-main: #769763;

  position: relative;
  width: ${ ({ FullWidth }) => FullWidth ? '100%' : 'var(--dropdown-width)' };
  z-index: 4;
`;

const ExpandContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${ ({ IsOpen }) => IsOpen ? 'fit-content' : 'var(--closed-height)' };
  max-height: var(--max-height);
  display: grid;
  grid-template-rows: var(--closed-height) auto;

  border: .05rem solid var(--color-neutral-main);
  border-radius: .5rem;
  background-color: var(--color-white);
  overflow: hidden;
  /* cursor: pointer; */

  ${ ({ IsOpen }) => IsOpen && `
    &::before {
      position: absolute;
      content: "";
      width: calc( 100% - var(--side-padding) * 2 );
      height: .05rem;
      top: var(--closed-height);
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--color-neutral-main);
    }`
  }
`;

const Top = styled.div`
  width: 100%;
  height: var(--closed-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;

  .Dropdown__selected, .Dropdown__placeholder {
    letter-spacing: 0.05em;
    ${ fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', 'var(--color-neutral-main)') }
  }
  .Dropdown__placeholder {
    color: var(--color-neutral-little) !important;
  }
  .Dropdown__arrow {
    width: 2em; // 16px * 2
    height: 2em;
    filter: invert(82%) sepia(11%) saturate(0%) hue-rotate(166deg) brightness(83%) contrast(89%); // var(--color-neutral-little)
    transform: ${ ({ IsOpen }) => IsOpen ? 'rotate(180deg)' : 'none' };
    cursor: pointer;
  }
`;

const Down = styled.div`
  width: 100%;
  height: auto;
  max-height: calc( var(--max-height) - var(--closed-height) );
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: .4rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-neutral-light); 
    border-radius: .4rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-neutral-little); 
  }

  .Dropdown__option-container {
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    .Dropdown__option-item {
      margin: 0 1.6rem;
      letter-spacing: 0.05em;
      ${ fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', 'var(--color-neutral-main)') }
    }
    &:hover {
      background-color: var(--color-primary-little);
    }
  }
`;

export const SortingDropdown = ({ width, fullWidth, color, OPTIONS, HandleSorting, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState({
    selected: OPTIONS[0],
    options: OPTIONS.slice(1)
  });

  const handleDropdownSelection = (e) => {
    const selectedValue = {
      title: e.target.querySelector('.Dropdown__option-item').innerHTML,
      order: e.target.querySelector('.Dropdown__option-item').dataset.order
    }
    const notSelectedValues = OPTIONS.filter( item => item.title !== selectedValue.title );

    setDropdownValue({
      selected: selectedValue,
      options: notSelectedValues
    })
    setIsOpen( false );
  }

  return (
    <Container Width={ width } { ...props }>
      <ExpandContainer IsOpen={ isOpen }>
        <Top IsOpen={ isOpen }>
          <label className="Dropdown__selected">{ dropdownValue.selected.title }</label>
          <img
            className="Dropdown__arrow"
            src={ MenuArrowIcon } alt='menu-arrow'
            style={{ filter: `invert(48%) sepia(2%) saturate(18%) hue-rotate(327deg) brightness(92%) contrast(89%)` }}
            onClick={ () => setIsOpen(!isOpen) }
          />
        </Top>
        {
          isOpen &&
          <Down>
            {
              dropdownValue.options.map((item, index) => (
                <div
                  key={ index }
                  className="Dropdown__option-container"
                  data-order={ item.order }
                  onClick={ e => {
                    handleDropdownSelection(e);
                    HandleSorting( item.order );
                  }}
                >
                  <span className="Dropdown__option-item">{ item.title }</span>
                </div>
              ))
            }
          </Down>
        }
      </ExpandContainer>
    </Container>
  )
}

const SelectedItemBox = styled.div`
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

const SelectedItem = styled.div`
  width: 8.4rem;
  height: 2.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4rem .8rem;
  border: 0;
  border-radius: .5rem;
  background-color: var(--color-primary-little);

  letter-spacing: 0.05em;
  ${ fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', 'var(--color-primary-main)') }

  .Dropdown__selected-item-cancel {
    width: 1.2em;
    height: 1.2em;
    filter: invert(57%) sepia(4%) saturate(3660%) hue-rotate(54deg) brightness(99%) contrast(77%); // var(--color-primary-main)
  }
`;

export const Dropdown = ({ value, width, fullWidth, color, CITY_LIST, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState([]);

  const handleDropdownSelection = (e) => {
    setDropdownValue([...new Set([...dropdownValue, e.target.querySelector('.Dropdown__option-item').innerHTML])]);
  }
  const handleDropdownSelectionRemoval = (removalItem) => {
    const filteredList = dropdownValue.filter( item => item !== removalItem );
    setDropdownValue(filteredList);
  }

  return (
    <Container IsOpen={ isOpen } Width={ width } FullWidth={ fullWidth } { ...props }>
      <ExpandContainer IsOpen={ isOpen }>
        <Top IsOpen={ isOpen }>
          {
            dropdownValue.length ?
            <SelectedItemBox>
              {
                dropdownValue.map((item, index) => (
                  <SelectedItem
                    key={ index }
                    onClick={ () => handleDropdownSelectionRemoval(item) }
                  >
                    { item }
                    <img className="Dropdown__selected-item-cancel" src={ CancelIcon } alt="cancel" />
                  </SelectedItem>
                ))
              }
            </SelectedItemBox>
            :
            <label className="Dropdown__placeholder">選擇縣市</label>
          }
          <img
            className="Dropdown__arrow"
            src={ MenuArrowIcon } alt='menu-arrow'
            onClick={ () => setIsOpen(!isOpen) }
          />
        </Top>
        {
          isOpen &&
          <Down>
            {
              CITY_LIST.map((item, index) => (
                <div
                  className="Dropdown__option-container"
                  key={ index }
                  onClick={ e => handleDropdownSelection(e) }
                >
                  <span className="Dropdown__option-item">{ item }</span>
                </div>
              ))
            }
          </Down>
        }
      </ExpandContainer> 
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