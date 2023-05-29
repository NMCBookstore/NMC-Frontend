import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InfoCheckout from "./InfoCheckout";
import ReviewOrder from "./ReviewOrder";
import StripeContainer from "./StripeContainer";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useListAddressQuery } from "../../../services/addressAPIs";
import { toast } from "react-hot-toast";

const steps = ["Info & shipping", "Review order", "Payment"];

const theme = createTheme();

export default function UserCheckout() {
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <InfoCheckout data={data} handleChangeAddress={handleChangeAddress} />
        );
      case 1:
        return <ReviewOrder />;
      case 2:
        return (
          <StripeContainer handleNext={handleNext} userAddress={userAddress} />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const { data } = useListAddressQuery();

  const [activeStep, setActiveStep] = useState(0);

  const [userAddress, setUserAddress] = useState("");

  const handleChangeAddress = (address) => {
    setUserAddress(address);
  };
  console.log("this is main checkout", userAddress);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            component="h1"
            fontWeight={500}
            variant="h4"
            align="center"
          >
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="subtitle1">
                    We will send you an update when your order has shipped.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Link to="/" style={{ textDecoration: "none", marginTop: 8 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#db4444",
                          "&:hover": {
                            background: "#ffa071",
                          },
                        }}
                      >
                        Continue to view product
                      </Button>
                    </Box>
                  </Link>
                </Grid>
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <></>
                ) : userAddress ? (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => toast.error("Please select your address")}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
