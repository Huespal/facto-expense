import { TableHeaderStyled } from '@/components/shared/Table/Header/styles';
import { ReactNode } from 'react';

export interface TableHeaderProps {
  children: ReactNode;
  grid?: string;
}

// The shared component to display a responsive table header.
const TableHeader = ({ children, grid }: TableHeaderProps) => (
  <TableHeaderStyled $grid={grid}>{children}</TableHeaderStyled>
);

export default TableHeader;
