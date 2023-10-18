import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { bannerImg } from "../assets/img"
import { cate1, cate2, cate3, cate4, cate5, cate6 } from "../assets/img"

const HomePage: React.FunctionComponent = () => {
    const banner = ["img", "img", "igm"];
    const cate = [{ name: "Shop all", img: cate1 }, { name: "Fiction", img: cate2 }, { name: "Non-Fiction", img: cate3 }, { name: "Children's", img: cate4 }, { name: "Stationery & Gifts", img: cate5 }, { name: "Gift cards & Vouchers", img: cate1 }];
    const bannerSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    const cateSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        rows: 2,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 425,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
        ]
    };
    return (
        <div>
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
                        <div className="banner bg-[#FBF4EA] pt-[84px] pb-[100px]">
                            <div className="mx-auto container-nmc px-3">
                                <div className="w-[60%] lg:w-[70%] sm:w-[100%] flex flex-col justify-center">
                                    <p className="mb-2 text-[20px] font-semibold" >Welcome to the NMC Bookstore</p>
                                    <h1 className="lg:text-[36px] text-[56px] leading-normal font-bold mb-6" >Your Gateway to a World of Knowledge and Imagination!</h1>
                                    <Link to="product" className="flex py-3 px-6 items-center bg-orange-orange-6 w-fit rounded-full"> <i className="bdx-cart-fill inline-flex mr-2 items-center"></i> SHOP NOW</Link>
                                </div>
                                <div className="w-[30%] sm:w-[100%] flex items-center">
                                    <img src={bannerImg} alt="banner" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="bg-primary py-[60px]">
                <div className="mx-auto px-3 container-nmc">
                    <h2 className=" mb-8 text-center font-bold text-orange-orange-6 text-center text-[32px]">Our Popular Categories</h2>
                    <div className="cate-carousel">
                        <Slider {...cateSettings}>
                            {cate.map((item, index) => (
                                <div className="overflow-hidden">
                                    <p className="mb-2 text-[20px] font-semibold" >{item.name}</p>
                                    <div className="relative">
                                        <svg className="absolute top-[-40px] left-[-40px] z-0" width="280" height="243" viewBox="0 0 280 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M169.554 1.14663C204.611 2.11203 246.112 -4.73555 268.539 22.2427C290.475 48.6302 275.214 87.4579 269.431 121.29C264.982 147.315 258.351 172.803 239.623 191.403C220.967 209.933 195.119 214.367 169.554 220.488C130.755 229.777 89.8417 255.668 55.4085 235.508C17.4768 213.299 -1.78808 165.224 0.130567 121.29C1.99214 78.6629 30.1766 41.3075 64.9669 16.6367C94.8584 -4.56027 132.931 0.138099 169.554 1.14663Z" fill={`${index % 2 != 0 ? '#63A19A' : '#E79797'}`}/>
                                        </svg>
                                        <img className="relative z-[1]" src={item.img} alt={item.name} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
