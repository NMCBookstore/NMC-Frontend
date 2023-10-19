import React from "react";
import './style.scss'
import {productDetail} from "../../interface"

interface ProductItemProps {
    itemDetail: productDetail;
}
const ProductItem: React.FunctionComponent<ProductItemProps> = (ProductItemitem) => {
    return (
            <div className="product_hover">
                <div className="bg-white product-item">
                    <div className="product-item__img">
                        <img src={ProductItemitem.itemDetail.img} alt={ProductItemitem.itemDetail.img} />
                    </div>
                    <h3 className="product-item__title" >{ProductItemitem.itemDetail.name}</h3>
                    <p className="product-item__des">{ProductItemitem.itemDetail.des}</p>
                    <div className="product-item__rate" data-rate={ProductItemitem.itemDetail.rate}>
                        {[...Array(5)].map((_, index) => (
                            <i
                                key={index}
                                className={index < ProductItemitem.itemDetail.rate ? "bdx-heart" : "bdx-heart-1"}
                            ></i>
                        ))}
                    </div>
                    <div className="product-item__control">
                        <p>${ProductItemitem.itemDetail.price}</p>
                        <div>
                            <i className="bdx-cart"></i>
                            <i className="bdx-heart-1"></i>
                        </div>
                    </div>
                    {ProductItemitem.itemDetail.discount > 0 && (<p className="product-item__discount"><span>-{ProductItemitem.itemDetail.discount}%</span></p>)}
                </div>
            </div>
    );
};

export default ProductItem;