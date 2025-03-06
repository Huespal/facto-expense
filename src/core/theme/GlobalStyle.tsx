'use client';

import { createGlobalStyle } from 'styled-components';

// Application global styles.
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  box-sizing: border-box;
  font-weight: normal;
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
html {
  height: 100%;
}
body {
  position: relative;
  font-family: Manrope, sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: ${({ theme }) => theme.lineHeights.default};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.colors.neutral[900]};
}
body > main {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}
ul {
  list-style: none;
}
a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
  color: inherit;
}
a:link,
a:hover,
a:active,
a:visited {
  text-decoration: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  margin: ${({ theme }) => `${theme.space.default} 0`};
  padding: 0;
}
input,
select,
textarea,
button {
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.default};
  outline: none;
}
input,
select {
  vertical-align: middle;
}
input[type='search'],
input[type='number'],
input[type='submit'] {
  -webkit-appearance: textfield;
  min-width: 0;
}
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
pre {
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-family: monospace;
  padding: ${({ theme }) => theme.space.default};
  border-left: ${({
  theme
}) => `${theme.space.default} solid ${theme.colors.semantic.warning[300]}`};
  background: ${({ theme }) => `${theme.colors.semantic.warning[300]}, 0.2`};
  overflow: auto;
  white-space: pre-wrap; /* CSS3 browsers  */
  word-wrap: break-word; /* IE 5.5+ and up */
}
img:not([src]):not([srcset]) {
  visibility: hidden;
}
:root {
  --container: 92vw;
}
`;

export default GlobalStyle;
