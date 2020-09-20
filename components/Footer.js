import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.black};
  opacity: 0.75;
  height: 500px;
  width: 100%;
`;

export default Footer;
