import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from "../../component/Breadcrumb";
import { productItem } from "../../assets/img";

const CartIndex = () => {
    const pathAfterDomain = window.location.pathname;

    return (
        <div className="mt-[76px] bg-[#FBF4EA]">
            <div className="container-nmc mx-auto">
                <Breadcrumb></Breadcrumb>
                <h1 className='text-primary px-3 flex items-center py-4'><i className="bdx-cart-fill inline-flex items-center"></i> <span>My Cart</span></h1>
                <div className="cart-info__block">
                    <div className="cart-info__table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col">Đơn giá</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng cộng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="btn-delete">
                                        <i className="lp-remove"></i>
                                    </td>
                                    <td data-th="Sản Phẩm">
                                        <div className="product-img flex-shrink-0">
                                            <a href="<?= PUBLIC_ASSETS_URL ?>product/detail" target="_blank">
                                                <img src={productItem}
                                                    alt="img-banner"></img>
                                            </a>
                                        </div>
                                        <div>
                                            <p>
                                                <a  href="<?= PUBLIC_ASSETS_URL ?>product/detail" target="_blank">
                                                    ĐẦM THIẾT KẾ | SKU324352
                                                </a>
                                            </p>
                                            <p>Size S, Màu đen</p>
                                        </div>
                                    </td>
                                    <td data-th="Đơn giá">
                                        <div className="table-price">
                                            <p className="table-price__new">
                                                1.800.000 ₫
                                            </p >
                                            <p className="table-price__old">
                                                2.000.000 ₫
                                            </p>
                                            <p className="table-price__discount">-10%</p>
                                        </div>
                                    </td>
                                    <td data-th="Số Lượng">
                                        <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus"
                                                type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="0" max="100"
                                                value="1"></input>
                                            <button className="qty-count qty-count--add" data-action="add"
                                                type="button">+</button>
                                        </div>
                                    </td>
                                    <td data-th="Thành Tiền">
                                        <p className="table-sumprice">
                                            1,365,000 ₫
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="btn-delete">
                                        <i className="lp-remove"></i>
                                    </td>
                                    <td data-th="Sản Phẩm">
                                        <div className="product-img flex-shrink-0">
                                            <a href="<?= PUBLIC_ASSETS_URL ?>product/detail" target="_blank">
                                                <img src={productItem}
                                                    alt="img-banner"></img>
                                            </a>
                                        </div>
                                        <div>
                                            <p>
                                                <a href="<?= PUBLIC_ASSETS_URL ?>product/detail" target="_blank">
                                                    ĐẦM THIẾT KẾ | SKU324352
                                                </a>
                                            </p>
                                            <p>Size S, Màu đen</p>
                                        </div>
                                    </td>
                                    <td data-th="Đơn giá">
                                        <div className="table-price">
                                            <p className="table-price__new">
                                                1.800.000 ₫
                                            </p >
                                            <p className="table-price__old">
                                                2.000.000 ₫
                                            </p>
                                            <p className="table-price__discount">-10%</p>
                                        </div>
                                    </td>
                                    <td data-th="Số Lượng">
                                        <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus"
                                                type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="0" max="100"
                                                value="1"></input>
                                            <button className="qty-count qty-count--add" data-action="add"
                                                type="button">+</button>
                                        </div>
                                    </td>
                                    <td data-th="Thành Tiền">
                                        <p className="table-sumprice">
                                            1,365,000 ₫
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="btn-delete">
                                        <i className="lp-remove"></i>
                                    </td>
                                    <td data-th="Sản Phẩm">
                                        <div className="product-img flex-shrink-0">
                                            <a href="<?= PUBLIC_ASSETS_URL ?>product/detail" target="_blank">
                                                <img src={productItem}
                                                    alt="img-banner"></img>
                                            </a>
                                        </div>
                                        <div>
                                            <p>
                                                <a href="<?= PUBLIC_ASSETS_URL ?>product/detail" target="_blank">
                                                    ĐẦM THIẾT KẾ | SKU324352
                                                </a>
                                            </p>
                                            <p>Size S, Màu đen</p>
                                        </div>
                                    </td>
                                    <td data-th="Đơn giá">
                                        <div className="table-price">
                                            <p className="table-price__new">
                                                1.800.000 ₫
                                            </p >
                                            <p className="table-price__old">
                                                2.000.000 ₫
                                            </p>
                                            <p className="table-price__discount">-10%</p>
                                        </div>
                                    </td>
                                    <td data-th="Số Lượng">
                                        <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus"
                                                type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="0" max="100"
                                                value="1"></input>
                                            <button className="qty-count qty-count--add" data-action="add"
                                                type="button">+</button>
                                        </div>
                                    </td>
                                    <td data-th="Thành Tiền">
                                        <p className="table-sumprice">
                                            1,365,000 ₫
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 w-[25%] ms-auto">
                        <div className="cart-info__bottom">
                            <p className="cart-info__bottom__noting">
                                *Chưa bao gồm phí vận chuyển
                            </p>
                            <p className="cart-info__bottom__sum">
                                <span className="text-uppercase">Tổng đơn</span>
                                <span>5.400.000 ₫</span>
                            </p>
                            <div className="cart-info__bottom__btn d-flex justify-content-between align-items-center">
                                <a href="javascript:history.back()">
                                    <i className="lp-arrow"></i>
                                    quay trở lại
                                </a>
                                <a href="<?= PUBLIC_ASSETS_URL ?>cart/order.info">
                                    đặt hàng
                                    <i className="lp-arrow"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartIndex;