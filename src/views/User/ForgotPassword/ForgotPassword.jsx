import React from "react";
import { Container, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSendEmailForgotPasswordQuery } from "../../../services/forgotPasswordAPI";

const ForgotPassword = () => {
  // const [email, setEmail] = useState("");

  // const { data } = useSendEmailForgotPasswordQuery(email);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
  });

  const handleSubmit = (initialValues, formikHelper) => {
    console.log(initialValues);
    formikHelper.resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <Card
              sx={{
                maxWidth: "40%",
                marginY: "20px",
                marginLeft: "30%",
                border: 0.1,
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 28, marginLeft: "12%" }}
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
                  type = "email"
                  fullWidth
                  // required
                  label="Enter your email"
                  helperText={<ErrorMessage name="email"/>}
                  // onChange={(event) => {
                  //   setEmail(event.target.value);
                  // }}
                />
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    marginLeft: "70%",
                    marginY: "10px",
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
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ForgotPassword;
