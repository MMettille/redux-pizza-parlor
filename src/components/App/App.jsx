import React from "react";
import axios from "axios";
import "./App.css";

// ⬇ What we need to import
import { Route, HashRouter as Router } from "react-router-dom";

// ⬇ Importing components
import AdminList from "../AdminList/AdminList";
import CheckoutList from "../CheckoutList/CheckoutList";
import Header from "../Header/Header";
import PizzaForm from "../PizzaForm/PizzaForm";
import PizzaList from "../PizzaList/PizzaList";
import TotalCost from "../TotalCost/TotalCost";

function App() {
  return (
    <Router>
      <div className='App'>
           
        <Header />
    
        <Route path="/" exact>
            <PizzaList />
        </Route>

        <Route path="/customerInfo">
            <PizzaForm />
        </Route>

        <Route path="/checkout">
            <CheckoutList />  
        </Route>

        <Route path="/admin">
          <AdminList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
