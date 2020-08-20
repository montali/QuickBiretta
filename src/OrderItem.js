import React from "react";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper>
        <div style={{ margin: "10px" }}>
          <h2 style={{ marginBottom: "10px", marginTop: "10px" }}>
            {this.props.title}
          </h2>
          {this.props.desc}
        </div>
        <Button
          variant="contained"
          color="secondary"
          className={this.props.classes.button}
          startIcon={<RemoveShoppingCartIcon />}
          onClick={() => this.props.handleCartRemove(this.props.index)}
        >
          RIMUOVI
        </Button>
      </Paper>
    );
  }
}

export default OrderItem;
