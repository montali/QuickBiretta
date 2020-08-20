import React from "react";

import axios from "axios";

import MenuItem from "./MenuItem.js";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menuItems = [];
    for (const item in this.props.menu) {
      menuItems.push(
        <Grid
          item
          xs={10}
          m={10}
          className={this.props.classes.fullWidthGridItem}
        >
          <MenuItem
            key={item}
            id={this.props.menu[item].id}
            title={this.props.menu[item].name}
            desc={this.props.menu[item].desc}
            price={this.props.menu[item].price.toFixed(2)}
            {...this.props}
          ></MenuItem>
        </Grid>
      );
    }
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {menuItems}
      </Grid>
    );
  }
}

export default MenuList;
