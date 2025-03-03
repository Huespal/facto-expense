'use client'

import Button from '@/components/Button';
import Travel from '@/components/Expense/Form/Travel';
import FieldSelect from '@/components/FieldSelect';
import FieldText from '@/components/FieldText';
import { capitalize } from '@/core/helpers';
import { useCreateExpense } from '@/domain/expense/api/client';
import {
  ExpenseFormValues, ExpenseType
} from '@/domain/expense/types';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ExpenseForm = () => {
  const router = useRouter();

  const { mutate: create, isSuccess } = useCreateExpense();

  const initialValues: ExpenseFormValues = {
    name: '',
    type: ExpenseType.regular,
    accommodation: null,
    transportation: null,
    mileage: null,
    amount: null
  }

  useEffect(() => {
    if (isSuccess) { router.push('/'); }
  }, [router, isSuccess]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={create}
    >
      {({ values, setFieldValue, handleChange }) => {
        const isTravel = values.type === ExpenseType.travel;
        const isMileage = values.type === ExpenseType.mileage;

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
                value={values.mileage ?? ''}
                legend="Mileage (Km)"
                onChange={handleChange}
              />
            ) : (
              <FieldText
                id="expense-amount"
                name="amount"
                value={values.amount ?? ''}
                legend="Amount"
                onChange={handleChange}
              />
            )}
            <div>
              <Button type="submit">Add</Button>
              <Link href="/">Cancel</Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ExpenseForm;