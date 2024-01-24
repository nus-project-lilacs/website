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
          <p>Project Lilacs is a student-led initiative started by NUS Nursing students.</p>
          <p>Our project, named Project Lilacs (after the flower which signifies growth and wisdom), aims to provide mentorship to young girls aged 9-15 years old from underprivileged families. The lack of support and guidance throughout womanhood may make one more prone to being disadvantaged in many ways, including healthcare. </p>
          <p>Our vision is "From Innocence to Wisdom",  as we aim to help level these young girls’ playing field in terms of health equity so that they have a better understanding about their own health and are able to make informed decisions. We plan to build long-term support networks amongst these girls, who may not have anyone to turn to for advice at home, by holding monthly workshops and ad-hoc activities while discussing important topics about their own holistic health.</p>
          <p>We are currently in partnership with We Love Learning Centre (WeLL Centre) who works with children in rental flat communities in Bukit Merah. Some of the topics we explore during our workshops include women's health topics such as puberty changes, menstruation and menstrual hygiene, gynecological problems and mental health topics such as eating habits, body image issues, exploitative relationships etc.</p>
          <p>As a project, we strongly believe in peer education and individualized guidance that is appropriate to the girls' context and culturally appropriate to achieve more effective outcomes in raising awareness on women's health topics.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
