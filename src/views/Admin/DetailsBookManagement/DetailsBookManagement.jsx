import { Delete, PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
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
import React, { useState, useEffect } from "react";
import { isValidImageList } from "../../../utils/helper";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../services/productAPIs";
import { useUpdateBookMutation } from "../../../services/productAdminAPI";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Autocomplete from '@mui/material/Autocomplete';
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useListSubGenresQuery } from "../../../services/subGenresAPIs";
import getSubgenreGroup from "./getSubgenreGroup";

export default function DetailsBookManageMent() {
  const { id } = useParams();

  const { data, isFetching } = useGetProductQuery(id);
  const { data: listSubgenre, isFetching: isFetchingSub } = useListSubGenresQuery();

  const [bookInfo, setBookInfo] = useState(data);

  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [updateBook] = useUpdateBookMutation()
  const [editorState, setEditorState] = useState("");

  const { data: genres } = useGetGenresQuery();
  const [genreID, setGenreID] = useState([]);
  const [subgenreID, setSubgenreID] = useState([]);
  const [subgenres, setSubgenres] = useState([]);

  useEffect(() => {
    setGenreID(data?.genres.map(item => item.id))
    setSubgenreID(data?.subgenres.map(item => item.id))
    let subgenresFromGenreID = getSubgenreGroup(data?.genres, listSubgenre)
    setSubgenres(subgenresFromGenreID.slice().
      sort((a, b) => a.genres_id - b.genres_id))

    const des = data?.description.replace(/\\n/g,"<br/>").replace(/\\/g,"")
    setBookInfo(data)
    setSelectedImage(data?.image)
    setEditorState(
      EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(`${des}`)
        )
      )
    )
  }, [isFetching, isFetchingSub])

  const handleGenreChange = (event, option) => {
    if (option.length > 0) {
      setGenreID(option.map(item => item.id));

      let subGenre = getSubgenreGroup(option, bookInfo?.subgenres)
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
      setSubgenreID([])
    }
    setBookInfo({ ...bookInfo, subgenres: option })
  };

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

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

  const handleUpdateBook = async () => {
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);

    const formData = new FormData();

    formData.append("id", parseInt(id));
    formData.append("name", bookInfo?.name);
    formData.append("price", parseFloat(bookInfo?.price));
    bookInfo?.image.forEach(element => {
      formData.append("image", element);
    });
    selectedFiles.forEach(element => {
      formData.append("files", element);
    });
    formData.append("description", html);
    formData.append("author", bookInfo?.author);
    formData.append("publisher", bookInfo?.publisher);
    formData.append("quantity", parseInt(bookInfo?.quantity));
    genreID?.forEach(element => {
      formData.append("genres_id", element);
    });
    subgenreID?.forEach(element => {
      formData.append("subgenres_id", element);
    });

    const v = await updateBook(formData)
    navigate("/admin/manage-book")
  };

  return (
    <>
      <Box sx={{ my: 5 }}>
        <Typography variant="h5" sx={{ my: 2 }}>
          Edit details book
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Grid container spacing={1} sx={{ mt: 5 }}>
              <Grid item xs={12} md={12}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  label="Name of the book"
                  name="name"
                  value={bookInfo?.name}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, name: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="column" spacing={3}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    name="price"
                    label="Price"
                    type="number"
                    variant="outlined"
                    value={bookInfo?.price}
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, price: e.target.value })
                    }
                  />
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    name="quantity"
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    value={bookInfo?.quantity}
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, quantity: e.target.value })
                    }
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="column" spacing={3}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    name="author"
                    label="Author"
                    variant="outlined"
                    value={bookInfo?.author}
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, author: e.target.value })
                    }
                  />
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    name="publisher"
                    label="Publisher"
                    variant="outlined"
                    value={bookInfo?.publisher}
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, publisher: e.target.value })
                    }
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={12}>
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
                  onChange={(e, option) => {
                    handleGenreChange(e, option)
                  }}
                  value={bookInfo?.genres && genres ?
                    bookInfo.genres.
                      map(item => genres[item.id - 1]) : []
                  }
                />
              </Grid>
              <Grid item xs={12} md={12}>
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
                  groupBy={(genre) => genres[genre.genres_id - 1].name}
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
              sx={{ height: 500, border: 1, backgroundColor: "#ecf0f1" }}
              cols={3}
              rowHeight={350}
            >
              {bookInfo?.image &&
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
                                setBookInfo({ ...bookInfo, image: bookInfo?.image.filter((e) => e !== image) })
                              }}
                            >
                              <Delete sx={{ color: "#e55039" }} />
                            </IconButton>
                          }
                          actionPosition="right"
                        />
                      </ImageListItem>
                    </CardActionArea>
                  );
                })}
            </ImageList>
            {/* </Stack> */}
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
            sx={{ width: "10%", marginTop: "10px" }}
            onClick={handleUpdateBook}>
            Submit
          </Button>
        </Box>
      </Box >
    </>
  );
}
