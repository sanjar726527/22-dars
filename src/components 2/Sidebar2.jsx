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

import { Animated } from "react-animated-css";

export const Sidebar2 = () => {
  return (
    <Box
      flex={1}
      sx={{
        display: {
          xs: "none",
          sm: "block",
          justifyContent: "around",
          flexDirection: "column",
        },
        background: "#424242",
        p: "84px 30px 50px",
        maxWidth: "300px",
        position: "fixed",
        width: "100%",
        height: "calc(100vh - 128px)",
        zIndex: "3",
        top: "0",
        overflow: "auto",
      }}
    >
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
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
        <List component="nav" sx={{ color: grey[300], paddingBottom: "30px" }}>
          <ListItem disablePadding>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <ListItemButton component="a" href="#">
                <ListItemIcon>
                  <HomeOutlined sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="HomePage" />
              </ListItemButton>
            </Animated>
          </ListItem>

          <ListItem disablePadding>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <ListItemButton component="a" href="#me">
                <ListItemIcon>
                  <PersonOutlineOutlinedIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </Animated>
          </ListItem>

          <ListItem disablePadding>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <ListItemButton component="a" href="#resume">
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="Resume" />
              </ListItemButton>
            </Animated>
          </ListItem>

          <ListItem disablePadding>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <ListItemButton component="a" href="#portfolio">
                <ListItemIcon>
                  <BackupTableOutlinedIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
              </ListItemButton>
            </Animated>
          </ListItem>

          <ListItem disablePadding>
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <ListItemButton component="a" href="#contact">
                <ListItemIcon>
                  <Inventory2OutlinedIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <ListItemText primary="Services" />
              </ListItemButton>
            </Animated>
          </ListItem>

          <ListItem disablePadding>
            <Animated
              animationIn="flipInX"
              animationOut="jello"
              isVisible={true}
            >
              <ListItemButton component="a" href="#mode">
                <ListItemIcon>
                  <ModeNightIcon sx={{ color: grey[300] }} />
                </ListItemIcon>
                <Switch color="default" defaultChecked />
              </ListItemButton>
            </Animated>
          </ListItem>
        </List>
      </Animated>
      <Box
        bgcolor={"#333"}
        sx={{
          position: "fixed",
          width: "100%",
          maxWidth: "360px",
          left: 0,
          p: "16px 0",
          bottom: "0",
          zIndex: "3",
        }}
        textAlign={"center"}
      >
        <Animated animationIn="slideInUp" animationOut="bounce">
          <Box variant="div" color={"white"}>
            © Copyright <Typography variant="strong">iPortfolio</Typography>
          </Box>
          <Box variant="div" color={"white"}>
            Designed by <Link>BootstrapMade</Link>
          </Box>
        </Animated>
      </Box>
    </Box>
  );
};
