import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  return (
  <>
  <div className="wrapper">
    <Header/>
    <Content/>
    <Cart/>
  </div>
  </>
  )
}

export default App;
