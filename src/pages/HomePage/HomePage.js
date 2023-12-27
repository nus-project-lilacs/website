import React from "react";
import CoverImage from "../../components/CoverImage/CoverImage";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer/Footer";
import '../HomePage/HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Grid container xs={12} justifyContent="center" alignItems="center">
        <CoverImage />
      </Grid>

      {/* About Section */}
      <div id="about" className="container">
        <div className="row">
          <div className="about-col-1">
            <h1>About Project Lilacs</h1>
          </div>
          <div className="about-col-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
