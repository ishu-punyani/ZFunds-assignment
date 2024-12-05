import { useState } from "react";
import Documents from "./Documents";
import PersonalDetails from "./PersonalDetails";
import Button from "@mui/material/Button";
import { Grid, Grid2, Typography } from "@mui/material";
import Declaration from "./Declaration";
import ReviewDetails from "./ReviewDetails";
import NavBar from "./NavBar";

const KycMainPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [kycData, setKycData] = useState({
    personalDetails: {
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
  });

  const handleSubmit = () => {
    console.log("KYC Completed", kycData);
  };

  const handleEditStep = (step: number) => {
    setCurrentStep(step);
  };
  const handleNextStep = () => {
    console.log("clicked");
    setCurrentStep((prevStep) => prevStep + 1);
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
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStep == 2 && (
        <Documents
          client:visible
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStep == 3 && (
        <Declaration
          client:visible
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStep == 4 && (
        <ReviewDetails
          client:visible
          currentStep={currentStep}
          handlePrevStep={handlePrevStep}
        />
      )}
    </Grid>
  );
};
export default KycMainPage;
