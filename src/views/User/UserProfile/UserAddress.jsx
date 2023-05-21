import * as React from "react";
import { Container, Stack } from "@mui/material";
import List from '@mui/material/List';
import ModalAddress from "./ModalAddress";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function UserAddress() {

    return (
        <Container>
            <Stack direction="column">
                <List>
                    <Card sx={{my:2}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </List>
                <div style={{ alignSelf: "center" }}>
                    <ModalAddress />
                </div>
            </Stack>
        </Container>
    )
}
