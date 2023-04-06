import { Box, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export default function ProductCheckoutCard() {
    return (
        <Box>
            <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center" 
            >
                <img
                    src='https://bizweb.dktcdn.net/100/370/339/products/hai-so-phan.jpg?v=1611676664730'
                    alt='image'
                    style={{ width: "20%" }}
                />
                <Typography>LCD Monitor</Typography>
                <Typography>x2</Typography>
                <Typography>165.000 VND</Typography>
            </Stack>
        </Box>
    )
}
