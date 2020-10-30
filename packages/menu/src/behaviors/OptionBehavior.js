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

    if (this.props.setHighlightIndex) {
      this.props.setHighlightIndex(Number(this.props.index) + 1);
    }
  }

  handleMouseLeave = event => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }

    if (this.props.setHighlightIndex) {
      this.props.setHighlightIndex(0);
    }
  }

  render() {
    const { handleMouseEnter, handleMouseLeave } = this;

    return this.props.children({
      handleMouseEnter,
      handleMouseLeave
    });
  }
}
