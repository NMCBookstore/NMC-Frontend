import React, { useEffect, useState } from "react";
import { avatarUser, logo } from "../../assets/img";
import Pagination from "../Pagination/ReviewPagination/Pagination";
import {
  useAddLikeReviewMutation,
  useGetReviewQuery,
} from "../../services/review/reviewAPI";
import { format } from "date-fns";
import toast from "react-hot-toast";

interface ReviewListProps {
  id: string | undefined;
  onReviewLengthChange: (length: number) => void;
}
const ReviewList: React.FunctionComponent<ReviewListProps> = ({
  id,
  onReviewLengthChange,
}) => {
  const [page, setPage] = useState({ id: 1, size: 5 });

  const { data: reviewData } = useGetReviewQuery({
    book_id: Number(id),
    page_id: page.id,
    page_size: page.size,
  });
  console.log(reviewData);

  const [addLikeReview] = useAddLikeReviewMutation();

  const handleAddLikeReview = (username: string, id_review: number) => {
    const v = addLikeReview({ username: username, reviewID: id_review });
    console.log(username, id_review)
    if ("data" in v) {
      toast.success("You've like this review");
    }
  };

  const reviewLength = Number(reviewData?.reviews?.length);
  useEffect(() => {
    if (reviewLength !== null) {
      onReviewLengthChange(reviewLength);
    }
  }, [reviewLength, onReviewLengthChange]);
  return (
    <>
      <div className="product-detail__content__review__list">
        {reviewData?.reviews &&
          reviewData?.reviews.map((item, index) => (
            <div key={index} className="review__item">
              <div className="review__item__heading">
                <div className="review__item__heading__left">
                  <div className="review__item__heading__left__user">
                    <img src={item?.image} alt="avatarUser" />
                    <p className="review__item__heading__left__user__name">
                      {item?.username}
                    </p>
                    <p className="review__item__heading__left__user__date">
                      at {format(new Date(item?.created_at), "dd/MM/yyyy")}
                    </p>
                  </div>
                  <div className="review__item__heading__left__info">
                    <div className="review__item__heading__left__info__sumary">
                      <p>
                        Reviews: <span>1075</span>
                      </p>
                      <p>
                        Votes: <span>347</span>
                      </p>
                    </div>
                    <div className="review__item__heading__left__info__datail">
                      <p>
                        Rate:
                        <span>
                          <i className="bdx-start-fill"></i>
                          <i className="bdx-start-fill"></i>
                          <i className="bdx-start-fill"></i>
                          <i className="bdx-start-fill"></i>
                          <i className="bdx-start-fill"></i>
                        </span>
                      </p>
                      <p>
                        Vote in this review: <span>10</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review__item__heading__right">
                  <div className="review__item__heading__right__help">
                    <p>Helpful?</p>
                    <div className="review__item__heading__right__help__behavior">
                      <button
                        onClick={() =>
                          handleAddLikeReview(item?.username, item?.id)
                        }
                      >
                        <i className="bdx-arrow-2"></i>yes
                      </button>
                      <button>
                        <i className="bdx-arrow-2"></i>no
                      </button>
                    </div>
                  </div>
                  <div className="review__item__heading__right__spam">
                    <p>Spam?</p>
                    <button>
                      <span>
                        <i className="bdx-close"></i>Report
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p>{item?.comments}</p>
              </div>
            </div>
          ))}
      </div>
      <Pagination
        total={Number(reviewData?.total_page)}
        setCurrentPage={setPage}
        page={page.id}
        target="review-block"
      />
    </>
  );
};

export default ReviewList;
