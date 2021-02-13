import React from "react";
import * as Icons from "../components/icons";

export default {
  title: "Icons",
  component: Icons,
};

export const Icon = () => (
  <div className="icons">
    <Icons.ArrowDown />
    <Icons.Calendar />
    <Icons.Camera />
    <Icons.Clock />
    <Icons.Microphone />
    <Icons.Options />
    <Icons.User />
  </div>
);
