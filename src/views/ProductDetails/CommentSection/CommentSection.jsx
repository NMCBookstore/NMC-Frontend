import React, { useContext, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  Divider,
  Avatar,
  Grid,
  Paper,
  Button,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectCurrentAccessToken,
  selectCurrentUserImage,
  selectCurrentUserName,
} from "../../../features/auth/authSlice";
import {
  useGetReviewQuery,
  useAddReviewMutation,
} from "../../../services/reviewAPI";
import { toast } from "react-hot-toast";
import CommentPagination from "./CommentPagination";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useGetUserQuery } from "../../../services/userAPI";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export default function Comment({ id, wishlist }) {
  const { data: user } = useGetUserQuery();
  const token = useSelector(selectCurrentAccessToken);

  const [page, setPage] = useState({ id: 1, size: 5 });

  const editorRef = useRef();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

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
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);

    event.preventDefault();
    try {
      await addReview({
        book_id: id,
        comments: html,
        rating: parseInt(values.rating),
      });
      toast.success("Your comment has been posted");
    } catch (err) {
      toast.error("Couldn't posted your comment");
    }
  };

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return token ? (
    <div style={{ padding: 14, width: "100%" }}>
      <h1>Comments</h1>

      {/* The add comment section */}
      <Paper component="form" style={{ padding: "40px 20px", width: "100%" }}>
        <Stack direction="column">
          <Stack direction="row" display="flex" alignItems="center" my={1}>
            <Avatar alt="Remy Sharp" src={token ? user?.image : imgLink} />

            <Typography variant="h6" sx={{ px: 2, textAlign: "left" }}>
              {token && user?.username && user?.username}
            </Typography>
          </Stack>
          <Rating
            name="rating"
            defaultValue={1}
            onChange={(e) => setValues({ ...values, rating: e.target.value })}
          />
          <Box sx={{ border: 1, my: 1 }}>
            <Editor
              ref={editorRef}
              editorStyle={{ height: 200 }}
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ width: "1%", marginTop: "10px" }}
            >
              Post
            </Button>
          </Box>
        </Stack>
      </Paper>

      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

      {/* The view other's comment section */}
      {!isFetching &&
        listReview?.reviews?.map((rev, index) => (
          <Paper key={rev?.id} style={{ padding: "40px 20px", width: "71rem" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={rev?.image} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>
                  {rev?.username}
                </h4>
                <Rating readOnly value={rev?.rating} />
                <p
                  style={{ textAlign: "left" }}
                  dangerouslySetInnerHTML={{ __html: rev?.comments }}
                />
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
          <Paper key={rev?.id} style={{ padding: "40px 20px", width: "71rem" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={token ? userImg : imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>
                  {rev?.username}
                </h4>
                <Rating readOnly value={rev?.rating} />
                <p
                  style={{ textAlign: "left" }}
                  dangerouslySetInnerHTML={{ __html: rev?.comments }}
                />
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
