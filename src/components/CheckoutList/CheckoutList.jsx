import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
// import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'


function CheckoutList() {

    const history = useHistory();
    const customerOrder = useSelector(store => store.customerOrder);

    const customerInfo = useSelector(store => store.customerInfo);

    
    const handleCheckout = (event) => {
        event.preventDefault();
        console.log('in checkout')

        history.push('/');

    }

    const postOrder = () => {
        axios({
            method: 'POST',
            url: '/'
        })
    }


    return (
        <>
            <h2>Checkout</h2>
            <div>
                <p>{customerInfo.customer_name}</p>
                <p>{customerInfo.street_address}</p>
                <p>{customerInfo.city}, MN {customerInfo.zip}</p>
                <p>For {customerInfo.type}</p>
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

                    {/* <CheckoutListItem /> */}
                </tbody>

            </table>
            <h3>Total: </h3>
            <button onClick={handleCheckout}>CHECKOUT</button>

        </>
    )
}

export default CheckoutList
