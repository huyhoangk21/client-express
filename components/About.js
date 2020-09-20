import styled from 'styled-components';
import { Section, SectionTitle } from './shared';

const About = styled(Section)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-color: ${props => props.theme.ghostwhite};

  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  @media screen and (min-width: 992px) {
    width: 400px;
    margin-right: 2rem;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 0;
    width: 500px;
  }

  ${SectionTitle} {
    margin: 1rem 0;
  }

  p {
    text-align: justify;
    line-height: 1.5rem;

    @media screen and (min-width: 992px) {
      line-height: 2rem;
    }
  }
`;

const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

About.Content = Content;
About.Image = Image;

export default About;
