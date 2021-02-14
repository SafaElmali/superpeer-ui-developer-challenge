import Button from "../components/Button";
import IconButton from "../components/Button/icon";
import styles from "../components/Button/style.module.css";
import * as Icons from "../components/icons";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
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

// const TemplateIconButton = (args) => <IconButton {...args} />;

// export const IconArrowButton = TemplateIconButton.bind({});
// IconArrowButton.args = {
//   children: <Icons.Options />,
// };

export const IconButtons = () => (
  <div className="icons">
    <IconButton>
      <Icons.ArrowDown />
    </IconButton>
    <IconButton>
      <Icons.Calendar />
    </IconButton>
    <IconButton>
      <Icons.Camera />
    </IconButton>
    <IconButton>
      <Icons.Clock />
    </IconButton>
    <IconButton>
      <Icons.Microphone />
    </IconButton>
    <IconButton>
      <Icons.Options />
    </IconButton>
    <IconButton>
      <Icons.User />
    </IconButton>
  </div>
);

IconButtons.storyName = "Button With Icon";
