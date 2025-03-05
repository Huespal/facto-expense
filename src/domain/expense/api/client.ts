import { api } from '@/core/api';
import { formatUrlFilters } from '@/core/helpers';
import {
  Expense, ExpenseFilters, ExpenseFormValues
} from '@/domain/expense/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface useGetExpensesProps {
  filters?: ExpenseFilters;
}

// The hook to request expenses list from the API.
// It automatically re-fetches on filters change.
export const useGetExpenses = ({
  filters
}: useGetExpensesProps) => useQuery<Expense[]>({
  queryKey: ['expenses', JSON.stringify(filters)],
  queryFn: () => api(`expense${formatUrlFilters(filters)}`, 'GET')
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
