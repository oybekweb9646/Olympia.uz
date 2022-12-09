import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Banner from "../components/banner";
import Products from "../components/products";
import Promotions from "../components/promotions";
import SearchBox from "../components/search";
import { Slider } from "../components/slider";

export const MainPage = () => {
  return (
    <Grid>
      <Banner />
      <Grid sx={{ marginTop: "100px" }}>
        <Slider />
        <Slider />
        <Slider />
      </Grid>
    </Grid>
  );
};
