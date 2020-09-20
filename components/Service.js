import styled from 'styled-components';
import { Section, SectionTitle } from './shared';
const Service = styled(Section)`
  ${SectionTitle} {
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

Service.Content = Content;

export default Service;
