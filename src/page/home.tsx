import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImg from "../assets/img/img_banner.png"

const HomePage: React.FunctionComponent = () => {
    const banner = ["img", "img", "igm"];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className="marquee-container">
                <div className="mx-auto">
                    <div className="marquee px-3">
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
                    <div className="banner bg-[#FBF4EA]">
                        <div className="mx-auto container-nmc">
                            <div className="w-[70%]">
                                <p>Welcome to the NMC Bookstore</p>
                                <h1>Your Gateway to a World of Knowledge and Imagination!</h1>
                                <Link to="product">SHOP NOW</Link>
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
