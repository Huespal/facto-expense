import styled from 'styled-components';

const FooterStyled = styled.footer(({
  theme
}) => ({
  display: 'flex',
  backgroundColor: theme.colors.neutral[200],
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.space.default
}));

export { FooterStyled };
