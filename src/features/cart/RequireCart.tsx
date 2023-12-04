import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentCartProduct } from "./cartSlice";

const RequireCart = () => {
  const totalInCart = useSelector(selectCurrentCartProduct);

  const numberItem = totalInCart.length;

  const location = useLocation();

  return numberItem ? (
    <Outlet />
  ) : (
    <Navigate to="/user/cart" state={{ from: location }} replace />
  );
};

export default RequireCart;
