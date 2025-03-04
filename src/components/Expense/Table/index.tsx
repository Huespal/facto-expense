'use client'

import Button from '@/components/Button';
import Filter from '@/components/Expense/Filter';
import Header from '@/components/Expense/Table/Header';
import Row from '@/components/Expense/Table/Row';
import Table from '@/components/Table';
import { useGetExpenses } from '@/domain/expense/api/client';
import { Expense } from '@/domain/expense/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ExpenseTableProps {
  expenses: Expense[];
}

// The component to render expenses list within a table.
// It also allows to redirect to expense create form and filter results.
const ExpenseTable = ({ expenses: initialExpenses }: ExpenseTableProps) => {
  const router = useRouter();
  const grid = '1fr 1fr 1fr 1fr .5fr 1fr';

  const [filters, setFilters] = useState({
    status: '', from: '', to: ''
  });
  const isFiltering = Object.values(filters).some(val => val !== '');

  // Requests expenses from the API.
  // Initialises expenses with initial data from server side request. 
  const {
    data: expenses = initialExpenses
  } = useGetExpenses({ filters });
  const hasExpenses = expenses.length > 0;
  const showFilters = hasExpenses || isFiltering;

  return (
    <>
      {showFilters && <Filter onChange={setFilters} />}
      {expenses.length > 0 ? (
        <Table grid={grid}>
          {expenses.length > 0 && <Header grid={grid} />}
          {expenses.map(expense => <Row key={expense.id} {...expense} />)}
        </Table>
      ) : <><br /><div>There are no expenses</div><br /></>}
      <Button onClick={() => { router.push('/create') }} >
        + Add expense
      </Button>
    </>
  );
}

export default ExpenseTable;