import HomeOutlined from "@mui/icons-material/HomeOutlined";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import {
  Avatar,
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import { grey } from "@mui/material/colors";
import { Fade, Slide } from "react-awesome-reveal";

export const Sidebar = () => {
  return (
    <Box
      position={"relative"}
      flex={1}
      sx={{
        display: {
          xs: "none",
          sm: "block",
          justifyContent: "around",
          flexDirection: "column",
        },
        background: "#424242",
        p: "20px 30px 50px",
        minHeight: "100vh",
        maxWidth: "300px",
      }}
    >
      <Slide duration={1500} position={"fixed"}>
        <Box textAlign={"center"}>
          <Avatar
            sx={{ width: 120, height: 120, margin: "auto" }}
            src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg"
          />
          <Typography variant="h3" color={"white"} sx={{ py: 2 }}>
            Alex Smith
          </Typography>
          <Box justifyContent={"center"}>
            <Button href="https://twitter.com">
              <TwitterIcon sx={{ color: grey[300] }} />
            </Button>
            <Button href="https://facebook.com">
              <FacebookOutlinedIcon sx={{ color: grey[300] }} />
            </Button>

            <Button href="https://facebook.com">
              <InstagramIcon sx={{ color: grey[300] }} />
            </Button>
          </Box>
        </Box>
        <List component="nav" sx={{ color: grey[300] }}>
          <ListItem disablePadding>
            <Fade>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <HomeOutlined sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="HomePage" />
              </ListItemButton>
            </Fade>
          </ListItem>

          <ListItem disablePadding>
            <Fade>
              <ListItemButton component="a" href="#friends">
                <ListItemIcon>
                  <PersonOutlineOutlinedIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </Fade>
          </ListItem>

          <ListItem disablePadding>
            <Fade>
              <ListItemButton component="a" href="#resume">
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="Resume" />
              </ListItemButton>
            </Fade>
          </ListItem>

          <ListItem disablePadding>
            <Fade>
              <ListItemButton component="a" href="#portfolio">
                <ListItemIcon>
                  <BackupTableOutlinedIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
              </ListItemButton>
            </Fade>
          </ListItem>

          <ListItem disablePadding>
            <Fade>
              <ListItemButton component="a" href="#services">
                <ListItemIcon>
                  <Inventory2OutlinedIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="Services" />
              </ListItemButton>
            </Fade>
          </ListItem>

          <ListItem disablePadding>
            <Fade>
              <ListItemButton component="a" href="#mode">
                <ListItemIcon>
                  <ModeNightIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <Switch color="default" defaultChecked />
              </ListItemButton>
            </Fade>
          </ListItem>
        </List>
      </Slide>

      <Box
        bgcolor={"#333"}
        position={"fixed"}
        sx={{ width: "100%", maxWidth: "325px", left: 0, p: 3, top: "92%" }}
        textAlign={"center"}
      >
        <Box variant="div" color={"white"}>
          © Copyright <Typography variant="strong">iPortfolio</Typography>
        </Box>
        <Box variant="div" color={"white"}>
          Designed by <Link>BootstrapMade</Link>
        </Box>
      </Box>
    </Box>
  );
};
