import styled from 'styled-components';

const FieldTextStyled = styled.fieldset(
  ({ theme }) => ({
    marginBottom: theme.space.l,
    position: 'relative',
    display: 'grid',
    gap: theme.space.xs,
  }));

interface InputStyledProps {
  $error?: boolean;
}

const InputStyled = styled.div<InputStyledProps>(({ theme, $error }) => ({
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
  ...($error && {
    outlineColor: theme.colors.semantic.error[500],
  }),
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
