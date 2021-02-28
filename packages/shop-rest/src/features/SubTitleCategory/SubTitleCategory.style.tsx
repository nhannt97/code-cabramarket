import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CategoryTitle = styled.div`
  font-size: calc(${themeGet('fontSizes.base', '15px')} - 1px);
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CategoryDiv = styled.div`
  display: wrapper-flex;
`;

export const CategoryChip = styled.button`
  color: rgb(119, 121, 140);
  font-size: calc(${themeGet('fontSizes.base', '15px')} - 1px);
  padding: 0.25em 1em;
  border: 2px solid rgb(119, 121, 140);
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-right: .5rem;
  cursor: pointer;

  &:hover {
    color: #fff;
    border-color: ${themeGet('colors.text.bold', '#0D1136')};
    background-color: ${themeGet('colors.text.bold', '#0D1136')};
  }

  &:focus {
    color: #fff;
    border-color: ${themeGet('colors.text.bold', '#0D1136')};
    background-color: ${themeGet('colors.text.bold', '#0D1136')};
  }

  &.active {
    color: #fff;
    border-color: ${themeGet('colors.text.bold', '#0D1136')};
    background-color: ${themeGet('colors.text.bold', '#0D1136')};
  }
`;
