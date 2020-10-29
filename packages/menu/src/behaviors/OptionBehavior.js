import { Component } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} State
 * @property {boolean} on
 */

export default class OptionBehavior extends Component {
  static propTypes = {
    // onChange: PropTypes.func,
    // onKeyUp: PropTypes.func,
    // children: PropTypes.func
  };

  /**
   * @type {State}
   */
  state = {

  };

  /* setActiveOption = activeOption => {
    this.setState({ activeOption });
    console.log(activeOption);
  } */

  /* setKeyboardHoverOptionIndex = keyboardHoverOption => {
    this.setState({ keyboardHoverOption });
    console.log(keyboardHoverOption);
  } */
  /**
   * @returns {boolean}
   */
  getActive() {
    /* if (this.isControlled()) {
      return this.props.on;
    }

    return this.state.on; */
  }

  handleMouseEnter = event => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }

    console.log('optionbehavior, handlemouseenter');
    console.log(this.props);
    if (this.props.setHighlightIndex) {
      this.props.setHighlightIndex(this.props.index);
    }
  }

  render() {
    const { handleMouseEnter } = this;

    return this.props.children({
      handleMouseEnter
    });
  }
}
