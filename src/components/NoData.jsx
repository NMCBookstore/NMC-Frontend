import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import ModalAddress from "../views/User/UserProfile/ModalAddress";

export default function NoData({ page }) {
  return (
    <Card sx={{ minWidth: 300, border: 1 }}>
      <Stack display="flex" justifyContent="center" alignItems="center">
        <CardContent>
          <Typography variant="h6">
            Oops, looks like it's empty here{" "}
            {
              // page === "cart"
              //   ? "cart"
              //   : "wishlist"
            }
            .
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          {page !== "address" ? (
            <Link
              to="/search-filter?page_id=1&page_size=24&min_price=0&max_price=10000000"
              style={{ textDecoration: "none", marginTop: 8 }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#db4444",
                  "&:hover": {
                    background: "#ffa071",
                  },
                }}
              >
                Go to product page
              </Button>
            </Link>
          ) : (
            <Stack sx={{ display: "flex", alignItems: "end" }}>
              <ModalAddress mode={"create"} />
            </Stack>
          )}
        </CardActions>
      </Stack>
    </Card>
  );
}
