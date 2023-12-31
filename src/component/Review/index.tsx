import React, { memo, useEffect, useState } from "react";
import { avatarUser, cartEmpty2, logo } from "../../assets/img";
import Pagination from "../Pagination/ReviewPagination/Pagination";
import {
  useAddDislikeReviewMutation,
  useAddLikeReviewMutation,
  useAddReportReviewMutation,
  useGetReviewQuery,
} from "../../services/review/reviewAPI";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";

interface ReviewListProps {
  id: string | undefined;
  onReviewLengthChange: (length: number) => void;
}
const ReviewList: React.FunctionComponent<ReviewListProps> = memo(
  ({ id, onReviewLengthChange }) => {
    const [page, setPage] = useState({ id: 1, size: 5 });

    const userInfo = useSelector(selectCurrentUser);

    const { data: reviewData } = useGetReviewQuery({
      book_id: Number(id),
      username: String(userInfo?.username),
      page_id: page.id,
      page_size: page.size,
    });

    const userName = useSelector(selectCurrentUser);

    const [addLikeReview] = useAddLikeReviewMutation();

    const [addDislikeReview] = useAddDislikeReviewMutation();

    const [addReportReview] = useAddReportReviewMutation();

    // const {data: likeReview} = useListLikeReviewQuery({username: userName?.username, reviewID: })

    const handleLikeReview = async (review_id: number) => {
      const v = await addLikeReview({
        reviewID: review_id,
      });
    };

    const handleDislikeReview = async (review_id: number) => {
      const v = await addDislikeReview({
        reviewID: review_id,
      });
    };

    const handleReportReview = async (review_id: number) => {
      const v = await addReportReview(review_id);
      if ("data" in v) {
        toast.success("You've report this");
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
          {reviewData?.reviews.map((item, index) => (
            <div key={index} className="review__item">
              <div className="review__item__heading">
                <div className="review__item__heading__left">
                  <div className="review__item__heading__left__user">
                    <img src={item?.image} alt="avatarUser" />
                    <p className="review__item__heading__left__user__name">
                      {item?.username}
                    </p>
                    <p className="review__item__heading__left__user__date">
                      {/* at{" "}
              {format(new Date(item?.created_at), "dd/MM/yyyy")} */}
                    </p>
                  </div>
                  <div className="review__item__heading__left__info">
                    <div className="review__item__heading__left__info__sumary">
                      <p>{item?.comments}</p>
                    </div>
                    <div className="review__item__heading__left__info__datail"></div>
                  </div>
                </div>
                <div className="review__item__heading__right">
                  <div className="review__item__heading__right__help">
                    {/* <p>Helpful?</p> */}
                    <div className="review__item__heading__right__help__behavior">
                      {item?.is_like ? (
                        <button
                          className="liked"
                          onClick={() => handleLikeReview(item?.id)}
                        >
                          <i className="bdx-arrow-2"></i>yes
                        </button>
                      ) : (
                        <button onClick={() => handleLikeReview(item?.id)}>
                          <i className="bdx-arrow-2"></i>yes
                        </button>
                      )}

                      {item?.is_dislike ? (
                        <button
                          className="dislike"
                          onClick={() => handleDislikeReview(item?.id)}
                        >
                          <i className="bdx-arrow-2"></i>no
                        </button>
                      ) : (
                        <button onClick={() => handleDislikeReview(item?.id)}>
                          <i className="bdx-arrow-2"></i>no
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="review__item__heading__right__spam">
                    <p>Spam?</p>
                    <button onClick={() => handleReportReview(item?.id)}>
                      <span>
                        <i className="bdx-close"></i>
                        Report
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
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
  }
);

export default ReviewList;
