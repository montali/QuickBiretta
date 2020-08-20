import React from "react";

import OrderCheck from "./OrderCheck.js";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import LocalBarIcon from "@material-ui/icons/LocalBar";
import CloseIcon from "@material-ui/icons/Close";

class LoginView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={this.props.classes.loginDiv}
      >
        <Paper className={this.props.classes.loginPaper}>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            className={this.props.classes.loginPaperGrid}
          >
            <h2>Entra e ordina</h2>
            <TextField
              id="standard-basic"
              label="ID tavolo"
              name="tableID"
              onChange={this.props.handleTextFieldChange}
            />
            <TextField
              id="standard-basic"
              label="Il tuo nome"
              name="username"
              onChange={this.props.handleTextFieldChange}
            />
            <Button
              variant="contained"
              color="secondary"
              className={this.props.classes.button}
              onClick={this.props.handleLoginRequest}
              startIcon={<LocalBarIcon />}
            >
              FAMMI BERE
            </Button>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default LoginView;
