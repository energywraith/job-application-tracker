import { Avatar as ChakraAvatar } from "@chakra-ui/react";

import { AvatarShape } from "./index.shape";

const Avatar = ({ name, avatarURL }) => {
  return <ChakraAvatar name={name} src={avatarURL} width={10} height={10} />;
};

Avatar.propTypes = AvatarShape;

Avatar.defaultProps = {
  name: undefined,
  avatarURL: undefined,
};

export default Avatar;
