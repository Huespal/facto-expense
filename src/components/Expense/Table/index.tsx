'use client'

import Button from '@/components/Button';
import Row from '@/components/Expense/Table/Row';
import Table from '@/components/Table';
import TableHeader from '@/components/Table/Header';
import { Expense } from '@/domain/expense/types';
import { useRouter } from 'next/navigation';

interface ExpenseTableProps {
  expenses: Expense[];
}

const ExpenseTable = ({ expenses }: ExpenseTableProps) => {
  const router = useRouter();
  const grid = '1fr 1fr 1fr 1fr .5fr 1fr';

  return (
    <>
      <Table grid={grid}>
        <TableHeader grid={grid}>
          <p>Name</p>
          <p>Status</p>
          <p>Type</p>
          <p>Amount</p>
          <p>Date</p>
          <div />
        </TableHeader>
        {expenses.map(expense => <Row key={expense.id} {...expense} />)}
      </Table>
      <Button onClick={() => { router.push('/create') }} >
        + Add expense
      </Button>
    </>
  );
}

export default ExpenseTable;