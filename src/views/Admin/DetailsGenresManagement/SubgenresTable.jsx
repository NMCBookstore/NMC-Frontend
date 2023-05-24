import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateGenresDialog from "./UpdateGenresDialog";
import { useGetSubGenresQuery } from "../../../services/subGenresAPIs";

export default function SubgenresTable({ id }) {
  const [datas, setDatas] = useState();
  const { data, isFetching } = useGetSubGenresQuery(id);

  useEffect(() => {
    setDatas(data)
  }, [isFetching])

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 5 }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Subgenres</TableCell>
                <TableCell align="center">{""}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas?.map((item, index) => (
                <TableRow
                  key={item?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <Typography>{item?.id}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{item?.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Delete Subgenres">
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <UpdateGenresDialog id={item?.id} genre_id={id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
