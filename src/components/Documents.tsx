import { Button, Grid2, TextField } from "@mui/material";
import React from "react";

const Documents = ({ handleNextStep }: any) => {
  console.log("documents");
  return (
    <Grid2 container>
    <h2>Documents</h2>
    <Button variant="contained" onClick={handleNextStep}>Next</Button>
    </Grid2>
  );
};

export default Documents;
