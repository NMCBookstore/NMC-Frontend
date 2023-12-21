import React, { useState } from "react";
import Marquee from "../../component/Marquee";
import { articleImg, avatarProfile, productItem } from "../../assets/img";
import { Tab } from "@headlessui/react";
import { articleItem } from "../../interface";
import AddressComponent from "../../component/Profile/AddAdress";
import EditProfileComponent from "../../component/Profile/EditProfile";
import EditAddressComponent from "../../component/Profile/EditAddess";
import ChangePasswordComponent from "../../component/Profile/ChangePassword";
import AddBlogComponent from "../../component/Profile/AddBog";
import { productListToReviewSettings } from "../../common/CarouselSetting";
import Slider from "react-slick";
import AddReviewComponent from "../../component/Profile/AddReview";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import {
  useDeleteAddressMutation,
  useGetListAddressQuery,
} from "../../services/address/addressAPI";
import { useGetListCitiesQuery } from "../../services/address/citiesAPI";
import { useGetListDistrictQuery } from "../../services/address/districtAPI";
import { useGetAllOrderQuery } from "../../services/order/orderAPI";
import { format } from "date-fns";

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
  const userInfo = useSelector(selectCurrentUser);
  const { data: userAddress } = useGetListAddressQuery();
  const [deleteAddress] = useDeleteAddressMutation();
  const { data: order, isLoading: orderLoading } = useGetAllOrderQuery();
  console.log(order);

  const [idCity, setIdCity] = useState<number | null>(0);
  const [idDistrict, setIdDistrict] = useState<number | null>(0);
  const { data: citiesData = [] } = useGetListCitiesQuery();
  const { data: districtData = [] } = useGetListDistrictQuery(idCity, {
    skip: !idCity,
  });
  const addressAmount = Number(userAddress?.length);
  const orderAmount = Number(order?.length) ? Number(order?.length) : 0;
  const userGender = userInfo?.sex;

  const genderTextMap = {
    "0": "Male",
    "1": "Female",
    "2": "Other",
  };

  const renderGenderText = (userGender: string) => {
    if (userGender === "1") {
      return "Male";
    } else if (userGender === "0") {
      return "Female";
    } else return "Other";
  };

  const handleDeleteAddress = (addressId: number[]) => {
    deleteAddress(addressId);
  };

  return (
    <div className="profile bg-[#fbf4ea] mt-[76px]">
      <Marquee></Marquee>
      <div className="mx-auto px-3 container-nmc">
        <div className="profile__user">
          <div>
            <div className="row">
              <div className="w-[33.33%] profile__user__left">
                <img src={userInfo?.image} alt="useravatar" />
                <h1 className="profile__user__left__name">
                  {userInfo?.full_name}
                </h1>
                <p>
                  Level: <span>Normalx</span>
                </p>
                <p>
                  Review: <span>100x</span>
                </p>
                <p>
                  Vote: <span>100x</span>
                </p>
              </div>
              <div className="w-[66.66%] profile__user__right">
                <div>
                  <p className="profile__user__right__item">
                    Phone:{" "}
                    <span>
                      {userInfo?.phone_number
                        ? userInfo.phone_number
                        : "Can't find your phone number"}
                    </span>
                  </p>
                  <p className="profile__user__right__item">
                    Gender:{" "}
                    <span>
                      {String(userInfo?.sex) !== "" &&
                      renderGenderText(String(userInfo?.sex))
                        ? renderGenderText(String(userInfo?.sex))
                        : "You haven't set your gender"}
                    </span>
                  </p>
                  <p className="profile__user__right__item">
                    Age:{" "}
                    <span>
                      {userInfo?.age
                        ? userInfo?.age
                        : "You haven't set your age"}
                    </span>
                  </p>
                  <p className="profile__user__right__item">
                    Total order:{" "}
                    <span>{orderLoading ? "Loading..." : orderAmount}</span>
                  </p>
                  <p className="profile__user__right__item">
                    Email: <span>{userInfo?.email}</span>
                  </p>
                  <div className="flex gap-4">
                    <EditProfileComponent></EditProfileComponent>
                    <ChangePasswordComponent></ChangePasswordComponent>
                  </div>
                </div>
                <div className="profile__user__right__adress">
                  {addressAmount === 0 ? (
                    <p>Create your address using the button below </p>
                  ) : (
                    <p>Delivery Address:</p>
                  )}
                  {userAddress?.map((item, index) => (
                    <div
                      key={index}
                      className="profile__user__right__adress__item"
                    >
                      <div>
                        <p>{item?.address}</p>
                        <p>
                          {item?.district}, {item?.city}
                        </p>
                      </div>
                      <div>
                        {/* <EditAddressComponent
                          citiesData={citiesData}
                          districtData={districtData}
                          idCity={idCity}
                          idDistrict={idDistrict}
                          setIdCity={setIdCity}
                          setIdDistrict={setIdDistrict}
                          addressId={item?.id}
                        /> */}
                        <AddressComponent
                          mode={"update"}
                          citiesData={citiesData}
                          districtData={districtData}
                          idCity={idCity}
                          idDistrict={idDistrict}
                          setIdCity={setIdCity}
                          setIdDistrict={setIdDistrict}
                          amountAddress={Number(addressAmount)}
                          addressId={item?.id}
                        />
                        <i
                          onClick={() => handleDeleteAddress([item?.id])}
                          className="bdx-close"
                        ></i>
                      </div>
                    </div>
                  ))}

                  <AddressComponent
                    mode={"create"}
                    citiesData={citiesData}
                    districtData={districtData}
                    idCity={idCity}
                    idDistrict={idDistrict}
                    setIdCity={setIdCity}
                    setIdDistrict={setIdDistrict}
                    amountAddress={Number(addressAmount)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tab.Group>
          <Tab.List className="tab-lable-list">
            <Tab>
              <p className="tab-lable">Blog List</p>
            </Tab>
            <Tab>
              <p className="tab-lable">Order List</p>
            </Tab>
            <Tab>
              <p className="tab-lable">To be received</p>
            </Tab>
            <Tab>
              <p className="tab-lable">Awaiting Review</p>
            </Tab>
          </Tab.List>
          <Tab.Panels className="bg-[#fcfcfc] py-8 px-6 tab-list">
            {/* Blog Panel */}
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
              {/* Order list panel */}
              {order?.map((item, index) => (
                <div className="order-item">
                  <div className="order-item__heading">
                    <h3>
                      Order Number: <span>{item?.id}</span>
                    </h3>
                    <p>
                      Create at:{" "}
                      <span>
                        {format(
                          new Date(item?.transactions?.[0]?.created_at),
                          "dd/MM/yyyy"
                        )}
                      </span>
                    </p>
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
                      {item?.books.map((bookItem, bookIndex) => {
                        const transaction = item.transactions.find(
                          (t) => t.books_id === bookItem.id
                        );
                        const amount = transaction ? transaction.amount : 0;
                        const total = transaction ? transaction.total : 0;
                        return (
                          <tr key={bookIndex}>
                            {/* Product info */}
                            <td data-th="Product">
                              <div className="product-img shrink-0">
                                <a href="" target="_blank">
                                  <img
                                    src={String(bookItem?.image[0])}
                                    alt="img-banner"
                                  ></img>
                                </a>
                              </div>
                              <div>
                                <p>
                                  <a href={`/product/`} target="_blank">
                                    {bookItem?.name}
                                  </a>
                                </p>
                                <p>
                                  by:
                                  {bookItem?.author}
                                </p>
                              </div>
                            </td>
                            {/* Product price */}
                            <td data-th="Price">
                              <div className="table-price">
                                <p className="table-price__new">
                                  {bookItem?.price}$
                                </p>
                                <p className="table-price__old">
                                  {bookItem?.price}$
                                </p>
                                <p className="table-price__discount">-10%</p>
                              </div>
                            </td>
                            {/* Product quantity */}
                            <td data-th="Quantity">
                              <p>{amount}</p>
                            </td>
                            {/* Total value of 1 item */}
                            <td data-th="Order Value">
                              <p className="table-sumprice">{total}$</p>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="md:w-full w-[25%] ms-auto">
                    <div className="cart-info__bottom">
                      <p className="cart-info__bottom__noting">
                        *Shipping fee included
                      </p>
                      <p className="cart-info__bottom__sum">
                        <span className="text-uppercase">
                          Total order value
                        </span>
                        <span>{item?.sub_total.toFixed(2)}$</span>
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
                    <p>
                      Create at: <span>9-12-2023</span>
                    </p>
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
                              <p>by: Bùi Đình Xuân</p>
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
                            <p className="table-sumprice">100$</p>
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
                        <span className="text-uppercase">
                          Total order value
                        </span>
                        <span>500$</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Tab.Panel>
            <Tab.Panel>
              {/* Review panel */}
              <div className="WaitingReview">
                <Slider {...productListToReviewSettings}>
                  {order?.map((item, index) => (
                    <div key={index} className="product_hover">
                      {item.books.map((book, index) => (
                        <div className="bg-white product-item">
                          <div className="flex flex-col items-center">
                            <div className="product-item__img">
                              <img src={book?.image[0]} alt={"img-product"} />
                            </div>
                            <h3 className="product-item__title webkitbox-2">
                              {book?.name}
                            </h3>
                            <p className="product-item__des webkitbox-2">
                              by: {book?.author}
                            </p>
                          </div>
                          <div className="w-full">
                            <div className="product-item__control">
                              <AddReviewComponent></AddReviewComponent>
                            </div>
                          </div>
                        </div>
                      ))}
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
