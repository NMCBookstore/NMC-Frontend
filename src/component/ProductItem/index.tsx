import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../interface/Product";
import "./style.scss";
import { currencyExchange } from "../../utils/helper";

interface ProductItemProps {
  itemDetail: Product;
}
const ProductItem: React.FunctionComponent<ProductItemProps> = (
  ProductItem
) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`navigate to ${ProductItem.itemDetail?.id}`);
    // navigate(`/product/${productItem?.id}`);
  };

  const handleAddToCart = () => {
    console.log("Add to cart clicked");
  };

  const handleAddToWishList = () => {
    console.log("Add to wish list clicked");
  };
  return (
    <div onClick={handleClick} className="product_hover">
      <div className="bg-white product-item">
        <div className="flex flex-col items-center">
          <div className="product-item__img">
            <img
              src={ProductItem.itemDetail.image[0]}
              alt={ProductItem.itemDetail.image[0]}
            />
          </div>
          <h3 className="product-item__title webkitbox-2">
            {ProductItem.itemDetail.name}
          </h3>
          <p className="product-item__des webkitbox-2">
            {ProductItem.itemDetail.description}
          </p>
        </div>
        <div className="w-full">
          <div
            className="product-item__rate"
            data-rate={ProductItem.itemDetail.rating}
          >
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={
                  index < ProductItem.itemDetail.rating
                    ? "bdx-start-fill"
                    : "bdx-star"
                }
              ></i>
            ))}
          </div>
          <div className="product-item__control">
            {
              // ProductItem.itemDetail.salePrice > 0 &&
              <div>
                {/* <p className="product-item__control__old-price">${ProductItem.itemDetail?.salePrice}</p> */}
                <p className="product-item__control__price">
                  {currencyExchange(String(ProductItem.itemDetail?.price))}
                </p>
              </div>
            }
            {/* {
                            ProductItem.itemDetail.salePrice === 0 &&
                            <div>
                                <p className="product-item__control__price">${ProductItem.itemDetail?.price}</p>
                            </div>
                        } */}
            <div className="product-item__control__item">
              <i onClick={handleAddToCart} className="bdx-cart"></i>
              <i onClick={handleAddToWishList} className="bdx-heart-1"></i>
            </div>
          </div>
          {/* {ProductItem.itemDetail?.salePrice > 0 && (<p className="product-item__discount"><span>-{(((ProductItem.itemDetail?.price - ProductItem.itemDetail?.salePrice)/ProductItem.itemDetail?.price)*100).toFixed(0)}%</span></p>)} */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
