import styled from 'styled-components';

const FooterStyled = styled.footer(({
  theme
}) => ({
  display: 'flex',
  backgroundColor: theme.colors.neutral[200],
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.space.default
}));

export { FooterStyled };
