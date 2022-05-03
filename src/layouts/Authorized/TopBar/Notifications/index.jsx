import { useRef } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";

import NotificationLineIcon from "remixicon-react/Notification3LineIcon";

const Notifications = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Icon
        as={NotificationLineIcon}
        width={5}
        height={5}
        mr={5}
        color="white"
        cursor="pointer"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notifications:</DrawerHeader>
          <DrawerBody>TODO</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Notifications;
