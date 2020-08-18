import React from "react";
import MenuView from "./MenuView.js";
import logo from "./logo.svg";
import "./App.css";
import { useStyles } from "./styles.js";
import { useTheme } from "@material-ui/core/styles";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], username: "", tableID: "" };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart(id) {
    var cart = this.state.cart;
    cart.push(id);
    this.setState({ cart: cart });
  }
  render() {
    return (
      <MenuView
        {...this.props}
        username={this.state.username}
        handleCartAdd={this.handleAddToCart}
        cartItems={this.state.cart.length}
      ></MenuView>
    );
  }
}

function App() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className="App">
      <MainApp classes={classes} theme={theme} />
    </div>
  );
}

export default App;
