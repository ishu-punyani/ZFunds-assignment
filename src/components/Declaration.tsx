import { Button, Grid2, TextField } from "@mui/material";
import React from "react";

const Declaration = ({ handleNextStep }: any) => {
  console.log("Declaration");
  return (
    <Grid2 container>
    <h2>Declaration</h2>
    <Button variant="contained" onClick={handleNextStep}>Next</Button>
    </Grid2>
  );
};

export default Declaration;
