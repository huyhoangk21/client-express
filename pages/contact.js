import { Field } from '../components/shared';
import { Layout, ContactForm, Contact } from '../components';
import { SectionTitle } from '../components/shared';
//import { useForm } from '../hooks';

export default function contact() {
  return (
    <Layout title='Pham Chu Express | Liên hệ' defaultScroll>
      <Contact>
        <SectionTitle>Liên hệ</SectionTitle>
        <ContactForm>
          <Field>
            <Field.Label htmlFor='firstName'>Tên</Field.Label>
            <Field.Input type='text' id='firstName' name='firstName' />
          </Field>
          <Field>
            <Field.Label htmlFor='lastName'>Họ</Field.Label>
            <Field.Input type='text' id='lastName' name='lastName' />
          </Field>
          <Field>
            <Field.Label html='email'>Email</Field.Label>
            <Field.Input type='text' id='email' name='email' />
          </Field>
          <Field>
            <Field.Label htmlFor='subject'>Chủ đề</Field.Label>
            <Field.Input type='text' id='subject' name='subject' />
          </Field>
          <Field>
            <Field.Label htmlFor='content'>Nội dung</Field.Label>
            <Field.TextArea type='text' id='content' name='content' />
          </Field>
        </ContactForm>
      </Contact>
    </Layout>
  );
}
