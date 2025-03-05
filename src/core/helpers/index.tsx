export const formatUrlFilters = (filters?: Object): string => {
  if (!filters) return '';
  const values = Object.values(filters);
  const isEmpty = values.length <= 0 || values
    .every(val => val === '' || val === undefined);
  if (isEmpty) return '';
  return `?${Object.entries(filters).reduce((acc, [key, value]) => value
    ? `${acc}${key}=${value}` : acc, '')}`;
}

export const capitalize = (str: string): string => str
  .replace(/^\w/, (c) => c.toUpperCase());