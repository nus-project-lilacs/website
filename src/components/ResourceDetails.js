import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ResourceDetails = () => {
  const { id } = useParams();
  const [resourceDetails, setResourceDetails] = useState(null);

  useEffect(() => {
    console.log("ID:", id); // Log the id parameter to check if it's received correctly
  
    const fetchResourceDetails = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/resources/${id}`);
        const data = await response.json();
        console.log("ResourceDetails:", data);
        setResourceDetails(data);
      } catch (error) {
        console.error('Error fetching resource details:', error);
      }
    };
  
    fetchResourceDetails();
  }, [id]);
  

  if (!resourceDetails) {
    // Loading state, you can render a loading spinner or message here
    return <p>Loading...</p>;
  }

  const { attributes } = resourceDetails;

  return (
    <div>
      {attributes && (
        <>
            <h1>{attributes.data.attributes.title}</h1>
            <p>Published Date: {attributes.data.attributes.publishedDate}</p>
            {/* Add more details as needed */}
            <div dangerouslySetInnerHTML={{ __html: attributes.data.attributes.content[0].children[0].text }} />
            {/* Render the content using dangerouslySetInnerHTML to handle HTML content */}
        </>
      )}
    </div>
  );
};

export default ResourceDetails;
