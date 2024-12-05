import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function NavBar({ currentStep, handlePrevStep }: any) {
  console.log("navbar step", currentStep);
  return (
    <Grid
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={{ height: "70px", width: "100vw", backgroundColor: "lightblue" }}
    >
      <Grid item>
        {currentStep > 0 ? (
          <Grid>
            <IconButton onClick={handlePrevStep} sx={{ color: "black" }}>
              <ArrowBackIosNewIcon /> Back
            </IconButton>
          </Grid>
        ) : (
          <Box sx={{ padding: "46.5px" }}></Box>
        )}
      </Grid>
      <Typography variant="h4">ZFunds</Typography>
      <Grid item display={"flex"} gap={2}>
        <SearchOutlinedIcon />
        <ShoppingCartOutlinedIcon />
      </Grid>
    </Grid>
  );
}

export default NavBar;
