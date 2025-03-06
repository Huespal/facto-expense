import { getTenantId } from '@/app/actions';
import ExpenseForm from '@/components/Expense/Form';
import Header from '@/components/Header';
import Section from '@/components/shared/Section';
import { tenants } from '@/core/constants';
import { getExpenses } from '@/domain/expense/api/server';
import { Expense } from '@/domain/expense/types';
import { getUserMe } from '@/domain/user/api/server';

// The expense create page.
// It is only accessible for authorized users.
// It manages the expense creation form.
export default async function Create() {
  // Gets tenant id from the cookies.
  const tenantId = (await getTenantId())?.value;
  const tenant = tenants.find(tenant => tenant.id === tenantId);
  const tenantBudget = tenant?.budget ?? 0;

  // Requests logged user data.
  const { data: user } = await getUserMe();

  // Requests expenses list (SSR) to calculate current money spent.
  // An endpoint to get the amount spent information directly from 
  // the API may be suitable too. Thinking about an expenses paginated response. 
  const { data: expenses = [] } = await getExpenses();
  const amountSpent = expenses
    .reduce((acc: number, expense: Expense) => acc + Number(expense.amount ?? 0), 0);

  return (
    <>
      <Header
        isAuthorized={true}
        tenantId={tenantId}
        username={user?.username}
      />
      <Section>
        <h1>Add expense</h1>
        <ExpenseForm
          amountSpent={amountSpent}
          budget={tenantBudget}
        />
      </Section>
    </>
  );
}
