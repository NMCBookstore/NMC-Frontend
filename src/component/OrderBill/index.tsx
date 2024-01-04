import React from "react";
import { productItem } from "../../assets/img";
import { useSelector } from "react-redux";
import {
  selectCurrentCartProduct,
  selectCurrentShipping,
  selectCurrentTotalCartValue,
} from "../../features/cart/cartSlice";

const OrderBill: React.FunctionComponent = () => {
  const cartInfo = useSelector(selectCurrentCartProduct);
  const totalPrice = useSelector(selectCurrentTotalCartValue);
  const shipping = useSelector(selectCurrentShipping);

  return (
    <div className="order-bill order-payment">
      <h2>Your order details</h2>
      <div className="order-bill__list">
        {cartInfo.map((item, index) => (
          <div key={index} className="order-bill__item">
            <div className="flex gap-3">
              <div className="order-bill__item--img flex-shrink-0">
                <img src={item.image} alt="img-logo"></img>
              </div>
              <div className="order-bill__item--desc flex-grow-1">
                <div className="order-bill__item--desc--title">
                  {item.book_name}
                </div>
                <div className="order-bill__item--desc--attribute">
                  {item.author}
                </div>
                <div className="order-bill__item--desc--quantity">
                  Quantity: {item.amount}
                </div>
              </div>
            </div>
            {item?.sale === 0 ? (
              <div className="order-bill__item--price flex-shrink-0">
                <div className="order-bill__item--price--new">
                  {item.price}$
                </div>
              </div>
            ) : (
              <div className="order-bill__item--price flex-shrink-0">
                <div className="order-bill__item--price--new">
                  {item.price}$
                </div>
                <div className="order-bill__item--price--old">
                  {item.price}$
                </div>
                <div className="order-bill__item--price--percent">
                  {item.sale}%
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="order-bill__footer flex justify-end">
        <div className="text-center">
          <p className="order-bill__footer--note">
            *Shipping fee included: {shipping ? Number(shipping).toFixed(2) : 0}
            $
          </p>
          <div className="order-bill__footer--sum d-flex justify-content-between align-items-center">
            <div>
              <p>Total order: {totalPrice.toFixed(2)}$</p>
            </div>

            <div className="order-bill__footer--sum d-flex justify-content-between align-items-center">
              <p>
                Total order value:{" "}
                {shipping
                  ? (totalPrice + Number(shipping)).toFixed(2)
                  : totalPrice}
                $
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBill;
