import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ControlBehavior } from "@hig/behaviors";
import { ThemeContext } from "@hig/theme-context";

import OptionPresenter from "./presenters/OptionPresenter";
// import { createCustomClassNames } from "@hig/utils";

// import stylesheet from "./stylesheet";
import { variants, AVAILABLE_VARIANTS } from "./constants";
// import MenuBehavior from "./behaviors/MenuBehavior";
// import MenuPresenter from "./presenters/MenuPresenter";
// import { MenuItemsPropType } from "./propTypes";

export default class Option extends Component {
  static propTypes = {
    /** Width of the menu */
    width: PropTypes.string,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func,
    // variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
    /** Items */
    // items: MenuItemsPropType,
    checkmark: PropTypes.bool,
    multiple: PropTypes.bool,
    selected: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.arrayOf(PropTypes.any)
    ]),
    onMenuItemClicked: PropTypes.func
  };

  static defaultProps = {
    width: "auto",
    items: [],
    variant: variants.BASIC,
    checkmark: false,
    multiple: false,
    onMenuItemClicked: () => {}
  };

  render() {
    const { children, stylesheet: customStylesheet, ...otherProps } = this.props;
    const { className, onBlur, onFocus, onKeyDown, onKeyUp, onMouseDown, onMouseEnter, onMouseLeave, onMouseUp } = otherProps;
    return (
      <ControlBehavior
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
      >
        {({
          hasFocus,
          hasHover,
          isPressed,
          onBlur: handleBlur,
          onFocus: handleFocus,
          onMouseDown: handleMouseDown,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          onMouseUp: handleMouseUp
        }) => {
          return(
            <OptionPresenter
              hasFocus={hasFocus}
              hasHover={hasHover}
              isPressed={isPressed}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
            >
              {children}
            </OptionPresenter>
          );
        }}
      </ControlBehavior>
    );
  }
}
