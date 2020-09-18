import styled from 'styled-components';
import { Section, SectionTitle } from './shared';

const About = styled(Section)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const Content = styled.div`
  ${SectionTitle} {
    text-align: center;
    margin: 1rem 0;
  }

  p {
    text-align: justify;
    line-height: 1.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
`;

About.Content = Content;
About.Image = Image;

export default About;
