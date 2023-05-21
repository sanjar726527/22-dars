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

export const Sidebar = () => {
  return (
    <Box
      flex={1}
      position="relative"
      sx={{
        display: { xs: "none", sm: "block" },
        background: "#1b1b1b",
        p: "20px 30px 50px",
      }}
    >
      <Box>
        <Box textAlign={"center"}>
          <Avatar
            sx={{ width: 120, height: 120, margin: "auto" }}
            src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg"
          />
          <Typography variant="h3" color={"white"}>
            Alex Smith
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }} justifyContent={"center"}>
            <TwitterIcon sx={{ color: grey[500] }} />
            <FacebookOutlinedIcon sx={{ color: grey[500] }} />
            <InstagramIcon sx={{ color: grey[500] }} />
          </Box>
        </Box>
        <List component="nav" sx={{ color: grey[500] }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeOutlined sx={{ color: grey[500] }} />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <PersonOutlineOutlinedIcon sx={{ color: grey[500] }} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#resume">
              <ListItemIcon>
                <InsertDriveFileOutlinedIcon sx={{ color: grey[500] }} />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#portfolio">
              <ListItemIcon>
                <BackupTableOutlinedIcon sx={{ color: grey[500] }} />
              </ListItemIcon>
              <ListItemText primary="Portfolio" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#services">
              <ListItemIcon>
                <Inventory2OutlinedIcon sx={{ color: grey[500] }} />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#mode">
              <ListItemIcon>
                <ModeNightIcon sx={{ color: grey[500] }} />
              </ListItemIcon>
              <Switch color="default" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box
        position="fixed"
        bgcolor={"#333"}
        sx={{ width: "310px", left: 0, py: 2, bottom: 0 }}
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
