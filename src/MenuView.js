import React from "react";

import MenuList from "./MenuList.js";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class MenuView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ExitToAppIcon />
            </IconButton>
            <Typography variant="h6" className={this.props.classes.title}>
              {this.props.username}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={this.props.classes.button}
              startIcon={<ShoppingCartIcon />}
            >
              {this.props.cartItems}
            </Button>
          </Toolbar>
        </AppBar>
        <MenuList {...this.props} />
      </div>
    );
  }
}

export default MenuView;
