import { CellType, TableCellStyled } from '@/components/shared/Table/Cell/styles';
import { ReactNode } from 'react';

export interface TableCellProps {
  type?: `${CellType}`;
  label?: string;
  children?: ReactNode;
}

// The shared component to display a responsive table row's cell.
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
