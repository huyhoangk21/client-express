import { Button, PageTitle, SectionTitle } from '../components/shared';
import { Hero, Layout, About, Service, Process, Blog } from '../components/';
import {
  renderedServices,
  renderedAbout,
  renderedProcess,
  renderedBlogs,
} from '../content/home';

export default function Home() {
  return (
    <Layout title='Pham Chu Express | Công Ty Vận Chuyển'>
      <Hero img='/images/hero-bg.jpg'>
        <PageTitle>Chúng tôi chuyển hàng</PageTitle>
        <Button white>Đọc thêm !</Button>
      </Hero>
      <About>
        <About.Content>
          <SectionTitle>Về chúng tôi</SectionTitle>
          {renderedAbout}
        </About.Content>
        <About.Image
          src='/images/about.jpg'
          alt='Công ty vận chuyển Phạm Chu'
        />
      </About>
      <Service>
        <SectionTitle>Các dịch vụ</SectionTitle>
        <Service.Content>{renderedServices}</Service.Content>
      </Service>
      <Process img='/images/process.jpg'>
        <SectionTitle>Quy trình dịch vụ</SectionTitle>
        <Process.Content>{renderedProcess}</Process.Content>
      </Process>
      <Blog>
        <SectionTitle>Thông tin</SectionTitle>
        <Blog.Content>{renderedBlogs}</Blog.Content>
        <Button black>Đọc các bài viết khác</Button>
      </Blog>
    </Layout>
  );
}
