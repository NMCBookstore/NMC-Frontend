import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import useStyles from "./styles";

export default function CardInfo() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid spacing={2} xs={12} sm={6}>
        <Card variant="outlined" className={classes.card}>
          {/* <CardContent>
              <Typography
                level="h6"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 1, sm: 1 }}
                marginLeft="12"
              >
                Image
              </Typography>
            </CardContent> */}
        </Card>
      </Grid>
      <Grid spacing={2} xs={12} sm={6}>
        <Card variant="outlined" className={classes.card}>
          <CardCover></CardCover>
          {/* <CardContent>
              <Typography
                level="h6"
                fontWeight="lg"
                textColor="#000"
                mt={{ xs: 12, sm: 18 }}
              >
                Video
              </Typography>
            </CardContent> */}
        </Card>
      </Grid>
      <Grid spacing={2} xs={12} sm={6}>
        <Card variant="outlined" className={classes.card}>
          <CardCover></CardCover>
          {/* <CardContent>
              <Typography
                level="h6"
                fontWeight="lg"
                textColor="#000"
                mt={{ xs: 12, sm: 18 }}
              >
                Video
              </Typography>
            </CardContent> */}
        </Card>
      </Grid>
      <Grid spacing={2} xs={12} sm={6}>
        <Card variant="outlined" className={classes.card}>
          <CardCover></CardCover>
          {/* <CardContent>
              <Typography
                level="h6"
                fontWeight="lg"
                textColor="#000"
                mt={{ xs: 12, sm: 18 }}
              >
                Video
              </Typography>
            </CardContent> */}
        </Card>
      </Grid>
    </Grid>
  );
}
