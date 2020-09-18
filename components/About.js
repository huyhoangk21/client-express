import styled from 'styled-components';
import { Section, SectionTitle } from './shared';

const About = () => {
  return (
    <Section>
      <div className='about'>
        <div className='about-content'>
          <SectionTitle>Về Chúng Tôi</SectionTitle>
          <p className='about-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img
          className='about-img'
          src='/images/about.jpg'
          alt='Công ty vận chuyển Phạm Chu'
        />
      </div>
    </Section>
  );
};

export default About;