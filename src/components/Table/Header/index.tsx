import { TableHeaderStyled } from '@/components/Table/Header/styles';
import { ReactNode } from 'react';

export interface TableHeaderProps {
  children: ReactNode;
  grid?: string;
}

const TableHeader = ({ children, grid }: TableHeaderProps) => (
  <TableHeaderStyled $grid={grid}>{children}</TableHeaderStyled>
);

export default TableHeader;
