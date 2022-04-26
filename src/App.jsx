import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import UserProvider from "utils/contexts/User";

import Pages from "./pages";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Pages />
        </UserProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
