import React, { useEffect, useRef, useState } from "react";
import Fancybox from "../../component/Fancybox/Fancy";
import Carousel from "../../component/Fancybox/Carousel";
import Marquee from "../../component/Marquee";
import BreadcrumbConponent from "../../component/Breadcrumb";
import { productBaner } from "../../assets/img";
import { Product } from "../../interface/Product";
import {
  useAddToWishlistMutation,
  useGetWishlistQuery,
} from "../../services/wishlist/wishlistAPI";
import NotiHome from "../../component/NotiHome";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../services/product/productAPI";
import { useAddToCartMutation } from "../../services/cart/cartAPI";
import toast from "react-hot-toast";
import ReviewList from "../../component/Review";

const ProductDetail: React.FunctionComponent = () => {
  const { id } = useParams();

  const [books, setBook] = useState<Product>();

  const { data: wishlist = [] } = useGetWishlistQuery();

  const {
    data: bookData,
    isFetching,
    isLoading,
  } = useGetProductDetailsQuery(Number(id));

  useEffect(() => {
    if (!isLoading && bookData) {
      // Xử lý dữ liệu books khi có dữ liệu mới từ API
      setBook(bookData);
    }
  }, [isLoading, bookData]);

  let dataCountBook = document.getElementById("inputId") as HTMLInputElement;
  function incrementCount() {
    dataCountBook.value = String(Number(dataCountBook.value) + 1);
  }

  function decrementCount() {
    dataCountBook.value =
      Number(dataCountBook.value) > 1
        ? String(Number(dataCountBook.value) - 1)
        : String(1);
  }

  const [reviewLength, setReviewLength] = useState<number | null>(null);

  const handleReviewLengthChange = (length: number) => {
    setReviewLength(length);
  };

  const [addWishList] = useAddToWishlistMutation();

  const [addToCart] = useAddToCartMutation();

  const showFullContent = useRef(false);

  const elementRef = useRef<HTMLDivElement>(null);

  const handleAddToWishList = async () => {
    const v = await addWishList(Number(id));
    if ("data" in v) {
      toast.success("Added to your wishlist");
    }
  };

  const handleAddToCart = async () => {
    const v = await addToCart({
      book_id: Number(id),
      amount: Number(dataCountBook.value),
    });
    if ("data" in v) {
      toast.success("Added to your cart");
    }
  };

  const handleClick = () => {
    showFullContent.current = !showFullContent.current;
    const element = elementRef.current;
    if (element) {
      const height = showFullContent.current ? element.offsetHeight : 0;
      const content = document.getElementById("showMain") as HTMLElement;
      const btnShow = document.getElementById("btnShow") as HTMLButtonElement;
      content.style.setProperty("max-height", `${height}px`);
      btnShow.style.setProperty("opacity", `0`);
      setTimeout(() => {
        btnShow.style.setProperty("display", 'none');
      }, 300);
    }
  };
  return (
    <div className="product-detail bg-[#F9EEDE] mt-[76px]">
      <Marquee></Marquee>
      <div className="mx-auto px-3 container-nmc">
        {/* <BreadcrumbConponent></BreadcrumbConponent> */}
      </div>
      {!isLoading && (
        <section className="mx-auto px-3 container-nmc pt-8 pb-[100px]">
          <div className="product-detail__item">
            <div className="row gap-y-8 justify-center">
              <div className="md:w-[100%] lg:w-[80%] w-[50%]">
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                  imageLength={Number(books?.image.length)}
                >
                  <Carousel
                    options={{
                      infinite: false,
                      Dots: false,
                      Navigation: false,
                      Thumbs: {
                        type: "classic",
                        Carousel: {
                          slidesPerPage: 1,
                          Navigation: false,
                          center: true,
                          fill: true,
                          dragFree: true,
                          axis: "y",
                          breakpoints: {
                            "(max-width: 576px)": {
                              axis: "x",
                            },
                          },
                        },
                      },
                    }}
                  >
                    {books?.image.map((item, index) => (
                      <div
                        key={index}
                        className="f-carousel__slide"
                        data-thumb-src={item}
                        data-fancybox="gallery"
                        data-src={item}
                      >
                        <img alt="" data-lazy-src={item} />
                      </div>
                    ))}
                  </Carousel>
                </Fancybox>
              </div>
              <div className="lg:w-[100%] w-[50%]">
                <div className="product-detail__item__heading">
                  <h1>{books?.name}</h1>
                  <p className="product-detail__item__heading__author">
                    By <span>{books?.author}</span>
                  </p>
                  <div className="product-detail__item__heading__rate">
                    <div className="product-detail__item__heading__rate__start">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={
                            index < Number(books?.rating)
                              ? "bdx-start-fill"
                              : "bdx-star"
                          }
                        ></i>
                      ))}
                    </div>
                    <span className="mx-3 text-gray">|</span>
                    <p className="product-detail__item__heading__rate__note">
                      <span>{books?.rating}</span> (
                      {reviewLength !== null && (
                        <span>{reviewLength ? reviewLength : 0}</span>
                      )}{" "}
                      reviews)
                    </p>
                  </div>
                </div>
                <div className="product-detail__item__info">
                  {books?.sale === 0 ? (
                    <p className="product-detail__item__info__price">
                      $ <span>{books?.price}</span>
                    </p>
                  ) : (
                    <>
                      <p className="product-detail__item__info__price">
                        ${" "}
                        <span>
                          {" "}
                          {(
                            Number(books?.price) *
                            (1 - Number(books?.sale) / 100)
                          ).toFixed(2)}
                        </span>
                      </p>
                      <div className="product-detail__item__info__discount">
                        <p className="product-detail__item__info__discount__oldprice">
                          $ <span>{books?.price}</span>
                        </p>
                        <p className="product-detail__item__info__discount__percent">
                          Save <span>{books?.sale}</span> %
                        </p>
                      </div>
                    </>
                  )}

                  <div className="product-detail__item__info__quantity">
                    <p className="product-detail__item__info__quantity__title">
                      Amount:
                    </p>
                    <div className="qty-input">
                      <button
                        className="qty-count qty-count--minus"
                        data-action="minus"
                        onClick={decrementCount}
                        type="button"
                      >
                        -
                      </button>
                      <input
                        className="product-qty"
                        type="number"
                        name="product-qty"
                        min="0"
                        max="100"
                        value="1"
                        readOnly
                        id="inputId"
                      ></input>
                      <button
                        className="qty-count qty-count--add"
                        data-action="add"
                        onClick={incrementCount}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="product-detail__item__info__behavior">
                    <button
                      onClick={handleAddToCart}
                      className="product-detail__item__info__behavior__addtocart"
                    >
                      <i className="bdx-cart-fill"></i>
                      <span>Add to cart</span>
                    </button>
                    {wishlist?.some(
                      (item: any) => item.book.id === Number(id)
                    ) ? (
                      <button
                        disabled
                        className="product-detail__item__info__behavior__addtowishlist"
                      >
                        <i className="bdx-heart-1"></i>
                        <span>Already in your wishlist</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleAddToWishList}
                        className="product-detail__item__info__behavior__addtowishlist"
                      >
                        <i className="bdx-heart-1"></i>
                        <span>Add to wishlist</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail__content">
            <div className="row">
              <div className="w-[75%]">
                <div
                  className="product-detail__content__overview relative"
                  id="review-block"
                >
                  <div className="product-detail__content__overview__main">
                    <h2 className="product-detail__content__overview__main__heading">
                      Overview
                    </h2>
                    <div
                      className="product-detail__content__overview__main__des"
                      id={`${showFullContent ? "showMain" : ""}`}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: String(books?.description),
                        }}
                        ref={elementRef}
                      />
                    </div>
                  </div>
                  <div id={`${showFullContent ? "btnShow" : ""}`}>
                    <button onClick={() => handleClick()}>
                      <i className="bdx-arrow-2"></i> Read more
                    </button>
                  </div>
                </div>

                <div className="product-detail__content__review">
                  <div className="product-detail__content__review__heading">
                    <h2>Reviews</h2>
                    <div>
                      <div className="product-detail__content__review__heading__start">
                        {[...Array(5)].map((_, index) => (
                          <i
                            key={index}
                            className={
                              index < Number(books?.rating)
                                ? "bdx-start-fill"
                                : "bdx-star"
                            }
                          ></i>
                        ))}
                      </div>
                      <span className="mx-3 text-gray">|</span>
                      <p className="product-detail__content__review__heading__note">
                        <span>{books?.rating} </span>(
                        <span>{reviewLength ? reviewLength : 0}</span> reviews)
                      </p>
                    </div>
                  </div>
                  <ReviewList
                    id={id}
                    onReviewLengthChange={handleReviewLengthChange}
                  ></ReviewList>
                </div>
              </div>
              <div className="w-[25%]">
                <img src={productBaner} alt="productBaner" />
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="product-detail__recommend">
        <div className="container-nmc px-3 mx-auto">
          <h2 className="product-detail__recommend__heading">
            You may also like
          </h2>
          <div className="product-detail__recommend__list">
            {/* <Slider {...productListSettings}>
              {productList.map((item, index) => (
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
      <NotiHome></NotiHome>
    </div>
  );
};

export default ProductDetail;
