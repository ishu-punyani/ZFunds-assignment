import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";

const Documents = ({ currentStep, handlePrevStep, handleNextStep }: any) => {
  const [panCard, setPanCard] = useState<File | null>(null);
  const [signature, setSignature] = useState<File | null>(null);

  const handlePanCardChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setPanCard(selectedFile);
  };
  const handleSignatureChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setSignature(selectedFile);
  };
  return (
    <Grid container display="flex" width="100vw" justifyContent="center">
      <NavBar currentStep={currentStep} handlePrevStep={handlePrevStep} />
      <Grid
        display="flex"
        spacing={2}
        flexDirection="column"
        margin={2}
        width="30%"
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
          <Grid container justifyContent="space-between" alignItems="center">
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
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
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
                <input type="file" hidden onChange={handlePanCardChange} />
              </Button>
              {panCard && (
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Selected File: {panCard.name}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid container justifyContent="space-between" alignItems="center">
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
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
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
                <input type="file" hidden onChange={handleSignatureChange} />
              </Button>
              {signature && (
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Selected File: {signature.name}
                </Typography>
              )}
            </Grid>
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
