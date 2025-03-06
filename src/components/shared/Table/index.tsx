import { TableStyled } from '@/components/shared/Table/styles';
import { ReactNode } from 'react';

export interface TableProps {
  grid?: string;
  children: ReactNode;
}

// The shared component to display a responsive table.
const Table = ({
  grid, children
}: TableProps) => <TableStyled $grid={grid}>{children}</TableStyled>;

export default Table;
