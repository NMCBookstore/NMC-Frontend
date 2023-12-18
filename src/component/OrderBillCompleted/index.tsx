import React from "react";
import { productItem } from "../../assets/img";
import { useSelector } from "react-redux";
import {
  selectCurrentCartProduct,
  selectCurrentTotalCartValue,
} from "../../features/cart/cartSlice";
import { Order } from "../../interface/Order";

interface OrderCompleted {
  dataPayment: any;
  order: Order[];
}

const OrderBillCompleted: React.FunctionComponent<OrderCompleted> = ({
  dataPayment,
  order,
}) => {
  const matchedOrder = order.find((item) => {
    return item.id === dataPayment.id;
  });

  return (
    <div className="order-bill order-payment">
      <h2>Your order details</h2>
      <div className="order-bill__list">
        {matchedOrder?.books.map((item, index) => (
          <div className="order-bill__item">
            <div className="flex gap-3">
              <div className="order-bill__item--img flex-shrink-0">
                <img src={item?.image[0]} alt="img-logo" />
              </div>
              <div className="order-bill__item--desc flex-grow-1">
                <div className="order-bill__item--desc--title">
                  {item?.name}
                </div>
                <div className="order-bill__item--desc--attribute">
                  {item?.author}
                </div>
                <div className="order-bill__item--desc--quantity">
                  Quantity: {item?.quantity}
                </div>
              </div>
            </div>
            {item?.sale == 0 ? (
              <div className="order-bill__item--price flex-shrink-0">
                <div className="order-bill__item--price--new">
                  {item?.price}$
                </div>
              </div>
            ) : (
              <div className="order-bill__item--price flex-shrink-0">
                <div className="order-bill__item--price--new">
                  {item?.price}$
                </div>
                <div className="order-bill__item--price--old">
                  {item?.price}$
                </div>
                <div className="order-bill__item--price--percent">
                  {item?.sale}%
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="order-bill__footer flex justify-end">
        <div className="text-center">
          <p className="order-bill__footer--note">*Shipping fee included</p>
          <div className="order-bill__footer--sum d-flex justify-content-between align-items-center">
            <div>Total order value:</div>
            <p>{matchedOrder?.sub_total}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBillCompleted;
