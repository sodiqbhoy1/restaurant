import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router';
import { useState } from 'react';
import Navbar from '../Navbar';

const ForgotPasswordPage = ({ userType }) => {
  const [emailSent, setEmailSent] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Password reset requested for:', values.email);
    setTimeout(() => {
      setEmailSent(true);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset Your Password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {!emailSent ? (
            <Formik
            initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              >
              {({ isSubmitting }) => (
                  <Form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <Field
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                      {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                    </button>
                  </div>

                  <div className="text-center text-sm">
                    <Link
                      to={`/login/${userType}`}
                      className="font-medium text-red-600 hover:text-red-500"
                      >
                      Back to Login
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
              <div className="text-center space-y-6">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg 
                  className="h-6 w-6 text-green-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                    />
                </svg>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900">
                Password Reset Email Sent
              </h3>
              
              <p className="text-sm text-gray-600">
                We've sent instructions to reset your password to{' '}
                <span className="font-medium text-gray-900">your@email.com</span>. 
                Please check your inbox and follow the directions.
              </p>

              <div className="text-sm">
                <Link
                  to={`/login/${userType}`}
                  className="font-medium text-red-600 hover:text-red-500"
                  >
                  Return to Login
                </Link>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Didn't receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setEmailSent(false)}
                  className="text-red-600 hover:text-red-500 font-medium"
                  >
                  try sending again
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
          </>
  );
};

// Individual Forgot Password Pages
export const UserForgotPassword = () => <ForgotPasswordPage userType="user" />;
export const RiderForgotPassword = () => <ForgotPasswordPage userType="rider" />;
export const AdminForgotPassword = () => <ForgotPasswordPage userType="admin" />;