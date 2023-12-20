import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { articleImg } from "../../assets/img";
import BreadcrumbConponent from "../../component/Breadcrumb";
import Marquee from "../../component/Marquee";
import NotiHome from "../../component/NotiHome";
import ProductItem from "../../component/ProductItem";
import { articleItem } from "../../interface";
import { AllProduct } from "../../interface/Product";
import { useGetWishlistQuery } from "../../services/wishlist/wishlistAPI";

import { Combobox, Transition } from "@headlessui/react";
import { debounce } from "lodash";
import { useSearchParams } from "react-router-dom";
import ProductPagination from "../../component/Pagination/AllProductPagination/ProductPagination";
import { Genres } from "../../interface/Genres";
import { useGetSearchQuery } from "../../services/Search/searchAPI";
import { useGetGenresQuery } from "../../services/genres/genresAPI";

interface PriceFilter {
  key: string;
  value: string;
  minPrice?: number;
  maxPrice?: number;
}

const ProductList: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let searchInfo: Pick<
    AllProduct,
    | "page_id"
    | "page_size"
    | "min_price"
    | "max_price"
    | "text"
    | "genres_id"
    | "rating"
  > = {
    page_id: !isNaN(parseInt(searchParams.get("page_id") ?? "")) // Provide a default value using the nullish coalescing operator
      ? parseInt(searchParams.get("page_id") ?? "")
      : 1,
    page_size: !isNaN(parseInt(searchParams.get("page_size") ?? ""))
      ? parseInt(searchParams.get("page_size") ?? "")
      : 24,
    min_price: !isNaN(parseInt(searchParams.get("min_price") ?? ""))
      ? parseInt(searchParams.get("min_price") ?? "")
      : 0,
    max_price: !isNaN(parseInt(searchParams.get("max_price") ?? ""))
      ? parseInt(searchParams.get("max_price") ?? "")
      : 5000,
  };

  if (searchParams.get("text") !== null) {
    searchInfo.text = searchParams.get("text") ?? ""; // Provide a default value using the nullish coalescing operator
  }

  if (searchParams.get("genres_id") !== null) {
    searchInfo.genres_id = parseFloat(searchParams.get("genres_id") ?? "");
  }

  if (searchParams.get("rating") !== null) {
    searchInfo.rating = parseInt(searchParams.get("rating") ?? "");
  }

  const { data: allProduct } = useGetSearchQuery(searchInfo);

  const [isDataReady, setIsDataReady] = useState(false);

  const { data: genresData = [], isLoading } = useGetGenresQuery();
  const [genres, setGenres] = useState<Genres[]>([]);

  const [page, setPage] = useState({ id: 1, size: 24 });

  const [genre, setGenre] = useState("");
  const [genreID, setGenreID] = useState(
    searchParams.get("genres_id") ? searchParams.get("genres_id") : 0
  );
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (!isLoading && genresData.length > 0) {
      setGenres(genresData);
      setIsDataReady(true);
    }
  }, [isLoading, genresData]);

  const [query, setQuery] = useState<string>("");

  const debouncedSetQuery = debounce((newQuery) => {
    setQuery(newQuery);
    if (newQuery === "") {
      setQuery("");
    }
  }, 100); // Khoảng thời gian debounce

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    // Gọi hàm debounce để cập nhật query mới
    debouncedSetQuery(newQuery);
  };

  const handleGenresChange = (idGenre: any) => {
    searchInfo["page_id"] = 1;
    setGenre(idGenre);
    if (
      searchInfo.hasOwnProperty("genres_id") &&
      searchInfo.genres_id === idGenre
    ) {
      delete searchInfo.genres_id;
    } else {
      searchInfo["genres_id"] = idGenre;
    }

    setGenreID(searchInfo["genres_id"] ?? 0);
    setSearchParams(searchInfo as any);
  };

  const handlePriceChange = (item: PriceFilter) => {
    const newSearchInfo = { ...searchInfo };

    if (item.key === "none") {
      delete newSearchInfo.min_price;
      delete newSearchInfo.max_price;
    } else {
      newSearchInfo.min_price = item?.minPrice;
      newSearchInfo.max_price = item?.maxPrice;
    }

    setSearchParams(newSearchInfo as any);
  };

  const handlePagination = (pageNum: number, pageSize: number) => {
    searchInfo["page_id"] = pageNum;
    searchInfo["page_size"] = pageSize;
    setSearchParams(searchInfo as any);
  };

  const debouncedHandleTextSearch = debounce((event) => {
    event.persist();
    const newSearchInfo = { ...searchInfo };
    newSearchInfo.text = event.target.value;
    setSearchParams(newSearchInfo as any);
    console.log("search clicked and text: ", event.target.value);
  }, 300);

  const handleTextSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedHandleTextSearch(event);
  };

  const filterGenres = useMemo(() => {
    if (query === "") {
      return genres.slice(0, 50);
    } else {
      return genresData
        .filter((item) =>
          item?.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )
        .slice(0, 50);
    }
  }, [query, genres, genresData]);

  const [displayGenre, setDisplayGenre] = useState<null | string>(null);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      const selectedGenreId = filterGenres.find(
        (genre) => genre.name === event.target.value
      )?.id;
      console.log(selectedGenreId);
    }
  };

  useEffect(() => {
    if (searchInfo.genres_id) {
      // Lấy và thiết lập giá trị hiển thị tương ứng với genres_id
      const selectedGenre = filterGenres.find(
        (genre) => genre.id === searchInfo.genres_id
      );
      setDisplayGenre(selectedGenre?.name ?? null);
    } else {
      setDisplayGenre(null);
    }
  }, [searchInfo.genres_id, filterGenres]);

  const showSideBar = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const modalBackdrop = document.getElementById(
    "modal-backdrop"
  ) as HTMLElement;

  const handleClick = () => {
    showSideBar.current = !showSideBar.current;
    const element = elementRef.current;
    if (showSideBar.current && element) {
      modalBackdrop.setAttribute("data-show", "true");
      modalBackdrop.style.setProperty("opacity", "1");
      modalBackdrop.style.setProperty("left", "0vw");
      element.style.setProperty("left", "0px");
    } else if (!showSideBar.current && element) {
      modalBackdrop.setAttribute("data-show", "false");
      modalBackdrop.style.setProperty("opacity", "0");
      modalBackdrop.style.setProperty("left", "-100vw");
      element.style.setProperty("left", "-300px");
    }
  };
  const overWrite = () => {
    if (elementRef.current && modalBackdrop && window.innerWidth >= 1280) {
      showSideBar.current = false;
      modalBackdrop.setAttribute("data-show", "false");
      modalBackdrop.style.setProperty("opacity", "0");
      modalBackdrop.style.setProperty("left", "-100vw");
      elementRef.current.style.setProperty("left", "0px");
    } else if (elementRef.current && window.innerWidth < 1280) {
      elementRef.current.style.setProperty("left", "-300px");
    }
  };
  window.addEventListener("resize", overWrite);
  const { data: wishlist = [] } = useGetWishlistQuery();

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
  const priceFilter: PriceFilter[] = [
    { key: "none", value: "None" },
    { key: "over5000", value: "> 50$", minPrice: 50, maxPrice: Infinity },
    { key: "nomal", value: "10 - 50$", minPrice: 10, maxPrice: 50 },
    { key: "under100", value: "<10", minPrice: 0, maxPrice: 10 },
  ];
  return (
    <div className="bg-[#F9EEDE] mt-[76px] product-list" id="block-product">
      <Marquee></Marquee>
      <div className="mx-auto px-3 container-nmc">
        <BreadcrumbConponent></BreadcrumbConponent>
      </div>
      <div className="container-nmc px-3 mx-auto product-list__handle-sidebar mb-12">
        <div>
          <div
            ref={elementRef}
            className="product-list__handle-sidebar__sidebar"
          >
            <h2 className="product-list__handle-sidebar__sidebar__heading">
              sort by
            </h2>
            {/* <div className="product-list__handle-sidebar__sidebar__item"> */}
            <h3>price</h3>
            {/* <div className="product-list__handle-sidebar__sidebar__item__price"> */}
            {priceFilter.map((item) => (
              <div key={item.key}>
                <input
                  className="product-list__handle-sidebar__sidebar__item__price__input"
                  id={item.key}
                  type="radio"
                  value={item.value}
                  name="sortPrice"
                  onClick={() => handlePriceChange(item)}
                />
                <label htmlFor={`#${item.key}`}>{item.value}</label>
              </div>
            ))}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="product-list__handle-sidebar__sidebar__item"> */}
            <h3>name</h3>
            {/* <div className="product-list__handle-sidebar__sidebar__item__name"> */}
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
                <input type="radio" value="option2" name="sortName" />
                Name Z-A
              </label>
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* <div className="product-list__handle-sidebar__sidebar__item"> */}
            <h3>Sort</h3>
            {/* <div className="product-list__handle-sidebar__sidebar__item__name"> */}
            <div>
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={true}
                  name="sortPrice"
                />
                Price Low To High
              </label>
            </div>
            <div>
              <label>
                <input type="radio" value="option2" name="sortPrice" />
                Price High To Low
              </label>
            </div>
            {/* </div> */}
            {/* </div> */}
            <div className="product-list__handle-sidebar__sidebar__item">
              <h3>rating</h3>
              <div className="product-list__handle-sidebar__sidebar__item__rate">
                <div>
                  <input id="5start" type="checkbox" hidden />
                  <label htmlFor="5start">
                    <span>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                    </span>
                    <span
                      onClick={() => {
                        searchInfo["page_id"] = 1;
                        setRating(5);
                        if (searchInfo.hasOwnProperty("rating")) {
                          delete searchInfo.rating;
                        } else {
                          searchInfo.rating = 5;
                        }
                        setSearchParams(searchInfo as any);
                      }}
                    >
                      Five stars
                    </span>
                  </label>
                </div>
                <div>
                  <input id="4start" type="checkbox" hidden />
                  <label htmlFor="4start">
                    <span>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-star"></i>
                    </span>
                    <span
                      onClick={() => {
                        searchInfo["page_id"] = 1;
                        setRating(4);
                        if (searchInfo.hasOwnProperty("rating")) {
                          delete searchInfo.rating;
                        } else {
                          searchInfo.rating = 4;
                        }
                        setSearchParams(searchInfo as any);
                      }}
                    >
                      Four stars
                    </span>
                  </label>
                </div>
                <div>
                  <input id="3start" type="checkbox" hidden />
                  <label htmlFor="3start">
                    <span>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-star"></i>
                      <i className="bdx-star"></i>
                    </span>
                    <span
                      onClick={() => {
                        searchInfo["page_id"] = 1;
                        setRating(3);
                        if (searchInfo.hasOwnProperty("rating")) {
                          delete searchInfo.rating;
                        } else {
                          searchInfo.rating = 3;
                        }
                        setSearchParams(searchInfo as any);
                      }}
                    >
                      Three stars
                    </span>
                  </label>
                </div>
                <div>
                  <input id="2start" type="checkbox" hidden />
                  <label htmlFor="2start">
                    <span>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-star"></i>
                      <i className="bdx-star"></i>
                      <i className="bdx-star"></i>
                    </span>
                    <span
                      onClick={() => {
                        searchInfo["page_id"] = 1;
                        setRating(2);
                        if (searchInfo.hasOwnProperty("rating")) {
                          delete searchInfo.rating;
                        } else {
                          searchInfo.rating = 2;
                        }
                        setSearchParams(searchInfo as any);
                      }}
                    >
                      Two stars
                    </span>
                  </label>
                </div>
                <div>
                  <input id="1start" type="checkbox" hidden />
                  <label htmlFor="1start">
                    <span>
                      <i className="bdx-start-fill"></i>
                      <i className="bdx-star"></i>
                      <i className="bdx-star"></i>
                      <i className="bdx-star"></i>
                      <i className="bdx-star"></i>
                    </span>
                    <span
                      onClick={() => {
                        searchInfo["page_id"] = 1;
                        setRating(1);
                        if (searchInfo.hasOwnProperty("rating")) {
                          delete searchInfo.rating;
                        } else {
                          searchInfo.rating = 1;
                        }
                        setSearchParams(searchInfo as any);
                      }}
                    >
                      One stars
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <button onClick={() => handleClick()}>Close</button>
          </div>
          <div
            onClick={() => handleClick()}
            id="modal-backdrop"
            className="modal-backdrop"
          ></div>
        </div>
        <div className="product-list__handle-sidebar__items">
          <div className="row gap-4 mb-8">
            <button
              className="product-list__handle-sidebar__items__show-menu h-[48px] shadow-md"
              onClick={() => handleClick()}
            >
              <span>SORT</span>
              <i className="bdx-caret"></i>
            </button>
            <Combobox disabled={isLoading}>
              <div className="relative w-fit md:grow">
                <div className="relative md:grow border border-primary border-solid w-full cursor-default overflow-hidden rounded-full text-left shadow-md focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                  <Combobox.Input
                    className="w-fit md:grow border-none py-3 px-6 text-[16px] leading-[150%] focus:ring-0 capitalize text-primary bg-[transparent] font-semibold focus:outline-none"
                    displayValue={(genre: Genres) =>
                      genre?.name ?  genre.name : 'null'
                    }
                    placeholder="Search genres..."
                    onChange={handleInputChange}
                    onKeyDown={(event) => {
                      handleKeyPress(event);
                    }}
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
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute mt-1 max-h-[264px] w-fit overflow-auto rounded-md bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[100]">
                    {filterGenres.length === 0 && query !== "" ? (
                      <div className="font-semibold relative cursor-default select-none px-4 py-2 text-primary">
                        Nothing found.
                      </div>
                    ) : (
                      filterGenres.map((item) => (
                        <Combobox.Option
                          key={item.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 px-6 rounded-xl ${
                              active ? "bg-primary text-white" : "text-primary"
                            }`
                          }
                          value={item}
                          onClick={() => handleGenresChange(item?.id)}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block leading-[24px] truncate ${
                                  selected ? "font-semibold" : "font-medium"
                                }`}
                              >
                                {item.name}
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
              {/* Search text */}
              <input
                className="px-[24px] w-full h-full rounded-full shadow-md"
                type="text"
                placeholder="Search by Title, Author, ISBN or Keywords"
                defaultValue={searchInfo.text}
                onChange={(e) => {
                  // setText(e.target.value);
                  handleTextSearch(e);
                  delete searchInfo.text;
                }}
              />
              <i className="bdx-search flex items-center absolute text-[20px] text-[#595959] right-[24px] cursor-pointer"></i>
            </div>
          </div>
          <div className="row gap-y-[24px] sm:gap-y-[8px]">
            {/* here is all item */}
            {allProduct?.books ? (
              allProduct.books.map((item) => (
                <div className="sm:w-[50%] md:w-[33.33%] w-[25%] product-list__handle-sidebar__items__detail">
                  <ProductItem
                    key={item?.id}
                    itemDetail={item}
                    wishlistItem={wishlist}
                  ></ProductItem>
                </div>
              ))
            ) : (
              <div className="row gap-y-[24px] sm:gap-y-[8px]">
                <p>No books available</p>
              </div>
            )}
          </div>
          <ProductPagination
            total={Number(allProduct?.total_page)}
            setCurrentPage={setPage}
            page={page.id}
            handlePagination={handlePagination}
            target="block-product"
          />
        </div>
      </div>
      <section className="product-detail__recommend">
        <div className="container-nmc px-3 mx-auto">
          <h2 className="product-detail__recommend__heading">
            You may also like
          </h2>
          <div className="product-detail__recommend__list">
            {/* <Slider {...productListSettings}>
              {productList2.map((item) => (
                <ProductItem
                  key={item?.id}
                  itemDetail={item}
                  wishlistItem={wishlist}
                ></ProductItem>
              ))}
            </Slider> */}
          </div>
        </div>
      </section>
      <div className="bg-[#FFE8AD] blog">
        <div className="mx-auto px-3 container-nmc py-[60px] sm:py-[40px]">
          <i className="bdx-book text-primary text-[32px] flex justify-center"></i>
          <h2 className="text-primary text-center mb-10 sm:mb-4">Our Blog</h2>
          <div className="blog_list row mb-8 sm:mb-6 gap-y-6">
            {articleList.slice(0, 6).map((item, index) => (
              <div key={index} className="blog_list_item md:w-[100%] w-[50%]">
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
            <button className="px-6 py-3 sm:px-4 sm:py-2 uppercase rounded-xl border border-primary border-solid sm:text-[12px]">
              View All
            </button>
          </div>
        </div>
      </div>
      <NotiHome></NotiHome>
    </div>
  );
};

export default ProductList;
