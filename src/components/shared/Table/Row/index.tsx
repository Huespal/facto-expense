import { TableRowStyled } from '@/components/shared/Table/Row/styles';
import { ReactNode } from 'react';

export type TableRowProps = {
  children: ReactNode;
  meaning?: 'success' | 'error';
};

// The shared component to display a responsive table row.
const TableRow = ({
  children,
  meaning
}: TableRowProps) => (
  <TableRowStyled $meaning={meaning}>
    {children}
  </TableRowStyled>
);

export default TableRow;