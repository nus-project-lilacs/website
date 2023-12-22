import React from "react";
import CoverImage from "../../components/CoverImage/CoverImage";
import Grid from "@mui/material/Grid";
import Intro from "../../components/About/Intro";

const HomePage = () => {
  return (
    <div>
      <Grid container xs={12} justifyContent="center" alignItems="center">
        <CoverImage />
        <Intro
          title="Core Missions"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Tellus in metus vulputate eu scelerisque felis. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Velit laoreet id donec ultrices tincidunt arcu non. Justo laoreet sit amet cursus sit. Sit amet massa vitae tortor. Facilisis magna etiam tempor orci. Non nisi est sit amet facilisis magna etiam tempor. Adipiscing diam donec adipiscing tristique risus nec feugiat. Nec sagittis aliquam malesuada bibendum arcu. Amet dictum sit amet justo donec enim. Dictum sit amet justo donec enim. Duis at consectetur lorem donec massa sapien. Lorem ipsum dolor sit amet consectetur adipiscing. Facilisis leo vel fringilla est. Arcu ac tortor dignissim convallis aenean. Odio morbi quis commodo odio aenean sed adipiscing diam donec.

Duis tristique sollicitudin nibh sit amet commodo nulla. Dolor sit amet consectetur."
        />
      </Grid>
    </div>
  );
};

export default HomePage;
