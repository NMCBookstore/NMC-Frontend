import React from 'react';
import { Link } from 'react-router-dom';

const OrderPayment = () => {
    const pathAfterDomain = window.location.pathname;

  return (
    <div className="mt-[76px]">
      <p>Path after domain: {pathAfterDomain}</p>
      <Link to="/order/return">return</Link>
    </div>
  );
};

export default OrderPayment;