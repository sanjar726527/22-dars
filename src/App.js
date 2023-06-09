import { Box, Stack } from "@mui/material";
import { Navbar2 } from "./components 2/Navbar2";
import { Sidebar2 } from "./components 2/Sidebar2";
import { Feed2 } from "./components 2/Feed2";
import { Animated } from "react-animated-css";

import "./App.css";

function App() {
  return (
    <Box sx={{ position: "relative" }}>
      <Animated
        animationIn="slideInDown"
        animationOut="slideInUp"
        animationInDuration={1000}
        style={{
          position: "sticky",
          top: "0",
          width: "100%",
          height: "100%",
          zIndex: "5",
        }}
      >
        <Navbar2 />
      </Animated>
      <Stack
        sx={{ position: "relative" }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Sidebar2 />
        <Feed2 />
      </Stack>
    </Box>
  );
}

export default App;
