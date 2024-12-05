import { Button, Grid, Grid2, TextField, Typography } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

const ReviewDetails = ({ currentStep, handlePrevStep, handleNextStep }: any) => {
  return (
    <Grid2 container display={"flex"} width={"100vw"} justifyContent={"center"}>
      <NavBar currentStep={currentStep} handlePrevStep={handlePrevStep}/>
      <Grid2
        display={"flex"}
        spacing={2}
        flexDirection={"column"}
        margin={2}
        marginLeft={"180px"}
        width={"30%"}
        alignItems={"flex-start"}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography variant="h4">KYC Details</Typography>
          <Typography variant="body1">Read below details carefully, they cannot be changed later.</Typography>
          <Typography variant="h5" mt={2} mb={2}>Confirm Details</Typography>
        </Grid>
      </Grid2>
    </Grid2>
  );
};

export default ReviewDetails;
