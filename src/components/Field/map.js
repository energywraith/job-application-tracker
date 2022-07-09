import Input from "./Input";
import Checkbox from "./Checkbox";
import Select from "./Select";

const map = {
  text: Input,
  password: Input,
  checkbox: Checkbox,
  select: Select,
};

export default map;

export { Input, Checkbox, Select };
