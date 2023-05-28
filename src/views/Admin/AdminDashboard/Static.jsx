import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import useStyles from "./styles";
import { CardActionArea, Stack, Typography } from "@mui/material";
import { useListUserQuery } from "../../../services/userAPI";
import { useGetAllBookQuery } from "../../../services/productAdminAPI";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useListSubGenresQuery } from "../../../services/subGenresAPIs";
import { CountUp } from 'use-count-up'
import { useNavigate } from "react-router-dom";


export default function Static() {
    const { data: listUser } = useListUserQuery()
    const { data: listBook } = useGetAllBookQuery()
    const { data: listGenres } = useGetGenresQuery()
    const { data: listSubgenres } = useListSubGenresQuery()
    const classes = useStyles();
    const navigate = useNavigate()


    const cardStatic = [
        {
            id: 0,
            title: "Users",
            value: listUser,
            url:"/admin/manage-user"
        },
        {
            id: 1,
            title: "Books",
            value: listBook,
            url:"/admin/manage-book"
        },
        {
            id: 2,
            title: "Genres",
            value: listGenres,
            url:"/admin/manage-genres"
        },
        {
            id: 3,
            title: "Subgenres",
            value: listSubgenres,
            url:"/admin/manage-genres"
        },
    ]

    return (
        <Stack>
            <Typography
                variant="h3"
                fontWeight="lg"
                mt={{ xs: 1, sm: 1 }}
                mb={2}
            >
                Total
            </Typography>
            <Grid
                container
                spacing={2}
                sx={{ alignItems: "center", justifyContent: "center" }}
            >

                {cardStatic.map((item, index) => (
                    <Grid
                        item
                        spacing={2}
                        xs={12}
                        sm={3}
                        key={item.id}
                        display="flex"
                        justifyContent="center"
                    >
                        <Stack
                            direction="column"
                            display="flex"
                            alignItems="center"
                            sx={{ borderRadius: "50%", height: "100%", width: "60%" }}
                        >
                            <Typography
                                variant="h6"
                            >
                                {item.title}
                            </Typography>
                            <CardActionArea
                              onClick={() => navigate(item.url)}
                            >
                                <Card
                                    sx={{ borderRadius: "50%" }}
                                    variant="outlined"
                                    className={classes.card}
                                >
                                    <CardContent
                                        sx={{ alignItems: "center", justifyContent: "center" }}
                                    >
                                        <Typography
                                            variant="h5"
                                            fontWeight="lg"
                                            color="white"
                                            mt={{ xs: 1, sm: 1 }}
                                            marginLeft="12"
                                        >
                                            <CountUp
                                                isCounting
                                                end={item?.value && item.value.length}
                                                duration={1.5}
                                            />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Stack>

                    </Grid>
                ))}
            </Grid>
        </Stack >
    );
}
