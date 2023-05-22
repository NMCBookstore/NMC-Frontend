import React, { useContext, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Divider, Avatar, Grid, Paper, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectCurrentAccessToken,
  selectCurrentUserImage,
  selectCurrentUserName,
} from "../../../features/auth/authSlice";
import { useGetReviewQuery } from "../../../services/reviewAPI";
import { useParams } from "react-router-dom";
import { useAddReviewMutation } from "../../../services/reviewAPI";
import { toast } from "react-hot-toast";
import CommentPagination from "./CommentPagination";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export default function Comment({ id }) {
  const userImg = useSelector(selectCurrentUserImage);
  const useName = useSelector(selectCurrentUserName);
  const token = useSelector(selectCurrentAccessToken);

  const [page, setPage] = useState({ id: 1, size: 5 });

  const { data: listReview, isFetching } = useGetReviewQuery({
    book_id: id,
    page_id: page.id,
    page_size: page.size,
  });

  const handleCommentChange = (id, size) => {
    setPage({ id, size });
  };

  // const comment = useRef("");
  // const [comments, setComments] = useState({});

  const [values, setValues] = useState({
    id: id,
    comments: "",
    rating: 0,
  });

  const [addReview] = useAddReviewMutation(id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addReview({
        book_id: id,
        comments: values.comments,
        rating: parseInt(values.rating),
      });
      toast.success("Your comment has been posted");
      // console.log(values);
    } catch (err) {
      toast.error("Couldn't posted your comment");
    }
  };

  return token ? (
    <div style={{ padding: 14 }}>
      <h1>Comments</h1>

      {/* The add comment section */}
      <Paper component="form" style={{ padding: "40px 20px", width: "90rem" }}>
        <Stack direction="column">
          <Avatar alt="Remy Sharp" src={token ? userImg : imgLink} />

          {/* <h4 style={{ margin: 0, textAlign: "left" }}>{useName}</h4> */}
          <Rating
            name="rating"
            defaultValue={1}
            onChange={(e) => setValues({ ...values, rating: e.target.value })}
          />
          <TextareaAutosize
            name="comments"
            rowsMin={8}
            rowsMax={8}
            maxRows={10}
            minRows={3}
            onChange={(e) => setValues({ ...values, comments: e.target.value })}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ width: "10%", marginTop: "10px" }}
          >
            Submit
          </Button>
        </Stack>
      </Paper>

      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

      {/* The view other's comment section */}
      {!isFetching &&
        listReview?.reviews?.map((rev, index) => (
          <Paper key={index} style={{ padding: "40px 20px", width: "90rem" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={token ? userImg : imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>
                  {rev?.username}
                </h4>
                <Rating readOnly value={rev?.rating} />
                <p style={{ textAlign: "left" }}>{rev?.comments}</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted on {rev?.created_at}
                </p>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          </Paper>
        ))}
      <CommentPagination
        data={listReview}
        handleCommentChange={handleCommentChange}
      />
    </div>
  ) : (
    <div style={{ padding: 14 }}>
      <h1>Comments</h1>

      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

      {/* The view other's comment section */}
      {!isFetching &&
        listReview?.reviews?.map((rev, index) => (
          <Paper key={index} style={{ padding: "40px 20px", width: "90rem" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={token ? userImg : imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>
                  {rev?.username}
                </h4>
                <Rating readOnly value={rev?.rating} />
                <p style={{ textAlign: "left" }}>{rev?.comments}</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted on {rev?.created_at}
                </p>
              </Grid>
            </Grid>
          </Paper>
        ))}
      <CommentPagination
        data={listReview}
        handleCommentChange={handleCommentChange}
      />
    </div>
  );
}
