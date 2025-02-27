import styled from 'styled-components';

const HeaderStyled = styled.header(({
  theme
}) => ({
  display: 'flex',
  backgroundColor: theme.colors.neutral[200],
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.space.default
}));

export { HeaderStyled };
