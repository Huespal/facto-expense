import { TableStyled } from '@/components/Table/styles';
import { ReactNode } from 'react';

export interface TableProps {
  grid?: string;
  children: ReactNode;
}

const Table = ({
  grid, children
}: TableProps) => <TableStyled $grid={grid}>{children}</TableStyled>;

export default Table;
