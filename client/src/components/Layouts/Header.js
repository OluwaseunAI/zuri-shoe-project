import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../contextAPI/index';
import toast from 'react-hot-toast';
import { Badge } from 'antd';
import SearchInput from '../searchBar_categoryForm';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../contextAPI/index';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleSignout = () => {
    setAuth({ ...auth, user: null, token: '' });
    localStorage.removeItem('auth');
    toast.success('Signed out Successfully');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">Shoe Ecommerce App</Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <SearchInput />
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link to="/categories" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Categories</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/categories" className="dropdown-item">All Categories</Link>
                </li>
                {categories?.map((c) => (
                  <li>
                    <Link to={`/category/${c.slug}`} className="dropdown-item">{c.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            {!auth?.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <NavLink href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style={{ border: 'none' }}>{auth?.user?.name}</NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} className="dropdown-item">Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login" onClick={handleSignout} className="dropdown-item">Logout</NavLink>
                    </li>
                  </ul>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <Badge count={cart?.length} showZero offset={[10, -5]}>Cart</Badge>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;