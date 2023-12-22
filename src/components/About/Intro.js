import React from "react";
import "./Intro.css";
import Grid from "@mui/material/Grid";

const Intro = ({ title, content }) => {
  return (
    <Grid item justifySelf={"center"} marginTop="20px" xs={8}>
      <div className="two-column-container">
        <div className="title-column">
          <h2>{title}</h2>
        </div>
        <div className="content-column">
          <p>{content}</p>
        </div>
      </div>
    </Grid>
  );
};

export default Intro;
