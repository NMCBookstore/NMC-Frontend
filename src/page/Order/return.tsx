import React from 'react';
import { Link } from 'react-router-dom';

const OrderReturn = () => {
    const pathAfterDomain = window.location.pathname;

  return (
    <div className="mt-[76px]">
      <p>Path after domain: {pathAfterDomain}</p>
      <Link to="/">back to home</Link>
    </div>
  );
};

export default OrderReturn;