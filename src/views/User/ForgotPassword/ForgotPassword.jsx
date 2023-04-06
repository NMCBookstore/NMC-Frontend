import React from "react";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";



const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () =>{
    console.log(email);
  }

  return (
    <Card component="form" sx={{ maxWidth: "40%", marginY: "20px", marginLeft:"30%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 28, marginLeft:"12%" }} color="text.primary" gutterBottom display="center">
          Please fill out your email
        </Typography>
        <Divider sx={{marginY:"20px"}}/>
        <TextField
        fullWidth
        required
          label="Enter your email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </CardContent>
      <CardActions>
        <Button
        onClick={handleSubmit}
          variant="contained"
          sx={{
            marginLeft:"70%",
            marginY:"10px",
            backgroundColor: "#db4444",
            "&:hover": {
              background: "#ffa071",
            },
          }}
          // type="submit"
          size="small"
        >
          Verify Email
        </Button>
      </CardActions>
    </Card>
  );
};

export default ForgotPassword;
