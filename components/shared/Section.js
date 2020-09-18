import styled from 'styled-components';

const Section = styled.section`
  padding: 0 ${props => props.theme.pxS};

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

  s
`;

export default Section;
