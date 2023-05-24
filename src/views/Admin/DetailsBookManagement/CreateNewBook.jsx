import { Delete, PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  CardActionArea,
  FormControl,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { isValidImageList } from "../../../utils/helper";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toast } from "react-hot-toast";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useGetSubGenresQuery } from "../../../services/subGenresAPIs";
import { useCreateNewBookMutation } from "../../../services/productAdminAPI";
import { useNavigate } from "react-router-dom";

export default function CreateNewBook() {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const onSelectFile = (e) => {
    if (isValidImageList(selectedFiles)) {
      const previewImage = Array.from(e.target.files);
      setSelectedFiles(Array.from(e.target.files));

      const imagesArr = previewImage.map((file) => {
        return URL.createObjectURL(file);
      });

      setSelectedImage((prevImage) => prevImage.concat(imagesArr));
    } else {
      toast.error("Only png, jpeg, jpg files accepted");
    }
  };

  const [id, setId] = useState(0);
  const [idSubgenres, setIdSubgenres] = useState(0);
  const { data: genres } = useGetGenresQuery();
  const { data: subGenres } = useGetSubGenresQuery(id, { skip: !id });
  const [genre, setGenre] = useState("");
  const [subgenre, setSubgenre] = useState("");

  const [bookInfo, setBookInfo] = useState({
    name: "",
    price: 0,
    author: "",
    publisher: "",
    quantity: 0,
  });

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    setId(event.target.value);
  };

  const handleSubgenreChange = (event) => {
    setSubgenre(event.target.value);
    setIdSubgenres(event.target.value);
  };

  const [editorState, setEditorState] = useState("");

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const [createNewBook] = useCreateNewBookMutation();

  const handleCreateBook = () => {
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);

    const formData = new FormData();

    formData.append("name", bookInfo.name);
    formData.append("price", bookInfo.price);
    formData.append("author", bookInfo.author);
    formData.append("publisher", bookInfo.publisher);
    formData.append("quantity", bookInfo.quantity);
    formData.append("image", selectedFiles);
    formData.append("genres_Id", id);
    formData.append("subgenres_Id", idSubgenres);
    formData.append("description", html);
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
                  <FormControl
                    sx={{ width: "90%", zIndex: 1, marginBottom: 2 }}
                  >
                    <InputLabel id="genres-select-label">Genres</InputLabel>
                    <Select
                      labelId="genres-select-label"
                      id="genres-select"
                      value={genre}
                      label="Genres"
                      onChange={handleGenreChange}
                    >
                      {genres?.map((item, index) => (
                        <MenuItem key={item?.id} value={item?.id}>
                          {item?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                  <FormControl
                    sx={{ width: "90%", zIndex: 1, marginBottom: 2 }}
                    disabled={genre ? false : true}
                  >
                    <InputLabel id="subgenres-select-label">
                      Subgenres
                    </InputLabel>
                    <Select
                      labelId="subgenres-select-label"
                      id="subgenres-select"
                      value={subgenre}
                      label="Sub Genres"
                      onChange={handleSubgenreChange}
                    >
                      {subGenres?.map((item, index) => (
                        <MenuItem key={item?.id} value={item?.id}>
                          {item?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
            <ImageList
              sx={{ height: 450, border: 1 }}
              cols={3}
              rowHeight={350}
            >
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
                                // console.log(image);
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
            onClick={()=>navigate("/admin/manage-book")}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleCreateBook}
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
