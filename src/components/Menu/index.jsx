import PropTypes from "prop-types";
import {
  Menu as ChakraMenu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";

const Menu = ({ options, children }) => {
  return (
    <ChakraMenu>
      <MenuButton>{children}</MenuButton>
      <MenuList>
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={option.onClick}
            isDisabled={option.disabled}
            closeOnSelect
          >
            {option.content}
          </MenuItem>
        ))}
      </MenuList>
    </ChakraMenu>
  );
};

Menu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default Menu;
