import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UploadCSV from "./components/UploadCSV";
import FindMedicine from "./components/FindMedicine";
import PlaceOrder from "./components/PlaceOrder";
import Orders from "./components/Orders";
import { createContext, useState } from "react";

const CartOrder = createContext(null);

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="app">
      <Navbar />

      <section className="main">
        <div className="circle-container">
          <div className="circle-1">
            <div className="circle-2">
              <div className="circle-3"></div>
            </div>
          </div>
        </div>

        <CartOrder.Provider value={{ list, setList }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/upload-csv">
              <UploadCSV />
            </Route>

            <Route path="/find-medicine">
              <FindMedicine />
            </Route>

            <Route path="/place-order">
              <PlaceOrder />
            </Route>

            <Route path="/orders">
              <Orders />
            </Route>
          </Switch>
        </CartOrder.Provider>
      </section>
    </div>
  );
}

export { App, CartOrder };
