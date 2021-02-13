import Input from "../components/Input";
import * as Icons from "../components/icons";

export default {
  title: "Input",
  component: Input,
};

export const InputStory = (args) => (
  <Input icon={<Icons.User />} {...args} />
);
