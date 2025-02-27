'use client'

import { setAccessToken } from '@/app/actions';
import Button from '@/components/Button';
import FieldText from '@/components/FieldText';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  const onSubmit = () => {
    // TODO: Call /login API.
    setAccessToken('token');
    router.push('/');
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      onSubmit={onSubmit}
    >
      {({ values, errors, handleChange }) => {
        const isError = !!errors.username || !!errors.password;
        return (
          <Form>
            <FieldText
              id="username"
              name="username"
              legend="Username"
              value={values.username}
              error={isError}
              onChange={handleChange}
            />
            <FieldText
              id="password"
              name="password"
              legend="Password"
              type="password"
              value={values.password}
              error={isError}
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