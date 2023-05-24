import { Delete, PhotoCamera } from "@mui/icons-material";
import {
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
import React, { useState, useEffect } from "react";
import { isValidImage } from "../../../utils/helper";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../services/productAPIs";

export default function DetailsBookManageMent() {
  const { id } = useParams();

  const { data, isFetching } = useGetProductQuery(id);

  const [bookInfo, setBookInfo] = useState(data);

  const [selectedImage, setSelectedImage] = useState([]);

  useEffect(() => {
    setBookInfo(data)
  }, [isFetching])


  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) {
      return;
    }
    const selectedFilesArr = Array.from(selectedFiles);

    const imagesArr = selectedFilesArr.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImage((prevImage) => prevImage.concat(imagesArr));
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

            {/* <Box sx={{ border: 1 }}> */}
            <ImageList
              sx={{ height: 450, border: 1, backgroundColor: "#ecf0f1" }}
              cols={3}
              rowHeight={164}
            >
              {bookInfo?.image.map((item) => {
                return (
                  <ImageListItem key={item}>
                    <img src={item} />
                    <ImageListItemBar
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, " +
                          "rgba(0,0,0,0.0) 70%, rgba(0,0,0,0) 100%)",
                      }}
                      actionIcon={
                        <IconButton
                          onClick={() => {
                            setBookInfo({ ...bookInfo,image: bookInfo?.image.filter(img => img !== item)});
                          }}
                        >
                    <Delete sx={{ color: "#e55039" }} />
                  </IconButton>
                      }
                      actionPosition = "right"
                />
                  </ImageListItem>
            );
              })}
          </ImageList>
          {/* </Stack> */}
        </Grid>

        <Grid xs={12} md={12}>
          <Paper style={{ padding: "40px 20px", width: "73rem", border: 1 }}>
            <Stack direction="column">
              <TextareaAutosize
                placeholder="Description of the book"
                name="description"
                rowsMin={8}
                rowsMax={8}
                maxRows={10}
                minRows={3}
                value={bookInfo?.description}
                onChange={(e) =>
                  setBookInfo({ ...bookInfo, description: e.target.value })
                }
              />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ width: "10%", marginTop: "10px", mr: 3 }}
        >
          Cancel
        </Button>
        <Button variant="contained" sx={{ width: "10%", marginTop: "10px" }}>
          Submit
        </Button>
        {/* </Stack> */}
      </Box>
    </Box >
    </>
  );
}
