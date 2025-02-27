import styled from 'styled-components';

export enum CellType {
  header = 'header',
  footer = 'footer'
}

interface TableCellStyledProps {
  $type?: `${CellType}`;
}

const TableCellStyled = styled.div<TableCellStyledProps>(({
  theme, $type
}) =>
({
  ...($type === CellType.footer && {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'start',
    justifyContent: 'flex-end'
  }),
  position: 'relative',
  padding: `${theme.space.s} ${theme.space.xs}`,
  '> div, > figure': { margin: 0 },
  [theme.mediaQueries.mobile]: {
    padding: theme.space.xs,
    '&[aria-label]': {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      '&:before': {
        flex: `0 0 calc(30% - ${theme.space.xs})`,
        content: 'attr(aria-label)',
        display: 'block',
        paddingRight: theme.space.xs
      }
    }
  }
}));

export { TableCellStyled };
