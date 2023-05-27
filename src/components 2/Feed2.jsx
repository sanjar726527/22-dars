import { Box } from "@mui/material";
import { About } from "../components 2/About";
import React from "react";

import { Animated } from "react-animated-css";

export const Feed2 = () => {
  return (
    <Box
      width={"100%"}
      flex="1"
      color={"black"}
      bgcolor={"black"}
      paddingLeft={"360px"}
    >
      <Animated
        animationIn="bounceInRight"
        animationOut="fadeOut"
        isVisible={true}
      >
        <About />
      </Animated>
    </Box>
  );
};
