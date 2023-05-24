import { Box, Stack } from "@mui/material";
import { Navbar2 } from "./components 2/Navbar2";
import { Sidebar2 } from "./components 2/Sidebar2";
import { Feed2 } from "./components 2/Feed2";
import { Animated } from "react-animated-css";

function App() {
  return (
    <Box>
      <Animated
        animationIn="slideInDown"
        animationOut="slideInUp"
        animationInDuration={1000}
      >
        <Navbar2 />
      </Animated>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Sidebar2 />
        <Feed2 />
      </Stack>
    </Box>
  );
}

export default App;
