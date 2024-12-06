import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Grid2, Typography } from "@mui/material";

function FormSubmitted({ currentStep, handlePrevStep, setCurrentStep }: any) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(intervalId);
          setCurrentStep(0);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setCurrentStep]);

  return (
    <div>
      <NavBar currentStep={currentStep} handlePrevStep={handlePrevStep} />
      <Grid2
        margin={2}
        width={"60%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={3}
      >
        <Typography variant="h1" sx={{ fontSize: "2rem", textAlign: "center" }}>
          KYC Completed Successfully! You will be redirected to the Homepage in{" "}
          {countdown} seconds...
        </Typography>
      </Grid2>
    </div>
  );
}

export default FormSubmitted;
