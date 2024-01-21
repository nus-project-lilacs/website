import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: "flex", flexDirection: 'column', minHeight: '100%', boxShadow: 3, borderRadius: '8px', transition: 'transform 0.2s' }}>
        <CardMedia
          component="img"
          sx={{
            width: '50%',
            height: 0,
            paddingTop: '50%', // 4:3 aspect ratio
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
          image={post.image}
          alt={post.imageLabel}
        />
        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography component="h2" variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1.5 }}>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ marginBottom: 1 }}>
            {post.date}
          </Typography>
          <Typography variant="body1" paragraph>
            {post.description}
          </Typography>
          <Typography variant="subtitle1" color="primary" sx={{ marginTop: 'auto' }}>
            <Link to={`/resource/${post.id}`} style={{ textDecoration: 'none', color: '#1976D2', fontWeight: 'bold' }}>
              Continue reading...
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
