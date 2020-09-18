import { Button, PageTitle, SectionTitle } from '../components/shared';
import { Hero, Layout, About } from '../components/';

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            deleniti reprehenderit animi est eaque corporis! Nisi, asperiores
            nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero
            eos ipsam voluptas.
          </p>
          <br />
          <p>
            Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum
            porro expedita labore esse velit veniam laborum quo obcaecati
            similique iusto delectus quasi!
          </p>
        </About.Content>
        <About.Image
          src='/images/about.jpg'
          alt='Công ty vận chuyển Phạm Chu'
        />
      </About>
    </Layout>
  );
}
