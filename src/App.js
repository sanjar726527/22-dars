import { Box, Stack } from "@mui/material";
import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar";
import { RightBar } from "./components/Rightbar";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
