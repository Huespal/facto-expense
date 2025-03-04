import { api } from '@/core/api';
import { Expense, ExpenseFormValues } from '@/domain/expense/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// The hook to request expenses list from the API.
// It can be pre-initialized within data (coming from SSR).
export const useGetExpenses = (initial?: Expense[]) => useQuery<Expense[]>({
  queryKey: ['expenses'],
  queryFn: () => api(`expense`, 'GET'),
  initialData: initial
})

// The hook to request API to create an expense.
// It invalidates expenses list query to re-fetch from the API.
export const useCreateExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: ExpenseFormValues) =>
      api<ExpenseFormValues>('expense', 'POST', body),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    }
  });
}

// The hook to request API to approve an expense by id.
// It does invalidate expenses list query to re-fetch from the API.
export const useApproveExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api(`expense/${id}/approve`, 'PATCH'),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    }
  });
};

// The hook to request API to reject an expense by id.
// It does invalidate expenses list query to re-fetch from the API.
export const useRejectExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api(`expense/${id}/reject`, 'PATCH'),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    }
  })
};
