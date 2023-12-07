import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from "../../component/Breadcrumb";
import { productItem } from "../../assets/img";
import Marquee from '../../component/Marquee';

const WishListComponent : React.FunctionComponent = () => {
    const pathAfterDomain = window.location.pathname;

    return (
        <div className="mt-[76px] bg-[#FBF4EA]">
            <Marquee></Marquee>
            <div className="container-nmc mx-auto pb-8">
                <Breadcrumb></Breadcrumb>
                <h1 className='text-orange-orange-6 px-3 flex items-center justify-center mb-3 py-4'><i className="bdx-cart-fill cursor-pointer inline-flex items-center"></i> <span>My WishList</span></h1>
                <div className="cart-info__block">
                    <div className="cart-info__table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Show Now</th>
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
                                    <td data-th="Show Now">
                                        <p className="table-sumprice">
                                            <i className="bdx-cart-fill cursor-pointer text-[32px] text-primary flex items-center justify-center"></i>
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
                                    <td data-th="Show Now">
                                        <p className="table-sumprice">
                                            <i className="bdx-cart-fill cursor-pointer text-[32px] text-primary flex items-center justify-center"></i>
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
                                    <td data-th="Show Now">
                                        <p className="table-sumprice">
                                            <i className="bdx-cart-fill cursor-pointer text-[32px] text-primary flex items-center justify-center"></i>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListComponent;