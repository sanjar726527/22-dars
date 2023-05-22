import { Box, Stack } from "@mui/material";
import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Flip, Slide, Bounce, Zoom } from "react-awesome-reveal";

function App() {
  return (
    <Box>
      <Bounce>
        <Navbar />
      </Bounce>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
}

export default App;
