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
import DialogConfirmDeleteAll from "../UserCart/DialogConfirmDeleteAll";
import ModalAddress from "./ModalAddress";
import { useDeleteAddressMutation } from "../../../services/addressAPIs";
import NoData from "../../../components/NoData";

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
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
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
            }}
        >
            {numSelected.length > 0 ? (
                <>
                    <DialogConfirmDeleteAll
                        open={handleOpenDeleteDialog}
                        handleDelete={handleDelete}
                        sx={{ color: "#eb2f06", ml: "-16px" }}
                    />
                </>
            ) : null}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function ListAddress({ title, data, isFetching }) {
    const [selected, setSelected] = useState([]);
    const [datas, setDatas] = useState(data);
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const [deleteAddress] = useDeleteAddressMutation();

    const [selectedID, setSelectedID] = useState([]);

    const handleDeleteListItem = async () => {
        await deleteProduct(selected);
        setSelected(selected.filter((id) => !selected.includes(id)));
    };

    const handleDeleteItem = async () => {
        await deleteAddress([selectedID]);
        if (selected.some((id) => selectedID == id)) {
            setSelected(selected.filter((id) => id !== selectedID));
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

    const totalItemInCart = data?.length;

    return totalItemInCart ? (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
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
                                                setSelected(data.map((item) => item.id));
                                            } else {
                                                setSelected([])
                                            }
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    {selected.length > 0 ? (
                                        <Typography
                                            sx={{ flex: "1 1 100%" }}
                                            color="inherit"
                                            variant="h5"
                                            component="div"
                                            fontWeight="bold"
                                        >
                                            {selected.length} selected
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
                                </TableCell>
                                <TableCell>
                                    <EnhancedTableToolbar
                                        handleDelete={handleDeleteListItem}
                                        handleOpenDeleteDialog={handleOpenDeleteDialog}
                                        numSelected={selected}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas?.map((item, index) => (
                                <TableRow
                                    key={item}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 }, mt: 2 }}
                                >
                                    {/* check box */}
                                    <TableCell>
                                        <Checkbox
                                            checked={selected.some((it) => it === item.id)}
                                            onClick={(e) => {
                                                if (e.target.checked) {
                                                    setSelected((prev) => [...prev, item.id]);
                                                } else {
                                                    setSelected(
                                                        selected.filter((it) => it !== item.id)
                                                    );
                                                }
                                            }}
                                        />
                                    </TableCell>

                                    {/* address */}
                                    <TableCell align="left">
                                        <Stack direction="column">
                                            <Typography variant="h6">{item?.address}</Typography>
                                            <Typography mt={1} variant="subtitle1">
                                                {item?.district}, {item?.city}
                                            </Typography>
                                        </Stack>
                                    </TableCell>

                                    {/* delete icon */}
                                    <TableCell>
                                        <Stack direction="row">
                                            <ModalAddress mode={"update"} addressID={item?.id ? item.id : 0} />
                                            <Tooltip title="Delete Address">
                                                <IconButton
                                                    onClick={(e) =>
                                                        e.preventDefault && handleClickOpen(item?.id)
                                                    }
                                                >
                                                    <DeleteIcon sx={{ color: "#E35454" }} />
                                                </IconButton>
                                            </Tooltip>
                                        </Stack>
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
                                    {"Are you sure you want to delete this address ?"}
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
            <Stack sx={{ display: "flex", alignItems: "end" }}>
                <ModalAddress mode={"create"} />
            </Stack>
        </Box>
    ) : (
        <NoData page="address" />
    );
}
