import React, { Fragment } from 'react';
import Link from 'next/link';
import { Card } from '../components/shared';

const about = [
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
deleniti reprehenderit animi est eaque corporis! Nisi, asperiores
nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero
eos ipsam voluptas.`,
  `Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum
  porro expedita labore esse velit veniam laborum quo obcaecati
  similique iusto delectus quasi!`,
];

export const renderedAbout = about.map(info => {
  return (
    <Fragment key={info}>
      <p>{info}</p>
      <br />
    </Fragment>
  );
});

const services = [
  {
    icon: 'las la-plane',
    title: 'Chuyển hàng từ Mỹ về Việt Nam',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-money-bill-alt',
    title: 'Chuyển tiền từ Mỹ về Việt Nam',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-store-alt',
    title: 'Mua hàng',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-print',
    title: 'In ấn',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-truck',
    title: 'Chuyển hàng nội địa Mỹ',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-shopping-cart',
    title: 'Sản phẩm',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
];

export const renderedServices = services.map(service => {
  return (
    <Card key={service.title}>
      <i className={service.icon} />
      <Card.Content>
        <h4>{service.title}</h4>
        <p>{service.text}</p>
        <Link href={service.link}>
          <a>Tìm hiểu</a>
        </Link>
      </Card.Content>
    </Card>
  );
});
