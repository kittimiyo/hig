import React from "react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Surface from "@hig/surface";
import Menu from "../index";
import { Option } from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, theme, ...otherProps } = getKnobs(props);

  return (
    <KnobbedThemeProvider>
      <div style={{ width: "300px" }}>
        <Surface borderRadius="m" shadow="low">
          <Menu {...otherProps}>
            <Option key="1" id="1" onMouseEnter={() => {console.log('onenter')}}>test 1</Option>
            <Option key="2" id="2">test 2</Option>
            <Option key="3" id="3">test 3</Option>
            <Option key="4">test 4</Option>
          </Menu>
        </Surface>
      </div>
    </KnobbedThemeProvider>
  );
}
