import React from 'react';
import { Link } from 'react-router-dom';

import Slider from "react-slick";

import ProductItem from "../../component/ProductItem";
import { productDetail, categoryItem, articleItem } from "../../interface";
import { productListSettings, bannerSettings, cateSettings, productTabsListSettings, servicesCarousel } from "../../common/CarouselSetting";

import { logo, cate1, cate2, cate3, cate4, cate5, cate6, productItem, bannerImg, midleBanner, articleImg, logospkt,logoclcspkt } from "../../assets/img";

const HomePage: React.FunctionComponent = () => {
    const banner = [bannerImg, logospkt, logoclcspkt, logo];
    const midlebanner = [midleBanner, midleBanner, midleBanner];
    const cate: categoryItem[] = [{ name: "Shop all", img: cate1, color: 1 }, { name: "Fiction", img: cate2, color: 2 }, { name: "Non-Fiction", img: cate3, color: 2 }, { name: "Children's", img: cate4, color: 1 }, { name: "Stationery & Gifts", img: cate5, color: 1 }, { name: "Gift cards & Vouchers", img: cate6, color: 2 }];
    const productList: productDetail[] = [{ discount: 10, name: "Build the life you want", des: "Arthur c. brooks oprah winfrey", price: "300", rate: 3, img: productItem },
    { discount: 0, name: "Build the life you want 2", des: "Arthur c. brooks oprah winfrey", price: "300.00", rate: 4, img: productItem },
    { discount: 0, name: "Build the life you want 3", des: "Arthur c. brooks oprah winfrey", price: "200.10", rate: 4, img: productItem },
    { discount: 10, name: "Build the life you want 4", des: "Arthur c. brooks oprah winfrey", price: "100", rate: 5, img: productItem },
    { discount: 10, name: "Build the life you want 5", des: "Arthur c. brooks oprah winfrey", price: "50.50", rate: 2, img: productItem },
    { discount: 10, name: "Build the life you want 6", des: "Arthur c. brooks oprah winfrey", price: "300", rate: 4, img: productItem }];


    //section productList
    const productList1: productDetail[] = [{ discount: 10, name: "Build the life you want", des: "Arthur c. brooks oprah winfrey", price: "300", rate: 3, img: productItem },
    { discount: 10, name: "Build the life you want 12", des: "Arthur c. brooks oprah winfrey", price: "300.00", rate: 4, img: productItem },
    { discount: 0, name: "Build the life you want 13", des: "Arthur c. brooks oprah winfrey", price: "200.10", rate: 4, img: productItem },
    { discount: 0, name: "Build the life you want 14", des: "Arthur c. brooks oprah winfrey", price: "100", rate: 5, img: productItem },
    { discount: 0, name: "Build the life you want 15", des: "Arthur c. brooks oprah winfrey", price: "50.50", rate: 2, img: productItem },
    { discount: 0, name: "Build the life you want 16", des: "Arthur c. brooks oprah winfrey", price: "300", rate: 4, img: productItem },
    { discount: 10, name: "Build the life you want 12", des: "Arthur c. brooks oprah winfrey", price: "300.00", rate: 4, img: productItem },
    { discount: 10, name: "Build the life you want 13", des: "Arthur c. brooks oprah winfrey", price: "200.10", rate: 4, img: productItem },
    { discount: 0, name: "Build the life you want 14", des: "Arthur c. brooks oprah winfrey", price: "100", rate: 5, img: productItem },
    { discount: 0, name: "Build the life you want 16", des: "Arthur c. brooks oprah winfrey", price: "300", rate: 4, img: productItem },
    { discount: 10, name: "Build the life you want 15", des: "Arthur c. brooks oprah winfrey", price: "50.50", rate: 2, img: productItem },
    { discount: 10, name: "Build the life you want 16Build the life you want 16", des: "Arthur c. brooks oprah winfrey", price: "300", rate: 4, img: productItem }];
    //article
    const articleList: articleItem[] = [{ name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "The 10 Most Challenged Books of 2022-2023", img: articleImg, des: "Parents and politicians are trying to pull books off shelves at a record-setting pace." },
    { name: "Hanoi Book Festival returns to capital city", img: articleImg, des: "The Hanoi Book Festival has returned for the bookworms in the pedestrian zone by Hoan Kiem (Sword) Lake in the capital city on October 6-8th" },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." }];
    
    return (
        <div className='bg-[#FBF4EA]'>
            <div className="marquee-container">
                <div className="flex">
                    <div className="marquee px-3 mx-auto">
                        <p>Shop all <span>◆</span> </p>
                        <p>New arrivals <span>◆</span> </p>
                        <p>Bestsellers <i className="bdx-like ml-2 text-accent inline-flex items-center"></i><span>◆</span> </p>
                        <p>Fiction <span>◆</span> </p>
                        <p>Non-Fiction<span>◆</span> </p>
                        <p>Children’s <span>◆</span> </p>
                        <p>Stationery and gifts <span>◆</span> </p>
                        <p>Gift cards and vouchers</p>
                    </div>
                </div>
            </div>
            <div className="banner-carousel">
                <Slider {...bannerSettings}>
                    {banner.map((item, index) => (
                        <div key={index} className="banner bg-[#FBF4EA] pt-[84px] pb-[100px]">
                            <div className="mx-auto container-nmc px-3 sm:items-between sm:h-full sm:gap-[24px]">
                                <div className="w-[60%] lg:w-[70%] sm:w-[100%] flex flex-col justify-center">
                                    <p className="mb-2 text-[20px] font-semibold capitalize text-[#262626]" >Welcome to the NMC Bookstore</p>
                                    <h1 className="lg:text-[36px] text-[56px] leading-normal font-bold mb-6 capitalize text-[#262626]" >Your Gateway to a World of Knowledge and Imagination!</h1>
                                    <Link to="product" className="flex py-3 px-6 items-center bg-orange-orange-6 w-fit rounded-full"> <i className="bdx-cart-fill inline-flex mr-2 items-center"></i> SHOP NOW</Link>
                                </div>
                                <div className="w-[40%] lg:w-[60%] sm:w-[100%] flex items-center banner-img">
                                    <img src={item} alt="banner" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="bg-primary py-[60px]">
                <div className="mx-auto px-3 container-nmc">
                    <h2 className=" mb-8 text-center font-bold text-orange-orange-6 text-center text-[32px] capitalize">Our Popular Categories</h2>
                    <div className="cate-carousel">
                        <Slider {...cateSettings}>
                            {cate.map((item, index) => (
                                <div key={index} className="overflow-hidden">
                                    <p className="mb-2 text-[20px] font-semibold text-[#262626]" >{item.name}</p>
                                    <div className="relative">
                                        <svg className="absolute top-[-40px] left-[-40px] z-0" width="280" height="243" viewBox="0 0 280 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M169.554 1.14663C204.611 2.11203 246.112 -4.73555 268.539 22.2427C290.475 48.6302 275.214 87.4579 269.431 121.29C264.982 147.315 258.351 172.803 239.623 191.403C220.967 209.933 195.119 214.367 169.554 220.488C130.755 229.777 89.8417 255.668 55.4085 235.508C17.4768 213.299 -1.78808 165.224 0.130567 121.29C1.99214 78.6629 30.1766 41.3075 64.9669 16.6367C94.8584 -4.56027 132.931 0.138099 169.554 1.14663Z" fill={`${item.color === 1 ? '#63A19A' : '#E79797'}`} />
                                        </svg>
                                        <img className="relative z-[1]" src={item.img} alt={item.name} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="bg-primary">
                <div className="bg-[#FFE8AD] py-[60px] md:rounded-t-[60px] rounded-t-[120px]">
                    <div className="mx-auto px-3 container-nmc">
                        <h2 className=" mb-8 font-bold text-primary text-center text-[32px] capitalize">New arrivals</h2>
                        <div className="productList-carousel py-3">
                            <Slider {...productListSettings}>
                                {productList.map((item, index) => (
                                    <ProductItem key={index} itemDetail={item}></ProductItem>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FFE8AD] md:pt-[20px] pt-[60px] pb-[180px] md:pb-[120px] sm:rounded-b-[60px] rounded-b-[120px]">
                <div className="mx-auto px-3 container-nmc">
                    <div className="flex justify-between">
                        <h2 className="mb-8 font-bold text-primary text-[32px]">Bestsellers <i className="bdx-like ml-2 text-accent inline-flex items-center"></i> </h2>
                        <div className="lg:hidden">
                            <span className="cursor-pointer px-6 border-r border-[#BFBFBF] border-solid font-semibold text-primary relative before:absolute before:bottom-[-10%] before:left-[50%] before:h-0.5 before:translate-x-[-50%] before:w-[50%] before:bg-primary">All</span>
                            <span className="cursor-pointer px-6 border-r border-[#BFBFBF] border-solid text-[#595959] hover:text-primary">Fiction</span>
                            <span className="cursor-pointer px-6 border-r border-[#BFBFBF] border-solid text-[#595959] hover:text-primary">Non-Fiction</span>
                            <span className="cursor-pointer pl-6 text-[#595959] hover:text-primary">Children’s</span>
                        </div>
                    </div>
                    <div className="productList-tworows">
                        <Slider {...productTabsListSettings}>
                            {productList1.map((item, index) => (
                                <ProductItem key={index} itemDetail={item}></ProductItem>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="mindle-banner-carousel md:pb-[40px] pb-[120px] md:mt-6 mt-[-125px] mx-auto px-3 container-nmc">
                <Slider {...bannerSettings}>
                    {midlebanner.map((item, index) => (
                        <div key={index} className="aspect-[1296/250] w-full mindle-banner-carousel__block">
                            <img className="object-cover w-full h-full" src={item} alt="banner" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="mx-auto px-3 container-nmc productList-carousel md:mb-[40px] mb-[100px]">
                <div className="flex mb-6 justify-between" >
                    <h2 className="font-bold text-primary text-[32px]">Fiction</h2>
                    <p className="text-primary flex items-center"> <span>View all</span> <i className="bdx-arrow-2 ml-2 flex items-center"></i></p>
                </div>
                <Slider {...productListSettings}>
                    {productList.map((item, index) => (
                        <ProductItem key={index} itemDetail={item}></ProductItem>
                    ))}
                </Slider>
            </div>
            <div className="mx-auto px-3 container-nmc productList-carousel md:mb-[40px] mb-[100px]">
                <div className="flex mb-6 justify-between" >
                    <h2 className="font-bold text-primary text-[32px]">Non-Fiction</h2>
                    <p className="text-primary flex items-center"> <span>View all</span> <i className="bdx-arrow-2 ml-2 flex items-center"></i></p>
                </div>
                <Slider {...productListSettings}>
                    {productList.map((item, index) => (
                        <ProductItem key={index} itemDetail={item}></ProductItem>
                    ))}
                </Slider>
            </div>
            <div className="mx-auto px-3 container-nmc productList-carousel dots-bottom md:mb-[40px] mb-[60px]">
                <div className="flex mb-6 justify-between" >
                    <h2 className="font-bold text-primary text-[32px]">Children’s</h2>
                    <p className="text-primary flex items-center"> <span>View all</span> <i className="bdx-arrow-2 ml-2 flex items-center"></i></p>
                </div>
                <Slider {...productListSettings}>
                    {productList.map((item, index) => (
                        <ProductItem key={index} itemDetail={item}></ProductItem>
                    ))}
                </Slider>
            </div>
            <div className="bg-[#FFE8AD] blog">
                <div className="mx-auto px-3 container-nmc py-[60px]">
                    <i className="bdx-book text-primary text-[32px] flex justify-center"></i>
                    <h2 className="font-bold text-primary text-[32px] text-center mb-10">Our Blog</h2>
                    <div className="blog_list mb-8">
                        {articleList.slice(0, 4).map((item, index) => (
                            <div
                                key={index}
                                className="blog_list_item"
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
                        <button className="px-6 py-3 uppercase rounded-xl border border-primary border-solid">Read more</button>
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="mx-auto px-3 container-nmc">
                    <div className="mx-[-12px] py-10 servicesCarousel">
                        <Slider {...servicesCarousel}>
                            <div className="px-3 flex flex-col items-center">
                                <i className="text-[64px] text-primary bdx-truck-free"></i>
                                <p className="font-bold text-[20px] leading-[28px] mb-2 text-center">Free delivery</p>
                                <p className="text-[16px] leading-[24px] text-[#595959] text-center">For all orders over $100</p>
                            </div>
                            <div className="px-3 flex flex-col items-center">
                                <i className="text-[64px] text-primary bdx-truck-transporation"></i>
                                <p className="font-bold text-[20px] leading-[28px] mb-2 text-center">Fast delivery</p>
                                <p className="text-[16px] leading-[24px] text-[#595959] text-center">2 hours delivery is available</p>
                            </div>
                            <div className="px-3 flex flex-col items-center">
                                <i className="text-[64px] text-primary bdx-sale"></i>
                                <p className="font-bold text-[20px] leading-[28px] mb-2 text-center">Fast delivery</p>
                                <p className="text-[16px] leading-[24px] text-[#595959] text-center">2 hours delivery is available</p>
                            </div>
                            <div className="px-3 flex flex-col items-center">
                                <i className="text-[64px] text-primary bdx-price-sale"></i>
                                <p className="font-bold text-[20px] leading-[28px] mb-2 text-center">Fast delivery</p>
                                <p className="text-[16px] leading-[24px] text-[#595959] text-center">2 hours delivery is available</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="notiHome bg-primary py-5">
                <div className="mx-auto px-3 container-nmc flex flex-wrap">
                    <div className="w-1/3 sm:w-full flex justify-center sm:mb-4">
                        <div className="w-1/2 flex justify-center items-center">
                            <img className="max-h-[120px]" src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="w-2/3 sm:w-full flex items-center">
                        <p className="pl-6 sm:p-0 text-white text-[16px] leading-[24px] sm:text-center sm:border-0 border-l-2 border-[#FFCA41] border-solid">
                            At NMC, we're more than just a bookstore; we're a community of book enthusiasts, scholars, and lifelong learners. Our mission is to provide you with a diverse selection of books that cater to your interests, whether you're a seasoned bibliophile or a student embarking on an academic journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;
