import styled from 'styled-components';

const generatorGridSystem = () => {
  const output = {};
  for (let i = 0; i <= 12; i += 1) {
    Object.assign(output, {
      [`div:nth-of-type(${i})`]: {
        gridRow: `${i}/${i + 1}`
      }
    });
  }

  return output;
};

export interface TableRowStyledProps {
  $meaning?: 'success' | 'error';
}

const TableRowStyled = styled.article<TableRowStyledProps>(({
  theme, $meaning
}) => {
  const shadowColor = !$meaning
    ? theme.colors.neutral[700]
    : theme.colors.semantic[$meaning]?.[500];
  return {
    boxShadow: `
      inset 0 -2px 0 0 ${theme.colors.neutral[300]},
      inset 4px 0 ${$meaning ? shadowColor : 'transparent'}`,
    backgroundColor: theme.colors.neutral[100],
    [theme.mediaQueries.desktop]: {
      display: 'grid',
      gridTemplateColumns: 'var(--grid)',
      paddingLeft: theme.space.s,
      paddingRight: theme.space.s,
      '& > &': {
        paddingRight: 0,
        '> div:first-child': {
          paddingLeft: theme.space.xl
        },
        gridColumn: '1 / -1',
        borderBottom: 'none'
      }
    },
    [theme.mediaQueries.mobile]: {
      display: 'grid',
      gridTemplateColumns: 'var(--mobile-grid)',
      paddingLeft: 0,
      'header, div': {
        '&:first-child': {
          gridColumn: '1 / 2'
        }
      },
      'header:first-child': {
        '& + div, & + div ~ div': {
          gridColumn: '2 / 3',
          '& ~ footer': {
            gridColumn: '3 / 4'
          }
        },
        '& + footer': {
          gridColumn: '2 / 3'
        }
      },
      'div:first-child': {
        '&, & ~ div': {
          gridColumn: '1 / 2',
          '& ~ footer': {
            gridColumn: '2 / 3'
          }
        }
      },
      'header, footer': {
        gridRow: '1 / 12'
      },
      ...(generatorGridSystem())
    }
  };
});

export { TableRowStyled };
