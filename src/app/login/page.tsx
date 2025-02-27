import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';
import Section from '@/components/Section';
import Image from 'next/image';

export default async function Login() {
  return (
    <>
      <Header isAuthorized={false} />
      <Section>
        <Image
          src="https://picsum.photos/seed/picsum/250/200"
          width={250}
          height={200}
          alt="Facto Expense"
          style={{
            display: 'block',
            margin: '5rem auto'
          }}
        />
        <LoginForm />
      </Section>
    </>
  );
}
