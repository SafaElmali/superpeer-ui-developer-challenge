import Button from "../components/Button";
import styles from "../components/Button/style.module.css";

export default {
  title: "Button",
  component: Button,
  args: {
    label: "Button",
    className: "",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: styles.primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: styles.secondary,
};
