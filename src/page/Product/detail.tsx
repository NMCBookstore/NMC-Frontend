import React from "react";
import Fancybox from "../../component/Fancybox/Fancy";
import Carousel from "../../component/Fancybox/Carousel";

import { productItem } from "../../assets/img";
import "./style.css"
import Marquee from "../../component/Marquee";
import BreadcrumbConponent from "../../component/Breadcrumb";

const ProductDetail: React.FunctionComponent = () => {
    return (
        <div className="product-detail bg-[#FBF4EA] mt-[76px]">
            <Marquee></Marquee>
            <div className="mx-auto px-3 container-nmc">
                <BreadcrumbConponent></BreadcrumbConponent>
                <section className="product-detail__item">
                    <div className="row gap-y-8 justify-center">
                        <div className="md:w-[100%] lg:w-[80%] w-[50%]">
                            <Fancybox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                                <Carousel options={{
                                    infinite: false,
                                    Dots: false,
                                    Navigation: false,
                                    Thumbs: {
                                        type: 'classic',
                                        Carousel: {
                                            slidesPerPage: 1,
                                            Navigation: false,
                                            center: true,
                                            fill: true,
                                            dragFree: true,
                                            axis: 'y',
                                            breakpoints: {
                                                '(max-width: 576px)': {
                                                    axis: 'x',
                                                },
                                            },
                                        },
                                    },
                                }} >
                                    <div
                                        className="f-carousel__slide"
                                        data-thumb-src={productItem}
                                        data-fancybox="gallery"
                                        data-src={productItem}
                                    >
                                        <img
                                            alt=""
                                            data-lazy-src={productItem}
                                        />
                                    </div>
                                    <div
                                        className="f-carousel__slide"
                                        data-thumb-src={productItem}
                                        data-fancybox="gallery"
                                        data-src={productItem}
                                    >
                                        <img
                                            alt=""
                                            data-lazy-src={productItem}
                                        />
                                    </div>
                                    <div
                                        className="f-carousel__slide"
                                        data-thumb-src={productItem}
                                        data-fancybox="gallery"
                                        data-src={productItem}
                                    >
                                        <img
                                            alt=""
                                            data-lazy-src={productItem}
                                        />
                                    </div>
                                    <div
                                        className="f-carousel__slide"
                                        data-thumb-src={productItem}
                                        data-fancybox="gallery"
                                        data-src={productItem}
                                    >
                                        <img
                                            alt=""
                                            data-lazy-src={productItem}
                                        />
                                    </div>
                                    <div
                                        className="f-carousel__slide"
                                        data-thumb-src={productItem}
                                        data-fancybox="gallery"
                                        data-src={productItem}
                                    >
                                        <img
                                            alt=""
                                            data-lazy-src={productItem}
                                        />
                                    </div>
                                    <div
                                        className="f-carousel__slide"
                                        data-thumb-src={productItem}
                                        data-fancybox="gallery"
                                        data-src={productItem}
                                    >
                                        <img
                                            alt=""
                                            data-lazy-src={productItem}
                                        />
                                    </div>
                                </Carousel>
                            </Fancybox>
                        </div>
                        <div className="lg:w-[100%] w-[50%]">
                            <div className="product-detail__item__heading">
                                <h1>Harry Potter and the Chamber of Secrets (Harry Potter Series #2)</h1>
                                <p className="product-detail__item__heading__author">By <span>J. K. Rowling, Mary GrandPré (Illustrator)</span></p>
                                <div className="product-detail__item__heading__rate">
                                    <div className="product-detail__item__heading__rate__start">
                                        <i className="bdx-start-fill"></i>
                                        <i className="bdx-start-fill"></i>
                                        <i className="bdx-start-fill"></i>
                                        <i className="bdx-start-fill"></i>
                                        <i className="bdx-start-fill"></i>
                                    </div>
                                    <span className="mx-3 text-gray">|</span>
                                    <p className="product-detail__item__heading__rate__note"><span>5.0</span> (<span>1080</span> reviews)</p>
                                </div>
                            </div>
                            <div className="product-detail__item__info">
                                <p className="product-detail__item__info__price">$ <span>9.99</span></p>
                                <div className="product-detail__item__info__discount">
                                    <p className="product-detail__item__info__discount__oldprice">$ <span>10.99</span></p>
                                    <p className="product-detail__item__info__discount__percent">Save <span>10</span> %</p>
                                </div>
                                <div className="product-detail__item__info__quantity">
                                    <p className="product-detail__item__info__quantity__title">Amount:</p>
                                    <div className="qty-input">
                                        <button className="qty-count qty-count--minus" data-action="minus"
                                            type="button">-</button>
                                        <input className="product-qty" type="number" name="product-qty" min="0" max="100"
                                            value="1"></input>
                                        <button className="qty-count qty-count--add" data-action="add"
                                            type="button">+</button>
                                    </div>
                                </div>
                                <div className="product-detail__item__info__behavior">
                                    <button className="product-detail__item__info__behavior__addtocart"><i className="bdx-cart-fill"></i><span>Add to cart</span></button>
                                    <button className="product-detail__item__info__behavior__addtowishlist"><i className="bdx-heart-1"></i><span>Add to wishlist</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default ProductDetail;