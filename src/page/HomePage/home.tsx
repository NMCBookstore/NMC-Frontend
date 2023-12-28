import React, { useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import ProductItem from "../../component/ProductItem";
import { productDetail, categoryItem, articleItem } from "../../interface";
import { Product } from "../../interface/Product";
import {
  productListSettings,
  bannerSettings,
  cateSettings,
  productTabsListSettings,
  servicesCarousel,
} from "../../common/CarouselSetting";
import Marquee from "../../component/Marquee";

import {
  logo,
  cate1,
  cate2,
  cate3,
  cate4,
  cate5,
  cate6,
  bannerImg,
  midleBanner,
  articleImg,
  logospkt,
  logoclcspkt,
} from "../../assets/img";
import { useGetSubGenresQuery } from "../../services/subgenres/subgenresAPI";
import { useGetTopNewProductQuery } from "../../services/product/productAPI";
import { useGetWishlistQuery } from "../../services/wishlist/wishlistAPI";
import NotiHome from "../../component/NotiHome";

const HomePage: React.FunctionComponent = () => {
  const banner = [bannerImg, logospkt, logoclcspkt, logo];
  const midlebanner = [midleBanner, midleBanner, midleBanner];
  const cate: categoryItem[] = [
    {
      name: "Shop all",
      img: cate1,
      color: 1,
      link: "/product/all?page_id=1&page_size=24&min_price=0&max_price=5000&genres_id=1",
    },
    {
      name: "Education",
      img: cate2,
      color: 2,
      link: "/product/all?page_id=1&page_size=24&min_price=0&max_price=5000&genres_id=333",
    },
    {
      name: "Superhero Comics",
      img: cate3,
      color: 2,
      link: "/product/all?page_id=1&page_size=24&min_price=0&max_price=5000&genres_id=955",
    },
    {
      name: "Computers",
      img: cate4,
      color: 1,
      link: "/product/all?page_id=1&page_size=24&min_price=0&max_price=5000&genres_id=258",
    },
    {
      name: "Star Wars Fiction",
      img: cate5,
      color: 1,
      link: "/product/all?page_id=1&page_size=24&min_price=0&max_price=5000&genres_id=941",
    },
    {
      name: "Teen Fiction",
      img: cate6,
      color: 2,
      link: "/product/all?page_id=1&page_size=24&min_price=0&max_price=5000&genres_id=968",
    },
  ];

  const [id, setId] = useState(1);
  const { data } = useGetSubGenresQuery(id);
  const { data: getNewProduct = [] } = useGetTopNewProductQuery();
  const { data: wishlist = [] } = useGetWishlistQuery();

  return (
    <div className="bg-[#FBF4EA] mt-[76px]">
      <Marquee></Marquee>
      <div className="banner-carousel">
        <Slider {...bannerSettings}>
          {banner.map((item, index) => (
            <div
              key={index}
              className="banner bg-[#FBF4EA] pt-[84px] pb-[100px] md:pt-[40px] md:pb-[60px]"
            >
              <div className="mx-auto container-nmc px-3 md:gap-[60px] sm:items-between sm:h-full sm:gap-[16px]">
                <div className="w-[60%] lg:w-[70%] md:w-[100%] flex flex-col justify-center md:items-center">
                  <p className="mb-2 text-[20px] sm:text-[16px] font-semibold sm:font-normal capitalize text-[#262626] md:text-center">
                    Welcome to the NMC Bookstore
                  </p>
                  <h1 className="mb-6 capitalize text-[#262626] md:text-center">
                    Your Gateway to a World of Knowledge and Imagination!
                  </h1>
                  <Link
                    to="/product/all?page_id=1&page_size=24"
                    className="flex py-3 px-6 items-center bg-orange-orange-6 w-fit rounded-full"
                  >
                    {" "}
                    <i className="bdx-cart-fill inline-flex mr-2 items-center"></i>{" "}
                    SHOP NOW
                  </Link>
                </div>
                <div className="w-[40%] lg:w-[30%] md:w-[100%] flex items-center banner-img">
                  <img src={item} alt="banner" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-primary py-[60px] sm:pt-[40px]">
        <div className="mx-auto px-3 container-nmc">
          <h2 className=" mb-8 sm:mb-6 text-center text-orange-orange-6 text-center capitalize">
            Our Popular Categories
          </h2>
          <div className="cate-carousel">
            <Slider {...cateSettings}>
              {cate.map((item, index) => (
                <div
                  onClick={() => window.location.replace(item?.link)}
                  key={index}
                  className="overflow-hidden"
                >
                  <p className="text-[20px] sm:text-[16px] font-semibold text-[#262626]">
                    {item.name}
                  </p>
                  <div className="relative flex justify-center">
                    <svg
                      className="absolute top-[-40px] left-[-40px] z-0"
                      width="280"
                      height="243"
                      viewBox="0 0 280 243"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M169.554 1.14663C204.611 2.11203 246.112 -4.73555 268.539 22.2427C290.475 48.6302 275.214 87.4579 269.431 121.29C264.982 147.315 258.351 172.803 239.623 191.403C220.967 209.933 195.119 214.367 169.554 220.488C130.755 229.777 89.8417 255.668 55.4085 235.508C17.4768 213.299 -1.78808 165.224 0.130567 121.29C1.99214 78.6629 30.1766 41.3075 64.9669 16.6367C94.8584 -4.56027 132.931 0.138099 169.554 1.14663Z"
                        fill={`${item.color === 1 ? "#63A19A" : "#E79797"}`}
                      />
                    </svg>
                    <img
                      className="relative z-[1]"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="bg-[#FFE8AD] py-[60px] sm:py-[40px] rounded-t-[120px] md:rounded-t-[60px] sm:rounded-t-[40px]">
          <div className="mx-auto px-3 container-nmc">
            <h2 className=" mb-8 sm:mb-0 text-primary text-center capitalize">
              New arrivals
            </h2>
            <div className="productList-carousel py-3 sm:pt-0">
              <Slider {...productListSettings}>
                {getNewProduct.map((item) => (
                  <ProductItem
                    key={item?.id}
                    itemDetail={item}
                    wishlistItem={wishlist}
                  ></ProductItem>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE8AD] md:pt-[20px] pt-[60px] pb-[180px] md:pb-[120px] sm:pb-[60px] sm:rounded-b-[60px] rounded-b-[120px]">
        <div className="mx-auto px-3 container-nmc">
          <div className="flex justify-between">
            <h2 className="mb-8 sm:mb-0 text-primary">
              Bestsellers{" "}
              <i className="bdx-like ml-2 text-accent inline-flex items-center"></i>{" "}
            </h2>
            <div className="lg:hidden">
              <span className="cursor-pointer px-6 border-r border-[#BFBFBF] border-solid font-semibold text-primary relative before:absolute before:bottom-[-10%] before:left-[50%] before:h-0.5 before:translate-x-[-50%] before:w-[50%] before:bg-primary">
                All
              </span>
              <span className="cursor-pointer px-6 border-r border-[#BFBFBF] border-solid text-[#595959] hover:text-primary">
                Fiction
              </span>
              <span className="cursor-pointer px-6 border-r border-[#BFBFBF] border-solid text-[#595959] hover:text-primary">
                Non-Fiction
              </span>
              <span className="cursor-pointer pl-6 text-[#595959] hover:text-primary">
                Children’s
              </span>
            </div>
          </div>
          <div className="productList-tworows">
            <Slider {...productTabsListSettings}>
              {getNewProduct.map((item) => (
                <ProductItem
                  key={item?.id}
                  itemDetail={item}
                  wishlistItem={wishlist}
                ></ProductItem>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="mindle-banner-carousel md:pb-[40px] pb-[120px] md:mt-6 mt-[-125px] mx-auto px-3 container-nmc">
        <Slider {...bannerSettings}>
          {midlebanner.map((item, index) => (
            <div
              key={index}
              className="aspect-[1296/250] w-full mindle-banner-carousel__block"
            >
              <img
                className="object-cover w-full h-full"
                src={item}
                alt="banner"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mx-auto px-3 container-nmc productList-carousel md:mb-[40px] mb-[100px]">
        <div className="flex mb-6 justify-between">
          <h2 className="text-primary">Fiction</h2>
          <p className="text-primary flex items-center">
            {" "}
            <span>View all</span>{" "}
            <i className="bdx-arrow-2 ml-2 flex items-center"></i>
          </p>
        </div>
        <Slider {...productListSettings}>
          {getNewProduct.map((item) => (
            <ProductItem
              key={item?.id}
              itemDetail={item}
              wishlistItem={wishlist}
            ></ProductItem>
          ))}
        </Slider>
      </div>
      <div className="mx-auto px-3 container-nmc productList-carousel md:mb-[40px] mb-[100px]">
        <div className="flex mb-6 justify-between">
          <h2 className="text-primary">Non-Fiction</h2>
          <p className="text-primary flex items-center">
            {" "}
            <span>View all</span>{" "}
            <i className="bdx-arrow-2 ml-2 flex items-center"></i>
          </p>
        </div>
        <Slider {...productListSettings}>
          {getNewProduct.map((item) => (
            <ProductItem
              key={item?.id}
              itemDetail={item}
              wishlistItem={wishlist}
            ></ProductItem>
          ))}
        </Slider>
      </div>
      <div className="mx-auto px-3 container-nmc productList-carousel dots-bottom md:mb-[40px] mb-[60px]">
        <div className="flex mb-6 justify-between">
          <h2 className="text-primary">Children’s</h2>
          <p className="text-primary flex items-center">
            {" "}
            <span>View all</span>{" "}
            <i className="bdx-arrow-2 ml-2 flex items-center"></i>
          </p>
        </div>
        <Slider {...productListSettings}>
          {getNewProduct.map((item) => (
            <ProductItem
              key={item?.id}
              itemDetail={item}
              wishlistItem={wishlist}
            ></ProductItem>
          ))}
        </Slider>
      </div>
      <div className="services bg-[#fcfcfc]">
        <div className="mx-auto px-3 container-nmc">
          <div className="mx-[-12px] py-10 sm:py-6 servicesCarousel">
            <Slider {...servicesCarousel}>
              <div className="px-3 flex flex-col items-center">
                <i className="text-[64px] text-primary bdx-truck-free"></i>
                <p className="font-bold text-[20px] leading-[28px] mb-2 sm:mb-0 text-center sm:text-[16px] sm:font-semibold">
                  Free delivery
                </p>
                <p className="text-[16px] leading-[24px] text-[#595959] text-center sm:text-[14px]">
                  For all orders over $100
                </p>
              </div>
              <div className="px-3 flex flex-col items-center">
                <i className="text-[64px] text-primary bdx-truck-transporation"></i>
                <p className="font-bold text-[20px] leading-[28px] mb-2 sm:mb-0 text-center sm:text-[16px] sm:font-semibold">
                  Fast delivery
                </p>
                <p className="text-[16px] leading-[24px] text-[#595959] text-center sm:text-[14px]">
                  2 hours delivery is available
                </p>
              </div>
              <div className="px-3 flex flex-col items-center">
                <i className="text-[64px] text-primary bdx-sale"></i>
                <p className="font-bold text-[20px] leading-[28px] mb-2 sm:mb-0 text-center sm:text-[16px] sm:font-semibold">
                  Fast delivery
                </p>
                <p className="text-[16px] leading-[24px] text-[#595959] text-center sm:text-[14px]">
                  2 hours delivery is available
                </p>
              </div>
              <div className="px-3 flex flex-col items-center">
                <i className="text-[64px] text-primary bdx-price-sale"></i>
                <p className="font-bold text-[20px] leading-[28px] mb-2 sm:mb-0 text-center sm:text-[16px] sm:font-semibold">
                  Fast delivery
                </p>
                <p className="text-[16px] leading-[24px] text-[#595959] text-center sm:text-[14px]">
                  2 hours delivery is available
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <NotiHome></NotiHome>
    </div>
  );
};

export default HomePage;
