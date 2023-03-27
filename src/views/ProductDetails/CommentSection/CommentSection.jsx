import React, { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Rating from "@mui/material/Rating";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import {
  Divider,
  Avatar,
  Grid,
  Paper,
  Button,
  Card,
  Stack,
  Typography,
  ThemeProvider,
  TextField,
} from "@mui/material";

import { Box } from "@mui/system";
import { Delete, Edit } from "@mui/icons-material";
import Rate from "./Rate";
import CommentSection from ".";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export default function Comment() {
  const comment= useRef("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComment((comments) => [...comments, comment]);
  };

  const onChangeHandler = () => {
    setComment(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      comment: data.get("comment"),
      value: data.get("value"),
    });
  };

  return (
    <div style={{ padding: 14 }}>
      <h1>Comments</h1>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        style={{ padding: "40px 20px" }}
      >
        <Stack direction="column">
          <Avatar alt="Remy Sharp" src={imgLink} />

          <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
          <Rate />
          <TextareaAutosize
            name="comment"
            value={comment.current.value}
            ref={comment.current.value}
            maxRows={100}
            minRows={10}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "10%", marginTop: "10px" }}
          >
            Submit
          </Button>
        </Stack>
      </Paper>

      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <Rate />
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
      </Paper>

      <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
            </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
