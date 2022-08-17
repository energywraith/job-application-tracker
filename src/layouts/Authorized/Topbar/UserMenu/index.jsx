import PropTypes from "prop-types";

import Avatar from "components/Avatar";
import Menu from "components/Menu";

const UserMenu = ({ onLogout }) => {
  const options = [
    {
      content: "Account settings",
      disabled: true,
    },
    {
      content: "Log out",
      onClick: onLogout,
    },
  ];

  return (
    <Menu options={options}>
      <Avatar />
    </Menu>
  );
};

UserMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
