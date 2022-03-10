import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";

import Constructor from "./pages/Constructor";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Flex px={20} py={5} borderBottom="2px">
          <Box p="2">
            <Heading size="md">Profile Form Builder</Heading>
          </Box>
          <Spacer />
          <Box>
            <Button mr="4">
              <Link to="/constructor">Constructor</Link>
            </Button>
            <Button>
              <Link to="/profile">Profile</Link>
            </Button>
          </Box>
        </Flex>

        <Routes>
          <Route path="/constructor" element={<Constructor />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
