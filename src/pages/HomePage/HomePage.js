import React from "react";
import CoverImage from "../../components/CoverImage/CoverImage";
import Grid from "@mui/material/Grid";

const HomePage = () => {
  return (
    <div>
      <Grid container xs={12} justifyContent="center" alignItems="center">
        <CoverImage />
      </Grid>
    </div>
  );
};

export default HomePage;
