import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavBar from "./NavBar";
import EditIcon from "@mui/icons-material/Edit";

const ReviewDetails = ({
  currentStep,
  handlePrevStep,
  setCurrentStep,
  formik,
}: any) => {
  const [tnc, setTnc] = useState(false);
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
          <Typography variant="h4">KYC Details</Typography>
          <Typography variant="body1">
            Read below details carefully, they cannot be changed later.
          </Typography>
          <Typography variant="h5" mt={2} mb={2}>
            Confirm Details
          </Typography>
        </Grid>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          p={3}
          mb={3}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.7)",
            width: "250px",
          }}
        >
          <Grid display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5">User Details</Typography>
          </Grid>
          <Typography variant="body1">
            PAN CARD: INDIAN CITIZEN
          </Typography>
          <Typography variant="body1">
            Date of Birth: DD/MM/YYYY
          </Typography>
          <Typography variant="body1" color="primary">
            Note: You cannot edit above details as they are already verfied through Digilocker.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          p={3}
          mb={3}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.7)",
            width: "250px",
          }}
        >
          <Grid display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5">Personal Details</Typography>
            <IconButton
              sx={{
                color: "darkblue",
                textDecoration: "underline",
                fontSize: "1rem",
                verticalAlign: "top",
              }}
              onClick={() => setCurrentStep(1)}
            >
              <EditIcon /> Edit
            </IconButton>
          </Grid>
          <Typography variant="body1">
            Name: {formik?.values.personalDetails.name}
          </Typography>
          <Typography variant="body1">
            Father's Name: {formik?.values.personalDetails.fatherName}
          </Typography>
          <Typography variant="body1">
            Email: {formik?.values.personalDetails.email}
          </Typography>
          <Typography variant="body1">
            Marital Status: {formik?.values.personalDetails.maritalStatus}
          </Typography>
          <Typography variant="body1">
            Annual Income: {formik?.values.personalDetails.annualIncome}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          p={3}
          mb={3}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.7)",
            width: "250px",
          }}
        >
          <Grid display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5">Documents</Typography>
            <IconButton
              sx={{
                color: "darkblue",
                textDecoration: "underline",
                fontSize: "1rem",
                verticalAlign: "top",
              }}
              onClick={() => setCurrentStep(2)}
            >
              <EditIcon /> Edit
            </IconButton>
          </Grid>
          <Box display={"flex"} justifyContent={"space-between"} gap={4}>
            <Avatar
              src={formik?.values?.documents?.panCard}
              alt="PAN preview"
              sx={{ width: 100, height: 100, borderRadius: 0 }}
            />
            <Avatar
              src={formik?.values?.documents?.signature}
              alt="PAN preview"
              sx={{ width: 100, height: 100, borderRadius: 0 }}
            />
          </Box>
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={tnc}
                onChange={(e: any) => setTnc(e.target.checked)}
                color="primary"
              />
            }
            label=" I agree to the Terms & Conditions"
          />
        </Box>
        <Button
          variant="contained"
          sx={{ width: "300px" }}
          disabled={!tnc}
          onClick={formik.handleSubmit}
        >
          Submit KYC
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default ReviewDetails;
