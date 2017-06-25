import React, { Component } from "react";

import { IconButton } from 'material-ui';
import { ToggleStarBorder, ActionGrade } from 'material-ui/svg-icons';

class ToggleStar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: false
    };
  }

  handleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      fill: !this.state.fill
    });
  };

  render() {
    return (
      <IconButton onTouchTap={this.handleTouchTap}>
        {this.state.fill ? <ActionGrade color="white" /> : <ToggleStarBorder color="white" />}
      </IconButton>
    )
  }
}

export default ToggleStar;
