import styled from 'styled-components';

const ButtonStyled = styled.button(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  gridTemplateColumns: 'max-content max-content',
  alignItems: 'center',
  transition: theme.transitions.all,
  outline: `2px solid ${theme.colors.theme[500]}`,
  outlineOffset: '-2px',
  backgroundColor: theme.colors.theme[500],
  color: theme.colors.neutral[100],
  justifyContent: 'center',
  borderRadius: theme.radii.default,
  padding: `${theme.space.xs} ${theme.space.default}`,
  '&:hover': {
    outlineColor: theme.colors.theme[700],
    backgroundColor: theme.colors.theme[700]
  }
}));

export { ButtonStyled };
