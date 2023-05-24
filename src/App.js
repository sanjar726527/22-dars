import { Box, Stack } from "@mui/material";
import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Bounce, Slide } from "react-awesome-reveal";

function App() {
  return (
    <Box>
      <Slide direction="down" duration={500} triggerOnce>
        <Navbar />
      </Slide>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
}

export default App;
