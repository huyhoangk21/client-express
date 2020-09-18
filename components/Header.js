import styled from 'styled-components';
import { Icon } from './shared';
const Header = styled.header`
  position: fixed;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: ${props => props.theme.transparent};
  padding: 0 ${props => props.theme.pxS};

  ${Icon}.hamburger {
    font-size: 1.5rem;
    color: ${props => props.theme.white};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    padding: 0 ${props => props.theme.pxM};
  }

  @media screen and (min-width: 992px) {
    padding: 0 ${props => props.theme.pxL};
  }

  @media screen and (min-width: 1200px) {
    padding: 0 ${props => props.theme.pxXL};
  }

  @media screen and (min-width: 1600px) {
    padding: 0 ${props => props.theme.pxXXL};
  }
`;

export default Header;
