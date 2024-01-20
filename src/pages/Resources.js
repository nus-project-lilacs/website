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
  const [data, setData] = useState('');

  useEffect(() => {
    console.log("test");
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/resources`);
        const data = await response.json();
        setData(data);
        console.log(data.data[0]);
        console.log(data.data[0].attributes.title); //can use this to check if the data is fetched correctly -petrine
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <>
        {/* <h1>{data.data[0].attributes.title}</h1> */}
        <h1>test</h1>
      </>
    );
};

export default Resources;

// export async function getServerSideProps() {
//   console.log("Hello, World!");
//   try {
//     const postsRes = await axios.get("http://localhost:1337/api/resources");
//     console.log(postsRes.data);

//     return {
//       // props: {
//       //   posts: postsRes.data,
//       // },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return {
//       props: {
//         posts: [],
//       },
//     };
//   }
// }



