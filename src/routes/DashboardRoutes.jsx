import { Routes, Route } from 'react-router';
// import { UserDashboard, RiderDashboard, AdminDashboard } from '../components/dashboards';
import DashboardLayout from '../components/layout/DashboardLayout';
import UserDashboard from '../components/dashboards/UserDashboard';
import RiderDashboard from '../components/dashboards/RiderDashboard';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import NotFound from '../components/NotFound';

const DashboardRoutes = () => {
  return (
    <Routes> 
      <Route path="user" element={<DashboardLayout userType="user" />}>
        <Route index element={<UserDashboard />} />
        <Route path="orders" element={<div>Orders Page</div>} />
        <Route path="profile" element={<div>Profile Page</div>} />
      </Route>

      <Route path="rider" element={<DashboardLayout userType="rider" />}>
        <Route index element={<RiderDashboard />} />
        <Route path="earnings" element={<div>Earnings Detail</div>} />
        <Route path="schedule" element={<div>Schedule Page</div>} />
      </Route>

      <Route path="admin" element={<DashboardLayout userType="admin" />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<div>User Management</div>} />
        <Route path="restaurants" element={<div>Restaurant Management</div>} />
      </Route>
             {/* Not found page  */}
             <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default DashboardRoutes;
