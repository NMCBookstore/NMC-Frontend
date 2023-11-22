import React, { Fragment, useRef, useState } from "react";
import { Product } from "../../interface/Product";
import { articleItem } from "../../interface";
import { articleImg, productItem } from "../../assets/img";
import { useGetWishlistQuery } from "../../services/wishlist/wishlistAPI";
import Slider from "react-slick";
import ProductItem from "../../component/ProductItem";
import { productListSettings } from "../../common/CarouselSetting";
import NotiHome from "../../component/NotiHome";
import Marquee from "../../component/Marquee";
import BreadcrumbConponent from "../../component/Breadcrumb";

import { Combobox, Transition } from '@headlessui/react'
interface Person {
    id: number;
    name: string;
}
interface PriceFilter {
    key: string;
    value: string;
}
const people: Person[] = [
    { id: 1, name: 'new arrivals' },
    { id: 2, name: 'Non-Fiction' },
    { id: 3, name: 'Children’s' },
    { id: 4, name: 'Stationery and gifts' },
    { id: 5, name: 'Gift cards and vouchers' },
    { id: 6, name: 'adventure' },
];

const ProductList: React.FunctionComponent = () => {
    const [selected, setSelected] = useState<Person>(people[0]);
    const [query, setQuery] = useState<string>('');
    const filteredPeople =  query === ''
                                ? people
                                : people.filter((person) =>
                                    person.name
                                        .toLowerCase()
                                        .replace(/\s+/g, '')
                                        .includes(query.toLowerCase().replace(/\s+/g, ''))
                                );

    const showSideBar = useRef(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const modalBackdrop = document.getElementById('modal-backdrop') as HTMLElement;

    const handleClick = () => {
        showSideBar.current = !showSideBar.current;
        const element = elementRef.current;
        if (showSideBar.current && element) {
            modalBackdrop.setAttribute('data-show', 'true');
            modalBackdrop.style.setProperty('opacity', '1');
            element.style.setProperty('left', '0px');

        }
        else  if (!showSideBar.current && element) {
            modalBackdrop.setAttribute('data-show', 'false');
            modalBackdrop.style.setProperty('opacity', '0');
            element.style.setProperty('left', '-300px');
        }
    };
    const overWrite = () => {
        if(elementRef.current && modalBackdrop && window.innerWidth >= 1280){
            showSideBar.current = false;
            modalBackdrop.setAttribute('data-show', 'false');
            modalBackdrop.style.setProperty('opacity', '0');
            elementRef.current.style.setProperty('left', '0px');
        }
        else if(elementRef.current && window.innerWidth < 1280){
            elementRef.current.style.setProperty('left', '-300px');
        }
    }
        window.addEventListener('resize', overWrite);
    const { data: wishlist = [] } = useGetWishlistQuery();

    const productList: Product[] = [{ id: 1, name: "Build the life you want", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 0, rating: 3, image: [productItem] },
    { id: 2, name: "Section with number 2", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] },
    { id: 3, name: "Section with number 3", description: "Arthur c. brooks oprah winfrey", price: 200.10, salePrice: 150, rating: 4, image: [productItem] },
    { id: 4, name: "Section with number 4", description: "Arthur c. brooks oprah winfrey", price: 100, salePrice: 0, rating: 5, image: [productItem] },
    { id: 5, name: "Section with number 5", description: "Arthur c. brooks oprah winfrey", price: 50.50, salePrice: 40.5, rating: 2, image: [productItem] },
    { id: 6, name: "Section with number 6", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] },
    { id: 7, name: "Build the life you want", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 0, rating: 3, image: [productItem] },
    { id: 8, name: "Section with number 2", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] },
    { id: 9, name: "Section with number 3", description: "Arthur c. brooks oprah winfrey", price: 200.10, salePrice: 150, rating: 4, image: [productItem] },
    { id: 10, name: "Section with number 4", description: "Arthur c. brooks oprah winfrey", price: 100, salePrice: 0, rating: 5, image: [productItem] },
    { id: 11, name: "Section with number 5", description: "Arthur c. brooks oprah winfrey", price: 50.50, salePrice: 40.5, rating: 2, image: [productItem] },
    { id: 12, name: "Section with number 6", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] },
    { id: 13, name: "Section with number 5", description: "Arthur c. brooks oprah winfrey", price: 50.50, salePrice: 40.5, rating: 2, image: [productItem] },
    { id: 14, name: "Section with number 6", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] },
    { id: 15, name: "Build the life you want", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 0, rating: 3, image: [productItem] },
    { id: 16, name: "Section with number 2", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] },
    { id: 17, name: "Section with number 3", description: "Arthur c. brooks oprah winfrey", price: 200.10, salePrice: 150, rating: 4, image: [productItem] },
    { id: 18, name: "Section with number 4", description: "Arthur c. brooks oprah winfrey", price: 100, salePrice: 0, rating: 5, image: [productItem] },
    { id: 19, name: "Section with number 5", description: "Arthur c. brooks oprah winfrey", price: 50.50, salePrice: 40.5, rating: 2, image: [productItem] },
    { id: 20, name: "Section with number 6", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] }];
    const productList2: Product[] = [{ id: 1, name: "Build the life you want", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 0, rating: 3, image: [productItem] },
    { id: 2, name: "Section with number 2", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] },
    { id: 3, name: "Section with number 3", description: "Arthur c. brooks oprah winfrey", price: 200.10, salePrice: 150, rating: 4, image: [productItem] },
    { id: 4, name: "Section with number 4", description: "Arthur c. brooks oprah winfrey", price: 100, salePrice: 0, rating: 5, image: [productItem] },
    { id: 5, name: "Section with number 5", description: "Arthur c. brooks oprah winfrey", price: 50.50, salePrice: 40.5, rating: 2, image: [productItem] },
    { id: 6, name: "Section with number 6", description: "Arthur c. brooks oprah winfrey", price: 300, salePrice: 200, rating: 4, image: [productItem] }];
    const articleList: articleItem[] = [{ name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "The 10 Most Challenged Books of 2022-2023", img: articleImg, des: "Parents and politicians are trying to pull books off shelves at a record-setting pace." },
    { name: "Hanoi Book Festival returns to capital city", img: articleImg, des: "The Hanoi Book Festival has returned for the bookworms in the pedestrian zone by Hoan Kiem (Sword) Lake in the capital city on October 6-8th" },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "5 New Books You Should Read That You Won't Find in Business School", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." },
    { name: "Kids share their thoughts about banned books with NPR", img: articleImg, des: "We've heard from parents, authors, activists and other adults about banned books. But we haven't heard much from kids." }];
    const priceFilter: PriceFilter[] = [{ key: "over5000", value: ">5000" }, { key: "nomal", value: "$ 100 - 500" }, { key: "under100", value: "< $100" }]
    return (
        <div className="bg-[#F9EEDE] mt-[76px] product-list">
            <Marquee></Marquee>
            <div className="mx-auto px-3 container-nmc">
                <BreadcrumbConponent></BreadcrumbConponent>
            </div>
            <div className="container-nmc px-3 mx-auto product-list__handle-sidebar mb-12">
                <div>
                    <div  ref={elementRef} className="product-list__handle-sidebar__sidebar">
                        <h2 className="product-list__handle-sidebar__sidebar__heading">sort by</h2>
                        <div className="product-list__handle-sidebar__sidebar__item">
                            <h3>price</h3>
                            <div className="product-list__handle-sidebar__sidebar__item__price">
                                {priceFilter.map((item) => (
                                    <div key={item.key}>
                                        <input className="product-list__handle-sidebar__sidebar__item__price__input" id={item.key} type="checkbox" />
                                        <label htmlFor={`#${item.key}`}>{item.value}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="product-list__handle-sidebar__sidebar__item">
                            <h3>name</h3>
                            <div className="product-list__handle-sidebar__sidebar__item__name">
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            value="option1"
                                            checked={true}
                                            name="sortName"
                                        />
                                        Name A-Z
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            value="option2"
                                            name="sortName"
                                        />
                                        Name Z-A
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="product-list__handle-sidebar__sidebar__item">
                            <h3>rating</h3>
                            <div className="product-list__handle-sidebar__sidebar__item__rate">
                                <div>
                                    <input id="5start" type="checkbox" hidden/>
                                    <label htmlFor="5start">
                                        <span>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                        </span>
                                        <span>Five stars</span>
                                    </label>
                                </div>
                                <div>
                                    <input id="4start" type="checkbox" hidden/>
                                    <label htmlFor="4start">
                                        <span>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-star"></i>
                                        </span>
                                        <span>Four stars</span>
                                    </label>
                                </div>
                                <div>
                                    <input id="3start" type="checkbox" hidden/>
                                    <label htmlFor="3start">
                                        <span>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-star"></i>
                                            <i className="bdx-star"></i>
                                        </span>
                                        <span>Three stars</span>
                                    </label>
                                </div>
                                <div>
                                    <input id="2start" type="checkbox" hidden/>
                                    <label htmlFor="2start">
                                        <span>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-star"></i>
                                            <i className="bdx-star"></i>
                                            <i className="bdx-star"></i>
                                        </span>
                                        <span>Two stars</span>
                                    </label>
                                </div>
                                <div>
                                    <input id="1start" type="checkbox" hidden/>
                                    <label htmlFor="1start">
                                        <span>
                                            <i className="bdx-start-fill"></i>
                                            <i className="bdx-star"></i>
                                            <i className="bdx-star"></i>
                                            <i className="bdx-star"></i>
                                            <i className="bdx-star"></i>
                                        </span>
                                        <span>One stars</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button onClick={()=>handleClick()}>Close</button>
                    </div>
                    <div onClick={()=>handleClick()} id="modal-backdrop" className="modal-backdrop"></div>
                </div>
                <div className="product-list__handle-sidebar__items">
                    <div className="row gap-4 mb-8">
                        <button
                        className="product-list__handle-sidebar__items__show-menu h-[48px] shadow-md"
                        onClick={()=>handleClick()}
                        >
                            <span>SORT</span>
                            <i className="bdx-caret"></i>
                        </button>
                        <Combobox value={selected} onChange={setSelected}>
                            <div className="relative w-fit md:grow">
                                <div className="relative md:grow border border-primary border-solid w-full cursor-default overflow-hidden rounded-full text-left shadow-md focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                                    <Combobox.Input
                                        className="w-fit md:grow border-none py-3 px-6 text-[16px] leading-[150%] focus:ring-0 capitalize text-primary bg-[transparent] font-semibold focus:outline-none"
                                        displayValue={(person: Person) => person.name}
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pb-6 rotate-[-90deg]">
                                        <i className="bdx-caret text-primary"></i>
                                    </Combobox.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery('')}
                                >
                                    <Combobox.Options className="absolute mt-1 max-h-[264px] w-fit overflow-auto rounded-md bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[100]">
                                        {filteredPeople.length === 0 && query !== '' ? (
                                            <div className="relative cursor-default select-none px-4 py-2 text-primary">
                                                Nothing found.
                                            </div>
                                        ) : (
                                            filteredPeople.map((person) => (
                                                <Combobox.Option
                                                    key={person.id}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 px-6 rounded-xl ${active ? 'bg-primary text-white' : 'text-primary'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span
                                                                className={`block leading-[24px] truncate ${selected ? 'font-semibold' : 'font-medium'
                                                                    }`}
                                                            >
                                                                {person.name}
                                                            </span>
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>
                        <div className="flex h-[48px] md:w-full items-center grow px-[12px] relative">
                            <input
                                className="px-[24px] w-full h-full rounded-full shadow-md"
                                type="text"
                                placeholder="Search by Title, Author, ISBN or Keywords"
                            />
                            <i className="bdx-search flex items-center absolute text-[20px] text-[#595959] right-[24px] cursor-pointer"></i>
                        </div>
                    </div>
                    <div className="row gap-y-[24px] sm:gap-y-[8px]">
                        {productList.map((item) => (
                            <div className="sm:w-[50%] md:w-[33.33%] w-[25%] product-list__handle-sidebar__items__detail">
                                <ProductItem key={item?.id} itemDetail={item} wishlistItem={wishlist}></ProductItem>
                            </div>
                        ))}
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
                            {productList2.map((item) => (
                                <ProductItem key={item?.id} itemDetail={item} wishlistItem={wishlist}></ProductItem>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <div className="bg-[#FFE8AD] blog">
                <div className="mx-auto px-3 container-nmc py-[60px] sm:py-[40px]">
                    <i className="bdx-book text-primary text-[32px] flex justify-center"></i>
                    <h2 className="text-primary text-center mb-10 sm:mb-4">Our Blog</h2>
                    <div className="blog_list row mb-8 sm:mb-6 gap-y-6">
                        {articleList.slice(0, 6).map((item, index) => (
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
            <NotiHome></NotiHome>
        </div>
    );
};

export default ProductList;