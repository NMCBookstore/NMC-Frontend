import React from 'react'
import { Stack, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function ListOrder({ data }) {
    return (
        <>
            {data?.length > 0 ?
                (data.map((item, index) => (
                    <Card key={item?.ID} sx={{ my: 3, py: 1, px: 0 }}>
                        <TableContainer>
                            <Table aria-labelledby="tableTitle">
                                <TableHead>
                                    <Typography variant='h5' sx={{ px: 2, borderBottom: "1px #d8d8d8 solid" }}>
                                        OrderID: {item?.ID}
                                    </Typography>
                                </TableHead>
                                <TableBody>
                                    <CardActionArea>
                                        {item?.books.map((book, index) => (
                                            <TableRow key={book?.id}>
                                                <TableCell>
                                                    <Stack direction="row" alignItems="center" margin={1}>
                                                        <img
                                                            src={book?.image[0]}
                                                            alt={book?.name}
                                                            style={{ width: "15%", height: "30%" }}
                                                        />
                                                        <Typography gutterBottom variant="h6" component="div">
                                                            {book?.name}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Typography variant="body2" color="text.secondary">
                                                        {item.transactions[index]?.amount}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Typography variant="body2" color="text.secondary">
                                                        {parseFloat(item.transactions[index]?.total).toLocaleString("vi-VN", {
                                                            style: "currency",
                                                            currency: "VND",
                                                        })}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </CardActionArea>
                                </TableBody>
                            </Table>
                        </TableContainer >
                        <Stack direction="column"
                            spacing={2}
                            alignItems="end"
                            paddingRight={3} py={2}
                        >
                            <Typography variant="body1" color="text.secondary" alignItems="start">
                                Sub Amount: {item?.sub_amount}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Sub Total: {item?.sub_total}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Status: {item?.status}
                            </Typography>
                        </Stack>
                    </Card>
                ))) : (
                    <div>Order Empty</div>
                )}
        </>
    )
}
