import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Stack } from '@mui/material';

export default function ProductCheckoutCard() {
    return (
        <Card sx={{ minWidth: 400, border:"1px black solid" }}>
            <CardContent>
                <Typography variant="h6" component="div" fontWeight="bold">
                    Cart Total
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop={2}
                    marginBottom={1}
                >
                    <Typography>Subtotal:</Typography>
                    <Typography>21.000 VND</Typography>
                </Stack>
                <Divider sx={{ backgroundColor: "black" }} />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop={2}
                    marginBottom={1}
                >
                    <Typography>Shipping::</Typography>
                    <Typography>21.000 VND</Typography>
                </Stack>
                <Divider sx={{ backgroundColor: "black" }} />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop={2}
                    marginBottom={1}
                >
                    <Typography>Total::</Typography>
                    <Typography>21.000 VND</Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width:"100%",
                        mt: 2,
                        backgroundColor: "#DB4444",
                        "&:hover": {
                            backgroundColor: "#DB4444",
                        },
                    }}
                >
                    Proceed to checkout
                </Button>
            </CardActions>
        </Card>
    );
}