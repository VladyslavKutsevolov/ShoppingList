import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
