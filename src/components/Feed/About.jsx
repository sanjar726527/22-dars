import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <Card sx={{ height: "100vh", p: 5 }}>
      <CardActionArea sx={{ width: "343px" }}>
        <CardMedia
          component="img"
          height="292"
          width="292"
          image="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Alex Smith
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
      <Box>
        <Typography gutterBottom variant="h5" component="div">
          UI/UX Designer & Web Developer.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Officiis eligendi itaque labore et dolorum mollitia officiis optio
          vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
          incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
          officiis quidem quia. Sed et consectetur qui quia repellendus itaque
          neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
          repellendus omnis culpa magni laudantium dolores.
        </Typography>
      </Box>
    </Card>
  );
};
