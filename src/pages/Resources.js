import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MainFeaturedPost from "../components/MainFeaturedPost";
import FeaturedPost from "../components/FeaturedPost";
import Footer from "../components/Footer";
import axios from "axios";


const Resources = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("test1");
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/resources", {
          params: {
            _limit: 10,
            _fields: "id,attributes.title,attributes.publishedDate,attributes.content,coverImage.id,coverImage.url",
          },
        });
        console.log("Full API Response:", response.data);
        console.log("ResourceDetails:", response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
}, []);


  console.log(data);

  return (
    <Grid container spacing={4}>
      {data.map((resource) => (
        <FeaturedPost
          key={resource.id}
          post={{
            id: resource.id, // Pass the id to FeaturedPost
            title: resource.attributes.title,
            date: resource.attributes.publishedDate,
            description: String(resource.attributes.content[0].children[0].text),
            image: "https://source.unsplash.com/random?wallpapers",
            imageLabel: "Image Text",
          }}
        />
      ))}
    </Grid>
  );
};

export default Resources;





