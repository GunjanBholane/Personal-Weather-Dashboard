import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li> <Link to="/Weather">Weather</Link></li>
          <li><Link to="/Profile">Profile</Link></li>


        </ul>
      </nav>
      <Outlet />
    </>
  );
}
