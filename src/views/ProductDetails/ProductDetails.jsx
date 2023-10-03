import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Paper, TextField, Typography, styled } from "@mui/material";
import { Stack } from "@mui/system";
import Rating from "@mui/material/Rating";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ImageGrid from "./ImageGrid";
import MainImage from "./MainImage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DetailProductInfo from "./DetailProductInfo";
import Recommend from "./Recommend";
import Comment from "./CommentSection";
import { useGetProductQuery } from "../../services/productAPIs";
import { useAddCartMutation } from "../../services/cartAPI";
import {
  useAddWishListMutation,
  useGetWishListQuery,
} from "../../services/wishlistAPI";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [ytSrc, setYtSrc] = useState("");
  const [value, setValue] = React.useState(2);
  const [genresID, setGenresID] = useState([]);
  const [subgenresID, setSubgenresID] = useState([]);
  let [count, setCount] = useState(1);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count > 1 ? count - 1 : 1);
  }

  const onSelect = (image, ytSrc) => {
    setSelectedImage(image);
    setYtSrc(ytSrc);
  };

  const { id } = useParams();

  const { data, isFetching } = useGetProductQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const [addWishlist] = useAddWishListMutation(id);

  const [addCart] = useAddCartMutation(id);

  const { data: wishlist } = useGetWishListQuery();

  useEffect(() => {
    setGenresID(data?.genres.map((item) => parseInt(item.id)));
    setSubgenresID(data?.subgenres.map((item) => parseInt(item.id)));
  }, [isFetching]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const t = addCart({ id, amount: count });
    toast.success("Added to your cart");
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addWishlist(id);
    toast.success("Added to your wishlist");
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <Grid container my={2} spacing={2}>
        {/* Image and price  */}
        <Grid item container spacing={2} xs={12} sm={12}>
          {/* Image and price  */}
          <Grid item container xs={12} sm={5} columns={12} mt={2}>
            {/* Side image  */}
            <Grid item container sm={3} xs={0}>
              <ImageGrid
                images={data?.image}
                onSelectImage={setSelectedImage}
                onYtSrc={setYtSrc}
                selectedImage={selectedImage}
                ytSrc={ytSrc}
              />
            </Grid>
            {/* Main image  */}
            <Grid item sm={9}>
              <MainImage
                src={selectedImage != "" ? selectedImage : data?.image[0]}
                ytSrc={ytSrc}
                images={data?.image}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={7} mt={2} padding={5}>
            <Grid>
              {/* Basic info  */}

              <Stack>
                <Typography variant="h5"> {data?.name} </Typography>
                <Typography variant="subtitle2" mt={2}>
                  Publisher: {data?.publisher}
                </Typography>
                <Typography variant="subtitle2" mb={2}>
                  Author: {data?.author}
                </Typography>
                <Rating
                  precision={0.5}
                  readOnly
                  value={data ? data?.rating : 0}
                  size="small"
                />
                <Typography
                  variant="h5"
                  mt={5}
                  sx={{ fontWeight: "800", color: "#C92127" }}
                >
                  {parseFloat(data?.price).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Typography>
              </Stack>

              {/* Amount  */}
              <Stack direction="row" alignItems="center" mt={5} spacing={2}>
                <Typography variant="h6">Amount: {data?.quantity}</Typography>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "6px",
                  }}
                >
                  <Button onClick={decrementCount}>
                    <RemoveIcon />
                  </Button>
                  <TextField
                    value={count}
                    disabled={true}
                    inputProps={{ min: 0, style: { textAlign: "center" } }}
                    sx={{ width: "60px" }}
                  />
                  <Button onClick={incrementCount}>
                    <AddIcon />
                  </Button>
                </div>
              </Stack>

              {/* Add to wishlist  */}
              <Stack direction="row" alignItems="center" mt={5} spacing={2}>
                {wishlist?.some((item) => item?.book.id == id) ? (
                  <Button variant="contained" disabled>
                    <Typography variant="body1">
                      Already in your wishlist
                    </Typography>
                    <FavoriteIcon />
                  </Button>
                ) : (
                  <Button
                    onClick={handleAddToWishlist}
                    variant="contained"
                    sx={{
                      background: "#1f1f1f",
                      "&:hover": { background: "#1f1f1f" },
                    }}
                  >
                    <Typography variant="body1">Add to wishlist</Typography>
                    <FavoriteIcon />
                  </Button>
                )}

                {/* Add to cart  */}
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{
                    background: "#DB4444",
                    "&:hover": { background: "#ffa071" },
                  }}
                >
                  <Typography variant="body1">Add to cart</Typography>
                  <ShoppingCartOutlinedIcon />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* Details product */}
        <Grid item container spacing={2} xs={12} sm={12}>
          <DetailProductInfo data={data} />
        </Grid>

        {/* Recommend for you  */}
        <Grid item container spacing={2} xs={12} sm={12}>
          <Recommend
            bookID={data?.id}
            genresID={genresID}
            subgenresID={subgenresID}
          />
        </Grid>

        {/* Comment  */}
        <Grid item container spacing={2} xs={12} sm={12}>
          <Comment id={parseInt(id)} wishlist={wishlist}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
