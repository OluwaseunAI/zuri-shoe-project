import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const isAuthenticated = () => {
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else if (!(localStorage.getItem('jwt')) || typeof window === 'undefined') {
    return false;
  }
};

const getPurchaseHistory = (user_id, token) => {
  return fetch(
    `${API}/orders/by/user/${user_id}`,
    {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((resp) => {
      return resp.json();
    })
    .catch((error) => console.log(error));
};

const Dashboard = () => {
  const [history, setHistory] = useState([]);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const token = isAuthenticated().token;

  const loadBy = (user_id, token) => {
    getPurchaseHistory(user_id, token).then((historyP) => {
      if (historyP.error) {
        console.log(historyP.error);
      } else {
        setHistory(historyP);
      }
    });
  };

  useEffect(() => { loadBy(_id, token);
  }, []);

  const userLinks = () => {
    return (
      <div className="">
        <h4></h4>
        <ul className="">
          <li className="">
            <Link className="" to='/cart'> My cart </Link>
          </li>
          <li className="">
            <Link className="" to={`/profile/${_id}`}> Edit Profile</Link>
          </li>
        </ul>
      </div>
    );
  };

  const userDetails = () => {
    return (
      <div className="">
        {role === 1 ? 'Admin' : 'Registered user'}
      </div>
    );
  };

  const purchaseHistory = (history) => {
    return (
      <div className="">
        {/* Map products to history
        Use moment to match purchase date */}
      </div>
    );
  };

  return (
    <Layout
      title="User Dashboard"
      description={`${fname} ${lname}`}
      className=""
    >
      <div className='row'>
{/* user links details and purchase history */}
      </div>
    </Layout>
  );
};

export default Dashboard;
