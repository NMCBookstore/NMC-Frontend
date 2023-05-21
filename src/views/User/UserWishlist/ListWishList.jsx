import { useEffect, useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useDeleteProductWishlistMutation } from "../../../services/wishlistAPI";
import { useAddCartMutation, useGetCartQuery } from "../../../services/cartAPI";
import { toast } from "react-hot-toast";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import NoProductInWishlist from "./NoProductInWishlist";
import DialogConfirmDeleteAllWishlist from "./DialogConfirmDeleteAllWishlist";

const headCells = [
  {
    id: "Product",
    label: "Product",
  },
  {
    id: "Price",
    numeric: true,
    label: "Price",
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;
  const { title } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) =>
          title === "Wishlist" &&
          (headCell.label === "Quantity" ||
            headCell.label === "Subtotal") ? null : (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
            >
              {headCell.label}
            </TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected, title, handleDelete, handleOpenDeleteDialog } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected.length > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected.length > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected.length} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h5"
          id="tableTitle"
          component="div"
          fontWeight="bold"
        >
          {title}
        </Typography>
      )}

      {numSelected.length > 0 ? (
        <DialogConfirmDeleteAllWishlist
          open={handleOpenDeleteDialog}
          handleDelete={handleDelete}
        />
      ) : null}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ListWishList({ title, data, isFetching }) {
  const [selected, setSelected] = useState([]);
  const [datas, setDatas] = useState(data);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [deleteProduct] = useDeleteProductWishlistMutation();
  const [addCart] = useAddCartMutation();

  var [selectedID, setSelectedID] = useState();

  const { data: cart } = useGetCartQuery();

  console.log(cart);

  let count = 1;

  const handleAddToCart = async (item) => {
    await addCart({ id: item?.book.id, amount: count });
    toast.success("Added to your cart");
    await deleteProduct([item?.book.id]);
    console.log([item?.book.id]);
  };

  const handleDeleteListItem = async () => {
    await deleteProduct(selected);
    setSelected(
      selected.filter((wishlist_id) => !selected.includes(wishlist_id))
    );
    console.log(selected);
  };

  const handleDeleteSingleItem = async () => {
    await deleteProduct([selectedID]);
    if (selected.some((wishlist_id) => selectedID == wishlist_id)) {
      setSelected(selected.filter((wishlist_id) => wishlist_id !== selectedID));
    }
    setOpen(false);
    console.log([selectedID]);
  };

  const handleOpenDeleteDialog = () => {
    console.log("this dialog");
    setOpen(true);
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    setSelectedID(id);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedID(null);
  };

  useEffect(() => {
    setRows(data);
    setDatas(data);
  }, [isFetching]);

  const isSelected = (wishlist_id) => selected.indexOf(wishlist_id) !== -1;

  const totalItemInWishlist = data?.length;

  return totalItemInWishlist ? (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          handleDelete={handleDeleteListItem}
          handleOpenDeleteDialog={handleOpenDeleteDialog}
          numSelected={selected}
          title={title}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                {/* check box all */}
                <TableCell>
                  <Checkbox
                    checked={datas?.length === selected?.length}
                    onClick={(e) => {
                      if (e.target.checked) {
                        setSelected(data.map((item) => item?.wishlist_id));
                      } else {
                        setSelected([]);
                      }
                    }}
                  />
                </TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">{""}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas?.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* check box */}
                  <TableCell>
                    <Checkbox
                      checked={selected.some((it) => it === item.wishlist_id)}
                      onClick={(e) => {
                        if (e.target.checked) {
                          setSelected((prev) => [...prev, item.wishlist_id]);
                        } else {
                          setSelected(
                            selected.filter((it) => it !== item.wishlist_id)
                          );
                        }
                      }}
                    />
                  </TableCell>

                  {/* name and image */}
                  <TableCell component="th" scope="row">
                    <Stack direction="row" alignItems="center" margin={1}>
                      <img
                        src={item?.book.image[0]}
                        alt={item?.book.name}
                        style={{ width: "15%", height: "30%" }}
                      />
                      <Typography
                        marginLeft={2}
                        sx={{
                          mb: 0.1,
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item?.book.name}
                      </Typography>
                    </Stack>
                  </TableCell>

                  {/* price */}
                  <TableCell align="center">
                    {parseFloat(item?.book.price).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </TableCell>

                  {/* delete icon */}
                  <TableCell>
                    <Tooltip title="Delete Book">
                      <IconButton
                        onClick={(e) =>
                          e.preventDefault && handleClickOpen(item?.wishlist_id)
                        }
                      >
                        <DeleteIcon sx={{ color: "#E35454" }} />
                      </IconButton>
                    </Tooltip>
                    {cart?.some(
                      (cartItem) => cartItem?.book_id === item?.book?.id
                    ) ? (
                      <Tooltip title="Already in cart">
                        <IconButton>
                          <ShoppingBagIcon disabled sx={{ color: "#db4444" }} />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip title="Add to cart">
                        <IconButton
                          onClick={(e) =>
                            e.preventDefault && handleAddToCart(item)
                          }
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <div>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    {"Are you sure you want to delete this product ?"}
                  </DialogTitle>
                  <DialogActions>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#db4444",
                        "&:hover": {
                          background: "#fff",
                        },
                      }}
                      autoFocus
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#db4444",
                        "&:hover": {
                          background: "#ffa071",
                        },
                      }}
                      onClick={() => handleDeleteSingleItem()}
                      autoFocus
                    >
                      Delete
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  ) : (
    <NoProductInWishlist />
  );
}
