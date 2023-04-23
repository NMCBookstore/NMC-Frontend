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
  const { numSelected } = props;
  const { title } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
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

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ListWishList({ title, data, isFetching }) {
  const [selected, setSelected] = useState([]);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [deleteProduct] = useDeleteProductWishlistMutation();

  useEffect(() => {
    setRows(data);
  }, [isFetching]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteItem = async (id) => {
    await deleteProduct({ id });
    window.location.reload();
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.wishlist_id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, wishlist_id) => {
    const selectedIndex = selected.indexOf(wishlist_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, wishlist_id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const isSelected = (wishlist_id) => selected.indexOf(wishlist_id) !== -1;
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} title={title} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows?.length != null ? rows.length : 0}
              title={title}
            />

            <TableBody>
              {rows?.map((row, index) => {
                const isItemSelected = isSelected(row.wishlist_id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow hover key={row.wishlist_id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        selected={isItemSelected}
                        // id cart
                        onClick={(event) => handleClick(event, row.wishlist_id)}
                        color="primary"
                        checked={isItemSelected}
                        sx={{ cursor: "pointer" }}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Stack direction="row" alignItems="center" margin={1}>
                        {title === "Wishlist" ? (
                          <img
                            src={row.book.image[0]}
                            alt={row.book.name}
                            style={{
                              width: "80px",
                              height: "100px",
                            }}
                          />
                        ) : (
                          <img
                            src={row.book.image[0]}
                            alt={row.book.name}
                            style={{
                              width: "25%",
                              height: "40%",
                            }}
                          />
                        )}
                        <Typography
                          marginLeft={2}
                          sx={{
                            mb: 0.1,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row?.book.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      {parseFloat(row?.book.price).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </TableCell>
                    {title !== "Wishlist" ? (
                      <TableCell align="right"></TableCell>
                    ) : null}
                    {title !== "Wishlist" ? (
                      <TableCell align="right">
                        {parseFloat(row?.book.price).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </TableCell>
                    ) : null}
                    <TableCell align="right">
                      {title === "Wishlist" ? (
                        <>
                          <Tooltip title="Add To Cart">
                            <IconButton>
                              <AddShoppingCartIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <div>
                              <IconButton onClick={handleClickOpen}>
                                <DeleteIcon />
                              </IconButton>
                              <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                              >
                                <DialogTitle id="responsive-dialog-title">
                                  {
                                    "Are you sure you want to delete this product ?"
                                  }
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
                                    onClick={() => handleDeleteItem(row?.wishlist_id)}
                                    autoFocus
                                  >
                                    Delete
                                  </Button>
                                </DialogActions>
                              </Dialog>
                            </div>
                          </Tooltip>
                        </>
                      ) : (
                        <Tooltip title="Delete">
                          <IconButton>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
