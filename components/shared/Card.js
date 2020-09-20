import styled from 'styled-components';
import { Icon } from '.';
const Card = styled.div`
  display: flex;

  ${Icon} {
    color: ${props => props.theme.main};
    font-size: 3rem;
  }
`;

const Content = styled.div``;

Card.Content = Content;
export default Card;
