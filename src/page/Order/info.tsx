import React from 'react';
import { Link } from 'react-router-dom';

const OrderInfo = () => {
    const pathAfterDomain = window.location.pathname;

  return (
    <div className="mt-[76px]">
      <p>Path after domain: {pathAfterDomain}</p>
      <Link to="/order/payment">payment</Link>
    </div>
  );
};

export default OrderInfo;