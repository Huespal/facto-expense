import { getTenantId } from '@/app/actions';
import ExpenseTable from '@/components/Expense/Table';
import Header from '@/components/Header';
import Section from '@/components/Section';
import { getExpenses } from '@/domain/expense/api/server';

export default async function App() {
  const tenantId = (await getTenantId())?.value;

  // Requests expenses list in SSR to allow and initial fast load.
  const { data: expenses = [] } = await getExpenses();

  // Renders application header and the expenses table or list.
  return (
    <>
      <Header isAuthorized={true} tenantId={tenantId} />
      <Section px="xl">
        <ExpenseTable expenses={expenses} />
      </Section>
    </>
  );
}
