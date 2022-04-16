import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import Pages from "./pages";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Pages />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
