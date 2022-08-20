import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import UserProvider from "utils/contexts/User";
import TopbarProvider from "utils/contexts/Topbar";
import ModalProvider from "utils/contexts/Modal";

import Pages from "./pages";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <ModalProvider>
            <TopbarProvider>
              <Pages />
            </TopbarProvider>
          </ModalProvider>
        </UserProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
