import ExpenseForm from '@/components/Expense/Form';
import Header from '@/components/Header';
import Section from '@/components/Section';

export default async function Create() {
  return (
    <>
      <Header isAuthorized={true} />
      <Section>
        <h1>Add expense</h1>
        <ExpenseForm />
      </Section>
    </>
  );
}
