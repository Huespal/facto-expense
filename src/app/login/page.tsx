import { getTenantId } from '@/app/actions';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';
import Section from '@/components/shared/Section';
import { tenants } from '@/core/constants';
import Image from 'next/image';

// The login page.
// It is accessible by everyone.
export default async function Login() {
  const tenantId = (await getTenantId())?.value;
  const tenant = tenants.find(tenant => tenant.id === tenantId);
  const tenantLogo = tenant?.logo ?? tenants[0]?.logo;

  return (
    <>
      <Header tenantId={tenantId} isAuthorized={false} />
      <Section>
        <Image
          src={tenantLogo}
          width={250}
          height={200}
          alt="Facto Expense"
          priority
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
