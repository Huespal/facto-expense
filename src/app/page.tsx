import ExpenseTable from '@/components/Expense/Table';
import Header from '@/components/Header';
import Section from '@/components/Section';
import { getExpenses } from '@/domain/expense/api/server';

export default async function App() {
  // Requests expenses list in SSR to allow and initial fast load.
  const { data: expenses = [] } = await getExpenses();

  // Renders application header and the expenses table or list.
  return (
    <>
      <Header isAuthorized={true} />
      <Section px="xl">
        <ExpenseTable expenses={expenses} />
      </Section>
    </>
  );
}
