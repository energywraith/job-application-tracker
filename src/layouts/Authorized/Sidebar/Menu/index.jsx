import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { menuItemsShape } from "layouts/Authorized/index.shapes";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  const { pathname } = useLocation();

  const activeSection = useMemo(
    () => items.find((section) => section.match === pathname),
    [items, pathname]
  );

  return (
    <Flex direction="column" mt={3}>
      {items.map((section) => (
        <MenuItem
          key={section.id}
          Icon={section.Icon}
          title={section.title}
          path={section.match}
          isActive={section.id === activeSection?.id}
        />
      ))}
    </Flex>
  );
};

Menu.propTypes = {
  items: menuItemsShape.isRequired,
};

export default Menu;
