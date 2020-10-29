import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ControlBehavior } from "@hig/behaviors";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";
import { variants, AVAILABLE_VARIANTS } from "./constants";
import MenuBehavior from "./behaviors/MenuBehavior";
import MenuPresenter from "./presenters/MenuPresenter";
import { Option } from "./Option";
// import { MenuItemsPropType } from "./propTypes";

export default class Menu extends Component {
  static propTypes = {
    
  };

  static defaultProps = {
   
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
          onBlur: handleBlur,
          onFocus: handleFocus,
          onMouseDown: handleMouseDown,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          onMouseUp: handleMouseUp
        }) => (
          <MenuBehavior onKeyDown={onKeyDown}>
            {({ getHighlightIndex, handleKeyDown, setActiveOption, setHighlightIndex }) => (
              <MenuPresenter
                getHighlightIndex={getHighlightIndex}
                onKeyDown={handleKeyDown}
                setActiveOption={setActiveOption}
                setHighlightIndex={setHighlightIndex}
              >
                {children}
              </MenuPresenter>
            )}
          </MenuBehavior>
        )}
      </ControlBehavior>
    );
      /* <ThemeContext.Consumer>
        {({ resolvedRoles, metadata }) => {
          const styles = stylesheet(
            {
              stylesheet: customStylesheet
            },
            resolvedRoles,
            metadata
          );

          return (
            
          );

        }}
      </ThemeContext.Consumer> */
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
