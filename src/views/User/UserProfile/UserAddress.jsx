import * as React from "react";
import { Container, Stack } from "@mui/material";
import List from '@mui/material/List';
import ModalAddress from "./ModalAddress";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useListAddressQuery } from "../../../services/addressAPIs";
import ListAddress from "./ListAddress";

export default function UserAddress() {
    const { data, isFetching } = useListAddressQuery("listAddress", {
        refetchOnMountOrArgChange: true,
      })

    return (
        <Container>
            <ListAddress title="Addresses" data={data} isFetching={isFetching}/>
        </Container>
    )
}
