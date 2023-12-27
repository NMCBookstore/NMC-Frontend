import { Tab } from "@headlessui/react";
import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { articleImg, productItem } from "../../assets/img";
import { productListToReviewSettings } from "../../common/CarouselSetting";
import Marquee from "../../component/Marquee";
import AddressComponent from "../../component/Profile/AddAdress";
import AddBlogComponent from "../../component/Profile/AddBog";
import AddReviewComponent from "../../component/Profile/AddReview";
import ChangePasswordComponent from "../../component/Profile/ChangePassword";
import EditProfileComponent from "../../component/Profile/EditProfile";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { articleItem } from "../../interface";
import {
  useDeleteAddressMutation,
  useGetListAddressQuery,
} from "../../services/address/addressAPI";
import { useGetAllOrderQuery } from "../../services/order/orderAPI";
import { useGetUserRankQuery } from "../../services/user/userAPI";

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
  const { data: userAddress, isLoading: addressLoading } =
    useGetListAddressQuery();
  const [deleteAddress] = useDeleteAddressMutation();
  const { data: order, isLoading: orderLoading } = useGetAllOrderQuery();
  const { data: userRank } = useGetUserRankQuery({
    email: String(userInfo?.email),
  });

  const addressAmount = Number(userAddress?.length);
  const orderAmount = Number(order?.length) ? Number(order?.length) : 0;
  const userGender = userInfo?.sex;

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
      {!addressLoading && (
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
                    Level: <span>{userRank?.rank}</span>
                  </p>
                  <p>
                    Review: <span>{userRank?.review}</span>
                  </p>
                  <p>
                    Vote: <span>{userRank?.vote}</span>
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
                          <AddressComponent
                            mode={"update"}
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
                  <div key={index} className="order-item">
                    <div className="order-item__heading">
                      <h3>
                        Order Number: <span>{item?.id}</span>
                      </h3>
                      <p>
                        Create at:{" "}
                        <span>
                          {item?.transactions?.[0]?.created_at
                            ? format(
                                new Date(item.transactions[0].created_at),
                                "dd/MM/yyyy"
                              )
                            : "Loading..."}
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
                                {bookItem?.sale === 0 ? (
                                  <div className="table-price">
                                    <p className="table-price__new">
                                      {bookItem?.price}$
                                    </p>
                                  </div>
                                ) : (
                                  <div className="table-price">
                                    <p className="table-price__new">
                                      {(
                                        Number(bookItem?.price) *
                                        (1 - Number(bookItem?.sale) / 100)
                                      ).toFixed(2)}
                                      $
                                    </p>
                                    <p className="table-price__old">
                                      {bookItem?.price}$
                                    </p>
                                    <p className="table-price__discount">
                                      -{bookItem?.sale}%
                                    </p>
                                  </div>
                                )}
                              </td>
                              {/* Product quantity */}
                              <td data-th="Quantity">
                                <p>{amount}</p>
                              </td>
                              {/* Total value of 1 item */}
                              <td data-th="Order Value">
                                {bookItem?.sale === 0 ? (
                                  <p className="table-sumprice">{total}$</p>
                                ) : (
                                  <p className="table-sumprice">{total}$</p>
                                )}
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
                    {order?.map((item, orderIndex) =>
                      item.books.map((book, bookIndex) => (
                        <div
                          key={`${orderIndex}-${bookIndex}`}
                          className="product_hover"
                        >
                          <div className="bg-white product-item">
                            <div className="flex flex-col items-center">
                              <div className="product-item__img">
                                <img src={book?.image[0]} alt="img-product" />
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
                                <AddReviewComponent />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </Slider>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      )}
    </div>
  );
};

export default Profile;
