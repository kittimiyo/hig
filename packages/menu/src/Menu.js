import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { FocusBehavior } from "@hig/behaviors";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import stylesheet from "./stylesheet";
import { variants, AVAILABLE_VARIANTS } from "./constants";
import MenuBehavior from "./behaviors/MenuBehavior";
import MenuPresenter from "./presenters/MenuPresenter";
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
      <FocusBehavior
        onBlur={onBlur}
        onFocus={onFocus}
      >
        {({
          hasFocus,
          onBlur: handleBlur,
          onFocus: handleFocus,
        }) => (
          <MenuBehavior
            hasFocus={hasFocus}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={onKeyDown}
          >
            {({
              getHighlightIndex,
              handleBlur,
              handleFocus,
              handleKeyDown,
              setActiveOption,
              setHighlightIndex,
              setTotalOptions
            }) => (
              <MenuPresenter
                getHighlightIndex={getHighlightIndex}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                setActiveOption={setActiveOption}
                setHighlightIndex={setHighlightIndex}
                setTotalOptions={setTotalOptions}
              >
                {children}
              </MenuPresenter>
            )}
          </MenuBehavior>
        )}
      </FocusBehavior>
    );
  }
}
