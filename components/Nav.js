import styled from 'styled-components';
import { Icon } from './shared';
import PropTypes from 'prop-types';

const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  width: 15rem;
  padding: 2rem 1rem;
  background-color: ${props => props.theme.white};
  transform: ${props =>
    props.openMobileNav ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.4s;
  ${Icon} {
    font-size: 1.5rem;
    margin-left: auto;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: ${props => props.theme.main};
    }
  }
`;

const NavItem = styled.a`
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s;
  padding: 1rem 0;
  &:hover {
    color: ${props => props.theme.main};
  }
`;

Nav.Item = NavItem;

Nav.propTypes = {
  openMobileNav: PropTypes.bool.isRequired,
};

export default Nav;