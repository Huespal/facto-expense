import styled, { DefaultTheme } from 'styled-components';

interface SectionStyledProps {
  $px?: keyof DefaultTheme['space'];
}

const SectionStyled = styled.section<SectionStyledProps>(({
  theme, $px
}) => ({
  position: 'relative',
  backgroundColor: theme.colors.neutral[100],
  padding: `${theme.space.xl} ${$px ? theme.space[$px] : '40%'}`
}));

export { SectionStyled };
