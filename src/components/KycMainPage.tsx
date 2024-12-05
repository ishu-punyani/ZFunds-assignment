import { useState } from "react";
import Documents from "./Documents";
import PersonalDetails from "./PersonalDetails";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import Declaration from "./Declaration";
import ReviewDetails from "./ReviewDetails";

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
    console.log("clicked", step);
    setCurrentStep(step);
  };
  const handleNextStep = () => {
    console.log('clicked');
    setCurrentStep((prevStep) => prevStep + 1);
  };

  console.log('currentStep', currentStep);

  return (
    <Grid className="container">
      {currentStep == 0 && (
        <>
          <Typography variant="h1" sx={{ fontSize: '2rem'}}>
            Welcome to ZFunds! Before moving forward, please proceed with your
            KYC by clicking the button below.
          </Typography>
          <Button variant="contained" onClick={handleNextStep}>Complete KYC</Button>
        </>
      )}
      {currentStep == 1 && (
        <PersonalDetails client:visible handleNextStep={handleNextStep} />
      )}
      {currentStep == 2 && <Documents client:visible handleNextStep={handleNextStep} />}
      {currentStep == 3 && <Declaration client:visible handleNextStep={handleNextStep} />}
      {currentStep == 4 && <ReviewDetails client:visible />}
    </Grid>
  );
};
export default KycMainPage;
