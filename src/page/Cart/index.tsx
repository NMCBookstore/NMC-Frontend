import React from 'react';
import { Link } from 'react-router-dom';

const CartIndex = () => {
    const pathAfterDomain = window.location.pathname;

  return (
    <div className="mt-[76px]">
      <p>Path after domain: {pathAfterDomain}</p>
      <Link to="/order/info">payment</Link>
    </div>
  );
};

export default CartIndex;