import React from "react";
import axios from "axios";
import MenuView from "./MenuView.js";
import logo from "./logo.svg";
import "./App.css";
import { useStyles } from "./styles.js";
import { useTheme } from "@material-ui/core/styles";
import OrderView from "./OrderView.js";
import Snackbar from "@material-ui/core/Snackbar";
import LoginView from "./LoginView.js";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], username: "", tableID: "", view: "login" };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleCartRemove = this.handleCartRemove.bind(this);
    this.updateMenu = this.updateMenu.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleLoginRequest = this.handleLoginRequest.bind(this);
    this.sendOrder = this.sendOrder.bind(this);

    this.updateMenu();
  }
  handleNoteChange(event) {
    this.setState({ orderNotes: event.target.value });
  }
  handleAddToCart(id) {
    var cart = this.state.cart;
    cart.push(id);
    this.setState({ cart: cart });
  }
  handleCartRemove(id) {
    var cart = this.state.cart;
    delete cart[id];
    this.setState({ cart: cart });
  }

  sendOrder() {
    let order = {
      notes: this.state.orderNotes,
      username: this.state.username,
      table: this.state.tableID,
      items: this.state.cart,
    };
    // Check if the order ain't null
    axios
      .post("/api/postorder", order)
      .then((res) => {
        this.setState({
          snackbarMessage: "Ordine inviato! Grazie🍻",
          view: "menu",
          cart: [],
          orderNotes: "",
        });
        this.props.setOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleViewChange(view) {
    this.setState({ view: view });
  }

  handleLoginRequest() {
    //if i textbox sono completati e il tavolo esiste (?)
    this.handleViewChange("menu");
    this.setState({ snackbarMessage: "Benvenuto!" });
    this.props.setOpen(true);
  }

  handleTextFieldChange(event) {
    const target = event.target;
    const name = target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  updateMenu() {
    axios
      .get("/api/getmenu")
      .then((res) => {
        let menuDict = {};
        for (const item in res.data) {
          menuDict[res.data[item].id] = res.data[item];
        }
        this.setState({ menu: menuDict });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCartTotal() {
    let total = 0.0;
    for (const purchase in this.state.cart) {
      total += this.state.menu[this.state.cart[purchase]].price;
    }
    return total;
  }

  render() {
    let mainItem = <body>Qualcosa non ha funzionato. Scusa.</body>;
    if (this.state.view === "menu") {
      mainItem = (
        <MenuView
          {...this.props}
          username={this.state.username}
          handleCartAdd={this.handleAddToCart}
          handleCartRemove={this.handleCartRemove}
          handleViewChange={this.handleViewChange}
          handleTextFieldChange={this.handleTextFieldChange}
          cartItems={this.state.cart.length}
          cartTotal={this.getCartTotal()}
          menu={this.state.menu}
        ></MenuView>
      );
    } else if (this.state.view === "order") {
      mainItem = (
        <OrderView
          {...this.props}
          username={this.state.username}
          handleCartAdd={this.handleAddToCart}
          handleCartRemove={this.handleCartRemove}
          handleViewChange={this.handleViewChange}
          handleSendOrder={this.sendOrder}
          cartItems={this.state.cart.length}
          cartTotal={this.getCartTotal()}
          handleTextFieldChange={this.handleTextFieldChange}
          cart={this.state.cart}
          menu={this.state.menu}
        ></OrderView>
      );
    } else if (this.state.view === "login") {
      mainItem = (
        <LoginView
          handleTextFieldChange={this.handleTextFieldChange}
          handleLoginRequest={this.handleLoginRequest}
          {...this.props}
        ></LoginView>
      );
    }
    return (
      <div>
        {mainItem}
        <Snackbar
          open={this.props.open}
          autoHideDuration={4000}
          onClose={() => {
            this.props.setOpen(false);
          }}
          message={this.state.snackbarMessage}
        />
      </div>
    );
  }
}

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <div className="App">
      <MainApp classes={classes} theme={theme} open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
