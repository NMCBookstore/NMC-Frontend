import React, { useEffect, useRef, useState } from "react";
import Fancybox from "../../component/Fancybox/Fancy";
import Carousel from "../../component/Fancybox/Carousel";

import { articleImg, avatarUser, productItem } from "../../assets/img";
import "./style.css"
import Marquee from "../../component/Marquee";
import BreadcrumbConponent from "../../component/Breadcrumb";
import { productBaner } from "../../assets/img";
import { Product } from '../../interface/Product';
import Slider from "react-slick";
import { productListSettings } from "../../common/CarouselSetting";
import ProductItem from "../../component/ProductItem";
import { useAddToWishlistMutation, useGetWishlistQuery } from "../../services/wishlist/wishlistAPI";
import { articleItem } from "../../interface";
import NotiHome from "../../component/NotiHome";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../services/product/productAPI";


const ProductDetail: React.FunctionComponent =() => {

    let [count, setCount] = useState(1);
    

    function incrementCount() {
        setCount(count + 1);
      }
      function decrementCount() {
        setCount(count > 1 ? count - 1 : 1);
      }

    const {id}= useParams()
    const {data} = useGetProductDetailsQuery(Number(id))
    const {data : wishList} = useGetWishlistQuery()

    const [addWishList] = useAddToWishlistMutation()

    const showFullContent = useRef(false);

    const elementRef = useRef<HTMLDivElement>(null);

    const handleAddToWishList = () => {
        addWishList(Number(id));
    };

    const handleClick = () => {
        showFullContent.current = !showFullContent.current;
        const element = elementRef.current;
        if (element) {
            const height = showFullContent.current ? element.offsetHeight : 0;
            const content = document.getElementById('showMain') as HTMLElement;
            const btnShow = document.getElementById('btnShow') as HTMLElement;
            content.style.setProperty('max-height', `${height}px`);
            btnShow.style.setProperty('opacity', `0`);

        }
    };

    const { data: wishlist = [] } = useGetWishlistQuery();
    const productList: Product[] = [{ id: 1, name: "Build the life you want", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 0, rating: 3, image: [productItem] },
    { id: 2, name: "Section with number 2", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] },
    { id: 3, name: "Section with number 3", description: "Arthur c. brooks oprah winfrey", price: 200.10, salePrice: 150, rating: 4, image: [productItem] },
    { id: 4, name: "Section with number 4", description: "Arthur c. brooks oprah winfrey", price: 100, salePrice: 0, rating: 5, image: [productItem] },
    { id: 5, name: "Section with number 5", description: "Arthur c. brooks oprah winfrey", price: 50.50, salePrice: 40.5, rating: 2, image: [productItem] },
    { id: 6, name: "Section with number 6", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] }];
    const articleList: articleItem[] = [{ name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "The 10 Most Challenged Books of 2022-2023", img: articleImg, des: "Parents and politicians are trying to pull books off shelves at a record-setting pace." },
    { name: "Hanoi Book Festival returns to capital city", img: articleImg, des: "The Hanoi Book Festival has returned for the bookworms in the pedestrian zone by Hoan Kiem (Sword) Lake in the capital city on October 6-8th" },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." }];
    return (
        <div className="product-detail bg-[#F9EEDE] mt-[76px]">
            <Marquee></Marquee>
            <div className="mx-auto px-3 container-nmc">
                <BreadcrumbConponent></BreadcrumbConponent>
            </div>
            <section className="mx-auto px-3 container-nmc pt-8 pb-[100px]">
                <div className="product-detail__item">
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
                                            data-lazy-src={data?.image[0].replace(/'/g, '')}
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
                                <h1>{data?.name}</h1>
                                <p className="product-detail__item__heading__author">By <span>{data?.author}</span></p>
                                <div className="product-detail__item__heading__rate">
                                    <div className="product-detail__item__heading__rate__start">
                                        <i className="bdx-start-fill"></i>
                                        <i className="bdx-start-fill"></i>
                                        <i className="bdx-start-fill"></i>
                                        <i className="bdx-start-fill"></i>
                                        <i className="bdx-start-fill"></i>
                                    </div>
                                    <span className="mx-3 text-gray">|</span>
                                    <p className="product-detail__item__heading__rate__note"><span>{data?.rating}</span> (<span>1080</span> reviews)</p>
                                </div>
                            </div>
                            <div className="product-detail__item__info">
                                <p className="product-detail__item__info__price">$ <span>{data?.price}</span></p>
                                <div className="product-detail__item__info__discount">
                                    <p className="product-detail__item__info__discount__oldprice">$ <span>10.99</span></p>
                                    <p className="product-detail__item__info__discount__percent">Save <span>10</span> %</p>
                                </div>
                                <div className="product-detail__item__info__quantity">
                                    <p className="product-detail__item__info__quantity__title">Amount:</p>
                                    <div className="qty-input">
                                        <button className="qty-count qty-count--minus" data-action="minus"
                                            onClick={decrementCount}
                                            type="button">-</button>
                                        <input className="product-qty" type="number" name="product-qty" min="0" max="100"
                                            value={count} onChange={incrementCount}></input>
                                        <button className="qty-count qty-count--add" data-action="add"
                                            onClick={incrementCount}
                                            type="button">+</button>
                                    </div>
                                </div>
                                <div className="product-detail__item__info__behavior">
                                    <button className="product-detail__item__info__behavior__addtocart"><i className="bdx-cart-fill"></i><span>Add to cart</span></button>
                                    {wishList?.some((item) => item.book.id === Number(id)) ? (
                                    <button disabled className="product-detail__item__info__behavior__addtowishlist"><i className="bdx-heart-1"></i>
                                    <span>Already in your wishlist</span></button>
                                    ) : (
                                    <button onClick={handleAddToWishList} className="product-detail__item__info__behavior__addtowishlist"><i className="bdx-heart-1"></i>
                                    <span>Add to wishlist</span></button>
                                    ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-detail__content">
                    <div className="row">
                        <div className="w-[75%]">
                            <div className="product-detail__content__overview relative">
                                <div className="product-detail__content__overview__main">
                                    <h2 className="product-detail__content__overview__main__heading">Overview</h2>
                                    <div className="product-detail__content__overview__main__des" id={`${showFullContent ? "showMain" : ""}`}>
                                        <div ref={elementRef}>
                                            <p>{data?.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id={`${showFullContent ? "btnShow" : ""}`}
                                >
                                    <button
                                        onClick={() => handleClick()}
                                    >
                                        <i className="bdx-arrow-2"></i> Read more
                                    </button>
                                </div>
                            </div>
                            <div className="product-detail__content__review">
                                <div className="product-detail__content__review__heading">
                                    <h2>Reviews</h2>
                                    <div>
                                        <div className="product-detail__content__review__heading__start">
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                        </div>
                                        <span className="mx-3 text-gray">|</span>
                                        <p className="product-detail__content__review__heading__note"><span>5.0 </span>(<span>1080</span> reviews)</p>
                                    </div>
                                </div>
                                <div className="product-detail__content__review__list">
                                    <div className="review__item">
                                        <div className="review__item__heading">
                                            <div className="review__item__heading__left">
                                                <div className="review__item__heading__left__user">
                                                    <img src={avatarUser} alt="avatarUser" />
                                                    <p className="review__item__heading__left__user__name">amyrobson</p>
                                                    <p className="review__item__heading__left__user__date">18/11/2023</p>
                                                </div>
                                                <div className="review__item__heading__left__info">
                                                    <div className="review__item__heading__left__info__sumary">
                                                        <p>Reviews: <span>1075</span></p>
                                                        <p>Votes: <span>347</span></p>
                                                    </div>
                                                    <div className="review__item__heading__left__info__datail">
                                                        <p>Rate:
                                                            <span>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                            </span>
                                                        </p>
                                                        <p>Vote in this review: <span>10</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review__item__heading__right">
                                                <div className="review__item__heading__right__help">
                                                    <p>Helpful?</p>
                                                    <div className="review__item__heading__right__help__behavior">
                                                        <button><i className="bdx-arrow-2"></i>yes</button>
                                                        <button><i className="bdx-arrow-2"></i>no</button>
                                                    </div>
                                                </div>
                                                <div className="review__item__heading__right__spam">
                                                    <p>Spam?</p>
                                                    <button><span><i className="bdx-close"></i>Report</span></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
                                            </p>
                                            <p>
                                                Dimpna Wilde left her home in Dingle long ago, but when her father is found dead on the beach, she finally heads home, leaving Dublin behind. With her family at the top of the suspect list, Dimpna has to clear her family’s name before she can truly focus on running the family’s race horse farm. Even if the truth hits too close to home.
                                            </p>
                                            <p>
                                                I love O’Connor’s Irish Village series and was thrilled to see a new Novel from her. While I was expecting another cozy mystery, this one is far from it, with a darker and deeper focus…and it couldn’t be better! O’Connor brings the town of Dingle to life with her words. You’re not just reading a story, you find yourself coming to life inside of the story as it unfolds. If you have not yet read one of O’Connors books, you’re in for a treat!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="review__item">
                                        <div className="review__item__heading">
                                            <div className="review__item__heading__left">
                                                <div className="review__item__heading__left__user">
                                                    <img src={avatarUser} alt="avatarUser" />
                                                    <p className="review__item__heading__left__user__name">amyrobson</p>
                                                    <p className="review__item__heading__left__user__date">18/11/2023</p>
                                                </div>
                                                <div className="review__item__heading__left__info">
                                                    <div className="review__item__heading__left__info__sumary">
                                                        <p>Reviews: <span>1075</span></p>
                                                        <p>Votes: <span>347</span></p>
                                                    </div>
                                                    <div className="review__item__heading__left__info__datail">
                                                        <p>Rate:
                                                            <span>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                            </span>
                                                        </p>
                                                        <p>Vote in this review: <span>10</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review__item__heading__right">
                                                <div className="review__item__heading__right__help">
                                                    <p>Helpful?</p>
                                                    <div className="review__item__heading__right__help__behavior">
                                                        <button><i className="bdx-arrow-2"></i>yes</button>
                                                        <button><i className="bdx-arrow-2"></i>no</button>
                                                    </div>
                                                </div>
                                                <div className="review__item__heading__right__spam">
                                                    <p>Spam?</p>
                                                    <button><span><i className="bdx-close"></i>Report</span></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
                                            </p>
                                            <p>
                                                Dimpna Wilde left her home in Dingle long ago, but when her father is found dead on the beach, she finally heads home, leaving Dublin behind. With her family at the top of the suspect list, Dimpna has to clear her family’s name before she can truly focus on running the family’s race horse farm. Even if the truth hits too close to home.
                                            </p>
                                            <p>
                                                I love O’Connor’s Irish Village series and was thrilled to see a new Novel from her. While I was expecting another cozy mystery, this one is far from it, with a darker and deeper focus…and it couldn’t be better! O’Connor brings the town of Dingle to life with her words. You’re not just reading a story, you find yourself coming to life inside of the story as it unfolds. If you have not yet read one of O’Connors books, you’re in for a treat!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="review__item">
                                        <div className="review__item__heading">
                                            <div className="review__item__heading__left">
                                                <div className="review__item__heading__left__user">
                                                    <img src={avatarUser} alt="avatarUser" />
                                                    <p className="review__item__heading__left__user__name">amyrobson</p>
                                                    <p className="review__item__heading__left__user__date">18/11/2023</p>
                                                </div>
                                                <div className="review__item__heading__left__info">
                                                    <div className="review__item__heading__left__info__sumary">
                                                        <p>Reviews: <span>1075</span></p>
                                                        <p>Votes: <span>347</span></p>
                                                    </div>
                                                    <div className="review__item__heading__left__info__datail">
                                                        <p>Rate:
                                                            <span>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                                <i className="bdx-start-fill"></i>
                                                            </span>
                                                        </p>
                                                        <p>Vote in this review: <span>10</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review__item__heading__right">
                                                <div className="review__item__heading__right__help">
                                                    <p>Helpful?</p>
                                                    <div className="review__item__heading__right__help__behavior">
                                                        <button><i className="bdx-arrow-2"></i>yes</button>
                                                        <button><i className="bdx-arrow-2"></i>no</button>
                                                    </div>
                                                </div>
                                                <div className="review__item__heading__right__spam">
                                                    <p>Spam?</p>
                                                    <button><span><i className="bdx-close"></i>Report</span></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>
                                                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.
                                            </p>
                                            <p>
                                                Dimpna Wilde left her home in Dingle long ago, but when her father is found dead on the beach, she finally heads home, leaving Dublin behind. With her family at the top of the suspect list, Dimpna has to clear her family’s name before she can truly focus on running the family’s race horse farm. Even if the truth hits too close to home.
                                            </p>
                                            <p>
                                                I love O’Connor’s Irish Village series and was thrilled to see a new Novel from her. While I was expecting another cozy mystery, this one is far from it, with a darker and deeper focus…and it couldn’t be better! O’Connor brings the town of Dingle to life with her words. You’re not just reading a story, you find yourself coming to life inside of the story as it unfolds. If you have not yet read one of O’Connors books, you’re in for a treat!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[25%]">
                            <img src={productBaner} alt="productBaner" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-detail__recommend">
                <div className="container-nmc px-3 mx-auto">
                    <h2 className="product-detail__recommend__heading">
                        You may also like
                    </h2>
                    <div className="product-detail__recommend__list">
                        <Slider {...productListSettings}>
                            {productList.map((item) => (
                                <ProductItem key={item?.id} itemDetail={item} wishlistItem={wishlist}></ProductItem>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <div className="bg-[#FFE8AD] blog">
                <div className="mx-auto px-3 container-nmc py-[60px] sm:py-[40px]">
                    <i className="bdx-book text-primary text-[32px] flex justify-center"></i>
                    <h2 className="text-primary text-center mb-10 sm:mb-4">Our Blog</h2>
                    <div className="blog_list row mb-8 sm:mb-6 gap-y-6">
                        {articleList.slice(0, 6).map((item, index) => (
                            <div
                                key={index}
                                className="blog_list_item md:w-[100%] w-[50%]"
                            >
                                <div className="blog_list_item_img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="blog_list_item_content">
                                    <h3 className="text-[#262626]">{item.name}</h3>
                                    <p>{item.des}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="px-6 py-3 sm:px-4 sm:py-2 uppercase rounded-xl border border-primary border-solid sm:text-[12px]">View All</button>
                    </div>
                </div>
            </div>
            <NotiHome></NotiHome>
        </div>
    );
};

export default ProductDetail;