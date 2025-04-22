import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router';
import Navbar from '../Navbar';

// Validation schemas
const signupSchema = (userType) => Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  fullName: Yup.string()
    .required('Full name is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
  ...(userType === 'rider' && {
    vehicleType: Yup.string()
      .required('Vehicle type is required'),
    licensePlate: Yup.string()
      .required('License plate is required')
  }),
  ...(userType === 'admin' && {
    adminCode: Yup.string()
      .min(6, 'Admin code must be 6 characters')
      .required('Admin code is required')
  })
});

const SignupForm = ({ userType }) => {
  const getInitialValues = () => ({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    ...(userType === 'rider' && {
      vehicleType: '',
      licensePlate: ''
    }),
    ...(userType === 'admin' && {
      adminCode: ''
    })
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(`${userType} Signup:`, values);
    setTimeout(() => {
      alert(`Signup successful for ${userType}`);
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {userType.charAt(0).toUpperCase() + userType.slice(1)} Sign Up
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={getInitialValues()}
            validationSchema={signupSchema(userType)}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Common Fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Field
                    name="fullName"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Field
                    name="phone"
                    type="tel"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    placeholder="1234567890"
                    />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Rider Specific Fields */}
                {userType === 'rider' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Vehicle Type
                      </label>
                      <Field
                        as="select"
                        name="vehicleType"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      >
                        <option value="">Select vehicle type</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="bicycle">Bicycle</option>
                        <option value="car">Car</option>
                      </Field>
                      <ErrorMessage name="vehicleType" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        License Plate
                      </label>
                      <Field
                        name="licensePlate"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      <ErrorMessage name="licensePlate" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </>
                )}

                {/* Admin Specific Field */}
                {userType === 'admin' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Admin Code
                    </label>
                    <Field
                      name="adminCode"
                      type="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    <ErrorMessage name="adminCode" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Sign up as {userType}
                  </button>
                </div>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Already have an account? </span>
                  <Link
                    to={`/login/${userType}`}
                    className="font-medium text-red-600 hover:text-red-500"
                  >
                    Sign in here
                  </Link>
                </div>

                <div className="text-center text-xs text-gray-500">
                  By signing up, you agree to our{' '}
                  <Link to="/terms" className="text-red-600 hover:text-red-500">
                    Terms of Service
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
                </>
  );
};

// Individual Signup Pages
export const UserSignup = () => <SignupForm userType="user" />;
export const RiderSignup = () => <SignupForm userType="rider" />;
export const AdminSignup = () => <SignupForm userType="admin" />;