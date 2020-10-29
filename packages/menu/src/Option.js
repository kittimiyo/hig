import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { PressedBehavior } from "@hig/behaviors";
import { ThemeContext } from "@hig/theme-context";

import OptionBehavior from "./behaviors/OptionBehavior";
import OptionPresenter from "./presenters/OptionPresenter";
// import { createCustomClassNames } from "@hig/utils";

// import stylesheet from "./stylesheet";
import { variants, AVAILABLE_VARIANTS } from "./constants";
// import MenuBehavior from "./behaviors/MenuBehavior";
// import MenuPresenter from "./presenters/MenuPresenter";
// import { MenuItemsPropType } from "./propTypes";

export default class Option extends Component {
  static propTypes = {
    
  };

  static defaultProps = {
    
  };

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.props);
    if (this.props.setActiveOption) {
      // this.props.setActiveOption(this.props.id);
    }
    if (this.props.setHighlightIndex) {
      // this.props.setKeyboardHoverOptionIndex(this.props.id);
    }
  }

  render() {
    const { children, stylesheet: customStylesheet, ...otherProps } = this.props;
    const { className, id, index, getHighlightIndex, onMouseDown, onMouseUp } = otherProps;
    console.log('option render');
    console.log(getHighlightIndex(), index);
    return (
      <PressedBehavior
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {({
          isPressed,
          onMouseDown: handleMouseDown,
          onMouseUp: handleMouseUp
        }) => (
          <OptionBehavior {...otherProps}>{({
            handleMouseEnter
          }) => (
            <OptionPresenter
              highlighted={getHighlightIndex() === index}
              id={id}
              index={index}
              isPressed={isPressed}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseUp={handleMouseUp}
            >
              {children}
            </OptionPresenter>
          )}
          </OptionBehavior>
        )}
      </PressedBehavior>
    );
  }
}
