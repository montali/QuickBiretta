import React from "react";

import OrderCheck from "./OrderCheck.js";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import CloseIcon from "@material-ui/icons/Close";

class OrderView extends React.Component {
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
              onClick={() => this.props.handleViewChange("menu")}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={this.props.classes.title}>
              Riepilogo
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={this.props.classes.button}
              startIcon={<DoneOutlineIcon />}
              onClick={this.props.handleSendOrder}
            >
              CONFERMA
            </Button>
          </Toolbar>
        </AppBar>
        <OrderCheck {...this.props} />
      </div>
    );
  }
}

export default OrderView;
