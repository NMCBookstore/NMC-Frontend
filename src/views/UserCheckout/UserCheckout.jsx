import { CheckBox } from '@mui/icons-material';
import { Box, Button, Divider, FormControl, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ProductCheckoutCard from './ProductCheckoutCard';

const profileContent = {
    firstName: "John",
    lastName: "Doe",
    email: "upchh@example.com",
    password: "password1234",
    phone: "123-456-7890",
    address: "123 Main Street",
    avatarUrl: "",
};

export default function UserCheckout() {
    const [info, setInfo] = React.useState(profileContent);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            currentPassword: data.get("currentPassword"),
            newPassword: data.get("newPassword"),
            confirmPassword: data.get("confirmPassword"),
        });
    };

    return (
        <Box marginTop={10} component="form" onSubmit={handleSubmit}>
            <Typography variant='h4' fontWeight="bold">
                Billing Details
            </Typography>
            <Grid container spacing={10} paddingTop={5}>
                <Grid item sm={5}>
                    <Stack spacing={3}>
                        <TextField
                            required
                            label="Full Name"
                            defaultValue={info.phone}
                            onChange={(event) => {
                                setInfo(event.target.value);
                            }}
                        />
                        <TextField
                            required
                            label="City"
                            defaultValue={info.phone}
                            onChange={(event) => {
                                setInfo(event.target.value);
                            }}
                        />
                        <TextField
                            required
                            label="District"
                            defaultValue={info.phone}
                            onChange={(event) => {
                                setInfo(event.target.value);
                            }}
                        />
                        <TextField
                            required
                            label="Address"
                            defaultValue={info.phone}
                            onChange={(event) => {
                                setInfo(event.target.value);
                            }}
                        />
                        <TextField
                            required
                            label="Phone Number"
                            defaultValue={info.phone}
                            onChange={(event) => {
                                setInfo(event.target.value);
                            }}
                        />
                    </Stack>
                </Grid>
                <Grid item sm={7}>
                    <Stack >
                        <ProductCheckoutCard />
                        <br />
                        <ProductCheckoutCard />
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            marginTop={2}
                            marginBottom={1}
                        >
                            <Typography fontWeight="bold">Subtotal:</Typography>
                            <Typography>230.000 VND</Typography>
                        </Stack>
                        <Divider sx={{ backgroundColor: "black" }} />
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            marginTop={2}
                            marginBottom={1}
                        >
                            <Typography fontWeight="bold">Shipping:</Typography>
                            <Typography>21.000 VND</Typography>
                        </Stack>
                        <Divider sx={{ backgroundColor: "black" }} />
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            marginTop={2}
                        >
                            <Typography fontWeight="bold">Total:</Typography>
                            <Typography>241.000 VND</Typography>
                        </Stack>
                        <Stack
                            direction="column"
                            justifyContent="space-between"
                            alignItems="center"
                            marginTop={2}
                        >
                            <Typography variant='h6' fontWeight="bold">Accepted payment</Typography>
                            <Stack
                                direction="row"
                            >
                                <img />
                                <img />
                                <img />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack alignItems="end" marginTop={3}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 2,
                                backgroundColor: "#DB4444",
                                "&:hover": {
                                    backgroundColor: "#DB4444",
                                },
                            }}
                        >
                            Place Order
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box >
    )
}
