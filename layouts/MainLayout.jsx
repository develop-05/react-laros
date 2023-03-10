import React from 'react';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
