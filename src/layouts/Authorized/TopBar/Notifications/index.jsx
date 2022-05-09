import { useRef } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";

import NotificationLineIcon from "remixicon-react/Notification3LineIcon";

const Notifications = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        icon={<Icon as={NotificationLineIcon} />}
        mr={3}
        p={5}
        width={5}
        height={5}
        cursor="pointer"
        ref={btnRef}
        onClick={onOpen}
        bg="transparent"
        color="white"
        _hover={{ color: "whiteAlpha.700" }}
        _active={{ color: "whiteAlpha.600" }}
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
