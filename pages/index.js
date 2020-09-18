import { Fragment } from 'react';
import Head from 'next/head';
import { Button, PageTitle, Logo } from '../components/shared';
import { Hero, Header } from '../components/';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Hello World</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header>
        <Logo>Express</Logo>
      </Header>
      <Hero img='/images/hero-bg.jpg'>
        <PageTitle>Chúng tôi chuyển hàng</PageTitle>
        <Button white>Đọc thêm !</Button>
      </Hero>
    </Fragment>
  );
}
