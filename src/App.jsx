import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import Pages from "./pages";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Pages />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
