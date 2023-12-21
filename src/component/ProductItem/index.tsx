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
import { lazyLoading } from "../../assets/img";

interface ProductItemProps {
  itemDetail: Product;
  wishlistItem: Wishlist[];
}
const ProductItem: React.FunctionComponent<ProductItemProps> = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const [addToCart] = useAddToCartMutation();
  console.log(props)

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
    navigate(`/product/${props.itemDetail?.id}`);
  };

  const handleAddToCart = async () => {
    const v = await addToCart({ book_id: props.itemDetail.id, amount: 1 });
    if ("error" in v) {
      toast.error("Add to cart failed");
    } else {
      toast.success("Added to your cart");
    }
  };

  const handleAddToWishList = async () => {
    const v = await addWishList(props.itemDetail.id);
    if ("error" in v) {
      toast.error("Add to wish list failed");
    } else {
      toast.success("Added to your wish list");
    }
  };

  const handleDeleteWishListItem = () => {
    deleteWishList(wishlistId);
  };

  return (
    <div className="product_hover">
      <div className="bg-white product-item">
        <div className="flex flex-col items-center">
          <div onClick={handleClick} className="product-item__img">
            <img
              src={props.itemDetail.image[0]}
              alt={props.itemDetail.image[0]}
              style={{ display: imageLoaded ? "block" : "none" }}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && <img src={lazyLoading} />}
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
            {/* {props.itemDetail.sale !== 0 && (
              <div>
                <p className="product-item__control__old-price">
                  ${props.itemDetail?.sale}
                </p>
                <p className="product-item__control__price">
                  {props.itemDetail?.price}$
                </p>
              </div>
            )} */}
            {props.itemDetail.sale === 0 ? (
              <div>
                <p className="product-item__control__price">
                  ${props.itemDetail?.price}
                </p>
              </div>
            ) : (
              <div>
                <p className="product-item__control__old-price">
                  ${props.itemDetail?.price}
                </p>
                <p className="product-item__control__price">
                  {(
                    props.itemDetail?.price *
                    (1 - props?.itemDetail.sale/100)
                  ).toFixed(2)}
                </p>
              </div>
            )}
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
          {props.itemDetail?.sale !== 0 && (
            <p className="product-item__discount">
              <span>-{props?.itemDetail?.sale}%</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
