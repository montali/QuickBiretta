import React from "react";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={12} sm={12}>
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
            startIcon={<AddShoppingCartIcon />}
            onClick={() => this.props.handleCartAdd(this.props.id)}
          >
            €{this.props.price}
          </Button>
        </Paper>
      </Grid>
    );
  }
}

export default MenuItem;
