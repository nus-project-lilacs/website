import React from "react";
import Grid from "@mui/material/Grid";
import coverImage from "./lilacs.png";

const CoverImage = () => {
  return (
    <Grid item justifySelf={"center"} marginTop="20px">
      <img src={coverImage} />
    </Grid>
  );
};

export default CoverImage;
