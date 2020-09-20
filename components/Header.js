import styled, { css } from 'styled-components';
const Header = styled.header`
  position: fixed;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: ${props =>
    props.scroll ? props.theme.white : props.theme.transparent};
  padding: 0 ${props => props.theme.pxS};
  transition: background-color 0.4s;
  z-index: 10;
  ${props =>
    props.scroll &&
    css`
      box-shadow: 0 0 0.5rem #999999;
    `}
  i.hamburger {
    font-size: 1.5rem;
    color: ${props => (props.scroll ? props.theme.black : props.theme.white)};
    cursor: pointer;

    @media screen and (min-width: 992px) {
      display: none;
    }
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
