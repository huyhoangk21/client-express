import styled from 'styled-components';
import { Section } from './shared';
import PropTypes from 'prop-types';

const Process = styled(Section)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.white};
  justify-content: space-between;

  .rounded-number {
    background-color: ${props => props.theme.main};
    width: 3rem;
    height: 3rem;
    border: 0.3rem solid ${props => props.theme.white};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1rem;
  }

  h4 {
    text-align: center;
  }

  p {
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    .rounded-number {
      margin: 1rem auto 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .rounded-number {
      margin: 2rem auto 1rem;
    }
  }
`;

Process.Content = Content;

Process.propTypes = {
  img: PropTypes.node.isRequired,
};
export default Process;
