import { api } from '@/core/api';
import { ExpenseFormValues } from '@/domain/expense/types';
import { useMutation } from '@tanstack/react-query';

export const useCreateExpense = () => useMutation({
  mutationFn: (body: ExpenseFormValues) =>
    api<ExpenseFormValues>('expense', 'POST', body)
})

