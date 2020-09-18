import styled from 'styled-components';

const PageTitle = styled.h1`
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.pageTitle};
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`;

export default PageTitle;
