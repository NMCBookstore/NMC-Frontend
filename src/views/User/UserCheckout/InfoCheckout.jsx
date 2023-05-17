import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";

export default function InfoCheckout() {
  const user = useSelector((state) => state.auth.login.user);

  console.log(user);

  const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: "Mr John Smith" },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiry date", detail: "04/2024" },
  ];

  //   console.log(user)

  const [info, setInfo] = useState(null);
  useEffect(() => {
    setInfo(user);
  }, [user]);

  return (
    info && (
      <React.Fragment>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Information
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>
              <Typography fontWeight={500}>Full name:</Typography>
              {user.full_name}
            </Typography>
            <Typography gutterBottom>
              <Typography fontWeight={500}>Age:</Typography> {user.age}
            </Typography>
            <Typography gutterBottom>
              <Typography fontWeight={500}>Email:</Typography> {user.email}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>

            <Typography gutterBottom>
              <Typography fontWeight={500}>Phone number:</Typography>{" "}
              {user.phone_number}
            </Typography>

            <Typography gutterBottom>
              <Typography fontWeight={500}>Address:</Typography>{" "}
              {addresses.join(", ")}
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  );
}
