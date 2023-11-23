import React from "react";
import Slider from "react-slick";
import { bannerSettings, productListSettings } from "../../common/CarouselSetting";
import { Link } from "react-router-dom";
import { articleImg, bannerImg, logo, logoclcspkt, logospkt, productItem } from "../../assets/img";
import { articleItem } from "../../interface";
import NotiHome from "../../component/NotiHome";
import ProductItem from "../../component/ProductItem";
import { Product } from "../../interface/Product";
import { useGetWishlistQuery } from "../../services/wishlist/wishlistAPI";
const ArticleList: React.FunctionComponent = () => {
    const banner = [bannerImg, logospkt, logoclcspkt, logo];
    const articleList: articleItem[] = [{ name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "The 10 Most Challenged Books of 2022-2023", img: articleImg, des: "Parents and politicians are trying to pull books off shelves at a record-setting pace." },
    { name: "Hanoi Book Festival returns to capital city", img: articleImg, des: "The Hanoi Book Festival has returned for the bookworms in the pedestrian zone by Hoan Kiem (Sword) Lake in the capital city on October 6-8th" },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "The 10 Most Challenged Books of 2022-2023", img: articleImg, des: "Parents and politicians are trying to pull books off shelves at a record-setting pace." },
    { name: "Hanoi Book Festival returns to capital city", img: articleImg, des: "The Hanoi Book Festival has returned for the bookworms in the pedestrian zone by Hoan Kiem (Sword) Lake in the capital city on October 6-8th" },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." }];
    const { data: wishlist = [] } = useGetWishlistQuery();
    const productList: Product[] = [{ id: 1, name: "Build the life you want", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 0, rating: 3, image: [productItem] },
    { id: 2, name: "Section with number 2", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] },
    { id: 3, name: "Section with number 3", description: "Arthur c. brooks oprah winfrey", price: 200.10, salePrice: 150, rating: 4, image: [productItem] },
    { id: 4, name: "Section with number 4", description: "Arthur c. brooks oprah winfrey", price: 100, salePrice: 0, rating: 5, image: [productItem] },
    { id: 5, name: "Section with number 5", description: "Arthur c. brooks oprah winfrey", price: 50.50, salePrice: 40.5, rating: 2, image: [productItem] },
    { id: 6, name: "Section with number 6", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] }];

    const articleList2: articleItem[] = [{ name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "The 10 Most Challenged Books of 2022-2023", img: articleImg, des: "Parents and politicians are trying to pull books off shelves at a record-setting pace." },
    { name: "Hanoi Book Festival returns to capital city", img: articleImg, des: "The Hanoi Book Festival has returned for the bookworms in the pedestrian zone by Hoan Kiem (Sword) Lake in the capital city on October 6-8th" },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." }];
    return (
        <div className="article mt-[76px]">
            <div className="banner-carousel">
                <Slider {...bannerSettings}>
                    {banner.map((item, index) => (
                        <div key={index} className="banner bg-[#FBF4EA] pt-[84px] pb-[100px] md:pt-[40px] md:pb-[60px]">
                            <div className="mx-auto container-nmc px-3 md:gap-[60px] sm:items-between sm:h-full sm:gap-[16px]">
                                <div className="w-[60%] lg:w-[70%] md:w-[100%] flex flex-col justify-center md:items-center">
                                    <p className="mb-2 text-[20px] sm:text-[16px] font-semibold sm:font-normal capitalize text-[#262626] md:text-center" >Welcome to the NMC Bookstore</p>
                                    <h1 className="mb-6 capitalize text-[#262626] md:text-center" >Your Gateway to a World of Knowledge and Imagination!</h1>
                                    <Link to="product" className="flex py-3 px-6 items-center bg-orange-orange-6 w-fit rounded-full"> <i className="bdx-cart-fill inline-flex mr-2 items-center"></i> SHOP NOW</Link>
                                </div>
                                <div className="w-[40%] lg:w-[30%] md:w-[100%] flex items-center banner-img">
                                    <img src={item} alt="banner" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="mx-auto px-3 container-nmc">
                <div className="article__heading">
                    <h2>
                        List of latest reviews
                    </h2>
                    <p>Many different themes and experiences</p>
                </div>
                <div className="row article__list">
                    {articleList.map((item) => (
                        <div className="w-[25%] lg:w-[33.3%] md:w-[50%] article__list__item">
                            <div className="article__list__item__img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.des}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#FFE8AD] blog">
                <div className="mx-auto px-3 container-nmc py-[60px] sm:py-[40px]">
                    <i className="bdx-book text-primary text-[32px] flex justify-center"></i>
                    <h2 className="text-primary text-center mb-10 sm:mb-4">Our Blog</h2>
                    <div className="blog_list row mb-8 sm:mb-6 gap-y-6">
                        {articleList2.slice(0, 6).map((item, index) => (
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
        </div>
    );
};

export default ArticleList;