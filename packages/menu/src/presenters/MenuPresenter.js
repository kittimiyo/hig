import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "../stylesheet";

/**
 * @param {ReactNode} children
 * @returns {TabMeta[]}
 */
function createOptions(children) {
  return Children.toArray(children).reduce((result, child) => {
    const { type, key, props = {} } = child;

    if (type === Tab) {
      result.push({ key, props });
    }
    return result;
  }, []);
}

export default class MenuPresenter extends Component {
  static propTypes = {
    
  };

  static defaultProps = {
    
  };

  render() {
    const {
      ...otherProps
    } = this.props;

    const { className } = otherProps;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          /* const styles = stylesheet(this.props, resolvedRoles, metadata);

          const labelClassName = createCustomClassNames(
            className,
            "item-label"
          );
          const checkmarkClassName = createCustomClassNames(
            className,
            "item-checkmark"
          );
          const iconClassName = createCustomClassNames(className, "item-icon");
          const avatarClassName = createCustomClassNames(
            className,
            "item-avatar"
          );
          const thumbClassName = createCustomClassNames(
            className,
            "item-thumb"
          );
          const hasSubMenu = items && items.length > 0; */

          return (
            <div>
              <div 
                {...otherProps}
                id="ss_elem_list"
                tabIndex="0"
                role="listbox"
                aria-labelledby="ss_elem"
              >
                <ul role="group" aria-labelledby="cat1">
                  <li role="presentation" id="cat1">
                    Land
                  </li>
                  <li id="ss_elem_1" role="option">
                    Cat
                  </li>
                  <li id="ss_elem_2" role="option">
                    Dog
                  </li>
                  <li id="ss_elem_3" role="option">
                    Tiger
                  </li>
                  <li id="ss_elem_4" role="option">
                    Reindeer
                  </li>
                  <li id="ss_elem_5" role="option">
                    Raccoon
                  </li>
                </ul>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
