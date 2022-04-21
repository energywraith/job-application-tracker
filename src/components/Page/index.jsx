import Background from "components/Background";

import { pageShape } from "./index.shape";

const Page = ({ children, bgImage }) => {
  return (
    <div>
      {bgImage && <Background image={bgImage} />}
      {children}
    </div>
  );
};

Page.propTypes = pageShape;

Page.defaultProps = {
  bgImage: undefined,
};

export default Page;
