import Dropdown from "../components/Dropdown";

export default {
  title: "Dropdown",
  options: [{ value: "Volvo", label: "Volvo" }],
};

export const DropdownStory = () => (
  <Dropdown
    options={[{ value: "0", label: "Facetime HD Camera" }]}
    labelFor={"Camera"}
  />
);

DropdownStory.storyName = "Dropdown";
