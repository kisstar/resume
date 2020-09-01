import React from 'react';
import { Menu, MenuItem } from '@ks/rc-ui';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">天九</div>
      <Menu mode="responsive">
        <MenuItem key="1">博客</MenuItem>
        <MenuItem key="2">案列</MenuItem>
        <MenuItem key="3">笔记</MenuItem>
        <MenuItem key="4">思否</MenuItem>
        <MenuItem key="6">PDF</MenuItem>
        <MenuItem key="5">GitHub</MenuItem>
      </Menu>
    </div>
  );
}

export default NavBar;
