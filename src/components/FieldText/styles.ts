import styled from 'styled-components';

interface FieldTextStyledProps {
  $error?: boolean;
}

const FieldTextStyled = styled.fieldset<FieldTextStyledProps>(
  ({ theme, $error }) => ({
    marginBottom: theme.space.l,
    position: 'relative',
    display: 'grid',
    gap: theme.space.xs,
    ...($error && {
      outline: `2px solid ${theme.colors.semantic.error[500]}`,
    })
  }));

const InputStyled = styled.div(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '1fr max-content',
  gridColumn: '1/3',
  gridRow: '2/3',
  boxSizing: 'border-box',
  width: '100%',
  outline: `2px solid ${theme.colors.neutral[500]}`,
  padding: `${theme.space.xs} ${theme.space.default}`,
  borderRadius: theme.radii.default,
  background: theme.colors.neutral[200],
  backgroundColor: theme.colors.neutral[100],
  fontSize: theme.fontSizes.default,
  color: theme.colors.neutral[700],
  transition: theme.transitions.all,
  '&::placeholder': {
    color: theme.colors.neutral[500]
  },
  '&:hover': {
    outlineColor: theme.colors.neutral[700]
  },
  '&:focus': {
    outlineColor: theme.colors.neutral[700]
  },
  '[data-role=\'title\']': {
    gridColumn: '1/3',
    gridRow: '1/2'
  }
}));

export { FieldTextStyled, InputStyled };
