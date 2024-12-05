import { Box, Button, Grid, Grid2, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "./NavBar";

const Declaration = ({ currentStep, handlePrevStep, handleNextStep }: any) => {
  const [indianCitizen, setIndianCitizen] = useState(false);
  const [indianTaxResident, setIndianTaxResident] = useState(false);
  const [notPoliticallyExposed, setNotPoliticallyExposed] = useState(false);
  return (
    <Grid2 container display={"flex"} width={"100vw"} justifyContent={"center"}>
      <NavBar currentStep={currentStep} handlePrevStep={handlePrevStep} />
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
          <Typography variant="h4">FATCA Declaration</Typography>
          <Typography variant="body1">Declare your FATCA details</Typography>
          <Typography variant="h5" mt={2} mb={2}>
            Declaration
          </Typography>
        </Grid>
        <Grid2 display={"flex"} flexDirection={"column"} gap={2} width={"70%"}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">Indian Citizen</Typography>
            <Switch
              checked={indianCitizen}
              onChange={(e: any) => setIndianCitizen(!indianCitizen)}
              name="toggle"
              color="primary"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">Indian Tax Resident</Typography>
            <Switch
              checked={indianTaxResident}
              onChange={(e: any) => setIndianTaxResident(!indianTaxResident)}
              name="toggle"
              color="primary"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">Not Politically Exposed</Typography>
            <Switch
              checked={notPoliticallyExposed}
              onChange={(e: any) => setNotPoliticallyExposed(e.target.checked)}
              name="toggle"
              color="primary"
            />
          </Box>
          <Button variant="contained" onClick={handleNextStep}>
            Next
          </Button>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Declaration;
