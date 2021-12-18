import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./componenets/Header/Header";
import Home from "./componenets/Home/Home";
import Checkout from "./componenets/Checkout/Checkout";
import Login from "./componenets/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./componenets/StateProvider";
import Invoice from "./componenets/Checkout/Invoice/Invoice";
import invoice from "./componenets/invoice";
import { PDFViewer } from "@react-pdf/renderer";
import UserLocation from "./componenets/UserLocation/UserLocation";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  console.log("user is  >>>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/invoice">
            <Header />
            <PDFViewer width="1000" height="930">
              <Invoice invoice={invoice} />
            </PDFViewer>
          </Route>
          <Route path="/userlocation">
            <Header />

            <UserLocation />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
