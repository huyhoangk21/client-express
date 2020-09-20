import { Fragment, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { Header, Footer, Nav } from '../components';
import { Logo } from '../components/shared';

const Container = styled.div``;

const Layout = ({ title, children }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const navRef = useRef();
  useEffect(() => {
    const openNav = e => {
      if (!navRef.current.contains(e.target)) {
        setOpenMobileNav(false);
      }
    };
    window.addEventListener('click', openNav);

    return () => {
      window.removeEventListener('click', openNav);
    };
  }, [openMobileNav]);

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'></link>
      </Head>
      <Header>
        <Logo>Express</Logo>
        <Nav openMobileNav={openMobileNav} ref={navRef}>
          <i
            className='las la-times close'
            onClick={() => setOpenMobileNav(false)}
          />
          <Link href='/'>
            <Nav.Item>Trang chủ</Nav.Item>
          </Link>
          <Link href='/news'>
            <Nav.Item>Thông tin</Nav.Item>
          </Link>
          <Link href='/products'>
            <Nav.Item>Sản phẩm</Nav.Item>
          </Link>
          <Link href='/contact'>
            <Nav.Item>Liên hệ</Nav.Item>
          </Link>
        </Nav>
        <i
          className='las la-bars hamburger'
          onClick={() => setOpenMobileNav(true)}
          ref={navRef}
        />
      </Header>
      <Container>{children}</Container>
      <Footer>This is a footer</Footer>
    </Fragment>
  );
};

export default Layout;
