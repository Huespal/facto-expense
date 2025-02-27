import styled from 'styled-components';

interface TableStyledProps {
  $grid?: string;
}

const TableStyled = styled.section<TableStyledProps>(
  ({ theme, $grid }) => ({
    '--grid': $grid,
    '--mobile-grid': '1fr max-content',
    background: theme.colors.neutral[200],
    marginBottom: theme.space.l
  })
);

export { TableStyled };
