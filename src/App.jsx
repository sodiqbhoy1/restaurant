import React from "react";
import { Route, Routes } from "react-router";
import {
  AdminLogin,
  RiderLogin,
  UserLogin,
} from "./components/LoginPages/LoginForm";
import {UserSignup, RiderSignup, AdminSignup} from "./components/SignupPages/SignupForm";
import Homepage from "./components/Homepage";
import { AdminForgotPassword, RiderForgotPassword, UserForgotPassword } from "./components/ForgotPassword/ForgotPasswordPage";
import Terms from "./components/Terms";
import NotFound from "./components/NotFound";
import Offers from "./components/Pages/Offers";
import Contact from "./components/Pages/Contact";
import Restaurants from "./components/Pages/Restaurants";
import DashboardRoutes from "./routes/DashboardRoutes";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login/rider" element={<RiderLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/signup/rider" element={<RiderSignup />} />
        <Route path="/signup/admin" element={<AdminSignup />} />
        <Route path="/forgot-password/user" element={<UserForgotPassword />} />
        <Route path="/forgot-password/rider" element={<RiderForgotPassword />} />
        <Route path="/forgot-password/admin" element={<AdminForgotPassword />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />

{/* dashboard */}
<Route path="/dashboard/*" element={<DashboardRoutes />} />




       {/* Not found page  */}
        <Route path="*" element={<NotFound />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
};

export default App;
