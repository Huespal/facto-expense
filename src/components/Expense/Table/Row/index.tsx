import Button from '@/components/Button';
import TableCell from '@/components/Table/Cell';
import TableRow from '@/components/Table/Row';
import { capitalize } from '@/core/helpers';
import {
  useApproveExpense, useRejectExpense
} from '@/domain/expense/api/client';
import { Expense, ExpenseStatus } from '@/domain/expense/types';

// The component to render expenses table row.
// It renders basic expense data and handles approve and reject actions.
const ExpenseTableRow = ({
  id, name, status, type, amount, createdAt
}: Expense) => {
  const isApproved = status === ExpenseStatus.approved;
  const isPending = status === ExpenseStatus.pending;
  const isRejected = status === ExpenseStatus.rejected;
  const approvedMeaning = isApproved ? 'success' : undefined;
  const meaning = isRejected ? 'error' : approvedMeaning;
  const date = new Date(createdAt * 1000).toDateString();

  // Approves an expense through an API call.
  const { mutate: approve } = useApproveExpense();

  // Rejects an expense through an API call.
  const { mutate: reject } = useRejectExpense();

  return (
    <TableRow meaning={meaning} >
      <TableCell label="Name">{name}</TableCell>
      <TableCell label="Status">{capitalize(status)}</TableCell>
      <TableCell label="Type">{capitalize(type)}</TableCell>
      <TableCell label="Amount">{amount} €</TableCell>
      <TableCell label="Date">{date}</TableCell>
      <TableCell type="footer">
        {(isRejected || isPending) && (
          <Button onClick={() => { approve(id) }}>Approve</Button>
        )}
        {(isApproved || isPending) && (
          <Button onClick={() => { reject(id) }}>Reject</Button>
        )}
      </TableCell>
    </TableRow>
  );
}

export default ExpenseTableRow;
