import React from "react";
import { Container, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSendEmailForgotPasswordMutation } from "../../../services/forgotPasswordAPI";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

  const navigate = useNavigate()

  const initialValues = {
    email: "",
  };


  const [ sendResetEmail ] = useSendEmailForgotPasswordMutation(initialValues);


  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
  });



  const handleSubmit = async (initialValues) => {
    const v = await sendResetEmail(initialValues)
    navigate("/send_email_succeed");

  };

  return (
    <Container sx={{ mt: 21.1 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Form>
            <Card
              sx={{
                border: 0.1,
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 28 }}
                  color="text.primary"
                  gutterBottom
                  display="center"
                >
                  Please fill out your email
                </Typography>
                <Divider sx={{ marginY: "20px", border: 0.1 }} />
                <Field
                  as={TextField}
                  name="email"
                  type="email"
                  fullWidth
                  label="Enter your email"
                  helperText={<ErrorMessage name="email" />}

                />
              </CardContent>
              <CardActions sx={{ justifyContent: "end", mr: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    marginY: "10px",
                    backgroundColor: "#db4444",
                    "&:hover": {
                      background: "#ffa071",
                    },
                  }}
                  size="small"
                  onClick={handleSubmit}
                >
                  Send email
                </Button>
              </CardActions>
            </Card>
          </Form>
        </Box>
      </Formik>
    </Container>
  );
};

export default ForgotPassword;
