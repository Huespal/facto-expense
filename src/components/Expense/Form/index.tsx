'use client'

import Travel from '@/components/Expense/Form/Travel';
import Button from '@/components/shared/Button';
import FieldSelect from '@/components/shared/FieldSelect';
import FieldText from '@/components/shared/FieldText';
import { capitalize } from '@/core/helpers';
import { useCreateExpense } from '@/domain/expense/api/client';
import {
  ExpenseFormValues, ExpenseType
} from '@/domain/expense/types';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ExpenseFormProps {
  amountSpent: number;
  budget: number;
}

// The component to render expense form.
// Redirects to expenses list after a successful creation.
const ExpenseForm = ({ amountSpent, budget }: ExpenseFormProps) => {
  const router = useRouter();

  // Prepares the expense create request. It is called on form submit.
  const { mutate: create, isSuccess } = useCreateExpense();

  // Prepares the initial expense create form values.
  const initialValues: ExpenseFormValues = {
    name: '',
    type: ExpenseType.regular,
    accommodation: null,
    transportation: null,
    mileage: null,
    amount: null
  }

  // Local form validation. Validates the amount does not surpass 
  // the tenant budget. Decided that mileage Km costs 10 * amount.
  const validate = (formValues: ExpenseFormValues) => {
    const errors: { amount?: string } = {};
    const isMileage = formValues.type === ExpenseType.mileage;
    const amount = isMileage
      ? (formValues.mileage ?? 0) * 10
      : (formValues.amount ?? 0);

    if (amount + amountSpent > budget) {
      errors.amount = 'Maximum budget reached';
    }

    return errors;
  }

  useEffect(() => {
    // Redirects to expenses list after a successful creation.
    if (isSuccess) { router.push('/'); }
  }, [router, isSuccess]);

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={create}
    >
      {({ values, errors, setFieldValue, handleChange }) => {
        const isTravel = values.type === ExpenseType.travel;
        const isMileage = values.type === ExpenseType.mileage;

        // Resets form type related values to start fresh
        // when expense type is modified.
        const resetTypeValues = () => {
          setFieldValue('accommodation', null);
          setFieldValue('transportation', null);
          setFieldValue('amount', null);
          setFieldValue('mileage', null);
        }

        return (
          <Form>
            <FieldText
              id="expense-name"
              name="name"
              value={values.name}
              legend="Name"
              onChange={handleChange}
            />
            <FieldSelect
              id="expense-type"
              name="type"
              value={values.type}
              legend="Type"
              options={Object.values(ExpenseType)}
              mb="l"
              onChange={evt => {
                handleChange(evt);
                resetTypeValues();
              }}
            >
              {type => (
                <option key={type} value={type}>{capitalize(type)}</option>
              )}
            </FieldSelect>
            {isTravel && <Travel />}
            {isMileage ? (
              <FieldText
                id="expense-mileage"
                name="mileage"
                type="number"
                value={values.mileage ?? ''}
                legend="Mileage (Km)"
                error={!!errors.amount}
                onChange={handleChange}
              />
            ) : (
              <FieldText
                id="expense-amount"
                name="amount"
                type="number"
                value={values.amount ?? ''}
                legend="Amount"
                error={!!errors.amount}
                onChange={handleChange}
              />
            )}
            {errors.amount && <><p>{errors.amount}</p><br /></>}
            <div>
              {/* Submit the form on click. 
                Formik's onSubmit method is called */}
              <Button type="submit">Add</Button>
              {/* Cancels the modifications. 
                Redirects to expenses list. */}
              <Link href="/">Cancel</Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ExpenseForm;