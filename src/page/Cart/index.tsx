import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from "../../component/Breadcrumb";
import { productItem } from "../../assets/img";
import Marquee from '../../component/Marquee';

const CartIndex = () => {
    const pathAfterDomain = window.location.pathname;

    return (
        <div className="mt-[76px] bg-[#FBF4EA]">
            <Marquee></Marquee>
            <div className="container-nmc mx-auto pb-8">
                <Breadcrumb></Breadcrumb>
                <h1 className='text-orange-orange-6 px-3 flex items-center justify-center mb-3 py-4'><i className="bdx-cart-fill inline-flex items-center"></i> <span>My Cart</span></h1>
                <div className="cart-info__block">
                    <div className="cart-info__table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Order Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="btn-delete">
                                        <i className="bdx-close"></i>
                                    </td>
                                    <td data-th="Product">
                                        <div className="product-img shrink-0">
                                            <a href="" target="_blank">
                                                <img src={productItem} alt="img-banner"></img>
                                            </a>
                                        </div>
                                        <div>
                                            <p>
                                                <a href="" target="_blank">
                                                    Build the life you want
                                                </a>
                                            </p>
                                            <p>Arthur c. brooks oprah winfrey</p>
                                        </div>
                                    </td>
                                    <td data-th="Price">
                                        <div className="table-price">
                                            <p className="table-price__new">
                                                270$
                                            </p >
                                            <p className="table-price__old">
                                                300$
                                            </p>
                                            <p className="table-price__discount">-10%</p>
                                        </div>
                                    </td>
                                    <td data-th="Quantity">
                                        <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus"
                                                type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="0" max="100"
                                                value="1"></input>
                                            <button className="qty-count qty-count--add" data-action="add"
                                                type="button">+</button>
                                        </div>
                                    </td>
                                    <td data-th="Order Value">
                                        <p className="table-sumprice">
                                            270$
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="btn-delete">
                                        <i className="bdx-close"></i>
                                    </td>
                                    <td data-th="Product">
                                        <div className="product-img shrink-0">
                                            <a href="" target="_blank">
                                                <img src={productItem} alt="img-banner"></img>
                                            </a>
                                        </div>
                                        <div>
                                            <p>
                                                <a href="" target="_blank">
                                                    Build the life you want
                                                </a>
                                            </p>
                                            <p>Arthur c. brooks oprah winfrey</p>
                                        </div>
                                    </td>
                                    <td data-th="Price">
                                        <div className="table-price">
                                            <p className="table-price__new">
                                                270$
                                            </p >
                                            <p className="table-price__old">
                                                300$
                                            </p>
                                            <p className="table-price__discount">-10%</p>
                                        </div>
                                    </td>
                                    <td data-th="Quantity">
                                        <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus"
                                                type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="0" max="100"
                                                value="1"></input>
                                            <button className="qty-count qty-count--add" data-action="add"
                                                type="button">+</button>
                                        </div>
                                    </td>
                                    <td data-th="Order Value">
                                        <p className="table-sumprice">
                                            270$
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="btn-delete">
                                        <i className="bdx-close"></i>
                                    </td>
                                    <td data-th="Product">
                                        <div className="product-img shrink-0">
                                            <a href="" target="_blank">
                                                <img src={productItem} alt="img-banner"></img>
                                            </a>
                                        </div>
                                        <div>
                                            <p>
                                                <a href="" target="_blank">
                                                    Build the life you want
                                                </a>
                                            </p>
                                            <p>Arthur c. brooks oprah winfrey</p>
                                        </div>
                                    </td>
                                    <td data-th="Price">
                                        <div className="table-price">
                                            <p className="table-price__new">
                                                270$
                                            </p >
                                            <p className="table-price__old">
                                                300$
                                            </p>
                                            <p className="table-price__discount">-10%</p>
                                        </div>
                                    </td>
                                    <td data-th="Quantity">
                                        <div className="qty-input">
                                            <button className="qty-count qty-count--minus" data-action="minus"
                                                type="button">-</button>
                                            <input className="product-qty" type="number" name="product-qty" min="0" max="100"
                                                value="1"></input>
                                            <button className="qty-count qty-count--add" data-action="add"
                                                type="button">+</button>
                                        </div>
                                    </td>
                                    <td data-th="Order Value">
                                        <p className="table-sumprice">
                                            270$
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="md:w-full w-[25%] ms-auto">
                        <div className="cart-info__bottom">
                            <p className="cart-info__bottom__noting">
                                *Shipping fee included
                            </p>
                            <p className="cart-info__bottom__sum">
                                <span className="text-uppercase">Total order value</span>
                                <span>270$</span>
                            </p>
                            <div className="cart-info__bottom__btn d-flex justify-content-between align-items-center">
                                <a href="javascript:history.back()">
                                    Return
                                </a>
                                <Link to="/order/info">
                                    Accept
                                    <i className="bdx-cart"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartIndex;