import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  ChakraProvider,
  Container,
} from "@chakra-ui/react";

import Constructor from "./pages/Constructor";
import Profile from "./pages/Profile";

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
            <Link to="/constructor">
              <Button mr="4">Constructor</Button>
            </Link>
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
          </Box>
        </Flex>

        <Container maxW="container.lg">
          <Routes>
            <Route path="/constructor" element={<Constructor />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
