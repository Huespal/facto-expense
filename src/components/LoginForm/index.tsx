'use client'

import Button from '@/components/shared/Button';
import FieldText from '@/components/shared/FieldText';
import { useLogin } from '@/domain/user/api/client';
import { Credentials } from '@/domain/user/types';
import { Form, Formik } from 'formik';

// The component to display the login form.
// Log in is done by sending username and password values through the API.
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
            {showError && <><p>Invalid credentials</p><br /></>}
            <Button type="submit">Log in</Button>
          </Form>
        )
      }}
    </Formik>
  );
}

export default LoginForm;