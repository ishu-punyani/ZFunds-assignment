import { Button, Grid2, TextField } from "@mui/material";
import React from "react";

const PersonalDetails = ({ handleNextStep }: any) => {
  return (
    <Grid2 container>
    <h2>Personal Details</h2>
    <TextField 
        name="name"
        label="Name"
        size="small"
        
    />
    <Button variant="contained" onClick={handleNextStep}>Next</Button>
    </Grid2>
  );
};

export default PersonalDetails;