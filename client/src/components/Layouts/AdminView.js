import React from "react";
import { NavLink } from "react-router-dom";
const AdminViews = () => {
  return (
    <div className="text-center">
      <div className="list-group dashboard-menu">
        <h4>Admin Panel</h4>
        <ul>
          <li>
            <NavLink to="/dashboard-view/admin/create-category" className="list-group-item list-group-item-action">
              Create A Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-view/admin/create-product" className="list-group-item list-group-item-action">
              Create Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-view/admin/products" className="list-group-item list-group-item-action">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-view/admin/orders" className="list-group-item list-group-item-action">
              Orders Placed
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminViews;