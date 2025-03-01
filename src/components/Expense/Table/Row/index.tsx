import Button from '@/components/Button';
import TableCell from '@/components/Table/Cell';
import TableRow from '@/components/Table/Row';
import { capitalize } from '@/core/helpers';
import { Expense, ExpenseStatus } from '@/domain/expense/types';

const ExpenseTableRow = ({
  id, name, status, type, amount, createdAt
}: Expense) => {
  const isApproved = status === ExpenseStatus.approved;
  const isPending = status === ExpenseStatus.pending;
  const isRejected = status === ExpenseStatus.rejected;
  const approvedMeaning = isApproved ? 'success' : undefined;
  const meaning = isRejected ? 'error' : approvedMeaning;
  const date = new Date(createdAt * 1000).toDateString();

  const approve = () => {
    // TODO: Call /status endpoint.
    console.log('Approved ', id);
  }

  const reject = () => {
    // TODO: Call /status endpoint.
    console.log('Rejected ', id);
  }

  return (
    <TableRow meaning={meaning} >
      <TableCell label="Name">{name}</TableCell>
      <TableCell label="Status">{capitalize(status)}</TableCell>
      <TableCell label="Type">{capitalize(type)}</TableCell>
      <TableCell label="Amount">{amount} €</TableCell>
      <TableCell label="Date">{date}</TableCell>
      <TableCell type="footer">
        {(isRejected || isPending) && (
          <Button onClick={approve}>Approve</Button>
        )}
        {(isApproved || isPending) && <Button onClick={reject}>Reject</Button>}
      </TableCell>
    </TableRow>
  );
}

export default ExpenseTableRow;
