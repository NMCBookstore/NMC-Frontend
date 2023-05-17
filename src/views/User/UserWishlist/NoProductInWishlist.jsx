import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function NoProductInWishlist() {
  return (
    <Card sx={{ maxWidth: 500, border: 1 }}>
      <CardContent>
        <Typography variant="subtitle1">
          Oops, looks like you don't have any product in your wishlist.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to="/search-filter"
          style={{ textDecoration: "none", marginTop: 8 }}
        >
          <Button
            variant="contained"
            sx={{
              marginLeft: 32,
              backgroundColor: "#db4444",
              "&:hover": {
                background: "#ffa071",
              },
            }}
          >
            Go to product page
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
