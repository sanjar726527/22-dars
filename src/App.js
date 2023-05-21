import { Box, Stack } from "@mui/material";
import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />

      <Stack direction="row" justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
}

export default App;
