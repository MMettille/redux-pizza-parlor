import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'


function CheckoutList() {

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
    // const {
    //     customer_name,
    //     street_address,
    //     city,
    //     zip,
    //     type,
    //     total,
    //     pizzas
    // } = req.body;

    // "pizzas": [{
    //     "id": "1",
    //     "quantity": "1"
    //   },{
    //     "id": "2",
    //     "quantity": "1"
    //   }]

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
            <div>
                {customerInfo.map((customerInfo) => (
                    <div>
                        <p>{customerInfo.customer_name}</p>
                        <p>{customerInfo.street_address}</p>
                        <p>{customerInfo.city}, MN {customerInfo.zip}</p>
                        <p>For {customerInfo.type}</p>
                    </div>
                ))}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {customerOrder.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <h3>Total: </h3>
            <button onClick={handleCheckout}>CHECKOUT</button>

        </>
    )
}

export default CheckoutList
