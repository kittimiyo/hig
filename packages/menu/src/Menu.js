import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";
import { variants, AVAILABLE_VARIANTS } from "./constants";
import MenuSectionPresenter from "./presenters/MenuSectionPresenter";
import MenuItem from "./MenuItem";
import { MenuItemsPropType } from "./propTypes";

export default class Menu extends Component {
  static propTypes = {
    /** Width of the menu */
    width: PropTypes.string,
    /** Function to modify the component's styles */
    stylesheet: PropTypes.func,
    variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
    /** Items */
    items: MenuItemsPropType,
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
    const { stylesheet: customStylesheet, ...otherProps } = this.props;
    const { className } = otherProps;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              stylesheet: customStylesheet
            },
            resolvedRoles,
            metadata
          );

          return (
            <div>
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
            </div>
          );

        }}
      </ThemeContext.Consumer>
    );
  }
}



/* 

<ul role="group" aria-labelledby="cat2">
                    <li role="presentation" id="cat2">
                      Water
                    </li>
                    <li id="ss_elem_6" role="option">
                      Dolphin
                    </li>
                    <li id="ss_elem_7" role="option">
                      Flounder
                    </li>
                    <li id="ss_elem_8" role="option">
                      Eel
                    </li>
                  </ul>
                  <ul role="group" aria-labelledby="cat3">
                    <li role="presentation" id="cat3">
                      Air
                    </li>
                    <li id="ss_elem_9" role="option">
                      Falcon
                    </li>
                    <li id="ss_elem_10" role="option">
                      Winged Horse
                    </li>
                    <li id="ss_elem_11" role="option">
                      Owl
                    </li>
                  </ul> */
