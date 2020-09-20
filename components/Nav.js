import styled from 'styled-components';
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

  i.close {
    font-size: 1.5rem;
    margin-left: auto;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: ${props => props.theme.main};
    }

    @media screen and (min-width: 992px) {
      display: none;
    }
  }

  @media screen and (min-width: 992px) {
    position: relative;
    width: 60%;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.transparent};
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    transform: translateX(0);
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
