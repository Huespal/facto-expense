import { getTenantId } from '@/app/actions';
import ExpenseTable from '@/components/Expense/Table';
import Header from '@/components/Header';
import Section from '@/components/shared/Section';
import { getExpenses } from '@/domain/expense/api/server';
import { getUserMe } from '@/domain/user/api/server';
import { Role } from '@/domain/user/types';

// The main application page.
// It is only accessible by authorized users.
// It lists expenses.
export default async function App() {
  // Gets tenant id from the cookies.
  const tenantId = (await getTenantId())?.value;

  // Requests expenses list (SSR) to allow and initial fast load.
  const { data: expenses = [] } = await getExpenses();

  // Requests logged user data.
  const { data: user } = await getUserMe();
  const isAdmin = user?.role === Role.admin;

  // Renders application header and the expenses table or list.
  return (
    <>
      <Header
        isAuthorized={true}
        tenantId={tenantId}
        username={user.username}
      />
      <Section px="xl">
        <ExpenseTable expenses={expenses} withModeration={isAdmin} />
      </Section>
    </>
  );
}
