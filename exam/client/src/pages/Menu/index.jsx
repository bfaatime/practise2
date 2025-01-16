import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { MdFavoriteBorder } from "react-icons/md";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      "_id": "6788f9039962e0b0c465f667",
      "title": "Chicken meat",
      "price": 30,
      "image": "https://preview.colorlib.com/theme/tasty/images/dish-7.jpg"
    },
    {
      "_id": "6788f9269962e0b0c465f66c",
      "title": "Chicken meat",
      "price": 50,
      "imageUrl": "https://preview.colorlib.com/theme/tasty/images/dish-6.jpg"
    },
    {
      "_id": "6788f93c9962e0b0c465f66e",
      "title": "Grilled meat barbeku",
      "imageUrl": "https://preview.colorlib.com/theme/tasty/images/dish-3.jpg",
      "price": 80
    },
    {
      "_id": "6788f9709962e0b0c465f671",
      "title": "Grilled meat barbeku",
      "imageUrl": "https://preview.colorlib.com/theme/tasty/images/dish-4.jpg",
      "price": 120
    },
    {
      "_id": "6788f9ca9962e0b0c465f673",
      "title": "Garden meat baku",
      "imageUrl": "https://preview.colorlib.com/theme/tasty/images/dish-8.jpg",
      "price": 120
    },
    {
      "_id": "6788f9ea9962e0b0c465f675",
      "title": "Mimoza",
      "imageUrl": "https://preview.colorlib.com/theme/tasty/images/dish-9.jpg",
      "price": 110
    },
    {
      "_id": "6788f9fb9962e0b0c465f677",
      "title": "Napalyon",
      "imageUrl": "https://preview.colorlib.com/theme/tasty/images/dessert-3.jpg",
      "price": 20
    },
    {
      "_id": "6788fa0f9962e0b0c465f679",
      "title": "Ekler",
      "price": 35,
      "imageUrl": "https://preview.colorlib.com/theme/tasty/images/dessert-8.jpg"
    }
  ]);

  const handleDetailsClick = (title) => {
    alert(`Details for: ${title}`);
  };

  return (
    <Grid container spacing={3}>
      {menuItems.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={item.imageUrl || item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {item.price} $   
              </Typography>
            </CardContent>
            <CardActions>
            <MdFavoriteBorder />
              <Button size="small" color="primary" onClick={() => handleDetailsClick(item.title)}>
                Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;