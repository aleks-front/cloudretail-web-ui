import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/rootReducer';
import { authActions } from '../slices/authSlice';

export const SignInPage = () => {
  const isSigningIn = useSelector((state: State) => state.auth.isSigningIn);
  const dispatch = useDispatch();

  const initialValues = { username: '', password: '' };

  const handleSubmit = (values) => {
    dispatch(authActions.signInRequest(values));
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSigningIn}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
