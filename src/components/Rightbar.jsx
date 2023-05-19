import { Box } from "@mui/material";
import React from "react";

export const RightBar = () => {
  return (
    <Box
      bgcolor="violet"
      sx={{ p: 4, display: { xs: "none", sm: "block" } }}
      flex={2}
    >
      RightBar
    </Box>
  );
};
