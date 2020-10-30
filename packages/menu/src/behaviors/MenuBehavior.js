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
    activeId: null,
    activeOption: null,
    highlightIndex: 0,
    totalOptions: null
  };

  setActiveOption = activeOption => {
    this.setState({ activeOption });
  }

  setHighlightIndex = highlightIndex => {
    this.setState({ highlightIndex });
  }
  /**
   * @returns {boolean}
   */
  getHighlightIndex = () => {
    return this.state.highlightIndex;
  }

  setTotalOptions = totalOptions => {
    this.setState({ totalOptions });
  }

  getTotalOptions = () => {
    return this.state.totalOptions;
  }

  handleFocus = event => {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }

    this.setHighlightIndex(0);
  }

  handleBlur = event => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    this.setHighlightIndex(0);
  }

  handleKeyDown = event => {
    console.log(event.keyCode);
    console.log(event.key);
    
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
    // 38 up 40 down
    switch (event.key) {
      case `ArrowDown`:
        if (this.getHighlightIndex() === this.getTotalOptions()) {
          this.setHighlightIndex(1);
        }
        if (this.getHighlightIndex() !== this.getTotalOptions()) {
          this.setHighlightIndex(Number(this.getHighlightIndex()) + 1);
        }
        event.preventDefault();
        break;
      case `ArrowUp`:
        if (this.getHighlightIndex() <= 1) {
          this.setHighlightIndex(this.getTotalOptions());
        }
        if (this.getHighlightIndex() > 1) {
          this.setHighlightIndex(Number(this.getHighlightIndex()) - 1);
        }
        event.preventDefault();
        break;
      
    }
  }

  render() {
    console.log(this.state);
    const {
      getHighlightIndex,
      handleBlur,
      handleFocus,
      handleKeyDown,
      setActiveOption,
      setHighlightIndex,
      setTotalOptions
    } = this;

    return this.props.children({
      getHighlightIndex,
      handleBlur,
      handleFocus,
      handleKeyDown,
      setActiveOption,
      setHighlightIndex,
      setTotalOptions
    });
  }
}
