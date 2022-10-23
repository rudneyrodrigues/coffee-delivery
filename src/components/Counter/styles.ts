import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const InputMinus = styled.div`
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${theme.colors.shape.tertiary};
  border-radius: .375rem;

  & > button {
    height: 100%;
    padding: .3125rem;

    display: flex;
    align-items: center;
    justify-content: center;

    /* &:first-child {
      padding: .5rem 0 .5rem .5rem;
    }

    &:last-child {
      padding: .5rem .5rem .5rem 0;
    } */
  }

  & > input {
    width: 1.25rem;
    height: 100%;

    border: none;
    background: none;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }

    &:focus {
      outline: none;
    }
  }
`;
