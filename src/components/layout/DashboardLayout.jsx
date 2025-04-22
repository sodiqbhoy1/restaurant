import React from 'react';
import { Outlet } from 'react-router';
import SideNav from '../nav/SideNav';

const DashboardLayout = ({ userType }) => {
  return (
    <div className="flex min-h-screen">
      <SideNav userType={userType} />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
