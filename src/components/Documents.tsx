import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";

const Documents = ({
  currentStep,
  handlePrevStep,
  handleNextStep,
  formik,
}: any) => {
  const { values, setFieldValue } = formik;

  const handleFileChange = (fieldName: string) => (e: any) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setFieldValue(fieldName, url);
    }
  };
  
  return (
    <Grid container display="flex" width="100vw" justifyContent="center">
      <NavBar currentStep={currentStep} handlePrevStep={handlePrevStep} />
      <Grid
        display="flex"
        spacing={2}
        flexDirection="column"
        margin={2}
        width="40%"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">Documents</Typography>
          <Typography variant="h6">
            These documents are required to complete your KYC verification.
          </Typography>
          <Typography variant="h5" mt={2}>
            Upload Documents
          </Typography>
        </Grid>

        <Grid container direction="column" gap={2} mt={3}>
          <Grid container justifyContent="space-evenly" alignItems="flex-start">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                PAN Card
              </Typography>
              <Typography variant="body2" sx={{ width: "60%" }}>
                Click a picture of your PAN Card and upload
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              justifyContent="flex-end"
              flexWrap={'wrap'}
            >
              <Button
                variant="contained"
                component="label"
                sx={{
                  backgroundColor: "darkblue",
                  color: "white",
                  maxHeight: "50px",
                  justifyContent: "center",
                }}
              >
                Upload PAN Card
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange("documents.panCard")}
                  onBlur={formik.handleBlur}
                />
              </Button>
              {values?.documents?.panCard && (
                <Box ml={2}>
                  <Typography variant="body2">Uploaded Photo:</Typography>
                  <Avatar
                    src={values?.documents?.panCard}
                    alt="PAN preview"
                    sx={{ width: 100, height: 100, borderRadius: 0 }}
                  />
                </Box>
              )}
            </Grid>
            {formik.touched.documents?.panCard &&
              formik.errors.documents?.panCard && (
                <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
                  {formik.errors.documents.panCard}
                </Typography>
              )}
          </Grid>

          <Grid container justifyContent="space-evenly" alignItems="flex-start">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Signature
              </Typography>
              <Typography variant="body2" sx={{ width: "80%" }}>
                Sign on a blank white paper (same as in bank records). Click a
                picture and upload
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              justifyContent="flex-end"
              flexWrap={'wrap'}
            >
              <Button
                variant="contained"
                component="label"
                sx={{
                  backgroundColor: "darkblue",
                  color: "white",
                  maxHeight: "50px",
                  justifyContent: "center",
                }}
              >
                Upload Signature
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange("documents.signature")}
                  onBlur={formik.handleBlur}
                />
              </Button>
              {values?.documents?.signature && (
                <Box ml={2}>
                  <Typography variant="body2">Uploaded Photo:</Typography>
                  <Avatar
                    src={values?.documents?.signature}
                    alt="PAN preview"
                    sx={{ width: 100, height: 100, borderRadius: 0 }}
                  />
                </Box>
              )}
            </Grid>
            {formik.touched.documents?.signature &&
              formik.errors.documents?.signature && (
                <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
                  {formik.errors.documents.signature}
                </Typography>
              )}
          </Grid>

          <Button variant="contained" onClick={handleNextStep}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Documents;
