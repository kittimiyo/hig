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
    activeOption: null,
    highlightIndex: null,
    activeId: null
  };

  setActiveOption = activeOption => {
    this.setState({ activeOption });
    console.log(activeOption);
  }

  setHighlightIndex = highlightIndex => {
    this.setState({ highlightIndex });
    console.log(highlightIndex);
  }
  /**
   * @returns {boolean}
   */
  getHighlightIndex = () => {
    return this.state.highlightIndex;
  }

  handleKeyDown = event => {
    console.log(event.keyCode);
    console.log(event.key);
    event.preventDefault();

    // 38 up 40 down
    if (event.keyCode === 13) {
      this.setChecked(!event.target.checked);
    }
  }

  render() {
    console.log(this.state);
    const { getHighlightIndex, handleKeyDown, setActiveOption, setHighlightIndex } = this;

    return this.props.children({
      getHighlightIndex,
      handleKeyDown,
      setActiveOption,
      setHighlightIndex
    });
  }
}
