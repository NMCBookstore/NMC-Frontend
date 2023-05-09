import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton, InputAdornment, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSignupMutation } from "../../../services/authAPIs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupStart,signupSuccess, signupFailed } from "../../../features/auth/authSlice";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import toast, { Toaster } from "react-hot-toast";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit">NMC Book Store</Link> {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

const UserRegister = () => {
  const [register] = useSignupMutation();

  const [values, setValues] = useState({
    username: "",
    password: "",
    full_Name: "",
    email: "",
    image: "https://res.cloudinary.com/doqhasjec/image/upload/v1681990980/samples/NMC%20Bookstore/Default_ct9xzk.png",
    age: 0,
    sex: "female",
    phone_number: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(signupStart());
    try {
      const v = await register(values);
      dispatch(signupSuccess(v));
      toast.success("Register success !")
      navigate("/login");
    } catch (err) {
      toast.error('Register failed !');
      dispatch(signupFailed());
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper variant="outlined" sx={{  my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}> 
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  type="email"
                  label="Email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="full_Name"
                  label="Full Name"
                  onChange={(e) =>
                    setValues({ ...values, full_Name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone_number"
                  label="Phone Number"
                  onChange={(e) =>
                    setValues({ ...values, phone_number: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  autoFocus
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="age"
                  type="number"
                  label="Age"
                  onChange={(e) =>
                    setValues({ ...values, age: parseInt(e.target.value) })
                  }
                  placeholder="Enter your age"
                  autoFocus
                />
              </Grid>
              <Grid item sm={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    name="sex"
                    defaultValue="female"
                    onChange={(e) =>
                      setValues({ ...values, sex: e.target.value })
                    }
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="username"
                  label="User name"
                  onChange={(e) =>
                    setValues({ ...values, username: e.target.value })
                  }
                  placeholder="Enter your username"
                  autoComplete="text"
                  autoFocus
                />
              </Grid>

              <Grid item sm={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type={values.showPass ? "text" : "password"}
                  id="password"
                  //   autoComplete="current-password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handlePassVisibilty}
                          aria-label="toggle password"
                          edge="end"
                        >
                          {values.showPass ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Button
              onClick={handleRegister}
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            {/* <Grid item> */}
            <Link href="../login" variant="body1">
              Already have an account ? Sign in
            </Link>
            {/* </Grid> */}
          </Box>
        </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default UserRegister;
