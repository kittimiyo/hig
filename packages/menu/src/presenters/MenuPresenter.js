import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import Option from "../Option";
import stylesheet from "../stylesheet";

/**
 * @param {ReactNode} children
 * @returns {OptionMeta[]}
 */
function createOptions(children) {
  return Children.toArray(children).reduce((result, child, index) => {
    const { type, key, props = {index} } = child;

    if (type === Option) {
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

  /** @returns {TabMeta[]} */
  getOptions() {
    return createOptions(this.props.children);
  }

  /**
   * @param {TabMeta} tab
   * @param {number} index
   * @returns {JSX.Element}
   */
  renderOption = ({ key, props }, index) => {
    // const { setActiveOption } = props;
    const {
      getHighlightIndex,
      onBlur,
      onFocus,
      onKeyDown,
      setActiveOption,
      setHighlightIndex,
      setTotalOptions
    } = this.props;
    /* const {
      hoveredTabIndex,
      effectiveAlign,
      effectiveOrientation,
      effectiveShowTabDivider
    } = this.state;
    const activeTabIndex = this.getActiveTabIndex();

    let showTabDivider = effectiveShowTabDivider;
    if (index === activeTabIndex || index === activeTabIndex - 1) {
      showTabDivider = false;
    }
    if (index === hoveredTabIndex || index === hoveredTabIndex - 1) {
      showTabDivider = false;
    }

    const className = cx(
      tabClassName,
      createCustomClassNames(tabsClassName, "tab")
    ); */

    const payload = {
      ...props,
      getHighlightIndex,
      index,
      key,
      onBlur,
      onFocus,
      onKeyDown,
      setActiveOption,
      setHighlightIndex,
      setTotalOptions
      /*,
      key,
      variant,
      className,
      showDivider: showTabDivider,
      align: effectiveAlign,
      orientation: effectiveOrientation,
      active: activeTabIndex === index, */
    };
//console.log(payload);
// console.log(this.props);
    return <Option {...payload} />;
  };

  /**
   * @returns {JSX.Element}
   */
  renderOptions() {
    // console.log(this.getOptions());
    return (
      <ul role="group" aria-labelledby="cat1">
        {this.getOptions().map(this.renderOption)}
      </ul>
      /* <TabsPresenter
        variant={variant}
        align={effectiveAlign}
        orientation={effectiveOrientation}
        className={className}
        stylesheet={customStylesheet}
      >
        {this.getOptions().map(this.renderOption)}
      </TabsPresenter> */
    );
  }

  componentDidMount() {
    console.log('menu presenter componentDidMount');
    
    this.props.setTotalOptions(this.props.children.length);
  }

  render() {
    const {
      children,
      ...otherProps
    } = this.props;

    const {
      className,
      // setActiveOption
      onBlur,
      onFocus,
      onKeyDown
    } = otherProps;

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
                // {...otherProps}
                aria-labelledby="ss_elem"
                id="ss_elem_list"
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                role="listbox"
                tabIndex="0"
              >
                {this.renderOptions()}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
