import React from "react";
import Marquee from "../../component/Marquee";
import { articleImg, avatarProfile, productItem } from "../../assets/img";
import { Tab } from '@headlessui/react'
import { articleItem } from "../../interface";
import AddressComponent from "../../component/Profile/AddAdress";
import EditProfileComponent from "../../component/Profile/EditProfile";
import EditAddressComponent from "../../component/Profile/EditAddess";
import ChangePasswordComponent from "../../component/Profile/ChangePassword";
import AddBlogComponent from "../../component/Profile/AddBog";
import { productListToReviewSettings } from "../../common/CarouselSetting";
import Slider from "react-slick";
import AddReviewComponent from "../../component/Profile/AddReview";

const Profile: React.FunctionComponent = () => {
    const articleList: articleItem[] = [
        {
            name: "Kids share their thoughts about banned books with NPR",
            img: articleImg,
            des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids.",
        },
        {
            name: "The 10 Most Challenged Books of 2022-2023",
            img: articleImg,
            des: "Parents and politicians are trying to pull books off shelves at a record-setting pace.",
        },
        {
            name: "Hanoi Book Festival returns to capital city",
            img: articleImg,
            des: "The Hanoi Book Festival has returned for the bookworms in the pedestrian zone by Hoan Kiem (Sword) Lake in the capital city on October 6-8th",
        },
        {
            name: "5 New Books You Should Read That You Won't Find in Business School",
            img: articleImg,
            des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids.",
        },
        {
            name: "Kids share their thoughts about banned books with NPR",
            img: articleImg,
            des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids.",
        },
        {
            name: "5 New Books You Should Read That You Won't Find in Business School",
            img: articleImg,
            des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids.",
        },
        {
            name: "Kids share their thoughts about banned books with NPR",
            img: articleImg,
            des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids.",
        },
    ];
    return (
        <div className="profile bg-[#fbf4ea] mt-[76px]">
            <Marquee></Marquee>
            <div className="mx-auto px-3 container-nmc">
                <div className="profile__user">
                    <div>
                        <div className="row">
                            <div className="w-[33.33%] profile__user__left">
                                <img src={avatarProfile} alt="useravatar" />
                                <h1 className="profile__user__left__name">
                                    Amber Amyrobson
                                </h1>
                                <p>Level: <span>Normal</span></p>
                                <p>Review: <span>100</span></p>
                                <p>Vote: <span>100</span></p>
                            </div>
                            <div className="w-[66.66%] profile__user__right">
                                <div>
                                    <p className="profile__user__right__item">Phone: <span>0335558814</span></p>
                                    <p className="profile__user__right__item">Gender: <span>Female</span></p>
                                    <p className="profile__user__right__item">Age: <span>22</span></p>
                                    <p className="profile__user__right__item">Total order: <span>10</span></p>
                                    <p className="profile__user__right__item">Email: <span>amberamyrobson@gmail.com</span></p>
                                    <div className="flex gap-4">
                                        <EditProfileComponent></EditProfileComponent>
                                        <ChangePasswordComponent></ChangePasswordComponent>
                                        {/* <button>Edit Profile</button> */}
                                    </div>
                                </div>
                                <div className="profile__user__right__adress">
                                    <p>Delivery Address:</p>
                                    <div className="profile__user__right__adress__item">
                                        <div>
                                            <p>164 Phan Van Tri</p>
                                            <p>Binh Thanh, Ho Chi Minh</p>
                                        </div>
                                        <div>
                                            <EditAddressComponent></EditAddressComponent>
                                            <i className="bdx-close"></i>
                                        </div>
                                    </div>
                                    <div className="profile__user__right__adress__item">
                                        <div>
                                            <p>163 Phan Van Tri</p>
                                            <p>Binh Thanh, Ho Chi Minh</p>
                                        </div>
                                        <div>
                                            <EditAddressComponent></EditAddressComponent>
                                            <i className="bdx-close"></i>
                                        </div>
                                    </div>
                                    <AddressComponent></AddressComponent>
                                    {/* <button>Add more adress</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Tab.Group>
                    <Tab.List className="tab-lable-list">
                        <Tab><p className="tab-lable">Blog List</p></Tab>
                        <Tab><p className="tab-lable">Order List</p></Tab>
                        <Tab><p className="tab-lable">To be received</p></Tab>
                        <Tab><p className="tab-lable">Awaiting Review</p></Tab>
                    </Tab.List>
                    <Tab.Panels className="bg-[#fcfcfc] py-8 px-6 tab-list">
                        <Tab.Panel>
                            <div className="profile__blog flex flex-wrap">
                                {articleList.slice(0, 6).map((item, index) => (
                                    <div key={index} className="profile__blog__item">
                                        <div className="profile__blog__item__img">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className="profile__blog__item__content">
                                            <h3 className="text-[#262626]">{item.name}</h3>
                                            <p>{item.des}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <AddBlogComponent></AddBlogComponent>
                        </Tab.Panel>
                        <Tab.Panel>
                            {Array.from({ length: 5 }, (_, index) => (
                                <div className="order-item">
                                    <div className="order-item__heading">
                                        <h3>
                                            Order Number: <span>1</span>
                                        </h3>
                                        <p>Create at: <span>9-12-2023</span></p>
                                    </div>
                                    <table className="table" key={index}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Order Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: 3 }, (_, index) => (
                                                <tr key={index}>
                                                    {/* Delete button */}
                                                    {/* Product info */}
                                                    <td data-th="Product">
                                                        <div className="product-img shrink-0">
                                                            <a href="" target="_blank">
                                                                <img src={productItem} alt="img-banner"></img>
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <p>
                                                                <a href={`/product/`} target="_blank">
                                                                    Jujutsu Kaisen, Vol. 20
                                                                </a>
                                                            </p>
                                                            <p>
                                                                by: Bùi Đình Xuân
                                                            </p>
                                                        </div>
                                                    </td>
                                                    {/* Product price */}
                                                    <td data-th="Price">
                                                        <div className="table-price">
                                                            <p className="table-price__new">100$</p>
                                                            <p className="table-price__old">300$</p>
                                                            <p className="table-price__discount">-10%</p>
                                                        </div>
                                                    </td>
                                                    {/* Product quantity */}
                                                    <td data-th="Quantity">
                                                        <p>1</p>
                                                    </td>
                                                    {/* Total value of 1 items */}
                                                    <td data-th="Order Value">
                                                        <p className="table-sumprice">
                                                            100$
                                                        </p>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="md:w-full w-[25%] ms-auto">
                                        <div className="cart-info__bottom">
                                            <p className="cart-info__bottom__noting">
                                                *Shipping fee included
                                            </p>
                                            <p className="cart-info__bottom__sum">
                                                <span className="text-uppercase">Total order value</span>
                                                <span>500$</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Tab.Panel>
                        <Tab.Panel>
                            {Array.from({ length: 5 }, (_, index) => (
                                <div className="order-item received">
                                    <div className="order-item__heading">
                                        <h3>
                                            Order Number: <span>1</span>
                                        </h3>
                                        <p>Create at: <span>9-12-2023</span></p>
                                    </div>
                                    <table className="table" key={index}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Order Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: 3 }, (_, index) => (
                                                <tr key={index}>
                                                    {/* Delete button */}
                                                    {/* Product info */}
                                                    <td data-th="Product">
                                                        <div className="product-img shrink-0">
                                                            <a href="" target="_blank">
                                                                <img src={productItem} alt="img-banner"></img>
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <p>
                                                                <a href={`/product/`} target="_blank">
                                                                    Jujutsu Kaisen, Vol. 20
                                                                </a>
                                                            </p>
                                                            <p>
                                                                by: Bùi Đình Xuân
                                                            </p>
                                                        </div>
                                                    </td>
                                                    {/* Product price */}
                                                    <td data-th="Price">
                                                        <div className="table-price">
                                                            <p className="table-price__new">100$</p>
                                                            <p className="table-price__old">300$</p>
                                                            <p className="table-price__discount">-10%</p>
                                                        </div>
                                                    </td>
                                                    {/* Product quantity */}
                                                    <td data-th="Quantity">
                                                        <p>1</p>
                                                    </td>
                                                    {/* Total value of 1 items */}
                                                    <td data-th="Order Value">
                                                        <p className="table-sumprice">
                                                            100$
                                                        </p>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="md:w-full w-[30%] ms-auto pr-5">
                                        <div className="cart-info__bottom">
                                            <p className="cart-info__bottom__noting">
                                                *Shipping fee included
                                            </p>
                                            <p className="cart-info__bottom__sum">
                                                <span className="text-uppercase">Total order value</span>
                                                <span>500$</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="WaitingReview">
                                <Slider {...productListToReviewSettings}>
                                    {Array.from({ length: 6 }, (_, index) => (
                                        <div key={index} className="product_hover">
                                            <div className="bg-white product-item">
                                                <div className="flex flex-col items-center">
                                                    <div className="product-item__img">
                                                        <img
                                                            src={productItem}
                                                            alt={productItem}
                                                        />
                                                    </div>
                                                    <h3 className="product-item__title webkitbox-2">
                                                        Jujutsu Kaisen, Vol. 20
                                                    </h3>
                                                    <p className="product-item__des webkitbox-2">
                                                        by: Bùi Đình Xuân
                                                    </p>
                                                </div>
                                                <div className="w-full">
                                                    <div className="product-item__control">
                                                        <AddReviewComponent></AddReviewComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
};

export default Profile; 