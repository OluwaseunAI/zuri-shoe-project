import React from "react";
import { NavLink } from "react-router-dom";
const UserViews = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink to="/dashboard-view/user/profile" className="list-group-item list-group-item-action">
            Profile
          </NavLink>
          <NavLink to="/dashboard-view/user/orders"
            className="list-group-item list-group-item-action">
            Your Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserViews;