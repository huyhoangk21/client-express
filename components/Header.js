import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: ${props => props.theme.white};
  padding: 0 ${props => props.theme.pxSmall};

  @media screen and (min-width: 768px) {
    padding: 0 ${props => props.theme.pxMedium};
  }

  @media screen and (min-width: 992px) {
    padding: 0 ${props => props.theme.pxLarge};
  }

  @media screen and (min-width: 1200px) {
    padding: 0 ${props => props.theme.pxXLarge};
  }

  @media screen and (min-width: 1600px) {
    padding: 0 ${props => props.theme.pxXXLarge};
  }
`;

export default Header;
