import arrow from '@/core/img/arrow-down.svg';
import styled, { DefaultTheme } from 'styled-components';

interface FieldSetStyledProps {
  $mb?: keyof DefaultTheme['space'];
}

const FieldSetStyled = styled.fieldset<FieldSetStyledProps>(
  ({ theme, $mb }) => ({
    display: 'grid',
    gap: theme.space.xs,
    marginBottom: $mb ? theme.space[$mb] : undefined
  }));

interface FieldSelectInputStyledProps {
  $error: boolean;
}

const FieldSelectInputStyled = styled.select<FieldSelectInputStyledProps>(({
  theme, $error
}) => ({
  borderRadius: theme.radii.default,
  gridAutoFlow: 'column',
  alignItems: 'center',
  input: { color: 'inherit' },
  '&:focus-within': {
    boxShadow: theme.shadows.focusAlpha
  },
  position: 'relative',
  height: theme.space.xl,
  backgroundImage: `url(${arrow.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 1rem center',
  backgroundSize: '1em',
  backgroundColor: theme.colors.neutral[100],
  padding: `${theme.space.xs} ${theme.space.xl}`
    + ` ${theme.space.xs} ${theme.space.default}`,
  fontFamily: theme.fonts.default,
  color: $error
    ? theme.colors.semantic.error[500]
    : theme.colors.neutral[800],
  minWidth: 0,
  cursor: 'pointer',
  appearance: 'none',
  outline: '2px solid',
  outlineColor: $error
    ? theme.colors.semantic.error[500]
    : theme.colors.neutral[300],
  outlineOffset: '-2px',
  '&:hover': {
    outlineColor: theme.colors.neutral[700]
  }
}));

export { FieldSelectInputStyled, FieldSetStyled };
