import styled from 'styled-components';
import { Section, Card, Button } from './shared';

const Blog = styled(Section)`
  background-color: ${props => props.theme.ghostwhite};
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${Card} {
    width: 90%;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 300px;
    }
  }

  img {
    width: 100%;
    margin-top: 2rem;

    @media screen and (min-width: 768px) {
      margin-top: 3rem;
    }
  }

  h3 {
    color: ${props => props.theme.main};
  }
`;

Blog.Content = Content;

export default Blog;
