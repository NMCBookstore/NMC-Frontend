import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../component/Breadcrumb";
import { productItem } from "../../assets/img";
import Marquee from "../../component/Marquee";
import {
  useDeleteWishlistMutation,
  useGetWishlistQuery,
} from "../../services/wishlist/wishlistAPI";

const WishListComponent: React.FunctionComponent = () => {
  const pathAfterDomain = window.location.pathname;

  const [amounts, setAmounts] = useState(1);

  const incrementCount = (wishlist_id: number) => {
    setAmounts(amounts +1)
  };

  function decrementCount(wishlist_id: number) {
    setAmounts(amounts > 1 ? amounts - 1 : 1);
    console.log(wishlist_id);
  }

  const { data } = useGetWishlistQuery();
  const [deleteWishlistItem] = useDeleteWishlistMutation();

  const hanldeDeleteWishlist = (wishlist_id: number[]) => {
    deleteWishlistItem(wishlist_id);
  };

  return (
    <div className="mt-[76px] bg-[#FBF4EA]">
      <Marquee></Marquee>
      <div className="container-nmc mx-auto pb-8">
        <Breadcrumb></Breadcrumb>
        <h1 className="text-orange-orange-6 px-3 flex items-center justify-center mb-3 py-4">
          <i className="bdx-cart-fill cursor-pointer inline-flex items-center"></i>{" "}
          <span>My WishList</span>
        </h1>
        <div className="cart-info__block">
          <div className="cart-info__table">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Shop Now</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index}>
                    <td className="btn-delete">
                      <i
                        onClick={() =>
                          hanldeDeleteWishlist([item?.wishlist_id])
                        }
                        className="bdx-close"
                      ></i>
                    </td>
                    <td data-th="Product">
                      <div className="product-img shrink-0">
                        <a href={`/product/${item?.book.id}`} target="_blank">
                          <img src={item?.book.image[0]} alt="img-banner"></img>
                        </a>
                      </div>
                      <div>
                        <p>
                          <a href={`/product/${item?.book.id}`} target="_blank">
                            {item?.book.name}
                          </a>
                        </p>
                        <p>{item?.book.author}</p>
                      </div>
                    </td>
                    <td data-th="Price">
                      <div className="table-price">
                        <p className="table-price__new">{item?.book.price}$</p>
                        <p className="table-price__old">{item?.book.price}$</p>
                        <p className="table-price__discount">-10%</p>
                      </div>
                    </td>
                    <td data-th="Quantity">
                      <div className="qty-input">
                        <button
                          className="qty-count qty-count--minus"
                          data-action="minus"
                          type="button"
                          onClick={() => decrementCount(item?.wishlist_id)}
                        >
                          -
                        </button>
                        <input
                          className="product-qty"
                          type="number"
                          name="product-qty"
                          min="0"
                          max="100"
                          value={amounts}
                        ></input>
                        <button
                          className="qty-count qty-count--add"
                          data-action="add"
                          type="button"
                          onClick={() => incrementCount(item?.wishlist_id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td data-th="Show Now">
                      <p className="table-sumprice">
                        <i className="bdx-cart-fill cursor-pointer text-[32px] text-primary flex items-center justify-center"></i>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListComponent;
