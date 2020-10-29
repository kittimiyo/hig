import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "../stylesheet";
import { variants, AVAILABLE_VARIANTS } from "../constants";

export default class OptionPresenter extends Component {
  static propTypes = {
    index: PropTypes.number,
    /** Text label of the menu section */
    label: PropTypes.string,
    variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
    checkmark: PropTypes.bool,
    /** Function to modify the menu item's styles */
    stylesheet: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    variant: variants.BASIC,
    checkmark: false
  };

  render() {
    const {
      hasFocus,
      hasHover,
      highlighted,
      isPressed,
      label,
      variant,
      checkmark,
      children,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;
    const {
      className,
      id,
      index,
      onBlur,
      onFocus,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp
    } = otherProps;

    const defaultId = `menu-item-${index}`;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(this.props, resolvedRoles);

          /* if (index === 0) {
            styles.sectionWrapper.borderTop = "0";
          } */

          const labelClassName = createCustomClassNames(
            className,
            "section-label"
          );
          // console.log("hasFocus: ", hasFocus);
          console.log("isPressed: ", isPressed);
          console.log("highlighted: ", highlighted);
          // console.log("isPressed: ", isPressed);

          return (
            /* <li role="presentation" id="cat1">
              Land
            </li> */
            <li
              className={css(styles.menuOption)}
              id={id || defaultId} 
              role="option"
              onBlur={onBlur}
              onFocus={onFocus}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
            >
              {children}
            </li>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
