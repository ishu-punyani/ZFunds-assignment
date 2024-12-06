import { useState } from "react";
import Documents from "./Documents";
import PersonalDetails from "./PersonalDetails";
import Button from "@mui/material/Button";
import { Grid, Grid2, Typography } from "@mui/material";
import Declaration from "./Declaration";
import ReviewDetails from "./ReviewDetails";
import NavBar from "./NavBar";
import { useFormik } from "formik";
import * as Yup from 'yup';

const KycMainPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const validationSchemas = [
    Yup.object({
      personalDetails: Yup.object({
        fatherName: Yup.string().required("Father's name is required"),
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
      }),
    }),
    Yup.object({
      documents: Yup.object({
        panCard: Yup.string().required("PAN Card is required"),
        signature: Yup.string().required("Signature is required"),
      }),
    }),
    Yup.object({
      declaration: Yup.object({
        indianCitizen: Yup.boolean()
          .oneOf([true], "Must be an Indian citizen")
          .required("Required"),
        indianTaxResident: Yup.boolean()
          .oneOf([true], "Must be an Indian tax resident")
          .required("Required"),
        notPoliticallyExposed: Yup.boolean()
          .oneOf([true], "Cannot be politically exposed")
          .required("Required"),
      }),
    }),
  ];

  

  const formik = useFormik({
    initialValues: {
      personalDetails: {
        name: "",
        maritalStatus: "Single",
        fatherName: "",
        email: "",
        annualIncome: "Below 1 Lakh",
      },
      documents: {
        panCard: "",
        signature: "",
      },
      declaration: {
        indianCitizen: false,
        indianTaxResident: false,
        notPoliticallyExposed: false,
      },
    },
    validationSchema: validationSchemas[currentStep - 1],
    validateOnBlur: true,
    onSubmit: (values : any) => {
      console.log("KYC Data Submitted:", values);
      alert("KYC Completed Successfully!");
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const handleNextStep = async () => {
    const errors = await formik.validateForm();
    formik.setTouched({
        personalDetails: {
          name: true,
          fatherName: true,
          email: true,
        },
        documents: {
          panCard: true,
          signature: true,
        },
        declaration: {
          indianCitizen: true,
          indianTaxResident: true,
          notPoliticallyExposed: true,
        },
      });
    if (Object.keys(errors).length === 0) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Validation Errors:", errors);
    }
  };
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <Grid className="container">
      {currentStep == 0 && (
        <Grid2
          display={"flex"}
          flexDirection={"column"}
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <NavBar currentStep={currentStep} handlePrevStep={handlePrevStep} />
          <Grid2
            margin={2}
            width={"60%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={3}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "2rem", textAlign: "center" }}
            >
              Welcome to ZFunds! Before moving forward, please proceed with your
              KYC by clicking the button below.
            </Typography>
            <Button
              variant="contained"
              onClick={handleNextStep}
              sx={{ maxWidth: "200px", marginTop: "30px" }}
            >
              Complete KYC
            </Button>
          </Grid2>
        </Grid2>
      )}
      {currentStep == 1 && (
        <PersonalDetails
          client:visible
          formik={formik}
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStep == 2 && (
        <Documents
          client:visible
          formik={formik}
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStep == 3 && (
        <Declaration
          client:visible
          formik={formik}
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStep == 4 && (
        <ReviewDetails
          client:visible
          formik={formik}
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          setCurrentStep={setCurrentStep}
        />
      )}
    </Grid>
  );
};
export default KycMainPage;
