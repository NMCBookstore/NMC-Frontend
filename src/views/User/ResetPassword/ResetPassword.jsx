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

export default function ResetPassword() {
  const [pass, setPass] = useState({
    newpass:"",
    confirmpass:""
  });

  const handleSubmit = () => {
    console.log(pass);
  };

  return (
    <Card
      component="form"
      sx={{ maxWidth: "40%", marginY: "20px", marginLeft: "30%" }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 28, marginLeft: "10%" }}
          color="text.primary"
          gutterBottom
          display="center"
        >
          Your email has been verified
        </Typography>
        <Typography level="body2" sx={{ marginLeft: "15%" }}>
          Please change your password to continue
        </Typography>
        <Divider sx={{ marginY: "20px" }} />
        <TextField
          fullWidth
          name="newpass"
          type="password"
          required
          label="Enter your new password"
          onChange={(e) =>
            setPass({ ...pass, newpass: e.target.value })
          }
        />
        <TextField
          fullWidth
          name="confirmpass"
          type="password"
          required
          label="Confirm your new password"
          sx={{marginTop:"20px"}}
          onChange={(e) =>
            setPass({ ...pass, confirmpass: e.target.value })
          }
        />
      </CardContent>
      <CardActions>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            marginLeft: "65%",
            marginY: "10px",
            backgroundColor: "#db4444",
            "&:hover": {
              background: "#ffa071",
            },
          }}
          // type="submit"
          size="small"
        >
          Change password
        </Button>
      </CardActions>
    </Card>
  );
}
