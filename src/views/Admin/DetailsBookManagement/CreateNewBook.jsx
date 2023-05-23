import { Delete, PhotoCamera } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { isValidImageList } from "../../../utils/helper";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { toast } from "react-hot-toast";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useGetSubGenresQuery } from "../../../services/subGenresAPIs";

export default function CreateNewBook() {
  const [selectedImage, setSelectedImage] = useState([]);

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    if (isValidImageList(selectedFiles)) {
      const selectedFilesArr = Array.from(selectedFiles);
      const imagesArr = selectedFilesArr.map((file) => {
        return URL.createObjectURL(file);
      });

      setSelectedImage((prevImage) => prevImage.concat(imagesArr));
    } else {
      toast.error("Only png, jpeg, jpg files accepted");
    }
  };

  const [id, setId] = useState(0);
  const { data: genres } = useGetGenresQuery();
  const { data: subGenres } = useGetSubGenresQuery(id, { skip: !id });

  console.log(subGenres);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handlePrintValue = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const a = draftToHtml(rawContentState);
    console.log(a);
  };

  return (
    <>
      <Box sx={{ my: 5 }}>
        <Typography variant="h5" sx={{ my: 2 }}>
          Create book
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Grid container spacing={1} sx={{ mt: 5 }}>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Name of the book"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="column" spacing={3}>
                  <TextField
                    id="outlined-basic"
                    label="Price"
                    type="number"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Quantity"
                    type="number"
                    variant="outlined"
                  />
                  <Autocomplete
                    disablePortal
                    options={genres}
                    getOptionLabel={(option) => option?.name}
                    // sx={{ zIndex: 1, marginBottom: 2 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Genres" />
                    )}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="column" spacing={3}>
                  <TextField
                    id="outlined-basic"
                    label="Author"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Publisher"
                    variant="outlined"
                  />
                  <Autocomplete
                    key={id}
                    // disablePortal
                    id="filter-demo2"
                    options={subGenres ? subGenres : []}
                    getOptionLabel={(option) => option?.name}
                    sx={{ width: "90%", zIndex: 1, marginBottom: 2 }}
                    renderInput={(params) => (
                      <TextField {...params} label="SubGenres" />
                    )}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Stack direction="row" spacing={3}>
                <Typography variant="h6">Upload image list</Typography>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#3498db",
                    "&:hover": {
                      backgroundColor: "#27b7b7",
                    },
                  }}
                >
                  <input
                    hidden
                    accept="image/png, image/jpg, image/jpeg"
                    multiple
                    type="file"
                    onChange={onSelectFile}
                  />
                  <PhotoCamera />
                </Button>
              </Stack>
            </Box>
            <ImageList sx={{ height: 450, border: 1 }} cols={3} rowHeight={164}>
              {selectedImage &&
                selectedImage.map((image, index) => {
                  return (
                    <ImageListItem key={image}>
                      <img src={image} />
                      <ImageListItemBar
                        sx={{
                          background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, " +
                            "rgba(0,0,0,0.0) 70%, rgba(0,0,0,0) 100%)",
                        }}
                        actionIcon={
                          <IconButton
                            onClick={() => {
                              setSelectedImage(
                                selectedImage.filter((e) => e !== image)
                              );
                              console.log(image);
                            }}
                          >
                            <Delete sx={{ color: "#e55039" }} />
                          </IconButton>
                        }
                        actionPosition="right"
                      />
                      {index}
                    </ImageListItem>
                  );
                })}
            </ImageList>
          </Grid>

          <Grid xs={12} md={12}>
            <Box sx={{ border: 1 }}>
              <Editor
                editorStyle={{ height: 200 }}
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{ width: "10%", marginTop: "10px", mr: 3 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handlePrintValue}
            sx={{ width: "10%", marginTop: "10px" }}
          >
            Submit
          </Button>
          {/* </Stack> */}
        </Box>
      </Box>
    </>
  );
}
