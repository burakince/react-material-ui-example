import React from "react";

import { IconMenu, IconButton, MenuItem } from 'material-ui';
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

export default Logged;
