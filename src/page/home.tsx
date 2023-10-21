import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImg from "../assets/img/img_banner.png"
import { useGetTopNewProductQuery } from '../services/product/productAPI';
import { useGetGenresQuery } from '../services/genres/genresAPI';

const HomePage: React.FunctionComponent = () => {
    const { data } = useGetGenresQuery()
    console.log(data);
    const banner = ["img", "img", "igm"];
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
            <Slider {...settings}>
                {banner.map((item, index) => (
                    <div className="banner bg-[#FBF4EA] pt-[84px] pb-[100px]">
                        <div className="mx-auto container-nmc px-3">
                            <div className="w-[60%] lg:w-[70%] flex flex-col justify-center">
                                <p className="mb-2 text-[20px] font-semibold" >Welcome to the NMC Bookstore</p>
                                <h1 className="lg:text-[36px] text-[56px] leading-normal font-bold mb-6" >Your Gateway to a World of Knowledge and Imagination!</h1>
                                <Link to="product" className="flex py-3 px-6 items-center bg-orange-orange-6 w-fit rounded-full"> <i className="bdx-cart-fill inline-flex mr-2 items-center"></i> SHOP NOW</Link>
                            </div>
                            <div className="w-[30%] flex items-center">
                                <img src={bannerImg} alt="banner" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomePage;
