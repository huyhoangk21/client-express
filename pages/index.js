import { Button, PageTitle, SectionTitle } from '../components/shared';
import { Hero, Layout, About } from '../components/';

export default function Home() {
  return (
    <Layout title='Pham Chu Express | Công Ty Vận Chuyển'>
      <Hero img='/images/hero-bg.jpg'>
        <PageTitle>Chúng tôi chuyển hàng</PageTitle>
        <Button white>Đọc thêm !</Button>
      </Hero>
      <About />
    </Layout>
  );
}
