import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar'

const Terms = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-[#0F0F0F] mb-6 text-center">
          Terms and Conditions
        </h1>

        <div className="space-y-5 text-sm text-gray-700">
          <p>
            Welcome to our platform. By accessing or using our services, you agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-xl font-semibold text-[#FB0000]">1. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else’s use and enjoyment of the services.
          </p>

          <h2 className="text-xl font-semibold text-[#FB0000]">2. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
          </p>

          <h2 className="text-xl font-semibold text-[#FB0000]">3. Privacy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy for details on how we collect, use, and safeguard your information.
          </p>

          <h2 className="text-xl font-semibold text-[#FB0000]">4. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms.
          </p>

          <h2 className="text-xl font-semibold text-[#FB0000]">5. Changes to Terms</h2>
          <p>
            We may update our Terms from time to time. Continued use of the service after changes means you accept the new terms.
          </p>

          <h2 className="text-xl font-semibold text-[#FB0000]">6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us via our{' '}
            <Link to="/contact" className="text-[#1E90FF] hover:underline">Contact Page</Link>.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/signup/user"
            className="inline-block bg-[#FB0000] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition"
          >
            Back to Signup
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Terms
