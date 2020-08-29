import React from "react";

import axios from "axios";

import OrderItem from "./OrderItem.js";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

class OrderCheck extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let orderItems = [];
    for (const item in this.props.cart) {
      orderItems.push(
        <Grid
          item
          xs={10}
          m={10}
          width={1}
          className={this.props.classes.fullWidthGridItem}
        >
          <OrderItem
            key={item}
            index={item}
            id={this.props.menu[this.props.cart[item]].id}
            title={this.props.menu[this.props.cart[item]].name}
            desc={this.props.menu[this.props.cart[item]].desc}
            price={this.props.menu[this.props.cart[item]].price.toFixed(2)}
            {...this.props}
          ></OrderItem>
        </Grid>
      );
    }
    if (orderItems.length === 0) {
      orderItems.push(<body>Non sembra esserci niente qui 😔</body>);
    }
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <h2 className={this.props.classes.orderCheckTypography}>
          Note dell'ordine
        </h2>
        <p>Ricorda di inserire qui eventuali scelte di cocktail e panini🌯</p>
        <TextField
          id="standard-multiline-flexible"
          label="Inserisci qui le note"
          multiline
          rowsMax={10}
          name="orderNotes"
          onChange={this.props.handleTextFieldChange}
          className={this.props.classes.orderNotesTextbox}
        />
        <h2 className={this.props.classes.orderCheckTypography}>
          Contenuto dell'ordine
        </h2>
        <p>Controlla di non aver dimenticato nulla 🤓</p>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          {orderItems}
        </Grid>
      </Grid>
    );
  }
}

export default OrderCheck;
