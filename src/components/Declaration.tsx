import { Box, Button, Grid, Grid2, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "./NavBar";

const Declaration = ({ currentStep, handlePrevStep, handleNextStep, formik }: any) => {
  const {values, setFieldValue} = formik;
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
              checked={values.declaration.indianCitizen}
              onChange={(e : any) =>
                setFieldValue("declaration.indianCitizen", e.target.checked)
              }
              onBlur={formik.handleBlur}
              name="declaration.indianCitizen"
              color="primary"
            />
          </Box>
          {formik.touched.declaration?.indianCitizen && formik.errors.declaration?.indianCitizen && (
              <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
                {formik.errors.declaration.indianCitizen}
              </Typography>
            )}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">Indian Tax Resident</Typography>
            <Switch
              checked={values.declaration.indianTaxResident}
              onChange={(e : any) =>
                setFieldValue("declaration.indianTaxResident", e.target.checked)
              }
              onBlur={formik.handleBlur}
              name="declaration.indianTaxResident"
              color="primary"
            />
          </Box>
          {formik.touched.declaration?.indianTaxResident && formik.errors.declaration?.indianTaxResident && (
              <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
                {formik.errors.declaration.indianTaxResident}
              </Typography>
            )}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">Not Politically Exposed</Typography>
            <Switch
              checked={values.declaration.notPoliticallyExposed}
              onChange={(e : any) =>
                setFieldValue("declaration.notPoliticallyExposed", e.target.checked)
              }
              onBlur={formik.handleBlur}
              name="declaration.notPoliticallyExposed"
              color="primary"
            />
          </Box>
          {formik.touched.declaration?.notPoliticallyExposed && formik.errors.declaration?.notPoliticallyExposed && (
              <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
                {formik.errors.declaration.notPoliticallyExposed}
              </Typography>
            )}
          <Button variant="contained" onClick={handleNextStep}>
            Next
          </Button>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Declaration;
