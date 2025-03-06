import Button from '@/components/shared/Button';
import FieldSelect from '@/components/shared/FieldSelect';
import FieldText from '@/components/shared/FieldText';
import { capitalize } from '@/core/helpers';
import { ExpenseFilters, ExpenseStatus } from '@/domain/expense/types';
import { useEffect, useState } from 'react';

interface ExpenseFilterProps {
  onChange: (filters: ExpenseFilters) => void;
}

// The component to render expenses list filters.
// Defined expense filters: status, date from and date to.
const ExpenseFilter = ({ onChange }: ExpenseFilterProps) => {
  const [status, setStatus] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const reset = () => {
    setStatus('');
    setFrom('');
    setTo('');
  }

  useEffect(() => {
    onChange({ status, from, to });
  }, [onChange, status, from, to]);

  return (
    <>
      <FieldSelect
        id="expense-status-filter"
        name="status"
        legend="Status"
        mb="l"
        initialText="Select..."
        inline
        options={Object.values(ExpenseStatus)}
        value={status}
        onChange={({ target }) => {
          setStatus(target.value);
        }}
      >
        {status => (
          <option key={status} value={status}>{capitalize(status)}</option>
        )}
      </FieldSelect>
      <FieldText
        id="expense-from-filter"
        name="from"
        type="date"
        value={from}
        legend="From"
        max={to}
        inline
        onChange={({ target }) => {
          setFrom(target.value);
        }}
      />
      <FieldText
        id="expense-to-filter"
        name="to"
        type="date"
        value={to}
        legend="To"
        min={from}
        inline
        onChange={({ target }) => {
          setTo(target.value);
        }}
      />
      <div>
        <Button onClick={reset}>Clear filters</Button>
      </div>
    </>
  );
}

export default ExpenseFilter;