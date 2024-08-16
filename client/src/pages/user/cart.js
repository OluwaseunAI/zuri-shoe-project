import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const getCart = () => {
  if (typeof window !== 'undefined' && localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart'));
  }
  return [];
};

const Cart = () => {
  // const [items, setItems] = useState(getCart());
  // const checkoutArrayFunctions = useState(false);

  // useEffect(() => { setItems(getCart());  }, [run]);

  const renderItems = () => {
    if (items.length === 0) {
      return (
        <h2>
          Your cart is empty.
          <Link to="/shop">Continue Shopping</Link>
        </h2>
      );
    }
    return (
      <div>
        <h2> Number of items:{items.length} </h2>
        <hr />
        {items.map((product, x) => (
          <Card
            key={x}
            product={product}

            allowCartUpdate={true}
            showAddToCartBtn={false}
            showRmvProductBtn={true}
            //
            //call checkout functions
          />
        ))}
      </div>
    );
  };

  return (
    <Layout
      title=""
      description="Manage your cart items, add, remove, checkout or continue shopping"
      className=""
    >
      <div className="">
        <div className="" />
        <div className="">{renderItems()}</div>
        <div className="">
          <h2 className="">Cart Items</h2>
          <hr />
{/* Handle checkout */}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;