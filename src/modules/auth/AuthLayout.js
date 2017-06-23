import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AuthLayout extends Component {
  render() {
    return (
      <div>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

AuthLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default AuthLayout;
