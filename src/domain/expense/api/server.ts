import { api } from '@/core/api';

// The method to request expenses list from the API in server side.
export const getExpenses = async () =>
  await api('expense', 'GET', undefined, true);