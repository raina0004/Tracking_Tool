import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    <div className="sidebar">
      {!loggedIn && (
        <NavLink to="/" activeClassName="active">
          Login
        </NavLink>
      )}
      {loggedIn && (
        <>
          <NavLink to="/Register" activeClassName="active">
            Register
          </NavLink>
          <NavLink to="/User-Management" activeClassName="active">
            User Management
          </NavLink>
          <NavLink to="/create-lead" activeClassName="active">
            Create Lead
          </NavLink>
          <NavLink to="/allusers" activeClassName="active">
            All Users
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Sidebar;
