import { Box } from "@mui/material";
import React from "react";
import { About } from "./Feed/About";
import { Slide } from "react-awesome-reveal";

export const Feed = () => {
  return (
    <Box width={"100%"} flex="1" color={"black"} bgcolor={"black "}>
      <Slide delay={500} direction="right">
        <About />
      </Slide>
    </Box>
  );
};
