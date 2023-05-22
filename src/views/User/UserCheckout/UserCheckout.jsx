import * as React from "react";
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
import PaymentForm from "./PaymentForm";
import InfoCheckout from "./InfoCheckout";
import ReviewOrder from "./ReviewOrder";
import StripeContainer from "./StripeContainer";
import { useCreateOrderMutation } from "../../../services/orderAPIs";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCheckOutInfoArr,
  clearCartIdArr,
  selectCurrentCartOrder,
  selectCurrentProductArr,
  selectCurrentShipping,
} from "../../../features/cart/cartSlice";
import { toast } from "react-hot-toast";
import { Grid } from "@mui/material";

const steps = ["Info & shipping", "Review order", "Payment"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InfoCheckout />;
    case 1:
      return <ReviewOrder />;
    case 2:
      return <StripeContainer />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function UserCheckout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();

  const cartIdsArr = useSelector(selectCurrentCartOrder);
  const orderInfo = useSelector(selectCurrentProductArr);

  const shipping = useSelector(selectCurrentShipping);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [createOrder] = useCreateOrderMutation();

  const handleCreateOder = async (e) => {
    e.preventDefault();

    try {
      const v = await createOrder({
        cart_ids: cartIdsArr,
        to_address: "123 le van chi",
        total_shipping: shipping,
        status: "success"
      });
      dispatch(clearCheckOutInfoArr(cartIdsArr));
      dispatch(clearCartIdArr(orderInfo));

      if (v.error && v.error.status === 400) {
        toast.error("Failed to create order");
      } else toast.success("Your order has successfully created");
    } catch (err) {
      console.log(err.message);
    }
    handleNext();
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
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
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
                  <Button
                    variant="contained"
                    onClick={handleCreateOder}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Place order
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
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
