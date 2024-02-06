import React, { useState } from "react";
import listUsersInView from "../utils/listUsersInView";
import { useScreenDimensions } from "../hooks/useScreenDimensions";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const UserList = () => {
  const [usersInView, setUsersInView] = useState([]);
  const [screenWidth, screenHeight] = useScreenDimensions();

  // TODO: Create a Modal component with inputs for position and screen size (screen size should default to actual window width and height but be editable).
  // CTA in Modal should close modal, call listUsersInView with updated values, and update usersInView
  // Add a list of the users in view in the render statement below

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          The following Users are currently visible based on position and screen size.
        </Typography>
      </Box>
      {usersInView.length === 0 && (
        <Box my={4}>
          <Typography component="p" gutterBottom>
            There are currently no users within view.
          </Typography>
        </Box>
      )}
    </Container>
  );
};
