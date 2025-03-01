import { CellType, TableCellStyled } from '@/components/Table/Cell/styles';
import { ReactNode } from 'react';

export interface TableCellProps {
  type?: `${CellType}`;
  label?: string;
  children?: ReactNode;
}

const TableCell = ({
  type,
  label,
  children
}: TableCellProps) => (
  <TableCellStyled
    as={type}
    aria-label={label}
    $type={type}
  >
    {children}
  </TableCellStyled>
);

export default TableCell;
