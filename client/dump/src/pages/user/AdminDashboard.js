import React from 'react';
import { Link } from 'react-router-dom';
// Create a Layout

const isAuthenticated = () => {
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else if (!(localStorage.getItem('jwt')) || typeof window === 'undefined') {
    return false;
  }
};

const AdminDashboard = () => {
  const {
    user: { _id, fname, lname, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="">
        {/* Add Product Create Category Orders update Product */}
      </div>
    );
  };

  const adminDetails = () => {
    return (
      <div className="">

      </div>
    );
  };

  return (
    <Layout title="Admin Dashboard"
      description={`${fname} ${lname}`}
      className=""
    >
      <div className="">
        //links & details
      </div>
    </Layout>
  );
};

export default AdminDashboard;
