import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchAdapter from "../../../../adapters/GlobalNav/TopNav/SearchAdapter";
import Option from "../../FormElements/Option";

class Search extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      })
    )
  };

  static defaultProps = {
    onInput: () => {},
    value: undefined,
    defaultValue: undefined
  };

  constructor(props) {
    super(props);

    const controlled = props.value !== undefined;

    this.state = {
      showOptions: false,
      value: undefined,
      controlled
    };
  }

  onInput = event => {
    this.props.onInput({ value: event.target.value });
    this.setState({ showOptions: true });
  };

  onClick = value => {
    this._submitInput(value);
  };

  hideOptions = () => {
    this.setState({ focusedOptionIndex: undefined });
    this.setState({ showOptions: false });
  };

  hideClearIcon = () => {
    this.setState({ clearIconVisible: false });
  };

  showClearIcon = () => {
    this.setState({ clearIconVisible: true });
  };

  handleClearIconClick = () => {
    this._setValue("");
    this.props.onInput({ value: "" });
    this.setState({ focusedOptionIndex: undefined });
  };

  handleKeydown = event => {
    switch (event.keyCode) {
      case 40:
        event.preventDefault();
        this._focusPrevious();
        break;
      case 37:
        event.preventDefault();
        this._focusPrevious();
        break;
      case 38:
        event.preventDefault();
        this._focusNext();
        break;
      case 39:
        event.preventDefault();
        this._focusNext();
        break;
      case 13:
        this._submitInput(event.target.value);
        break;
      default:
        break;
    }
  };

  _setValue(value) {
    if (this.state.controlled) {
      this.setState({ value: this.state.value });
    } else {
      this.setState({ value });
    }
  }

  _focusPrevious() {
    if (
      this.state.focusedOptionIndex === undefined ||
      this.state.focusedOptionIndex >= this.props.options.length - 1
    ) {
      this.setState({ focusedOptionIndex: 0 });
    } else {
      const focusedOptionIndex = this.state.focusedOptionIndex + 1;
      this.setState({ focusedOptionIndex });
    }
  }

  _focusNext() {
    if (
      this.state.focusedOptionIndex === undefined ||
      this.state.focusedOptionIndex <= 0
    ) {
      const focusedOptionIndex = this.props.options.length - 1;
      this.setState({ focusedOptionIndex });
    } else {
      const focusedOptionIndex = this.state.focusedOptionIndex - 1;
      this.setState({ focusedOptionIndex });
    }
  }

  _submitInput(selectedValue) {
    const value =
      this.state.focusedOptionIndex !== undefined
        ? this.props.options[this.state.focusedOptionIndex].label
        : selectedValue;

    this.props.onSubmit({
      value
    });
    this.hideOptions();
  }

  render() {
    return (
      <SearchAdapter
        {...this.props}
        value={this.props.value}
        onInput={this.onInput}
        showOptions={this.props.options.length > 0 && this.state.showOptions}
        onBlur={this.hideClearIcon}
        onFocus={this.showClearIcon}
        showClearIcon={this.state.clearIconVisible}
        onClearIconClick={this.handleClearIconClick}
        onClickOutside={this.hideOptions}
        onKeydown={this.handleKeydown}
      >
        {this.props.options.length > 0
          ? this.props.options.map((option, index) => (
              <Option
                key={option.value}
                focused={index === this.state.focusedOptionIndex}
                {...option}
                onClick={this.onClick}
              />
            ))
          : null}
      </SearchAdapter>
    );
  }
}

export default Search;
