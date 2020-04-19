import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/rootReducer';
import { authActions } from '../slices/authSlice';

export const SignInPage = () => {
  const isSigningIn = useSelector((state: State) => state.auth.isSigningIn);
  const dispatch = useDispatch();

  const initialValues = { username: '', password: '' };

  const signIn = (values) => {
    dispatch(authActions.signInRequest(values));
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={signIn}>
        {() => (
          <Form>
            <div>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <button type="submit" disabled={isSigningIn}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
