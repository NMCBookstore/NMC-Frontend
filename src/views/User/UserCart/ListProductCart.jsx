import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { alpha, useTheme } from "@mui/material/styles";
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
import { Button, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  useDeleteProductCartMutation,
  useUpdateCartMutation,
} from "../../../services/cartAPI";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DialogConfirmDeleteAll from "./DialogConfirmDeleteAll";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCheckOutInfoArr,
  clearCartIdArr,
  setCartIdArr,
  setCheckOutInfoArr,
  selectCurrentCartOrder,
  selectCurrentProductArr,
} from "../../../features/cart/cartSlice";
import PaymentIcon from "@mui/icons-material/Payment";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { toast } from "react-hot-toast";
import NoData from "../../../components/NoData";

const currencyExchange = (num) => {
  return parseFloat(num).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};
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
        <>
          <DialogConfirmDeleteAll
            open={handleOpenDeleteDialog}
            handleDelete={handleDelete}
          />
        </>
      ) : null}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ListProductCart({ title, data, isFetching }) {
  const [selected, setSelected] = useState([]);
  const [datas, setDatas] = useState(data);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [updateCart] = useUpdateCartMutation();

  const [bookInfo, setBookInfo] = useState([]);

  const dispatch = useDispatch();
  //set amount of product
  function incrementCount(id, amount) {
    updateCart({ id: id, amount: amount + 1 });
  }
  function decrementCount(id, amount) {
    updateCart({ id: id, amount: amount > 1 ? amount - 1 : 1 });
    let testdvt = {};

    setBookInfo((prevBookInfo) => {
      prevBookInfo.forEach((item) => {
        testdvt[item.cart_id] = item;
        if (item.cart_id == id) {
          item = { ...item, amount: item.amount + 1 };
        }
      });
      console.log(prevBookInfo);
      return prevBookInfo;
    });
    dispatch(setCheckOutInfoArr(bookInfo));
  }

  const [deleteProduct] = useDeleteProductCartMutation();

  const [selectedID, setSelectedID] = useState([]);

  const handleDeleteListItem = async () => {
    await deleteProduct(selected);
    // setSelected(selected.filter((cart_id) => !selected.includes(cart_id)));
    setSelected([]);
    dispatch(setCartIdArr([]));
    setBookInfo([]);
    dispatch(setCheckOutInfoArr([]));
  };

  const handleDeleteItem = async () => {
    await deleteProduct([selectedID]);
    if (selected.some((cart_id) => selectedID == cart_id)) {
      setSelected(selected.filter((cart_id) => cart_id !== selectedID));
      dispatch(
        setCartIdArr(selected.filter((cart_id) => cart_id !== selectedID))
      );
    }
    if (bookInfo.some((item) => item.cart_id === selectedID)) {
      const updatedBookInfo = bookInfo.filter(
        (item) => item.cart_id !== selectedID
      );
      setBookInfo(updatedBookInfo);
      dispatch(setCheckOutInfoArr(updatedBookInfo));
    }
    setOpen(false);
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    setSelectedID(id);
  };

  const handleOpenDeleteDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedID(null);
  };

  useEffect(() => {
    setRows(data);
    setDatas(data);
  }, [isFetching]);

  //store product to redux
  useEffect(() => {
    dispatch(setCartIdArr(selected));
    dispatch(setCheckOutInfoArr(bookInfo));
  }, [bookInfo, selected]);

  //reset order info
  const cartIdsArr = useSelector(selectCurrentCartOrder);
  const orderInfo = useSelector(selectCurrentProductArr);

  // console.log(orderInfo);

  const totalItemInCart = data?.length;

  const isSelected = (cart_id) => selected.indexOf(cart_id) !== -1;

  return totalItemInCart ? (
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
                        setSelected(data.map((item) => item.cart_id));
                        setBookInfo(
                          data.map((book) => ({
                            cart_id: book.cart_id,
                            book_id: book.book_id,
                            book_name: book.book_name,
                            image: book.image,
                            price: book.price,
                            amount: book.amount,
                          }))
                        );
                      } else {
                        setSelected([]);
                        setBookInfo([]);
                      }
                    }}
                  />
                </TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Subtotal</TableCell>
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
                      checked={selected.some((it) => it === item.cart_id)}
                      onClick={(e) => {
                        if (e.target.checked) {
                          setSelected((prev) => [...prev, item.cart_id]);
                          setBookInfo((prevBookInfo) => [
                            ...prevBookInfo,
                            {
                              cart_id: item.cart_id,
                              book_id: item.book_id,
                              book_name: item.book_name,
                              image: item.image,
                              price: item.price,
                              amount: item.amount,
                            },
                          ]);
                        } else {
                          setSelected(
                            selected.filter((it) => it !== item.cart_id)
                          );
                          setBookInfo((prevBookInfo) =>
                            prevBookInfo.filter(
                              (book) => book.cart_id !== item.cart_id
                            )
                          );
                        }
                      }}
                    />
                  </TableCell>

                  {/* name & image */}
                  <TableCell component="th" scope="row">
                    <Stack direction="row" alignItems="center" margin={1}>
                      <img
                        src={item?.image}
                        alt={item?.book_name}
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
                        {item?.book_name}
                      </Typography>
                    </Stack>
                  </TableCell>

                  {/* price */}
                  <TableCell align="center">
                    {currencyExchange(item?.price)}
                  </TableCell>

                  {/* amount */}
                  <TableCell align="center">
                    <Stack direction="row" spacing={2}>
                      {!selected.includes(item.cart_id) && (
                        <Tooltip title="Minus">
                          <RemoveIcon
                            onClick={() =>
                              decrementCount(item?.cart_id, item?.amount)
                            }
                            sx={{ marginRight: 2 }}
                          />
                        </Tooltip>
                      )}
                      <p style={{ marginLeft: "2px" }}>{item?.amount}</p>

                      {!selected.includes(item.cart_id) && (
                        <Tooltip title="Add more">
                          <AddIcon
                            onClick={() =>
                              incrementCount(item?.cart_id, item?.amount)
                            }
                          />
                        </Tooltip>
                      )}
                    </Stack>
                  </TableCell>

                  {/* sub total */}
                  <TableCell align="center">
                    {currencyExchange(item?.price * item?.amount)}
                  </TableCell>

                  {/* delete icon */}
                  <TableCell>
                    <div>
                      <Tooltip title="Delete Book">
                        <IconButton
                          onClick={(e) =>
                            e.preventDefault && handleClickOpen(item?.cart_id)
                          }
                        >
                          <DeleteIcon sx={{ color: "#E35454" }} />
                        </IconButton>
                      </Tooltip>
                      {orderInfo.some(
                        (orderItem) => orderItem.cart_id === item?.cart_id
                      ) ? (
                        <Tooltip title="In your order">
                          <IconButton>
                            <CreditScoreIcon sx={{ color: "#4cd137" }} />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Tooltip title="Not in order">
                          <IconButton>
                            <CreditScoreIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
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
                    onClick={() => handleDeleteItem()}
                    autoFocus
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  ) : (
    <NoData page="cart" />
  );
}
