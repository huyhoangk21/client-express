import { Fragment } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { Header, Footer } from '../components';
import { Logo } from '../components/shared';

const Container = styled.div``;

const Layout = ({ title, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header>
        <Logo>Express</Logo>
      </Header>
      <Container>{children}</Container>
      <Footer>This is a footer</Footer>
    </Fragment>
  );
};

export default Layout;
