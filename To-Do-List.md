[ ] need to add pizza selection 
[ ] need to delete pizza selection
[ ] need to store customer info

[ Home ] - Chris
    [x] Display the options
        [x] GET REQUEST
    [ ] Adding a pizza to the cart (BUTTON)
        [ ] Client facing -> that needs to go to redux in a store
         - Needs to be an array of objects of: *, *name*, *description*, *image_path* and *cost* properties. 
         [ ] Add button will become a remove button
         [ ] When the pizza is added to the cart, the total will need to update in the top right corner
         [ ] Save selection in redux
         [ ] Next button -> will navigate you to step #2 and save to redux
[ customerInfo ] - Mary
    [ ] Inputs for *name*, *street address*, *city*, and *zip*
    [ ] Radio Selection for pickup vs delivery
    [ ] Grab the inputs and selection for delivery, save the inputs in redux
    [ ] Next button -> will navigate you to step #3 and save to redux
[ checkout ] - Oliva
    [X] Grab the customers info and display on left
    [X] Grab the customers delivery selection and display on right
    [X] Make a table for menu selection and price
        [X] headers: *name* and *cost*
    [ ] Display the total of their cart
    [ ] On Checkout button click:
        [ ] Show confirmation
        [ ] Post to database 
            [ ] **Post Data** should be an object that contains user information, *customer name*, *street address*, *city*, *zip*, *order_total* and an array of pizza id's as object. 
        [ ] Clear the cart
        [ ] Clear the user's information / delivery selection
        [ ] Reset the table
        [x] Bounce back to home screen
        
[ admin ] - James
!!! - user will need to go to localhost:3000/admin
    [ ] Will need to make a get route to './admin'
    [ ] Create table - headers: *name*, *Time Order Placed*, *Type* (delivery or pickup), and *Cost*

[ total ??? ] - James


[ SET UP ]
    [ x ] npm install
    [ x ] npm install redux 
    [ x ] npm install react-redux
    [ x ] npm install redux-logger
    [ x ] npm install react-router-dom
    [ x ] Make Components
    [  ] Material UI ?
        [ x ] npm install @material-ui/core
        [ x ] npm install @material-ui/icons
    [ x ] Bootstrap ?
        [ x ] npm install react-bootstrap bootstrap@4.6.0
    [ ] IN APP
        [ x ] Import {Route, HashRouter as Router} from 'react-router-dom'
        [ x ] Wrap the app in a <Router>
        [ ] Admin or Client?
            [ ] Client
                [ ] Make Routes through the different pages
            [ ] Admin
                [ ] Make Routes through the different pages
    [ ] IN INDEX.JS 
        [ x ] import {createStore, combineReducers, applyMiddleware} from 'redux';
        [ x ] import {Provider} from 'react-redux';
        [ x ] import logger from 'redux-logger';
        [ x ] Create Store
            [ x ] Wrap with combineReducers
                [ ] Pass in reducers
            [ x ] applyMiddleware
                [ x ] logger
        [ x ] React.DOM.render
            [ x ] React.StrictMode?
            [ x ] Wrap the app in a <Provider> and give the provider a store -> <Provider store={store}>
            [ ] Service Worker?




Information will be saved in reducers
UNTIL the checkout button is clicked. THEN it will be a post to the database.


POST DATA model 

{
  "customer_name": "Donatello",
  "street_address": "20 W 34th St",
  "city": "New York",
  "zip": "10001",
  "total": "27.98",
  "type": "Pickup",
  "pizzas": [{
    "id": "1",
    "quantity": "1"
  },{
    "id": "2",
    "quantity": "1"
  }]
}