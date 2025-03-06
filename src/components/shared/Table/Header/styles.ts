import styled from 'styled-components';

interface TableHeaderStyledProps {
  $grid?: string;
}

const TableHeaderStyled = styled.header<TableHeaderStyledProps>(({
  theme, $grid = ''
}) => ({
  '--header-grid': $grid,
  backgroundColor: theme.colors.neutral[300],
  color: theme.colors.neutral[700],
  padding: `${theme.space.xs} ${theme.space.default}`,
  boxShadow: theme.shadows.insetAlpha,
  '> div, >footer': {
    padding: 0,
    '> button': {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  '> p': {
    margin: `0 ${theme.space.xs}`,
    fontSize: theme.fontSizes.s
  },
  [theme.mediaQueries.desktop]: {
    display: 'grid',
    gridTemplateColumns: 'var(--header-grid, var(--grid))',
    alignItems: 'center'
  },
  [theme.mediaQueries.mobile]: {
    display: 'none'
  }
}));

export { TableHeaderStyled };
