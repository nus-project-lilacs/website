import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ResourceDetails = () => {
  const { id } = useParams();
  const [resourceDetails, setResourceDetails] = useState(null);

  useEffect(() => {
    console.log("ID:", id);

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

  const { data } = resourceDetails;

  if (!data || !data.attributes) {
    // Check if data or attributes are defined
    return <p>No attributes found</p>;
  }

  console.log("Title:", data.attributes.title);
  console.log("Published Date:", data.attributes.publishedDate);

  return (
    <div>
      {data.attributes && (
        <>
          <h1>{data.attributes.title}</h1>
          <p>Published Date: {data.attributes.publishedDate}</p>
          {data.attributes.coverImage && (
            <img src={data.attributes.coverImage.url} alt={data.attributes.coverImage.name} />
          )}
          {data.attributes.content.map((paragraph, index) => (
            <React.Fragment key={index}>
              <div dangerouslySetInnerHTML={{ __html: paragraph.children[0].text }} />
              <br />
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
  
};

export default ResourceDetails;
