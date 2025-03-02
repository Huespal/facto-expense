import TableHeader from '@/components/Table/Header';

interface ExpenseTableHeaderProps {
  grid: string;
}

// The component to render expenses table header.
const ExpenseTableHeader = ({ grid }: ExpenseTableHeaderProps) => (
  <TableHeader grid={grid}>
    <p>Name</p>
    <p>Status</p>
    <p>Type</p>
    <p>Amount</p>
    <p>Date</p>
    <div />
  </TableHeader>
);

export default ExpenseTableHeader;