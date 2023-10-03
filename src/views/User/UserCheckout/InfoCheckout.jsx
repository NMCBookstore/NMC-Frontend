import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

export default function InfoCheckout({ data, handleChangeAddress }) {
  const user = useSelector((state) => state.auth.login.user);

  const [userAddress, setUserAddress] = useState([]);

  // console.log(data);
  let combinedString = "";

  const handleAddress = ({ address, city, district }) => {
    combinedString = address + "/" + city + "/" + district;
    handleChangeAddress(combinedString);
    setUserAddress(combinedString);
  };
  console.log(userAddress);

  // console.log(user);

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
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box sx={{ marginTop: 3 }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="address-label">Select your address</InputLabel>
                <Select
                  labelId="address-label"
                  id="address-label"
                  label="Address"
                  defaultValue={""}
                  onChange={(event) => handleAddress(event.target.value)}
                >
                  {data?.map((item, index) => (
                    <MenuItem key={item?.id} value={item}>
                      {item?.address}, {item?.district}, {item?.city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  );
}
