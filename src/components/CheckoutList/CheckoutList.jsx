import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import './CheckoutList.css';

function CheckoutList({ TotalCost }) {

    const history = useHistory();
    const dispatch = useDispatch();

    // reducers
    const customerOrder = useSelector(store => store.customerOrder);
    const customerInfo = useSelector(store => store.customerInfo);
    console.log('customerInfo', customerInfo);
    // console.log('please be customer name', customerInfo[0].customer_name)


    const calculateTotalCost = (customerOrder) => {

        const pizzas = (sum, pizza) => sum + Number(pizza.price);

        const totalCost = customerOrder.reduce(pizzas, 0);
        console.log(totalCost);
        return totalCost;
      };

    let totalCost = calculateTotalCost(customerOrder);

    // post all pizza order and customer info to server/db 
    // clear all reducers, auto nav back to home page
    const handleCheckout = (event) => {
        event.preventDefault();
        console.log('in checkout')
        console.log('log ')
        
        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: customerInfo[0].customer_name,
                street_address: customerInfo[0].street_address,
                city: customerInfo[0].city,
                zip: customerInfo[0].zip,
                type: customerInfo[0].type,
                total: totalCost,
                // customerOrder should already be an array of objects
                pizzas: customerOrder
            }
        })
            .then(response => {
                history.push('/');
                console.log('response in post', response)
                clearAllInputs();
            })
            .catch(error => {
                console.log('error in post', error);
            })
    }

    const clearAllInputs = () => {
        dispatch({
            type: 'REMOVE_ORDER',
        });
        dispatch({
            type: 'REMOVE_CUSTOMER'
        });

    }

    return (
        <>
            <h2>Checkout</h2>
            <div className="CheckoutHeader">
                {customerInfo.map((customerInfo) => (
                    <div>
                        <p>{customerInfo.customer_name}</p>
                        <p>{customerInfo.street_address}</p>
                        <p>{customerInfo.city}, MN {customerInfo.zip}</p>
                        <p>For {customerInfo.type}</p>
                    </div>
                ))}
            </div>
            
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell>Cost</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {customerOrder.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.price}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            
            <h3>Total: <TotalCost className="total-cost" />
            </h3>
            <div className="checkoutBtn">
            <Button className="checkoutBtn" onClick={handleCheckout}>CHECKOUT</Button>
            </div>
        </>
    )
}

export default CheckoutList
