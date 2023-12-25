import React from "react";
import CoverImage from "../../components/CoverImage/CoverImage";
import Grid from "@mui/material/Grid";
import '../HomePage/HomePage.css';

const HomePage = () => {
  return (
    <div>
      <div>
        <Grid container xs={12} justifyContent="center" alignItems="center">
          <CoverImage />
        </Grid>
      </div>

      {/*about*/}
      <div id="about">
        <div class="container">
          <div class="row">
            <div class="about-col-1">
              <h1> About Project Lilacs </h1>
            </div>
            <div class="about-col-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
