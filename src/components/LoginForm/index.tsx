'use client'

import Button from '@/components/Button';
import FieldText from '@/components/FieldText';
import { useLogin } from '@/domain/user/client';
import { Credentials } from '@/domain/user/types';
import { Form, Formik } from 'formik';

const LoginForm = () => {
  const { mutate: login, isError } = useLogin();

  const initialValues: Credentials = {
    username: '',
    password: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={login}
    >
      {({ values, errors, handleChange }) => {
        const showError = !!errors.username || !!errors.password || isError;
        return (
          <Form>
            <FieldText
              id="username"
              name="username"
              legend="Username"
              value={values.username}
              error={showError}
              onChange={handleChange}
            />
            <FieldText
              id="password"
              name="password"
              legend="Password"
              type="password"
              value={values.password}
              error={showError}
              onChange={handleChange}
            />
            <Button type="submit">Log in</Button>
          </Form>
        )
      }}
    </Formik>
  );
}

export default LoginForm;