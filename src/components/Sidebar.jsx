import { Box } from "@mui/material";
import React from "react";

export const Sidebar = () => {
  return (
    <Box
      bgcolor="blue"
      flex={1}
      sx={{ p: 4, display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};
