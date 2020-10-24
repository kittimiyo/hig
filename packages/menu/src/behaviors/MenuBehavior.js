import { Component } from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} State
 * @property {boolean} on
 */

export default class MenuBehavior extends Component {
  static propTypes = {
    // onChange: PropTypes.func,
    // onKeyUp: PropTypes.func,
    // children: PropTypes.func
  };

  /**
   * @type {State}
   */
  state = {
    active: "active"
  };

  /**
   * @returns {boolean}
   */
  getActive() {
    /* if (this.isControlled()) {
      return this.props.on;
    }

    return this.state.on; */
  }

  handleKeyDown = event => {
    console.log(event.keyCode);
    event.preventDefault();
    if (event.keyCode === 13) {
      this.setChecked(!event.target.checked);
    }
  };

  render() {
    const { handleKeyDown } = this;

    return this.props.children({
      handleKeyDown
    });
  }
}
