import React from "react";
import { productItem } from "../../assets/img";

const OrderBill: React.FunctionComponent = () => {
    return (
        <div className="order-bill order-payment">
            <h2>Your order details</h2>
            <div className="order-bill__list">
                <div className="order-bill__item">
                    <div className="flex gap-3">
                        <div className="order-bill__item--img flex-shrink-0">
                            <img src={productItem} alt="img-logo"></img>
                        </div>
                        <div className="order-bill__item--desc flex-grow-1">
                            <div className="order-bill__item--desc--title">Build the life you want 5</div>
                            <div className="order-bill__item--desc--attribute">Arthur c. brooks oprah winfrey</div>
                            <div className="order-bill__item--desc--quantity">Quantity: 01</div>
                        </div>
                    </div>
                    <div className="order-bill__item--price flex-shrink-0">
                        <div className="order-bill__item--price--new">270$</div>
                        <div className="order-bill__item--price--old">300$</div>
                        <div className="order-bill__item--price--percent">-10%</div>
                    </div>
                </div>
            </div>
            <div className="order-bill__footer flex justify-end">
                <div className="text-center">
                    <p className="order-bill__footer--note">*Shipping fee included</p>
                    <div className="order-bill__footer--sum d-flex justify-content-between align-items-center">
                        <div>Total order value:</div>
                        <p>270 $</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderBill;