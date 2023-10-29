import React from "react";
import './style.scss'
import { productDetail } from "../../interface"

interface ProductItemProps {
    itemDetail: productDetail;
}
const ProductItem: React.FunctionComponent<ProductItemProps> = (ProductItemitem) => {
    console.log(ProductItemitem);
    return (
        <div className="product_hover">
            <div className="bg-white product-item">
                <div className="flex flex-col items-center">
                    <div className="product-item__img">
                        <img src={ProductItemitem.itemDetail.img} alt={ProductItemitem.itemDetail.img} />
                    </div>
                    <h3 className="product-item__title webkitbox-2" >{ProductItemitem.itemDetail.name}</h3>
                    <p className="product-item__des webkitbox-2">{ProductItemitem.itemDetail.des}</p>
                </div>
                <div className="w-full">
                    <div className="product-item__rate" data-rate={ProductItemitem.itemDetail.rate}>
                        {[...Array(5)].map((_, index) => (
                            <i
                                key={index}
                                className={index < ProductItemitem.itemDetail.rate ? "bdx-start-fill" : "bdx-star"}
                            ></i>
                        ))}
                    </div>
                    <div className="product-item__control">
                        {
                            ProductItemitem.itemDetail.salePrice > 0 &&
                            <div>
                                <p className="product-item__control__old-price">${ProductItemitem.itemDetail.salePrice}</p>
                                <p className="product-item__control__price">${ProductItemitem.itemDetail.price}</p>
                            </div>
                        }
                        {
                            ProductItemitem.itemDetail.salePrice === 0 &&
                            <div>
                                <p className="product-item__control__price">${ProductItemitem.itemDetail.price}</p>
                            </div>
                        }
                        <div className="product-item__control__item">
                            <i className="bdx-cart"></i>
                            <i className="bdx-heart-1"></i>
                        </div>
                    </div>
                    {ProductItemitem.itemDetail.salePrice > 0 && (<p className="product-item__discount"><span>-{(((ProductItemitem.itemDetail.price - ProductItemitem.itemDetail.salePrice)/ProductItemitem.itemDetail.price)*100).toFixed(0)}%</span></p>)}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;