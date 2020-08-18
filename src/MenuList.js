import React from "react";

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
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <MenuItem
          title="Birra media"
          desc="Una gustosa birra media, fresca come il paradiso."
          price="4.00"
          {...this.props}
        ></MenuItem>
        <MenuItem
          title="Birra media"
          desc="Una gustosa birra media, fresca come il paradiso."
          price="4.00"
          id="6969"
          {...this.props}
        ></MenuItem>
        <MenuItem
          title="Birra media"
          desc="Una gustosa birra media, fresca come il paradiso."
          price="4.00"
          {...this.props}
        ></MenuItem>
      </Grid>
    );
  }
}

export default MenuList;
