import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'

export default function About() {
    return (
        <Stack pt={10}>
            <Stack direction="row" mt={10}>
                <Stack direction="column" mr={2}>
                    <Typography variant='h3'>19110016</Typography>
                    <Typography variant='body1'>Nguyễn Minh Cương</Typography>
                </Stack>
                <img
                    src='https://wallpapers.com/images/featured/5q6xbfxwtbme5kaj.jpg'
                    style={{
                        width: "60%",
                        height: "50%",
                        borderRadius: "50% 50% 63% 37% / 28% 55% 45% 72%",
                    }}
                />
            </Stack>
            <Stack direction="row" mt={8}>
                <img
                    src='https://media.istockphoto.com/id/1330198278/photo/graduation-cap-on-a-stack-of-books-with-empty-space-to-the-right-graduation-concept.jpg?s=612x612&w=0&k=20&c=5ylDPFelW32e53SqRgKKZZM_kdtwJaGRePuVjMePAlA%3D'
                    style={{
                        width: "60%",
                        height: "50%",
                        borderRadius: "72% 28% 56% 44% / 41% 38% 62% 59% "
                    }}
                />
                <Stack direction="column" ml={2}>
                    <Typography variant='h3'>19110173</Typography>
                    <Typography variant='body1'>Nguyễn Minh Chiến</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
