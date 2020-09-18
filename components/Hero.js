import styled from 'styled-components';
import { Button } from './shared';
import PropTypes from 'prop-types';

const Hero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${props => props.img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Button} {
    margin-top: 2rem;
    padding: 0.7rem 3rem;
  }
`;

Hero.propTypes = {
  img: PropTypes.node.isRequired,
};

export default Hero;
