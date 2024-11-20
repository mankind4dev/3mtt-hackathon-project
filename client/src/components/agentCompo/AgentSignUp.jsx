import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { FaInfoCircle } from "react-icons/fa";
import SignUpHead from "./SignUpHead";
import { useNavigate } from "react-router-dom";

const AgentSignUp = () => {
  const [occupation, setOccupation] = useState("");
  const [idType, setIdType] = useState("");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/agent/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/agent-sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

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

  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        padding={5}
      >
        <Box
          maxWidth={1000}
          mx={"auto"}
          width={900}
          bgcolor={"rgb(194, 191, 191)"}
          borderRadius={"15px"}
        >
          <SignUpHead />
          <Box padding={3}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, setFieldValue }) => (
                <Form>
                  <Box className="flex flex-col  w-full text-start mb-4">
                    <div className="mb-4">
                      <label className="text-[18px]">Mr/Mrs/Miss:</label>
                      <Field
                        onChange={handleChange}
                        id="title"
                        name="title"
                        className={`p-2 w-full rounded ${
                          errors.title && touched.title
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="Enter your title"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box>
                  {/* Basic Details */}
                  <Box
                    display={"flex"}
                    width={"100%"}
                    flexWrap={{ base: "wrap" }}
                    gap={2}
                    mb={2}
                  >
                    <div className="flex flex-col w-full text-start">
                      <label className="text-[18px]">First Name:</label>
                      <Field
                        onChange={handleChange}
                        id="firstName"
                        name="firstName"
                        className={`p-2 w-full rounded ${
                          errors.firstName && touched.firstName
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="Enter your first name"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-400"
                      />
                    </div>

                    <div className="flex flex-col w-full text-start">
                      <label className="text-[18px]">Middle Name:</label>
                      <Field
                        onChange={handleChange}
                        id="middleName"
                        name="middleName"
                        className={`p-2 w-full rounded ${
                          errors.middleName && touched.middleName
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="Enter your middle name"
                      />
                      <ErrorMessage
                        name="middleName"
                        component="div"
                        className="text-red-400"
                      />
                    </div>

                    <div className="flex flex-col w-full text-start">
                      <label className="text-[18px]">Last Name:</label>
                      <Field
                        onChange={handleChange}
                        id="lastName"
                        name="lastName"
                        className={`p-2 w-full rounded ${
                          errors.lastName && touched.lastName
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="Enter your last name"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box>

                  <Box
                    display={"flex"}
                    width={"100%"}
                    flexWrap={{ base: "wrap" }}
                    gap={2}
                    mb={2}
                  >
                    <div className="flex flex-col w-full text-start">
                      <label className="text-[18px]">Nationality:</label>
                      <Field
                        onChange={handleChange}
                        id="nationality"
                        name="nationality"
                        className={`p-2 w-full rounded ${
                          errors.nationality && touched.nationality
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="Enter your nationality"
                      />
                      <ErrorMessage
                        name="nationality"
                        component="div"
                        className="text-red-400"
                      />
                    </div>

                    <div className="flex flex-col w-full text-start">
                      <label className="text-[18px]">State:</label>
                      <Field
                        onChange={handleChange}
                        id="state"
                        name="state"
                        className={`p-2 w-full rounded ${
                          errors.state && touched.state
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="Enter your State"
                      />
                      <ErrorMessage
                        name="state"
                        component="div"
                        className="text-red-400"
                      />
                    </div>

                    <div className="flex flex-col w-full text-start">
                      <label className="text-[18px]">LGA:</label>
                      <Field
                        onChange={handleChange}
                        id="lga"
                        name="lga"
                        className={`p-2 w-full rounded ${
                          errors.lga && touched.lga
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="Enter your LGA"
                      />
                      <ErrorMessage
                        name="lga"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box>

                  {/* Age Range */}
                  <Box mb={2}>
                    <div>
                      <label className="text-[18px]">Age Range:</label>
                      <Field
                        onChange={handleChange}
                        id="age"
                        as="select"
                        name="ageRange"
                        className={`p-2 w-full rounded ${
                          errors.ageRange && touched.ageRange
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border bg-slate-200 rounded`}
                      >
                        <option value="">Select</option>
                        <option value="15-20">15-20</option>
                        <option value="21-25">21-25</option>
                        <option value="26-30">26-30</option>
                      </Field>
                      <ErrorMessage
                        name="ageRange"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box>

                  {/* Gender */}
                  <Box className="flex flex-col w-full text-start mb-2">
                    <div className="flex flex-col">
                      <label className="text-[18px]">Gender:</label>
                      <label className="pl-3 mb-2">
                        <Field
                          onChange={handleChange}
                          id="gender"
                          type="radio"
                          name="gender"
                          value="male"
                          className={` ${
                            errors.gender && touched.gender
                              ? "border-red-500 text-red-500"
                              : "border-gray-300"
                          } border`}
                        />
                        Male
                      </label>
                      <label className="pl-3">
                        <Field
                          onChange={handleChange}
                          id="gender"
                          type="radio"
                          name="gender"
                          value="female"
                          className={` ${
                            errors.gender && touched.gender
                              ? "border-red-500 text-red-500"
                              : "border-gray-300"
                          } border`}
                        />
                        Female
                      </label>
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box>

                  {/* Relationship */}
                  <Box className="flex flex-col w-full text-start mb-2">
                    <div>
                      <label className="text-[18px]"> Relationship:</label>
                      <Field
                        onChange={handleChange}
                        id="relationship"
                        as="select"
                        name="relationship"
                        className={`p-2 w-full rounded ${
                          errors.relationship && touched.relationship
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border bg-slate-200 rounded`}
                      >
                        <option value="">Select</option>
                        <option value="single">Single</option>
                        <option value="divorce">Divorce</option>
                        <option value="separated">Separated</option>
                      </Field>
                      <ErrorMessage
                        name="relationship"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box>
                  {/* phone number */}
                  <Box className="flex flex-col w-full text-start mb-4">
                    <div className="flex flex-col mb-3">
                      <label className="text-[18px]">Phone Number:</label>
                      <Field
                        onChange={handleChange}
                        id="phoneNumber"
                        name="phoneNumber"
                        className={`p-2 w-full rounded ${
                          errors.phoneNumber && touched.phoneNumber
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="Enter your phone number"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box>

                  {/* email */}
                  <Box className="flex flex-col w-full text-start mb-4">
                    <div className="flex flex-col mb-3">
                      <label className="text-[18px]">Email:</label>
                      <Field
                        onChange={handleChange}
                        id="email"
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

                  {/* Password Fields */}
                  <Box display={"flex"} flexDirection={"column"}>
                    <div className="flex flex-col mb-3">
                      <label className="text-[18px]">Password:</label>
                      <Field
                        onChange={handleChange}
                        id="password"
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
                    <div className="flex flex-col mb-3">
                      <label className="text-[18px]">Confirm Password:</label>
                      <Field
                        onChange={handleChange}
                        type="password"
                        name="confirmPassword"
                        className={`p-2 w-full rounded ${
                          errors.confirmPassword && touched.confirmPassword
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border`}
                        placeholder="******************"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box>

                  {/* ID Type */}
                  <Box className="flex flex-col w-full text-start mb-4">
                    <div>
                      <label className="text-[18px]">ID Type:</label>
                      <Field 
                        id="idType"
                        as="select"
                        name="idType"
                        onChange={(e) => {
                          setIdType(e.target.value);
                          setFieldValue("idType", e.target.value);
                        }}
                        className={`p-2 w-full rounded ${
                          errors.idType && touched.idType
                            ? "border-red-500 text-red-500"
                            : "border-gray-300"
                        } border bg-slate-200 rounded`}
                      >
                        <option value="">Select</option>
                        <option value="NIN">NIN</option>
                        <option value="BVN">BVN</option>
                      </Field>
                      <ErrorMessage
                        name="idType"
                        component="div"
                        className="text-red-400"
                      />
                    </div>
                  </Box>

                  {/* Dynamic Field for NIN */}
                  {idType === "NIN" && (
                    <Box mb={4}>
                      <div className="flex flex-col">
                        <label className="text-[18px]">NIN Number:</label>
                        <Field
                          onChange={handleChange}
                          id="idNumber"
                          name="idNumber"
                          className={`p-2 w-full rounded bg-slate-200   ${
                            errors.idNumber && touched.idNumber
                              ? "border-red-500 text-red-500"
                              : "border-gray-300 "
                          } border`}
                          placeholder="Enter your title"
                        />
                        <ErrorMessage
                          name="idNumber"
                          component="div"
                          className="text-red-400"
                        />
                      </div>
                    </Box>
                  )}
                  {idType === "BVN" && (
                    <Box mb={4}>
                      <div className="flex flex-col">
                        <label className="text-[18px]">BVN Number:</label>
                        <Field
                          name="idNumber"
                          className={`p-2 w-full rounded ${
                            errors.idNumber && touched.idNumber
                              ? "border-red-500 text-red-500"
                              : "border-gray-300"
                          } border`}
                        />
                        <ErrorMessage
                          name="idNumber"
                          component="div"
                          className="text-red-400"
                        />
                      </div>
                    </Box>
                  )}

                  {/* Submit Button */}
                  <Box
                    display={"flex"}
                    className="flex flex-col w-full text-[25px] font-bold text-start mb-4 bg-slate-200 p-2 rounded hover:bg-white hover:text-black"
                  >
                    <button type="submit" className="uppercase">
                      Sign Up
                    </button>
                  </Box>
                </Form>
              )}
            </Formik>
            <Box mt={6}>
              {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
            </Box>
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
