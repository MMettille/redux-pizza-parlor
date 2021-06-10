import React from 'react';
import axios from 'axios';
import './App.css';


// ⬇ Importing components
import AdminList from '../AdminList/AdminList';
import CheckoutList from '../CheckoutList/CheckoutList';
import Header from '../Header/Header';
import PizzaForm from '../PizzaForm/PizzaForm';
import PizzaList from '../PizzaList/PizzaList';
import TotalCost from '../TotalCost/TotalCost';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    
    </div>

    
  );
}

export default App;
