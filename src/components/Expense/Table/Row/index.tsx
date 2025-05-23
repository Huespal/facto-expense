import TypeCell from '@/components/Expense/Table/Row/TypeCell';
import Button from '@/components/shared/Button';
import TableCell from '@/components/shared/Table/Cell';
import TableRow from '@/components/shared/Table/Row';
import { capitalize } from '@/core/helpers';
import {
  useApproveExpense, useRejectExpense
} from '@/domain/expense/api/client';
import { Expense, ExpenseStatus } from '@/domain/expense/types';

interface ExpenseTableRowProps extends Expense {
  withModeration: boolean;
}

// The component to render expenses table row.
// It renders basic expense data and handles approve and reject actions.
const ExpenseTableRow = ({
  id, name, status, amount, createdAt, withModeration, ...typeProps
}: ExpenseTableRowProps) => {
  const isApproved = status === ExpenseStatus.approved;
  const isPending = status === ExpenseStatus.pending;
  const isRejected = status === ExpenseStatus.rejected;
  const approvedMeaning = isApproved ? 'success' : undefined;
  const meaning = isRejected ? 'error' : approvedMeaning;
  const date = new Date(createdAt).toDateString();

  // Approves an expense through an API call.
  const { mutate: approve } = useApproveExpense();

  // Rejects an expense through an API call.
  const { mutate: reject } = useRejectExpense();

  return (
    <TableRow meaning={meaning} >
      <TableCell label="Name">{name}</TableCell>
      <TableCell label="Status">{capitalize(status)}</TableCell>
      <TypeCell {...typeProps} />
      <TableCell label="Amount">{amount
        ? `${Number(amount).toFixed(2)} €` : '-'}</TableCell>
      <TableCell label="Date">{date}</TableCell>
      {withModeration && (
        <TableCell type="footer">
          {(isRejected || isPending) && (
            <Button onClick={() => { approve(id) }}>Approve</Button>
          )}
          {(isApproved || isPending) && (
            <Button onClick={() => { reject(id) }}>Reject</Button>
          )}
        </TableCell>
      )}
    </TableRow>
  );
}

export default ExpenseTableRow;
