import { Delete, PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  CardActionArea,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { isValidImageList } from "../../../utils/helper";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toast } from "react-hot-toast";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useListSubGenresQuery } from "../../../services/subGenresAPIs";
import { useCreateNewBookMutation } from "../../../services/productAdminAPI";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import getSubgenreGroup from "./getSubgenreGroup";

export default function CreateNewBook() {
  const navigate = useNavigate();
  const { data: listSubgenre } = useListSubGenresQuery();
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { data: genres } = useGetGenresQuery();
  const [genreID, setGenreID] = useState([]);
  const [subgenreID, setSubgenreID] = useState([]);
  const [createNewBook, { isLoading }] = useCreateNewBookMutation();
  const [subgenres, setSubgenres] = useState([]);

  const editorRef = useRef();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [bookInfo, setBookInfo] = useState({
    name: "",
    price: 0,
    author: "",
    publisher: "",
    quantity: 0,
  });

  const handleGenreChange = (event, option) => {
    if (option.length > 0) {
      setGenreID(option.map((item) => item.id));

      let subGenre = getSubgenreGroup(
        option,
        bookInfo?.subgenres ? bookInfo?.subgenres : []
      );
      setBookInfo({ ...bookInfo, genres: option, subgenres: subGenre });

      let subgenresFromGenreID = getSubgenreGroup(option, listSubgenre);
      setSubgenres(
        subgenresFromGenreID.slice().sort((a, b) => a.genres_id - b.genres_id)
      );
    } else {
      setGenreID([]);
      setSubgenreID([]);
      setBookInfo({ ...bookInfo, genres: option, subgenres: option });
      setSubgenres([]);
    }
  };

  const handleSubgenreChange = (event, option) => {
    if (option.length > 0) {
      setSubgenreID(option.map((item) => item.id));
    } else {
      setSubgenreID([]);
    }
    setBookInfo({ ...bookInfo, subgenres: option });
  };

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const onSelectFile = (e) => {
    if (isValidImageList(selectedFiles)) {
      const selectedFilesArr = Array.from(e.target.files);
      setSelectedFiles(selectedFiles.concat(selectedFilesArr));

      const imagesArr = selectedFilesArr.map((file) => {
        return URL.createObjectURL(file);
      });

      setSelectedImage(selectedImage.concat(imagesArr));
    }
  };

  const handleCreateBook = async () => {
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);
    const formData = new FormData();

    if (html === "<p><br></p>" && html.length < 20) {
      toast.error("Please enter a longer description");
    } else {
      formData.append("description", html);
    }
    if (bookInfo.name.length < 6) {
      toast.error("Book name must be in 5 in length");
    } else {
      formData.append("name", bookInfo.name);
    }
    if (bookInfo.author.length < 5) {
      toast.error("Author name have at least 5 character in length");
    } else {
      formData.append("author", bookInfo.author);
    }
    if (parseFloat(bookInfo.price) < 1000) {
      toast.error("Book price must be larger than 1000");
    } else {
      formData.append("price", parseFloat(bookInfo.price));
    }
    if (bookInfo.publisher.length < 5) {
      toast.error("Publisher name must have at least 5 in length ");
    } else {
      formData.append("publisher", bookInfo.publisher);
    }
    if (bookInfo.quantity === 0 && bookInfo.quantity > 1000) {
      toast.error("Quantity is not valid");
    } else {
      formData.append("quantity", bookInfo.quantity);
    }
    if (genreID.length < 1) {
      toast.error("Book must have at least 1 genre");
    } else {
      genreID.forEach((file) => {
        formData.append("genres_id", file);
      });
    }
    if (subgenreID.length < 1) {
      toast.error("Book must have at least 1 subgenre");
    } else {
      subgenreID.forEach((file) => {
        formData.append("subgenres_id", file);
      });
    }
    if (selectedFiles.length < 5) {
      toast.error("Must have 5 image at least");
    } else {
      selectedFiles.forEach((file) => {
        formData.append("image", file);
      });
    }

    const uniqueKeys = new Set();
    for (let pair of formData.entries()) {
      const [key] = pair;
      uniqueKeys.add(key);
    }

    const numFields = uniqueKeys.size;

    if (numFields == 9) {
      const v = await createNewBook(formData);
      if (v.data) {
        toast.success("New book created");
        navigate("/admin/manage-book");
      } else if (v.error && v.error.status === 400) {
        toast.error("Can't not create new book");
      }
    } else {
      toast.error("Please fill all the field");
    }
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
                  name="name"
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, name: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="column" spacing={3}>
                  <TextField
                    id="outlined-basic"
                    label="Price"
                    type="number"
                    name="price"
                    variant="outlined"
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, price: e.target.value })
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="Quantity"
                    type="number"
                    name="quantity"
                    variant="outlined"
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, quantity: e.target.value })
                    }
                  />
                  <Autocomplete
                    multiple
                    disablePortal
                    limitTags={3}
                    id="multiple-limit-tags"
                    options={genres ? genres : []}
                    getOptionLabel={(option) => option?.name}
                    renderInput={(params) => (
                      <TextField {...params} label="Genres" />
                    )}
                    onChange={(e, option) => handleGenreChange(e, option)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="column" spacing={3}>
                  <TextField
                    id="outlined-basic"
                    label="Author"
                    variant="outlined"
                    name="author"
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, author: e.target.value })
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="Publisher"
                    variant="outlined"
                    name="Publisher"
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, publisher: e.target.value })
                    }
                  />
                  <Autocomplete
                    multiple
                    disablePortal
                    limitTags={3}
                    id="multiple-limit-tags"
                    options={subgenres ? subgenres : []}
                    getOptionLabel={(option) => option?.name}
                    renderInput={(params) => (
                      <TextField {...params} label="Subgenres" />
                    )}
                    onChange={(e, option) => {
                      handleSubgenreChange(e, option);
                    }}
                    value={
                      bookInfo?.subgenres && listSubgenre
                        ? bookInfo.subgenres.map(
                            (item) => listSubgenre[item.id - 1]
                          )
                        : []
                    }
                    groupBy={(genre) => genres[genre.genres_id - 1].name}
                    renderGroup={(params) => (
                      <Typography sx={{ px: 2 }}>
                        <Typography
                          variant="body2"
                          sx={{ pt: 2, color: "#7599cc" }}
                        >
                          {params.group}
                        </Typography>
                        <Typography variant="body1" sx={{ pt: 1 }}>
                          {params.children}
                        </Typography>
                      </Typography>
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
            <ImageList sx={{ height: 450, border: 1 }} cols={3} rowHeight={350}>
              {selectedImage &&
                selectedImage.map((image, index) => {
                  return (
                    <CardActionArea key={image}>
                      <ImageListItem>
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
                                const updatedSelectedFiles = [...selectedFiles];
                                updatedSelectedFiles.splice(index, 1);
                                setSelectedFiles(updatedSelectedFiles);
                              }}
                            >
                              <Delete sx={{ color: "#e55039" }} />
                            </IconButton>
                          }
                          actionPosition="right"
                        />
                        {index}
                      </ImageListItem>
                    </CardActionArea>
                  );
                })}
            </ImageList>
          </Grid>

          <Grid xs={12} md={12}>
            <Box sx={{ border: 1 }}>
              <Editor
                ref={editorRef}
                editorStyle={{ height: 200 }}
                editorState={editorState}
                onEditorStateChange={setEditorState}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            disabled={isLoading}
            sx={{ width: "10%", marginTop: "10px", mr: 3 }}
            onClick={() => navigate("/admin/manage-book")}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleCreateBook}
            disabled={isLoading}
            sx={{ width: "10%", marginTop: "10px" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
