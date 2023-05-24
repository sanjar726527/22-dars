import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

import Notifications from "@mui/icons-material/Notifications";
import { theme } from "../theme";
console.log(theme);
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export const Navbar2 = () => {
  const [open, setOpen] = useState(false);
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
        <Search>
          <InputBase placeholder="search ....." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={6} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="https://mui.com/static/images/avatar/1.jpg"
            alt="Remy Sharp"
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            src="https://mui.com/static/images/avatar/1.jpg"
            alt="Remy Sharp"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span">John</Typography>
        </UserBox>
        <Menu
          id="menu-appbar"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ my: 5 }}
          open={open}
          onClose={(e) => setOpen(false)}
        >
          {settings.map((page) => (
            <MenuItem key={page}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};
