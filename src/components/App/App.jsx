import React from "react";
import axios from "axios";
import "./App.css";

// ⬇ What we need to import
import { Route, HashRouter as Router } from "react-router-dom";

// ⬇ Importing components
import AdminList from '../AdminList/AdminList';
import CheckoutList from '../CheckoutList/CheckoutList';
import Header from '../Header/Header';
import PizzaForm from '../PizzaForm/PizzaForm';
import PizzaList from '../PizzaList/PizzaList';
import TotalCost from '../TotalCost/TotalCost';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';



function App() {

      const dispatch = useDispatch();


    useEffect(() => {
      getOptions();
    },[])

  const getOptions = () => {
    axios({
        method: 'GET',
        url: '/api/pizza'
    }).then(response => { //response is array of food options
        console.log(response.data);
        dispatch({
            type: 'SHOW_PIZZAS',
            payload: response.data
        })  
    }).catch(error => {
        console.log('error in pizzalistitem get', error);
    })
}

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>

        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>

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
            
        <Route path='/admin'>
          <AdminList />
            </Route>
            
      </div>
    </Router>
  );
}

export default App;
