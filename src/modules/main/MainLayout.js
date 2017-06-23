import React, { Component } from "react";
import PropTypes from 'prop-types';

import { AppBar, IconMenu, IconButton, MenuItem, Drawer } from 'material-ui';
import { NavigationMoreVert } from 'material-ui/svg-icons';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><NavigationMoreVert /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          showMenuIconButton={false}
          iconElementRight={<Logged />}
          style={{paddingLeft: 224}}
        />
        <Drawer
          docker={true}
          width={200}
          open={true}
        >
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainLayout;
