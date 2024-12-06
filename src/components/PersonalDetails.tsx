import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Grid2, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

const PersonalDetails = ({ currentStep, handlePrevStep, handleNextStep, formik }: any) => {
    const { values, errors, touched, setFieldValue } = formik;
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
              name="personalDetails.maritalStatus"
              value={values?.personalDetails.maritalStatus}
              onChange={(e: any) => setFieldValue('personalDetails.maritalStatus', e.target.value)}
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
            name="personalDetails.name"
            label="Name"
            size="small"
            value={values?.personalDetails.name}
            onChange={(e: any) => setFieldValue("personalDetails.name", e.target.value)}
            onBlur={formik.handleBlur}
            error={touched.personalDetails?.name && Boolean(errors.personalDetails?.name)}
            helperText={touched.personalDetails?.name && errors.personalDetails?.name}
          />
          <TextField
            name="personalDetails.fatherName"
            label="Father's Name"
            size="small"
            value={values?.personalDetails.fatherName}
            onChange={(e: any) => setFieldValue("personalDetails.fatherName", e.target.value)}
            onBlur={formik.handleBlur}
            error={touched.personalDetails?.fatherName && Boolean(errors.personalDetails?.fatherName)}
            helperText={touched.personalDetails?.fatherName && errors.personalDetails?.fatherName}
          />
          <TextField
            name="personalDetails.email"
            label="Email"
            size="small"
            value={values?.personalDetails.email}
            onChange={(e: any) => setFieldValue("personalDetails.email", e.target.value)}
            onBlur={formik.handleBlur}
            error={touched.personalDetails?.email && Boolean(errors.personalDetails?.email)}
            helperText={touched.personalDetails?.email && errors.personalDetails?.email}
          />
          <Grid2>
            <Button onClick={() => setFieldValue("personalDetails.email", values?.personalDetails.email + "@gmail.com")}>
              @gmail.com
            </Button>
            <Button onClick={() => setFieldValue("personalDetails.email", values?.personalDetails.email + "@yahoo.in")}>
              @yahoo.in
            </Button>
            <Button onClick={() => setFieldValue("personalDetails.email", values?.personalDetails.email + "@outlook.com")}>
              @outlook.com
            </Button>
          </Grid2>
          <FormControl>
            <FormLabel id="annualIncome-radio">Annual Income</FormLabel>
            <RadioGroup
              aria-labelledby="annualIncome-radio"
              name="personalDetails.annualIncome"
              value={values?.personalDetails.annualIncome}
              onChange={(e: any) => setFieldValue("personalDetails.annualIncome", e.target.value)}
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
