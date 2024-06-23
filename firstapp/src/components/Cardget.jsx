import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import axios from 'axios'; // Assuming axios is installed in your project


const Cardget = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    // Function to fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data); // Assuming API response is an array of products
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData(); // Call the fetchData function when component mounts
  }, []); // Empty dependency array ensures this effect runs once on mount


  return (
    <div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image} // Assuming 'image' is a property in your product object
                alt={product.title} // Assuming 'title' is a property in your product object
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};



export default Cardget