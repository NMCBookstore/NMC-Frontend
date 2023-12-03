import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../interface/Product";
import { Wishlist } from "../../interface/Wishlist";
import {
  useAddToWishlistMutation,
  useDeleteWishlistMutation,
} from "../../services/wishlist/wishlistAPI";
import "./style.scss";
import { useAddToCartMutation } from "../../services/cart/cartAPI";
import toast from "react-hot-toast";

interface ProductItemProps {
  itemDetail: Product;
  wishlistItem: Wishlist[];
}
const ProductItem: React.FunctionComponent<ProductItemProps> = (props) => {
  const [addToCart] = useAddToCartMutation();

  const [addWishList, { isSuccess: addWishListSuccess, isError }] =
    useAddToWishlistMutation();
  const [deleteWishList, { isSuccess }] = useDeleteWishlistMutation();

  const navigate = useNavigate();

  const findWishlistIds = (): number[] => {
    const foundWishlistItems = props.wishlistItem.filter(
      (item) => item?.book.id === props.itemDetail?.id
    );

    return foundWishlistItems.map(
      (wishlistItem) => wishlistItem?.wishlist_id || 0
    );
  };

  const wishlistId = findWishlistIds();

  const handleClick = () => {
    // console.log(`navigate to ${props.itemDetail?.id}`);
    navigate(`/product/${props.itemDetail?.id}`);
  };

  const handleAddToCart = () => {
    addToCart({ book_id: props.itemDetail.id, amount: 1 });
  };

  const handleAddToWishList = () => {
    addWishList(props.itemDetail.id);
  };

  const handleDeleteWishListItem = () => {
    deleteWishList(wishlistId);
  };

  useEffect(() => {
    if (addWishListSuccess) {
        toast.success("Added to your wish list");
    } else if (isError) {
        toast.error("Can't add to your wish list");
    }
}, [addWishListSuccess, isError]);

  return (
    <div className="product_hover">
      <div className="bg-white product-item">
        <div className="flex flex-col items-center">
          <div onClick={handleClick} className="product-item__img">
            <img
              src={props.itemDetail.image[0]}
              alt={props.itemDetail.image[0]}
            />
          </div>
          <h3 onClick={handleClick} className="product-item__title webkitbox-2">
            {props.itemDetail.name}
          </h3>
          <p className="product-item__des webkitbox-2">
            {props.itemDetail.description}
          </p>
        </div>
        <div className="w-full">
          <div
            className="product-item__rate"
            data-rate={props.itemDetail.rating}
          >
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={
                  index < props.itemDetail.rating
                    ? "bdx-start-fill"
                    : "bdx-star"
                }
              ></i>
            ))}
          </div>
          <div className="product-item__control">
            {
              // props.itemDetail.salePrice > 0 &&
              <div>
                {/* <p className="product-item__control__old-price">${props.itemDetail?.salePrice}</p> */}
                <p className="product-item__control__price">
                  {props.itemDetail?.price}$
                </p>
              </div>
            }
            {/* {
                            props.itemDetail.salePrice === 0 &&
                            <div>
                                <p className="product-item__control__price">${props.itemDetail?.price}</p>
                            </div>
                        } */}
            <div className="product-item__control__item">
              <i onClick={handleAddToCart} className="bdx-cart"></i>
              {props.wishlistItem?.some(
                (item) => item?.book.id === props.itemDetail?.id
              ) ? (
                <i
                  onClick={handleDeleteWishListItem}
                  className="bdx-heart text-accent"
                ></i>
              ) : (
                <i onClick={handleAddToWishList} className="bdx-heart-1"></i>
              )}
            </div>
          </div>
          {/* {props.itemDetail?.salePrice > 0 && (<p className="product-item__discount"><span>-{(((props.itemDetail?.price - props.itemDetail?.salePrice)/props.itemDetail?.price)*100).toFixed(0)}%</span></p>)} */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
