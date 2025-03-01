import ExpenseTable from '@/components/Expense/Table';
import Header from '@/components/Header';
import Section from '@/components/Section';
import { getExpenses } from '@/domain/expense/api/server';
import { ExpenseStatus, ExpenseType } from '@/domain/expense/types';

export default async function App() {
  const { data: expenses = [
    {
      id: 'r1',
      name: 'Càmera',
      type: ExpenseType.regular,
      status: ExpenseStatus.pending,
      accommodation: null,
      transportation: null,
      mileage: null,
      amount: 500,
      createdAt: 1740449481
    },
    {
      id: 't1',
      name: 'Viatge a Girona',
      type: ExpenseType.travel,
      status: ExpenseStatus.approved,
      accommodation: {
        hotelName: 'Hotel Major',
        checkInDate: '2025-01-25',
        checkOutDate: '2025-03-20'
      },
      transportation: null,
      mileage: null,
      amount: 800,
      createdAt: 1740559381
    },
    {
      id: 't2',
      name: 'Viatge a Andorra',
      type: ExpenseType.travel,
      status: ExpenseStatus.approved,
      accommodation: null,
      transportation: {
        mode: 'car',
        route: 'road'
      },
      mileage: null,
      amount: 850,
      createdAt: 1740559381
    },
    {
      id: 't3',
      name: 'Viatge a Barcelona',
      type: ExpenseType.travel,
      status: ExpenseStatus.approved,
      accommodation: null,
      transportation: null,
      mileage: null,
      amount: 1350,
      createdAt: 1740559381
    },
    {
      id: 'm3',
      name: 'Ruta dels Turons',
      type: ExpenseType.mileage,
      status: ExpenseStatus.rejected,
      accommodation: null,
      transportation: null,
      mileage: 5000,
      amount: 150,
      createdAt: 1740664381
    }
  ] } = await getExpenses();

  return (
    <>
      <Header isAuthorized={true} />
      <Section px="xl">
        <ExpenseTable expenses={expenses} />
      </Section>
    </>
  );
}
