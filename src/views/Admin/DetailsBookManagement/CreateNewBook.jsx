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
import React, { useState } from "react";
import { isValidImageList } from "../../../utils/helper";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toast } from "react-hot-toast";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useListSubGenresQuery } from "../../../services/subGenresAPIs";
import { useCreateNewBookMutation } from "../../../services/productAdminAPI";
import { useNavigate } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import getSubgenreGroup from "./getSubgenreGroup";

export default function CreateNewBook() {
  const navigate = useNavigate()
  const { data: listSubgenre } = useListSubGenresQuery();
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { data: genres } = useGetGenresQuery();
  const [genreID, setGenreID] = useState([]);
  const [subgenreID, setSubgenreID] = useState([]);
  const [createNewBook] = useCreateNewBookMutation();
  const [editorState, setEditorState] = useState("");
  const [subgenres, setSubgenres] = useState([]);

  const [bookInfo, setBookInfo] = useState({
    name: "",
    price: 0,
    author: "",
    publisher: "",
    quantity: 0,
  });

  const handleGenreChange = (event, option) => {
    if (option.length > 0) {
      setGenreID(option.map(item => item.id));

      let subGenre = getSubgenreGroup(option, bookInfo?.subgenres ? bookInfo?.subgenres : [])
      setBookInfo({ ...bookInfo, genres: option, subgenres: subGenre })

      let subgenresFromGenreID = getSubgenreGroup(option, listSubgenre)
      setSubgenres(subgenresFromGenreID.slice().
        sort((a, b) => a.genres_id - b.genres_id))
    } else {
      setGenreID([]);
      setSubgenreID([])
      setBookInfo({ ...bookInfo, genres: option, subgenres: option })
      setSubgenres([])
    }
  };

  const handleSubgenreChange = (event, option) => {
    if (option.length > 0) {
      setSubgenreID(option.map(item => item.id));
    } else {
      setSubgenreID([]);
    }
    setBookInfo({ ...bookInfo, subgenres: option })
  };

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const onSelectFile = (e) => {
    if (isValidImageList(selectedFiles)) {
      const selectedFilesArr = Array.from(e.target.files);
      setSelectedFiles(selectedFilesArr)

      const imagesArr = selectedFilesArr.map((file) => {
        return URL.createObjectURL(file);
      });

      setSelectedImage((prevImage) => prevImage.concat(imagesArr));
    }
  };

  const handleCreateBook = async () => {
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);

    const formData = new FormData();

    formData.append("name", bookInfo.name);
    formData.append("price", parseFloat(bookInfo.price));
    formData.append("author", bookInfo.author);
    formData.append("publisher", bookInfo.publisher);
    formData.append("quantity", bookInfo.quantity);
    selectedFiles.forEach((file) => {
      formData.append("image", file);
    });
    genreID.forEach((file) => {
      formData.append("genres_id", file);
    });
    subgenreID.forEach((file) => {
      formData.append("subgenres_id", file);
    });
    formData.append("description", html);


    const v = await createNewBook(formData)
    navigate("/admin/manage-book")
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
                      handleSubgenreChange(e, option)
                    }}
                    value={bookInfo?.subgenres && listSubgenre ?
                      bookInfo.subgenres.map(item =>
                        listSubgenre[item.id - 1]) : []
                    }
                    groupBy={(genre) =>
                      genres[genre.genres_id - 1].name
                    }
                    renderGroup={(params) => (
                      <Typography sx={{ px: 2 }}>
                        <Typography variant="body2" sx={{pt:2, color:"#7599cc"}}>
                          {params.group}
                        </Typography>
                        <Typography variant="body1" sx={{pt:1}}>
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
            onClick={() => navigate("/admin/manage-book")}
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
        </Box>
      </Box>
    </>
  );
}
