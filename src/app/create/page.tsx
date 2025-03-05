import { getTenantId } from '@/app/actions';
import ExpenseForm from '@/components/Expense/Form';
import Header from '@/components/Header';
import Section from '@/components/Section';

export default async function Create() {
  const tenantId = (await getTenantId())?.value;

  return (
    <>
      <Header isAuthorized={true} tenantId={tenantId} />
      <Section>
        <h1>Add expense</h1>
        <ExpenseForm />
      </Section>
    </>
  );
}
