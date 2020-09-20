import { Fragment, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header, Footer, Nav } from '../components';
import { Logo } from '../components/shared';

const Layout = ({ title, children }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [scroll, setScroll] = useState(false);
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

  useEffect(() => {
    const scrollWindow = () => {
      setScroll(window.scrollY > 200);
    };

    document.addEventListener('scroll', scrollWindow);

    return () => {
      document.removeEventListener('scroll', scrollWindow);
    };
  }, [scroll]);

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
      <Header scroll={scroll}>
        <Logo>Express</Logo>
        <Nav openMobileNav={openMobileNav} ref={navRef} scroll={scroll}>
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
      <div id='content'>{children}</div>
      <Footer>
        <p>
          Copyright <i class='las la-copyright'></i> 2020 Pham Chu Express. All
          Rights Reserved.
        </p>
      </Footer>
    </Fragment>
  );
};

export default Layout;
