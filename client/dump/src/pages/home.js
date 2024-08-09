import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import 'fontsource-roboto';

const Home = () => {
  const [productsBySell, setBySell] = useState([]);
  const [productsByArrival, setByArr] = useState([]);
  const [error, setError] = useState([]);

  const loadBySell = () => {
    getProducts('sold').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setBySell(data);
      }
    });
  };

  const loadByArr = () => {
    getProducts('createdAt').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setByArr(data);
      }
    });
  };

  useEffect(() => {
    loadByArr();
    loadBySell();
  }, []);

  return (
    <Layout
      title='Home page'
      description='SHOE PLACE'
      className='container-fluid'
    >
      <Search />
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          <h2 className='mb-2'>New Arrivals</h2>
          <div className='row'>
            {productsByArrival.map((product, i) => (
              <div key={i} className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                <Card product={product} />
              </div>
            ))}
          </div>

          <h2 className='mb-2 mt-4'>Best Sellers</h2>
          <div className='row'>
            {productsBySell.map((product, i) => (
              <div key={i} className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>

    </Layout>
  );
};

export default Home;
