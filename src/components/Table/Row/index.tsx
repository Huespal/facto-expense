import { TableRowStyled } from '@/components/Table/Row/styles';
import { ReactNode } from 'react';

export type TableRowProps = {
  children: ReactNode;
  meaning?: 'success' | 'error';
};

const TableRow = ({
  children,
  meaning
}: TableRowProps) => (
  <TableRowStyled $meaning={meaning}>
    {children}
  </TableRowStyled>
);

export default TableRow;