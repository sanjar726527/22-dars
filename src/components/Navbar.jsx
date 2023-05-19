import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",

  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h5"
          component="h2"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Navbar
        </Typography>
        <GitHubIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>Search</Search>
        <Icons>Icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
};
