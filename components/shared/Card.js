import styled from 'styled-components';
const Card = styled.div`
  display: flex;
  margin: 2rem 0;
  i {
    font-size: 3rem;
    color: ${props => props.theme.main};
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    width: 40%;
  }

  @media screen and (min-width: 992px) {
    width: 30%;
  }
`;

const Content = styled.div`
  p {
    line-height: 2rem;
    margin: 0.7rem 0;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.main};
  }
`;

Card.Content = Content;
export default Card;
