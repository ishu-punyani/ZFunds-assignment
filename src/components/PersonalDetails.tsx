import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Grid2, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import React, { useState } from "react";
import NavBar from "./NavBar";

const PersonalDetails = ({ currentStep, handlePrevStep, handleNextStep }: any) => {
  const [name, setName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Single");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [annualIncome, setAnnualIncome] = useState("Below 1 Lakh");
  return (
    <Grid2 container display={"flex"} width={"100vw"} justifyContent={"center"}>
      <NavBar currentStep={currentStep} handlePrevStep={handlePrevStep} />
      <Grid2
        display={"flex"}
        spacing={1}
        flexDirection={"column"}
        margin={2}
        width={"30%"}
        alignItems={"center"}
      >
        <Grid item>
          <Typography variant="h4">Personal Details</Typography>
          <Typography variant="h6">
            These details are required to complete your KYC verification
          </Typography>
          <Typography variant="h5" mt={2} mb={2}>
            Personal Details
          </Typography>
        </Grid>
        <Grid2 display={"flex"} flexDirection={"column"} gap={2} width={"100%"}>
          <FormControl>
            <FormLabel id="marital-radio">Marital Status</FormLabel>
            <RadioGroup
              aria-labelledby="marital-radio"
              name="maritalStatus"
              value={maritalStatus}
              onChange={(e: any) => setMaritalStatus(e.target.value)}
              row
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <FormControlLabel
                  value="Single"
                  control={<Radio />}
                  label="Single"
                />
                <FormControlLabel
                  value="Married"
                  control={<Radio />}
                  label="Married"
                />
              </Box>
            </RadioGroup>
          </FormControl>
          <TextField
            name="name"
            label="Name"
            size="small"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <TextField
            name="father name"
            label="Father's Name"
            size="small"
            value={fatherName}
            onChange={(e: any) => setFatherName(e.target.value)}
          />
          <TextField
            name="email"
            label="Email"
            size="small"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Grid2>
            <Button onClick={() => setEmail((str) => str + "@gmail.com")}>
              @gmail.com
            </Button>
            <Button onClick={() => setEmail((str) => str + "@yahoo.in")}>
              @yahoo.in
            </Button>
            <Button onClick={() => setEmail((str) => str + "@rediffmail.com")}>
              @rediffmail.com
            </Button>
          </Grid2>
          <FormControl>
            <FormLabel id="annualIncome-radio">Annual Income</FormLabel>
            <RadioGroup
              aria-labelledby="annualIncome-radio"
              name="annualIncome"
              value={annualIncome}
              onChange={(e: any) => setAnnualIncome(e.target.value)}
            >
              <FormControlLabel
                value="Below 1 Lakh"
                control={<Radio />}
                label="Below 1 Lakh"
              />
              <FormControlLabel
                value="1-5 Lakh"
                control={<Radio />}
                label="1-5 Lakh"
              />
              <FormControlLabel
                value="5-10 Lakh"
                control={<Radio />}
                label="5-10 Lakh"
              />
              <FormControlLabel
                value="10-15 Lakh"
                control={<Radio />}
                label="10-15 Lakh"
              />
              <FormControlLabel
                value=">15 Lakh"
                control={<Radio />}
                label=">15 Lakh"
              />
            </RadioGroup>
          </FormControl>
          <Button variant="contained" onClick={handleNextStep}>
            Next
          </Button>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default PersonalDetails;
