import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../interface/Product";
import { useAddToWishlistMutation } from "../../services/wishlist/wishlistAPI";
import { currencyExchange } from "../../utils/helper";
import "./style.scss";
import { Wishlist } from "../../interface/Wishlist";

interface ProductItemProps {
  itemDetail: Product;
  wishlistItem: Wishlist[];
}
const ProductItem: React.FunctionComponent<ProductItemProps> = (props) => {
  const [addWishList] = useAddToWishlistMutation();

  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`navigate to ${props.itemDetail?.id}`);
    // navigate(`/product/${props?.id}`);
  };

  const handleAddToCart = () => {
    console.log("Add to cart clicked");
  };

  const handleAddToWishList = () => {
    console.log("Add to wish list clicked");
    addWishList(props.itemDetail.id);
  };
  return (
    <div className="product_hover">
      <div className="bg-white product-item">
        <div className="flex flex-col items-center">
          <div className="product-item__img">
            <img
              src={props.itemDetail.image[0]}
              alt={props.itemDetail.image[0]}
            />
          </div>
          <h3 className="product-item__title webkitbox-2">
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
                  {currencyExchange(props.itemDetail?.price)}
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
                <i className="bdx-cart"></i>
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
