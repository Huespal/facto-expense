import { api } from '@/core/api';

export const getExpenses = async () => await api('expense', 'GET');