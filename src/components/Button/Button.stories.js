import React from "react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    text: "Button",
  },
};

export const accessible = () => <button>Accessible button</button>;

export const inaccessible = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>
    Inaccessible button
  </button>
);

accessible.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/rrCwNidtSe1id2F8A8RdVX/Button-Accessibibility?node-id=1%3A6",
  },
};

const Template = (args) => <Button {...args} />;

export const BlueButton = Template.bind({});
BlueButton.args = {
  color: "blue",
};
BlueButton.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/rrCwNidtSe1id2F8A8RdVX/Button-Accessibibility?node-id=1%3A7",
  },
};

export const PurpleButton = Template.bind({});
PurpleButton.args = {
  color: "purple",
};
PurpleButton.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/rrCwNidtSe1id2F8A8RdVX/Button-Accessibibility?node-id=1%3A14",
  },
};
