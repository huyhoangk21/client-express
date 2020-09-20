import styled from 'styled-components';

const Section = styled.section`
  padding: ${props => props.theme.py} ${props => props.theme.pxS};

  @media screen and (min-width: 768px) {
    padding: ${props => props.theme.py} ${props => props.theme.pxM};
  }

  @media screen and (min-width: 992px) {
    padding:  ${props => props.theme.py} ${props => props.theme.pxL};
  }

  @media screen and (min-width: 1200px) {
    padding: ${props => props.theme.py} ${props => props.theme.pxXL};
  }

  @media screen and (min-width: 1600px) {
    padding: ${props => props.theme.py} ${props => props.theme.pxXXL};
  }

  s
`;

export default Section;
