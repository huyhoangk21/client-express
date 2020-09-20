import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.main};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  outline: none;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.transparent};
  }

  ${props =>
    props.white &&
    css`
      &:hover,
      &:focus {
        border-color: ${props => props.theme.white};
      }
    `}

  ${props =>
    !props.white &&
    css`
      &:hover,
      &:focus {
        border-color: ${props => props.theme.black};
        color: ${props => props.theme.black};
      }
    `}
`;

Button.propTypes = {
  white: PropTypes.bool,
};

export default Button;
