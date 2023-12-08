import React from "react";
import Marquee from "../../component/Marquee";
import { articleImg, avatarProfile } from "../../assets/img";
import { Tab } from "@headlessui/react";
import { articleItem } from "../../interface";
import AddressComponent from "../../component/Profile/AddAdress";
import EditProfileComponent from "../../component/Profile/EditProfile";
import EditAddressComponent from "../../component/Profile/EditAddess";
import ChangePasswordComponent from "../../component/Profile/ChangePassword";
import AddBlogComponent from "../../component/Profile/AddBog";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";

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
                    Phone: <span>{userInfo?.phone_number}</span>
                  </p>
                  <p className="profile__user__right__item">
                    Gender: <span>{userInfo?.sex}</span>
                  </p>
                  <p className="profile__user__right__item">
                    Age: <span>{userInfo?.age}</span>
                  </p>
                  <p className="profile__user__right__item">
                    Total order: <span>10x</span>
                  </p>
                  <p className="profile__user__right__item">
                    Email: <span>{userInfo?.email}</span>
                  </p>
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
            <Tab>
              <p className="tab-lable">Blog List</p>
            </Tab>
            <Tab>
              <p className="tab-lable">Order List</p>
            </Tab>
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
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Profile;
