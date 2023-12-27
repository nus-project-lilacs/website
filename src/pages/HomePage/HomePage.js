import React from "react";
import CoverImage from "../../components/CoverImage/CoverImage";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Grid container xs={12} justifyContent="center" alignItems="center">
        <CoverImage />
      </Grid>
      <Footer />
    </div>
  );
};

export default HomePage;
