// A helper method for formatting url query params.
export const formatUrlFilters = (filters?: object): string => {
  if (!filters) return '';
  const values = Object.values(filters);
  const isEmpty = values.length <= 0 || values
    .every(val => val === '' || val === undefined);
  if (isEmpty) return '';
  return `?${Object.entries(filters).reduce((acc, [key, value]) => value
    ? `${acc}${key}=${value}` : acc, '')}`;
}

// A helper method for capitalize a string.
export const capitalize = (str: string): string => str
  .replace(/^\w/, (c) => c.toUpperCase());

// A helper method for parsing access token data.
export const parseToken = (token: string) => {
  try {
    const splitedToken = token.split('.');
    const binaryToken = atob(splitedToken[1]);
    return binaryToken ? JSON.parse(binaryToken) : null;
  } catch (error) {
    throw `Error parsing token. Token: ${token}. Error: ${error}`;
  }
};