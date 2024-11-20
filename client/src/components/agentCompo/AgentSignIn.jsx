import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material"; 
import SignInHead from "./SignInHead";

const AgentSignUp = () => {
  const [occupation, setOccupation] = useState("");
  const [idType, setIdType] = useState("");

  const initialValues = {
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    nationality: "",
    state: "",
    lga: "",
    ageRange: "",
    gender: "",
    relationship: "",
    occupation: "",
    farmerName: "",
    farmerState: "",
    officeName: "",
    officeState: "",
    officeLGA: "",
    officeStreet: "",
    file: null,
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    idType: "",
    idNumber: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    firstName: Yup.string().required("First Name is required"),
    middleName: Yup.string().required("Middle Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    nationality: Yup.string().required("Nationality is required"),
    state: Yup.string().required("State is required"),
    lga: Yup.string().required("LGA is required"),
    ageRange: Yup.string().required("Age range is required"),
    gender: Yup.string().required("Gender is required"),
    relationship: Yup.string().required("Relationship status is required"),
    occupation: Yup.string().required("Occupation is required"),
    ...(occupation === "farmer" && {
      farmerName: Yup.string().required("Farm Name is required"),
      farmerState: Yup.string().required("Farm State is required"),
    }),
    ...(occupation === "office" && {
      officeName: Yup.string().required("Office Name is required"),
      officeState: Yup.string().required("Office State is required"),
      officeLGA: Yup.string().required("Office LGA is required"),
      officeStreet: Yup.string().required("Office Street is required"),
      file: Yup.mixed().required("File is required"),
    }),
    phoneNumber: Yup.string()
      .matches(/^\d+$/, "Must be a valid phone number")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(
        /[!@#$%&]/,
        "Must contain at least one special character (!@#$%&)"
      )
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    ...(idType === "NIN" && {
      idNumber: Yup.string()
        .matches(/^\d{11}$/, "NIN must be 11 digits")
        .required("NIN number is required"),
    }),
    ...(idType === "BVN" && {
      idNumber: Yup.string()
        .matches(/^\d{11}$/, "BVN must be 11 digits")
        .required("BVN number is required"),
    }),
  });

  const handleSubmit = (values) => {
    console.log("Form data:", values);
    console.log(handleSubmit)
    if (ok) {
      alert(
        "You have successfully registered. Email and ID sent to your email."
      );
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        width={"100%"} 
        justifyContent={"center"}
        padding={5} 
      >
        <Box
          maxWidth={"100%"}
          mx={"auto"}
          width={"500px"}
          bgcolor={"rgb(194, 191, 191)"}
          borderRadius={"15px"}
        >
          <SignInHead />
          <Box padding={3}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, setFieldValue }) => (
                <Form>  
                  <Box className="flex flex-col w-full text-start mb-3">
                    <div className="flex flex-col mb-3">
                      <label className="text-[18px]">Email:</label>
                      <Field
                        name="email"
                        className={`p-2 w-full rounded ${
                          errors.email && touched.email
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="Enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box> 
                  <Box display={"flex"} flexDirection={"column"}>
                    <div className="flex flex-col mb-3">
                      <label className="text-[18px]">Password:</label>
                      <Field
                        type="password"
                        name="password"
                        className={`p-2 w-full rounded ${
                          errors.password && touched.password
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="******************"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                     
                  </Box>  
                  <Box
                    display={"flex"}
                    className="flex flex-col w-full text-[25px] font-bold text-start mb-4 bg-slate-200 p-2 rounded hover:bg-white hover:text-black"
                  >
                    <button type="submit" className="uppercase">
                      Login
                    </button>
                  </Box>
                </Form>
              )}
            </Formik>
            <Box
              display={"flex"}
              alignContent={"center"}
              justifyContent={"center"}
              gap={1}
            >
              <Typography fontWeight={200}>Powered By?</Typography>
              <Typography textTransform={"capitalize"} fontWeight={300}>
                renthub
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AgentSignUp;
